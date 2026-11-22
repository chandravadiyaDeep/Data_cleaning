# 03 — Experiment Library

**Purpose:** Produce reproducible evidence about technique behaviour and cleaning approaches.

## Suggested sections

- `protocols/` — hypotheses, experimental design, controls, and procedures.
- `datasets/` — dataset cards, provenance, licenses, and safe access instructions.
- `experiments/` — individual experiment reports and code/notebooks where appropriate.
- `benchmarks/` — comparative results across methods and dataset conditions.
- `metrics/` — definitions and interpretation of evaluation measures.
- `lessons_learned/` — failure cases, surprising results, and follow-up questions.

## Experiment requirements

Every experiment should record:
- Question and hypothesis.
- Dataset source, version, license, and data limitations.
- Baseline and candidate methods.
- Parameters, random seeds, library versions, and environment.
- Measures of data quality and downstream task impact.
- Runtime and resource use where relevant.
- Results, uncertainty, limitations, and reproducibility steps.

Never treat fewer nulls or fewer outliers as proof of better data. Evaluate whether changes preserve truth and improve the intended downstream use.

Do not commit private, licensed-restricted, or personally identifiable datasets without explicit authorization. Prefer public datasets, synthetic data, or documented download instructions.
