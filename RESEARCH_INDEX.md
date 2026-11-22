# Research Index

Use this page as the navigation map for the repository.

## 1. Knowledge library — `01_knowledge_library/`

Stores what we need to understand about data and data quality.

- Foundations: data cleaning, data quality, profiling, lineage, provenance, governance.
- Data types: tabular, transactional, time-series, text, geospatial, images, documents, and mixed data.
- Problem taxonomy: missingness, duplicates, invalid values, inconsistencies, structural defects, outliers, drift, and integration conflicts.
- Domain knowledge: business rules and constraints for industries such as healthcare, finance, retail, agriculture, education, and manufacturing.
- Intended-use context: analytics, reporting, statistical inference, and machine learning.

## 2. Technique library — `02_technique_library/`

Stores individual methods. Each entry should explain the problem addressed, assumptions, algorithm, parameters, suitability, limitations, implementation notes, complexity, and validation.

Topics include:
- Missing-value detection and imputation.
- Exact/fuzzy duplicate detection and entity resolution.
- Type inference, parsing, normalization, and standardization.
- Outlier and anomaly detection.
- Numerical, categorical, and text transformations.
- Time-series and geospatial cleaning.
- Schema, relational-integrity, and cross-source validation.
- Label auditing and ML data-quality checks.

## 3. Experiment library — `03_experiment_library/`

Stores evidence from repeatable tests:
- Experiment protocols and hypotheses.
- Public or synthetic datasets and provenance notes.
- Baselines and comparison methods.
- Quality and task-specific metrics.
- Results, failure cases, resource use, and reproducibility instructions.

Do not commit confidential or personally identifiable datasets. Prefer links, documented access instructions, or safe synthetic samples.

## 4. Approaches — `04_approaches/`

Stores end-to-end decision strategies, not individual algorithms:
- Rule-based, statistical, domain-driven, ML-based, AI-assisted, human-in-the-loop, probabilistic, incremental, continuous, and hybrid approaches.
- Method-selection frameworks.
- Risk tiers and approval policies.
- Adaptive orchestration and fallback strategies.
- Approach comparisons and architecture proposals.

## Research entry checklist

- [ ] State the question and intended use.
- [ ] Define terminology and scope.
- [ ] Distinguish evidence from assumptions.
- [ ] Explain assumptions and preconditions.
- [ ] Document risks, limitations, and failure modes.
- [ ] Cite trustworthy sources with publication/access dates.
- [ ] Add examples or reproducible experiments where useful.
- [ ] Link related research entries.
- [ ] Record implications for NUMPA separately from general findings.
