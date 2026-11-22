# 18. ML-Oriented Data Cleaning — Technique Catalogue

This is an initial research inventory, not a claim that every method is suitable for every dataset. Entries may be detection, correction, validation, or downstream preprocessing methods.

## 10+ techniques to investigate

1. **Target and feature leakage audits** — Research assumptions, suitable data, parameters, failure modes, and validation.
2. **Train/test duplicate and entity overlap checks** — Research assumptions, suitable data, parameters, failure modes, and validation.
3. **Time-aware split validation** — Research assumptions, suitable data, parameters, failure modes, and validation.
4. **Group-aware split validation** — Research assumptions, suitable data, parameters, failure modes, and validation.
5. **Stratification checks** — Research assumptions, suitable data, parameters, failure modes, and validation.
6. **Feature missingness and missingness-shift analysis** — Research assumptions, suitable data, parameters, failure modes, and validation.
7. **Train/inference schema consistency checks** — Research assumptions, suitable data, parameters, failure modes, and validation.
8. **Out-of-range feature detection** — Research assumptions, suitable data, parameters, failure modes, and validation.
9. **Label-noise auditing** — Research assumptions, suitable data, parameters, failure modes, and validation.
10. **Class-imbalance diagnosis (not itself cleaning)** — Research assumptions, suitable data, parameters, failure modes, and validation.
11. **High-cardinality feature assessment** — Research assumptions, suitable data, parameters, failure modes, and validation.
12. **Constant and near-constant feature detection** — Research assumptions, suitable data, parameters, failure modes, and validation.
13. **Correlation and redundancy analysis** — Research assumptions, suitable data, parameters, failure modes, and validation.
14. **Distribution-shift checks** — Research assumptions, suitable data, parameters, failure modes, and validation.
15. **Pipeline-based imputation and scaling** — Research assumptions, suitable data, parameters, failure modes, and validation.
16. **Cross-validation-safe preprocessing** — Research assumptions, suitable data, parameters, failure modes, and validation.

## Required research depth

For each technique, create a dedicated note using [the technique template](../_templates/technique_note.md). Document definition, algorithm, assumptions, preconditions, suitability, parameter choices, computational cost, strengths, limitations, Python/library references, validation, and citations.

## Selection principles

- Select based on semantics, intended use, evidence, and risk.
- Separate detection from modification.
- Prefer reversible, traceable operations.
- Compare with a simple baseline.
- Preserve raw data and record transformations.
