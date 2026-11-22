# Approach 01 browser application

This folder contains the GitHub Pages application and its browser-side experiment engine.

## Run locally

Open index.html through a local static server (recommended) or GitHub Pages. No backend is required.

## Workflow

1. Choose one local dataset.
2. The browser parses it and profiles missing cells, exact duplicate groups and numeric IQR outliers.
3. Candidate codes 0–9 are listed for each initial category.
4. Supported individual candidates are run from independent copies of the original dataset.
5. Select one candidate per category and run a combined configuration in a fixed order: missing values, duplicates, then outliers.
6. Select a result and export the cleaned CSV plus a JSON experiment report.

## Supported file types

CSV, TSV, TXT, JSON, JSONL, XLSX and XLS. Spreadsheet parsing loads SheetJS from jsDelivr. Dataset bytes remain in the browser and are not uploaded.

## Important research limits

- The current profile only covers the three initial Approach 01 categories.
- Duplicate detection is exact full-row matching. Similarity and fuzzy matching need a domain-specific key, threshold and review policy.
- Advanced imputation and anomaly-detection methods are catalogued but not automatically run unless implemented with explicit assumptions.
- Outliers are flags, not necessarily errors. Do not remove valid rare observations automatically.
- The comparison score is a provisional heuristic, not correction accuracy. It normalizes the three issue-family reductions separately, then combines them with row retention and runtime. It is not a validated scientific ranking.
- True correction accuracy requires known ground-truth values, such as a controlled corruption experiment.
- Every trial starts from the original data. The combined trial uses a documented fixed operation order.
- Review selected output before using it in a production workflow.
