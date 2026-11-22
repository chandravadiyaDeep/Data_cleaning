# 11. Structural Cleaning — Technique Catalogue

This is an initial research inventory, not a claim that every method is suitable for every dataset. Some entries are detection, correction, validation, or downstream preprocessing methods.

## 10+ techniques to investigate

1. **Header-row detection** — Research assumptions, suitable data, parameters, failure modes, and validation.
2. **Duplicate or blank column-name repair** — Research assumptions, suitable data, parameters, failure modes, and validation.
3. **Delimiter detection and validation** — Research assumptions, suitable data, parameters, failure modes, and validation.
4. **Quote/escape handling** — Research assumptions, suitable data, parameters, failure modes, and validation.
5. **Row-width consistency checks** — Research assumptions, suitable data, parameters, failure modes, and validation.
6. **Shifted-column detection** — Research assumptions, suitable data, parameters, failure modes, and validation.
7. **Blank row and column detection** — Research assumptions, suitable data, parameters, failure modes, and validation.
8. **Merged-cell and spreadsheet-layout normalization** — Research assumptions, suitable data, parameters, failure modes, and validation.
9. **Multi-row header reconstruction** — Research assumptions, suitable data, parameters, failure modes, and validation.
10. **Nested JSON flattening** — Research assumptions, suitable data, parameters, failure modes, and validation.
11. **Schema inference and schema mapping** — Research assumptions, suitable data, parameters, failure modes, and validation.
12. **Malformed-record quarantine** — Research assumptions, suitable data, parameters, failure modes, and validation.
13. **Column-order and schema contract validation** — Research assumptions, suitable data, parameters, failure modes, and validation.
14. **Encoding/BOM detection** — Research assumptions, suitable data, parameters, failure modes, and validation.

## Required research depth

For each technique, create a dedicated note using [the technique template](../_templates/technique_note.md). Document definition, algorithm, assumptions, preconditions, suitability, parameter choices, computational cost, strengths, limitations, Python/library references, validation, and citations.

## Selection principles

- Select based on semantics, intended use, evidence, and risk.
- Separate detection from modification.
- Prefer reversible, traceable operations.
- Compare with a simple baseline.
- Preserve raw data and record transformations.
