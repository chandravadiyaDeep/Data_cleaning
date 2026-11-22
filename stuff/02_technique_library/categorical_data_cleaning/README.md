# 10. Categorical Data Cleaning — Technique Catalogue

This is an initial research inventory, not a claim that every method is suitable for every dataset. Some entries are detection, correction, validation, or downstream preprocessing methods.

## 10+ techniques to investigate

1. **Whitespace and case normalization** — Research assumptions, suitable data, parameters, failure modes, and validation.
2. **Synonym-to-canonical mapping** — Research assumptions, suitable data, parameters, failure modes, and validation.
3. **Controlled-vocabulary validation** — Research assumptions, suitable data, parameters, failure modes, and validation.
4. **Rare-category profiling** — Research assumptions, suitable data, parameters, failure modes, and validation.
5. **Rare-category grouping (task-dependent)** — Research assumptions, suitable data, parameters, failure modes, and validation.
6. **Unknown/unseen category handling** — Research assumptions, suitable data, parameters, failure modes, and validation.
7. **Ordinal mapping with verified order** — Research assumptions, suitable data, parameters, failure modes, and validation.
8. **One-hot encoding (ML preprocessing)** — Research assumptions, suitable data, parameters, failure modes, and validation.
9. **Ordinal encoding (ML preprocessing)** — Research assumptions, suitable data, parameters, failure modes, and validation.
10. **Frequency/count encoding (ML preprocessing)** — Research assumptions, suitable data, parameters, failure modes, and validation.
11. **Target encoding with leakage-safe fitting** — Research assumptions, suitable data, parameters, failure modes, and validation.
12. **Hierarchical taxonomy mapping** — Research assumptions, suitable data, parameters, failure modes, and validation.
13. **Fuzzy category matching** — Research assumptions, suitable data, parameters, failure modes, and validation.
14. **Category drift detection** — Research assumptions, suitable data, parameters, failure modes, and validation.
15. **Missing-versus-unknown category separation** — Research assumptions, suitable data, parameters, failure modes, and validation.

## Required research depth

For each technique, create a dedicated note using [the technique template](../_templates/technique_note.md). Document definition, algorithm, assumptions, preconditions, suitability, parameter choices, computational cost, strengths, limitations, Python/library references, validation, and citations.

## Selection principles

- Select based on semantics, intended use, evidence, and risk.
- Separate detection from modification.
- Prefer reversible, traceable operations.
- Compare with a simple baseline.
- Preserve raw data and record transformations.
