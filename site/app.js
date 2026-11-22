/* Approach 01 browser engine
 * All dataset parsing, profiling, trials and exports run locally in this browser.
 * No dataset contents are sent to a server.
 */
(() => {
  "use strict";

  const $ = (selector, root) => (root || document).querySelector(selector);
  const input = $("#dataset-input");
  const dropzone = $("#dropzone");
  const selectedPanel = $("#selected-file");
  const fileName = $("#file-name");
  const fileDetail = $("#file-detail");
  const message = $("#message");
  const removeButton = $("#remove-file");
  const mount = document.createElement("section");
  mount.id = "experiment-app";
  mount.className = "experiment-app";
  mount.setAttribute("aria-live", "polite");
  $(".upload-layout").insertAdjacentElement("afterend", mount);

  const state = {
    file: null,
    headers: [],
    originalRows: [],
    profile: null,
    candidates: {},
    trials: [],
    combined: null,
    selected: null,
    fileType: "",
    startedAt: null
  };

  const definitions = {
    missing: [
      [0, "Retain unchanged", "Baseline; keep all missing cells as they are.", true],
      [1, "Delete affected rows", "Remove rows containing at least one missing value.", true],
      [2, "Mean imputation", "Fill numeric missing values with the column mean.", true],
      [3, "Median imputation", "Fill numeric missing values with the column median.", true],
      [4, "Mode imputation", "Fill missing values with the most frequent observed value.", true],
      [5, "KNN imputation", "Neighbor-based imputation; advanced distance and scaling rules required.", false],
      [6, "Iterative imputation", "Iteratively model missing features; advanced estimator required.", false],
      [7, "Regression-based imputation", "Requires a validated predictive model and leakage controls.", false],
      [8, "Group-based imputation", "Requires a user-defined grouping column and domain rule.", false],
      [9, "Model/domain-informed", "Requires a user-supplied domain rule; never infer silently.", false]
    ],
    duplicates: [
      [0, "Retain unchanged", "Baseline; keep all rows.", true],
      [1, "Remove exact duplicates", "Keep the first row for each exact full-row match.", true],
      [2, "Keep first", "Keep the first record in each exact duplicate group.", true],
      [3, "Keep last", "Keep the last record in each exact duplicate group.", true],
      [4, "Keep most complete", "Keep the row with the most populated cells in each exact group.", true],
      [5, "Merge exact duplicates", "Merge exact groups while retaining the first non-empty value per column.", true],
      [6, "Similarity-based detection", "Flag near-matches for review; no automatic merge.", true],
      [7, "Fuzzy matching", "Needs domain-specific similarity thresholds; not auto-merged.", false],
      [8, "Domain-specific resolution", "Requires a business key and conflict-resolution rule.", false],
      [9, "Other suitable treatment", "Requires a user-defined deduplication policy.", false]
    ],
    outliers: [
      [0, "Retain unchanged", "Baseline; keep all flagged values.", true],
      [1, "Remove flagged rows", "Remove rows with numeric values outside detected IQR bounds.", true],
      [2, "IQR capping", "Clip flagged numeric values to their IQR fences.", true],
      [3, "Z-score capping", "Clip numeric values beyond three standard deviations.", true],
      [4, "Winsorization", "Cap numeric values at the 1st and 99th percentiles.", true],
      [5, "Percentile capping", "Cap numeric values at the 1st and 99th percentiles.", true],
      [6, "Log transform", "Apply log1p to non-negative numeric columns with detected outliers.", true],
      [7, "Robust MAD capping", "Clip values using median absolute deviation fences.", true],
      [8, "Isolation Forest", "Requires a trained anomaly detector; not available in this lightweight engine.", false],
      [9, "Domain-informed treatment", "Requires a user-supplied acceptable range or domain rule.", false]
    ]
  };

  const labels = {
    missing: "Missing values",
    duplicates: "Duplicate records",
    outliers: "Outliers"
  };

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
  }

  function bytesLabel(bytes) {
    if (bytes === 0) return "0 bytes";
    const units = ["bytes", "KB", "MB", "GB"];
    const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), 3);
    return (bytes / Math.pow(1024, index)).toFixed(index === 0 ? 0 : 2) + " " + units[index];
  }

  function cloneRows(rows) {
    return rows.map((row) => Object.assign({}, row));
  }

  function parseDelimited(text, delimiter) {
    const rows = [];
    let row = [];
    let cell = "";
    let quoted = false;
    for (let i = 0; i < text.length; i += 1) {
      const ch = text[i];
      if (quoted) {
        if (ch === '"' && text[i + 1] === '"') {
          cell += '"';
          i += 1;
        } else if (ch === '"') {
          quoted = false;
        } else {
          cell += ch;
        }
      } else if (ch === '"' && cell.length === 0) {
        quoted = true;
      } else if (ch === delimiter) {
        row.push(cell);
        cell = "";
      } else if (ch === "\n") {
        row.push(cell.replace(/\r$/, ""));
        rows.push(row);
        row = [];
        cell = "";
      } else {
        cell += ch;
      }
    }
    row.push(cell.replace(/\r$/, ""));
    if (row.some((value) => value !== "") || rows.length === 0) rows.push(row);
    return rows.filter((record) => !(record.length === 1 && record[0] === ""));
  }

  function detectDelimiter(text) {
    const sample = text.split(/\r?\n/).slice(0, 8).join("\n");
    const options = [",", "\t", ";", "|"];
    let best = ",";
    let bestScore = -1;
    options.forEach((delimiter) => {
      const counts = sample.split(/\r?\n/).filter(Boolean).map((line) => {
        let quoted = false;
        let count = 0;
        for (let i = 0; i < line.length; i += 1) {
          if (line[i] === '"' && line[i + 1] === '"') i += 1;
          else if (line[i] === '"') quoted = !quoted;
          else if (line[i] === delimiter && !quoted) count += 1;
        }
        return count;
      });
      const average = counts.length ? counts.reduce((a, b) => a + b, 0) / counts.length : 0;
      const consistency = counts.length ? counts.filter((n) => n === Math.round(average)).length / counts.length : 0;
      const score = average * consistency;
      if (score > bestScore) { bestScore = score; best = delimiter; }
    });
    return best;
  }

  function recordsFromMatrix(matrix) {
    if (!matrix.length) throw new Error("The selected file contains no rows.");
    const headers = matrix[0].map((value, index) => {
      const name = String(value == null ? "" : value).trim();
      return name || ("column_" + (index + 1));
    });
    const seen = new Map();
    const uniqueHeaders = headers.map((name) => {
      const count = (seen.get(name) || 0) + 1;
      seen.set(name, count);
      return count === 1 ? name : name + "_" + count;
    });
    const rows = matrix.slice(1).filter((record) => record.some((value) => value !== null && value !== undefined && String(value).trim() !== "")).map((record) => {
      const object = {};
      uniqueHeaders.forEach((header, index) => { object[header] = record[index] === undefined ? null : record[index]; });
      return object;
    });
    if (!rows.length) throw new Error("The file has a header row but no data rows.");
    return { headers: uniqueHeaders, rows };
  }

  function parseJson(text, isLines) {
    let value;
    if (isLines) {
      value = text.split(/\r?\n/).filter((line) => line.trim()).map((line, index) => {
        try { return JSON.parse(line); }
        catch (_) { throw new Error("Invalid JSONL at line " + (index + 1) + "."); }
      });
    } else {
      value = JSON.parse(text);
      if (!Array.isArray(value)) {
        if (value && Array.isArray(value.data)) value = value.data;
        else throw new Error("JSON must contain an array of row objects (or a data array).");
      }
    }
    if (!value.length || typeof value[0] !== "object" || value[0] === null || Array.isArray(value[0])) {
      throw new Error("JSON rows must be objects with named fields.");
    }
    const headers = Array.from(new Set(value.flatMap((row) => Object.keys(row))));
    return {
      headers,
      rows: value.map((row) => {
        const normalized = {};
        headers.forEach((header) => { normalized[header] = row[header] === undefined ? null : row[header]; });
        return normalized;
      })
    };
  }

  function loadSheetJs() {
    return new Promise((resolve, reject) => {
      if (window.XLSX) { resolve(window.XLSX); return; }
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js";
      script.onload = () => window.XLSX ? resolve(window.XLSX) : reject(new Error("Spreadsheet parser did not initialize."));
      script.onerror = () => reject(new Error("Could not load the spreadsheet parser. Check your connection and retry."));
      document.head.appendChild(script);
    });
  }

  async function readDataset(file) {
    const extension = file.name.split(".").pop().toLowerCase();
    if (["csv", "tsv", "txt"].includes(extension)) {
      const text = await file.text();
      const delimiter = extension === "tsv" ? "\t" : (extension === "csv" ? detectDelimiter(text) : detectDelimiter(text));
      return recordsFromMatrix(parseDelimited(text.replace(/^\uFEFF/, ""), delimiter));
    }
    if (["json", "jsonl"].includes(extension)) {
      return parseJson(await file.text(), extension === "jsonl");
    }
    if (["xlsx", "xls"].includes(extension)) {
      const XLSX = await loadSheetJs();
      const workbook = XLSX.read(await file.arrayBuffer(), { type: "array", cellDates: true });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      if (!firstSheet) throw new Error("The workbook has no readable worksheet.");
      const matrix = XLSX.utils.sheet_to_json(firstSheet, { header: 1, defval: null, raw: false });
      return recordsFromMatrix(matrix);
    }
    throw new Error("Unsupported file type. Use CSV, TSV, XLSX, XLS, JSON, JSONL or TXT.");
  }

  function isMissing(value) {
    return value === null || value === undefined || (typeof value === "string" && value.trim() === "");
  }

  function numericValue(value) {
    if (typeof value === "number" && Number.isFinite(value)) return value;
    if (typeof value === "string" && value.trim() !== "" && Number.isFinite(Number(value))) return Number(value);
    return null;
  }

  function median(values) {
    if (!values.length) return null;
    const sorted = values.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
  }

  function quantile(values, q) {
    if (!values.length) return null;
    const sorted = values.slice().sort((a, b) => a - b);
    const position = (sorted.length - 1) * q;
    const base = Math.floor(position);
    const rest = position - base;
    return sorted[base + 1] === undefined ? sorted[base] : sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  }

  function mode(values) {
    if (!values.length) return null;
    const counts = new Map();
    values.forEach((value) => {
      const key = typeof value + ":" + String(value);
      const current = counts.get(key) || { value, count: 0 };
      current.count += 1;
      counts.set(key, current);
    });
    return Array.from(counts.values()).sort((a, b) => b.count - a.count)[0].value;
  }

  function rowKey(row, headers) {
    return JSON.stringify(headers.map((header) => {
      const value = row[header];
      return value instanceof Date ? value.toISOString() : value;
    }));
  }

  function completeness(row, headers) {
    return headers.reduce((count, header) => count + (isMissing(row[header]) ? 0 : 1), 0);
  }

  function profileRows(rows, headers) {
    const missingByColumn = {};
    let missingCells = 0;
    headers.forEach((header) => {
      const count = rows.reduce((sum, row) => sum + (isMissing(row[header]) ? 1 : 0), 0);
      missingByColumn[header] = count;
      missingCells += count;
    });

    const groups = new Map();
    rows.forEach((row, index) => {
      const key = rowKey(row, headers);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(index);
    });
    const duplicateGroups = Array.from(groups.values()).filter((indexes) => indexes.length > 1);
    const duplicateRows = duplicateGroups.reduce((sum, indexes) => sum + indexes.length - 1, 0);

    const numericColumns = [];
    let outlierCells = 0;
    const outlierByColumn = {};
    headers.forEach((header) => {
      const values = rows.map((row) => numericValue(row[header])).filter((value) => value !== null);
      const nonMissing = rows.filter((row) => !isMissing(row[header])).length;
      if (values.length >= 5 && values.length / Math.max(nonMissing, 1) >= 0.8) {
        const q1 = quantile(values, 0.25);
        const q3 = quantile(values, 0.75);
        const iqr = q3 - q1;
        const lower = q1 - 1.5 * iqr;
        const upper = q3 + 1.5 * iqr;
        const count = iqr === 0 ? 0 : values.filter((value) => value < lower || value > upper).length;
        numericColumns.push({ name: header, values, q1, q3, iqr, lower, upper, count });
        outlierByColumn[header] = count;
        outlierCells += count;
      }
    });
    return {
      rowCount: rows.length,
      columnCount: headers.length,
      missingCells,
      missingByColumn,
      duplicateGroups: duplicateGroups.length,
      duplicateRows,
      duplicateIndexes: duplicateGroups,
      numericColumns,
      outlierCells,
      outlierByColumn,
      problemCounts: { missing: missingCells, duplicates: duplicateRows, outliers: outlierCells }
    };
  }

  function buildCandidates(profile) {
    const hasMissing = profile.missingCells > 0;
    const hasDuplicates = profile.duplicateRows > 0;
    const hasOutliers = profile.outlierCells > 0;
    const result = {};
    Object.keys(definitions).forEach((category) => {
      result[category] = definitions[category].map((item) => {
        const [code, name, description, supported] = item;
        let executable = supported;
        let reason = "";
        if (category === "missing" && [2, 3].includes(code) && !profile.numericColumns.length) {
          executable = false; reason = "No numeric column detected for this method.";
        }
        if (category === "outliers" && code !== 0 && !profile.numericColumns.length) {
          executable = false; reason = "No numeric columns meet the outlier profiling threshold.";
        }
        if (category === "outliers" && code === 6 && profile.numericColumns.every((column) => column.values.some((value) => value < 0))) {
          executable = false; reason = "Log1p is not suitable for columns containing negative values.";
        }
        return { code, name, description, executable, reason, relevant:
          category === "missing" ? hasMissing :
          category === "duplicates" ? hasDuplicates : hasOutliers };
      });
    });
    return result;
  }

  function fillMissing(rows, headers, method) {
    const result = cloneRows(rows);
    if (method === 1) return result.filter((row) => !headers.some((header) => isMissing(row[header])));
    headers.forEach((header) => {
      const observed = result.map((row) => row[header]).filter((value) => !isMissing(value));
      if (!observed.length) return;
      let fill = null;
      if (method === 2 || method === 3) {
        const nums = observed.map(numericValue).filter((value) => value !== null);
        if (!nums.length) return;
        fill = method === 2 ? nums.reduce((a, b) => a + b, 0) / nums.length : median(nums);
      } else if (method === 4) {
        fill = mode(observed);
      }
      if (fill !== null) result.forEach((row) => { if (isMissing(row[header])) row[header] = fill; });
    });
    return result;
  }

  function deduplicate(rows, headers, method) {
    if (method === 0) return cloneRows(rows);
    const groups = new Map();
    rows.forEach((row, index) => {
      const key = rowKey(row, headers);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push({ row, index });
    });
    const result = [];
    groups.forEach((group) => {
      if (group.length === 1) { result.push(group[0].row); return; }
      if (method === 3) result.push(group[group.length - 1].row);
      else if (method === 4) result.push(group.slice().sort((a, b) => completeness(b.row, headers) - completeness(a.row, headers))[0].row);
      else if (method === 5) {
        const merged = Object.assign({}, group[0].row);
        headers.forEach((header) => {
          const nonMissing = group.map((entry) => entry.row[header]).filter((value) => !isMissing(value));
          if (nonMissing.length) merged[header] = nonMissing[0];
        });
        result.push(merged);
      } else result.push(group[0].row);
    });
    return result;
  }

  function capOutliers(rows, profile, method) {
    const result = cloneRows(rows);
    if (method === 0) return result;
    if (method === 1) {
      const flagged = new Set();
      profile.numericColumns.forEach((column) => {
        result.forEach((row, index) => {
          const value = numericValue(row[column.name]);
          if (value !== null && (value < column.lower || value > column.upper)) flagged.add(index);
        });
      });
      return result.filter((row, index) => !flagged.has(index));
    }
    profile.numericColumns.forEach((column) => {
      const values = result.map((row) => numericValue(row[column.name])).filter((value) => value !== null);
      if (!values.length) return;
      let lower = column.lower;
      let upper = column.upper;
      if (method === 3) {
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const sd = Math.sqrt(values.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / values.length);
        lower = mean - 3 * sd; upper = mean + 3 * sd;
      } else if (method === 4 || method === 5) {
        lower = quantile(values, 0.01); upper = quantile(values, 0.99);
      } else if (method === 6) {
        if (values.some((value) => value < 0)) return;
        result.forEach((row) => {
          const value = numericValue(row[column.name]);
          if (value !== null) row[column.name] = Math.log1p(value);
        });
        return;
      } else if (method === 7) {
        const med = median(values);
        const mad = median(values.map((value) => Math.abs(value - med)));
        if (mad === null || mad === 0) return;
        lower = med - 3 * 1.4826 * mad;
        upper = med + 3 * 1.4826 * mad;
      }
      result.forEach((row) => {
        const value = numericValue(row[column.name]);
        if (value !== null) {
          const clipped = Math.max(lower, Math.min(upper, value));
          if (clipped !== value) row[column.name] = clipped;
        }
      });
    });
    return result;
  }

  function applyConfiguration(original, headers, configuration) {
    let rows = cloneRows(original);
    rows = fillMissing(rows, headers, configuration.missing || 0);
    rows = deduplicate(rows, headers, configuration.duplicates || 0);
    const postProfileBeforeOutliers = profileRows(rows, headers);
    rows = capOutliers(rows, postProfileBeforeOutliers, configuration.outliers || 0);
    return rows;
  }

  function scoreResult(before, after, elapsedMs) {
    const beforeIssues = before.missingCells + before.duplicateRows + before.outlierCells;
    const afterIssues = after.missingCells + after.duplicateRows + after.outlierCells;
    const issueReduction = beforeIssues === 0 ? 1 : Math.max(0, Math.min(1, (beforeIssues - afterIssues) / beforeIssues));
    const rowRetention = before.rowCount === 0 ? 1 : Math.min(1, after.rowCount / before.rowCount);
    const timeFactor = 1 / (1 + Math.max(0, elapsedMs) / 5000);
    return Math.round((issueReduction * 70 + rowRetention * 20 + timeFactor * 10) * 10) / 10;
  }

  function runTrial(category, code) {
    const started = performance.now();
    const configuration = { missing: 0, duplicates: 0, outliers: 0 };
    configuration[category] = code;
    const rows = applyConfiguration(state.originalRows, state.headers, configuration);
    const elapsed = performance.now() - started;
    const profile = profileRows(rows, state.headers);
    return {
      id: category + "-" + code,
      type: "individual",
      category,
      code,
      name: definitions[category][code][1],
      configuration,
      rows,
      profile,
      elapsedMs: elapsed,
      score: scoreResult(state.profile, profile, elapsed)
    };
  }

  function runCombined(configuration) {
    const started = performance.now();
    const rows = applyConfiguration(state.originalRows, state.headers, configuration);
    const elapsed = performance.now() - started;
    const profile = profileRows(rows, state.headers);
    return {
      id: "combined-" + Date.now(),
      type: "combined",
      category: "combined",
      code: null,
      name: "Combined configuration",
      configuration: Object.assign({}, configuration),
      rows,
      profile,
      elapsedMs: elapsed,
      score: scoreResult(state.profile, profile, elapsed)
    };
  }

  function renderWorkspace() {
    mount.innerHTML = [
      '<div class="engine-heading"><div><p class="section-label">Interactive experiment workspace</p><h2 class="section-title">Your dataset, under test.</h2><p class="engine-subtitle">The four Approach 01 capabilities now run locally in this browser. Nothing is sent to a server.</p></div><span class="engine-state" id="engine-state">Dataset ready</span></div>',
      '<div class="engine-grid" id="profile-grid"></div>',
      '<div class="engine-panel"><div class="engine-panel-head"><div><span class="engine-step">CAPABILITY 01</span><h3>Problem identification</h3><p>Detected issues and affected instances in your original dataset.</p></div><span class="engine-state" id="profile-status">Profile complete</span></div><div id="profile-details"></div></div>',
      '<div class="engine-panel"><div class="engine-panel-head"><div><span class="engine-step">CAPABILITY 02</span><h3>Candidate strategy generation</h3><p>All ten research codes are listed. Methods requiring domain rules or advanced models are identified rather than falsely treated as executable.</p></div><button class="engine-button" id="generate-button" type="button">Generate candidates</button></div><div id="candidate-groups" class="candidate-groups"></div></div>',
      '<div class="engine-panel"><div class="engine-panel-head"><div><span class="engine-step">CAPABILITY 03</span><h3>Independent experiment execution</h3><p>Each supported individual trial starts from the untouched original dataset. Trials do not modify one another.</p></div><button class="engine-button primary" id="run-button" type="button">Run individual trials</button></div><div id="trial-status" class="engine-hint">Generate candidates to review the available experiments.</div><div id="trial-results"></div></div>',
      '<div class="engine-panel"><div class="engine-panel-head"><div><span class="engine-step">CAPABILITY 04</span><h3>Compare, combine and select</h3><p>Compare measured outcomes, choose one candidate per category, and run a combined configuration from the same original dataset.</p></div><span class="engine-state">Evidence-led selection</span></div><div class="configuration-grid" id="configuration-controls"></div><div class="engine-actions"><button class="engine-button primary" id="combined-button" type="button">Run selected combination</button><button class="engine-button" id="export-button" type="button" disabled>Export selected dataset</button><button class="engine-button" id="report-button" type="button" disabled>Download experiment report</button></div><div id="comparison-results"></div><div class="selection-note" id="selection-note">No final result selected yet.</div></div>',
      '<div class="engine-footnote"><strong>Important:</strong> The provisional comparison score is a transparent heuristic based on issue-count reduction, row retention and runtime. It is not correction accuracy or ground truth. A controlled dataset with known correct values is required to measure correction accuracy. Review the data and trade-offs before using a result.</div>'
    ].join("");
    renderProfile();
    renderCandidates();
    renderConfigurationControls();
    bindWorkspaceEvents();
  }

  function renderProfile() {
    const p = state.profile;
    $("#profile-grid").innerHTML = [
      metricCard("Rows", p.rowCount, "Original records"),
      metricCard("Columns", p.columnCount, "Detected fields"),
      metricCard("Missing cells", p.missingCells, "Affected cells"),
      metricCard("Duplicate rows", p.duplicateRows, p.duplicateGroups + " exact groups"),
      metricCard("Outlier cells", p.outlierCells, "IQR flags across numeric fields")
    ].join("");
    const rows = [
      ["Missing values", p.missingCells, "Cell-level count"],
      ["Duplicate records", p.duplicateRows, "Excess rows beyond the first in exact duplicate groups"],
      ["Outliers", p.outlierCells, "Numeric cells outside 1.5 × IQR fences"]
    ];
    $("#profile-details").innerHTML =
      '<div class="profile-summary">' + rows.map((item) =>
        '<div class="profile-line"><strong>' + escapeHtml(item[0]) + '</strong><span>' + item[1].toLocaleString() + '</span><small>' + escapeHtml(item[2]) + '</small></div>'
      ).join("") + '</div>' +
      '<div class="column-table-wrap"><table class="engine-table"><thead><tr><th>Column</th><th>Missing</th><th>Numeric / outlier flags</th></tr></thead><tbody>' +
      state.headers.map((header) => {
        const numeric = p.numericColumns.find((column) => column.name === header);
        return '<tr><td>' + escapeHtml(header) + '</td><td>' + p.missingByColumn[header] + '</td><td>' +
          (numeric ? numeric.values.length + " numeric · " + numeric.count + " flagged" : "Not profiled as numeric") + '</td></tr>';
      }).join("") + '</tbody></table></div>' +
      '<p class="engine-hint">Counting units differ: missing values are cells, duplicate instances are excess rows, and outliers are numeric cells. Do not add these counts into one N unless your experiment defines a common instance unit.</p>';
  }

  function metricCard(label, value, note) {
    return '<div class="engine-metric"><span>' + escapeHtml(label) + '</span><strong>' + Number(value).toLocaleString() + '</strong><small>' + escapeHtml(note) + '</small></div>';
  }

  function renderCandidates() {
    const groups = $("#candidate-groups");
    groups.innerHTML = Object.keys(definitions).map((category) => {
      const list = state.candidates[category] || [];
      return '<div class="candidate-group"><div class="candidate-group-head"><h4>' + escapeHtml(labels[category]) + '</h4><span>' +
        list.filter((item) => item.executable).length + ' executable · 10 catalogued</span></div>' +
        list.map((item) => '<div class="candidate-row"><span class="candidate-code ' + (item.code === 0 ? "baseline" : "") + '">' + item.code + '</span><div class="candidate-copy"><strong>' + escapeHtml(item.name) + '</strong><small>' + escapeHtml(item.description) + '</small>' +
        (item.reason ? '<small class="candidate-warning">' + escapeHtml(item.reason) + '</small>' : '') + '</div><span class="candidate-status ' + (item.executable ? "available" : "review") + '">' +
        (item.executable ? "Runnable" : "Needs method / rule") + '</span></div>').join("") + '</div>';
    }).join("");
  }

  function renderConfigurationControls() {
    $("#configuration-controls").innerHTML = Object.keys(definitions).map((category) => {
      const options = (state.candidates[category] || []).filter((item) => item.executable).map((item) =>
        '<option value="' + item.code + '">' + item.code + ' · ' + escapeHtml(item.name) + '</option>'
      ).join("");
      return '<label class="configuration-control"><span>' + escapeHtml(labels[category]) + '</span><select data-category="' + category + '">' + options + '</select></label>';
    }).join("");
  }

  function bindWorkspaceEvents() {
    $("#generate-button").addEventListener("click", () => {
      $("#trial-status").textContent = "Candidate strategies generated. Review runnable and review-only methods, then run the independent trials.";
      $("#run-button").focus();
    });
    $("#run-button").addEventListener("click", runAllTrials);
    $("#combined-button").addEventListener("click", runSelectedCombination);
    $("#export-button").addEventListener("click", exportSelected);
    $("#report-button").addEventListener("click", exportReport);
  }

  function runAllTrials() {
    const button = $("#run-button");
    button.disabled = true;
    button.textContent = "Running…";
    state.trials = [];
    Object.keys(definitions).forEach((category) => {
      const hasIssues = state.profile.problemCounts[category] > 0;
      definitions[category].forEach((item) => {
        const candidate = state.candidates[category][item[0]];
        if (candidate.executable && (item[0] === 0 || hasIssues)) {
          state.trials.push(runTrial(category, item[0]));
        }
      });
    });
    button.disabled = false;
    button.textContent = "Run individual trials";
    $("#trial-status").textContent = state.trials.length + " independent trials completed. Each trial used a fresh copy of the original dataset.";
    renderTrials();
  }

  function renderTrials() {
    const container = $("#trial-results");
    const sorted = state.trials.slice().sort((a, b) => b.score - a.score);
    if (!sorted.length) { container.innerHTML = ""; return; }
    container.innerHTML = '<div class="table-scroll"><table class="engine-table"><thead><tr><th>Category</th><th>Code</th><th>Strategy</th><th>Rows</th><th>Missing</th><th>Duplicates</th><th>Outliers</th><th>Time</th><th>Heuristic</th><th></th></tr></thead><tbody>' +
      sorted.map((trial) => '<tr><td>' + escapeHtml(labels[trial.category]) + '</td><td>' + trial.code + '</td><td>' + escapeHtml(trial.name) + '</td><td>' + trial.profile.rowCount + '</td><td>' + trial.profile.missingCells + '</td><td>' + trial.profile.duplicateRows + '</td><td>' + trial.profile.outlierCells + '</td><td>' + trial.elapsedMs.toFixed(1) + ' ms</td><td>' + trial.score.toFixed(1) + '</td><td><button class="table-select" data-trial="' + escapeHtml(trial.id) + '">Select</button></td></tr>').join("") +
      '</tbody></table></div><p class="engine-hint">The heuristic is for triage only. It cannot determine whether an imputed value is correct or whether an unusual observation is actually valid.</p>';
    container.querySelectorAll("[data-trial]").forEach((button) => {
      button.addEventListener("click", () => {
        const trial = state.trials.find((item) => item.id === button.getAttribute("data-trial"));
        if (trial) selectResult(trial);
      });
    });
  }

  function runSelectedCombination() {
    const configuration = {};
    $("#configuration-controls").querySelectorAll("select").forEach((select) => {
      configuration[select.dataset.category] = Number(select.value);
    });
    state.combined = runCombined(configuration);
    renderComparison();
    selectResult(state.combined);
  }

  function renderComparison() {
    const all = state.trials.concat(state.combined ? [state.combined] : []);
    if (!all.length) return;
    $("#comparison-results").innerHTML = '<h4 class="comparison-heading">Outcome comparison</h4><div class="table-scroll"><table class="engine-table"><thead><tr><th>Trial</th><th>Rows retained</th><th>Missing</th><th>Duplicates</th><th>Outliers</th><th>Runtime</th><th>Heuristic</th></tr></thead><tbody>' +
      all.map((trial) => '<tr><td>' + escapeHtml(trial.type === "combined" ? "Combined configuration" : labels[trial.category] + " · " + trial.code) + '</td><td>' +
        trial.profile.rowCount + ' / ' + state.profile.rowCount + '</td><td>' + trial.profile.missingCells + '</td><td>' + trial.profile.duplicateRows + '</td><td>' + trial.profile.outlierCells + '</td><td>' + trial.elapsedMs.toFixed(1) + ' ms</td><td>' + trial.score.toFixed(1) + '</td></tr>').join("") +
      '</tbody></table></div>';
  }

  function selectResult(result) {
    state.selected = result;
    $("#export-button").disabled = false;
    $("#report-button").disabled = false;
    $("#selection-note").innerHTML = '<strong>Selected result:</strong> ' + escapeHtml(result.name) +
      ' · ' + result.rows.length.toLocaleString() + ' rows · configuration ' +
      Object.keys(result.configuration).map((key) => key + "=" + result.configuration[key]).join(", ") +
      '. This selection is local and can be changed by selecting another trial.';
  }

  function csvCell(value) {
    if (value === null || value === undefined) return "";
    const text = value instanceof Date ? value.toISOString() : String(value);
    return /[",\r\n]/.test(text) ? '"' + text.replace(/"/g, '""') + '"' : text;
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  function exportSelected() {
    if (!state.selected) return;
    const lines = [state.headers.map(csvCell).join(",")].concat(
      state.selected.rows.map((row) => state.headers.map((header) => csvCell(row[header])).join(","))
    );
    downloadBlob(new Blob(["\uFEFF" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" }), "approach01-cleaned-dataset.csv");
  }

  function exportReport() {
    if (!state.selected) return;
    const report = {
      title: "Approach 01 — Experimental Multi-Strategy Data Cleaning",
      generatedAt: new Date().toISOString(),
      sourceFileName: state.file ? state.file.name : null,
      executionLocation: "Local browser",
      datasetWasUploaded: false,
      original: {
        rows: state.profile.rowCount,
        columns: state.profile.columnCount,
        missingCells: state.profile.missingCells,
        duplicateGroups: state.profile.duplicateGroups,
        duplicateExcessRows: state.profile.duplicateRows,
        outlierCells: state.profile.outlierCells
      },
      selectedConfiguration: state.selected.configuration,
      selectedStrategy: state.selected.name,
      selectedResult: {
        rows: state.selected.profile.rowCount,
        missingCells: state.selected.profile.missingCells,
        duplicateExcessRows: state.selected.profile.duplicateRows,
        outlierCells: state.selected.profile.outlierCells,
        runtimeMs: Number(state.selected.elapsedMs.toFixed(3)),
        provisionalHeuristicScore: state.selected.score
      },
      individualTrials: state.trials.map((trial) => ({
        category: trial.category, code: trial.code, name: trial.name,
        rows: trial.profile.rowCount, missingCells: trial.profile.missingCells,
        duplicateExcessRows: trial.profile.duplicateRows, outlierCells: trial.profile.outlierCells,
        runtimeMs: Number(trial.elapsedMs.toFixed(3)), provisionalHeuristicScore: trial.score
      })),
      safeguards: [
        "Every individual trial starts from a fresh copy of the unchanged original dataset.",
        "Missing counts are cells, duplicate counts are excess rows, and outlier counts are numeric cells; they are not a common instance unit.",
        "The heuristic score is not correction accuracy and is not ground-truth validation.",
        "Review domain constraints and valid unusual observations before accepting a cleaned dataset.",
        "Advanced methods that require learned models or domain rules are listed but not auto-executed."
      ]
    };
    downloadBlob(new Blob([JSON.stringify(report, null, 2)], { type: "application/json" }), "approach01-experiment-report.json");
  }

  function handleFile(file) {
    message.textContent = "";
    if (!file) return;
    const extension = file.name.split(".").pop().toLowerCase();
    const allowed = ["csv", "tsv", "xlsx", "xls", "json", "jsonl", "txt"];
    if (!allowed.includes(extension)) {
      message.textContent = "Unsupported file type. Use CSV, TSV, XLSX, XLS, JSON, JSONL or TXT.";
      return;
    }
    state.file = file;
    state.fileType = extension;
    fileName.textContent = file.name;
    fileDetail.textContent = extension.toUpperCase() + " · " + bytesLabel(file.size) + " · Selected locally";
    selectedPanel.hidden = false;
    dropzone.hidden = true;
    mount.innerHTML = '<div class="engine-loading">Reading and profiling your dataset locally…</div>';
    readDataset(file).then((parsed) => {
      state.headers = parsed.headers;
      state.originalRows = cloneRows(parsed.rows);
      state.profile = profileRows(state.originalRows, state.headers);
      state.candidates = buildCandidates(state.profile);
      state.trials = [];
      state.combined = null;
      state.selected = null;
      renderWorkspace();
      mount.scrollIntoView({ behavior: "smooth", block: "start" });
    }).catch((error) => {
      mount.innerHTML = '<div class="engine-error"><strong>Could not read this dataset.</strong><p>' + escapeHtml(error.message || "Unknown file error.") + '</p><p>Your file remains on your device; nothing was uploaded.</p></div>';
    });
  }

  function clearSelection() {
    input.value = "";
    state.file = null;
    state.headers = [];
    state.originalRows = [];
    state.profile = null;
    state.candidates = {};
    state.trials = [];
    state.combined = null;
    state.selected = null;
    selectedPanel.hidden = true;
    dropzone.hidden = false;
    message.textContent = "";
    mount.innerHTML = "";
  }

  input.addEventListener("change", () => handleFile(input.files && input.files[0]));
  removeButton.addEventListener("click", clearSelection);
  dropzone.addEventListener("click", (event) => {
    if (event.target.closest("label")) return;
    input.click();
  });
  dropzone.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      input.click();
    }
  });
  ["dragenter", "dragover"].forEach((eventName) => {
    dropzone.addEventListener(eventName, (event) => {
      event.preventDefault();
      dropzone.classList.add("dragover");
    });
  });
  ["dragleave", "drop"].forEach((eventName) => {
    dropzone.addEventListener(eventName, (event) => {
      event.preventDefault();
      dropzone.classList.remove("dragover");
    });
  });
  dropzone.addEventListener("drop", (event) => {
    const file = event.dataTransfer && event.dataTransfer.files[0];
    if (file) handleFile(file);
  });
})();