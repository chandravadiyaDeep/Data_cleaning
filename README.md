# Data Cleaning Research

A research-first workspace for understanding data-quality problems and designing reliable, domain-aware data-cleaning systems.

## Start here

- **[Open the dataset upload test page](https://chandravadiyadeep.github.io/Data_cleaning/)** — a static, browser-only file-selection page. It does not send or process your dataset.
- **[Open the research library](stuff/README.md)** — the knowledge, sector, technique, experiment and approach collections.
- **[Research index](RESEARCH_INDEX.md)** — navigation across the complete research workspace.

## Repository layout

| Location | Purpose |
|---|---|
| [site/](site/) | Minimal GitHub Pages uploader interface. |
| [stuff/01_knowledge_library/](stuff/01_knowledge_library/README.md) | Foundational concepts, data-quality dimensions and the 18-category taxonomy. |
| [stuff/sectors/](stuff/sectors/README.md) | 33 sector profiles covering business context, entities, structures, problems and cleaning requirements. |
| [stuff/02_technique_library/](stuff/02_technique_library/README.md) | Cleaning methods, detection techniques, transformations and validation methods. |
| [stuff/03_experiment_library/](stuff/03_experiment_library/README.md) | Reproducible experiments, datasets, benchmarks and evaluation results. |
| [stuff/04_approaches/](stuff/04_approaches/README.md) | End-to-end cleaning strategies and decision frameworks. |

## Research principles

1. Research before implementation.
2. Distinguish detection, diagnosis, recommendation, transformation and validation.
3. Never assume a cleaning operation is universally correct.
4. Preserve original data and transformation provenance.
5. Record uncertainty, limitations, risks and human-review requirements.
6. Prefer primary sources: official documentation, standards and peer-reviewed papers.
7. Make experiments reproducible and record dataset provenance and software versions.
8. Separate established evidence from hypotheses and product proposals.

## GitHub Pages setup

The repository contains a GitHub Actions workflow that publishes only the `site/` directory. In **Settings → Pages → Build and deployment → Source**, select **GitHub Actions** once. Future updates to `site/` on `main` trigger deployment automatically.

GitHub Pages is static hosting, but the current application performs parsing, profiling, strategy trials, comparison and exports locally in the user's browser. Dataset contents are not sent to GitHub, a backend or a third-party service. XLSX/XLS parsing loads the SheetJS library from jsDelivr; the dataset itself remains local.

## Approach 01 — implemented browser capabilities

The first experimental multi-strategy workflow is now functional for the initial three categories:

1. **Identify problems:** profile rows and columns; count missing cells, exact duplicate excess rows/groups, and numeric outlier cells using 1.5 × IQR fences.
2. **Generate strategies:** list candidate codes 0–9 for missing values, duplicate records and outliers. Methods requiring a learned model, similarity policy or domain rules are clearly marked as review-only rather than falsely executed.
3. **Execute experiments:** run supported individual candidates independently from fresh copies of the original dataset; run a user-selected combination in a fixed order (missing values → duplicates → outliers).
4. **Compare and select:** compare row retention, remaining issue counts and runtime; select a trial or combination; export the selected CSV and a JSON experiment report.

The comparison score is a provisional heuristic, not correction accuracy. Issue families are normalized separately because missing counts are cells, duplicate counts are excess rows, and outlier counts are numeric cells. Ground-truth correction accuracy requires a controlled dataset with known correct values. Review domain constraints and valid unusual observations before accepting a cleaned result.

The browser engine supports CSV, TSV, TXT, JSON, JSONL, XLSX and XLS. It is a research prototype, not the NUMPA production codebase. Advanced methods such as KNN, iterative/regression imputation, fuzzy matching, Isolation Forest and domain-specific treatments remain catalogued but are not automatically executable in this first engine.
