# 12. Relational Cleaning — Technique Catalogue

This is an initial research inventory, not a claim that every method is suitable for every dataset. Some entries are detection, correction, validation, or downstream preprocessing methods.

## 10+ techniques to investigate

1. **Primary-key uniqueness checks** — Research assumptions, suitable data, parameters, failure modes, and validation.
2. **Foreign-key existence checks** — Research assumptions, suitable data, parameters, failure modes, and validation.
3. **Orphan-record detection** — Research assumptions, suitable data, parameters, failure modes, and validation.
4. **Composite-key validation** — Research assumptions, suitable data, parameters, failure modes, and validation.
5. **Join-cardinality validation** — Research assumptions, suitable data, parameters, failure modes, and validation.
6. **One-to-one/one-to-many constraint checks** — Research assumptions, suitable data, parameters, failure modes, and validation.
7. **Referential repair using authoritative lookup** — Research assumptions, suitable data, parameters, failure modes, and validation.
8. **Bridge-table consistency checks** — Research assumptions, suitable data, parameters, failure modes, and validation.
9. **Functional-dependency checks** — Research assumptions, suitable data, parameters, failure modes, and validation.
10. **Null-key policy validation** — Research assumptions, suitable data, parameters, failure modes, and validation.
11. **Temporal foreign-key validity** — Research assumptions, suitable data, parameters, failure modes, and validation.
12. **Duplicate relationship detection** — Research assumptions, suitable data, parameters, failure modes, and validation.
13. **Cascading impact analysis** — Research assumptions, suitable data, parameters, failure modes, and validation.
14. **Relational schema normalization review** — Research assumptions, suitable data, parameters, failure modes, and validation.

## Required research depth

For each technique, create a dedicated note using [the technique template](../_templates/technique_note.md). Document definition, algorithm, assumptions, preconditions, suitability, parameter choices, computational cost, strengths, limitations, Python/library references, validation, and citations.

## Selection principles

- Select based on semantics, intended use, evidence, and risk.
- Separate detection from modification.
- Prefer reversible, traceable operations.
- Compare with a simple baseline.
- Preserve raw data and record transformations.
