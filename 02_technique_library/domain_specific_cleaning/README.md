# 17. Domain-Specific Cleaning — Technique Catalogue

This is an initial research inventory, not a claim that every method is suitable for every dataset. Entries may be detection, correction, validation, or downstream preprocessing methods.

## 10+ techniques to investigate

1. **Domain schema and terminology validation** — Research assumptions, suitable data, parameters, failure modes, and validation.
2. **Clinical code and terminology mapping** — Research assumptions, suitable data, parameters, failure modes, and validation.
3. **Measurement-unit harmonization** — Research assumptions, suitable data, parameters, failure modes, and validation.
4. **Financial reconciliation and balance checks** — Research assumptions, suitable data, parameters, failure modes, and validation.
5. **Currency and exchange-rate normalization** — Research assumptions, suitable data, parameters, failure modes, and validation.
6. **Accounting-period validation** — Research assumptions, suitable data, parameters, failure modes, and validation.
7. **Agricultural seasonal and agronomic range checks** — Research assumptions, suitable data, parameters, failure modes, and validation.
8. **Manufacturing calibration and tolerance checks** — Research assumptions, suitable data, parameters, failure modes, and validation.
9. **Retail SKU and product-catalog validation** — Research assumptions, suitable data, parameters, failure modes, and validation.
10. **Education grading-scale reconciliation** — Research assumptions, suitable data, parameters, failure modes, and validation.
11. **Scientific protocol and instrument metadata checks** — Research assumptions, suitable data, parameters, failure modes, and validation.
12. **Insurance policy/claim rule validation** — Research assumptions, suitable data, parameters, failure modes, and validation.
13. **Logistics route and event-sequence checks** — Research assumptions, suitable data, parameters, failure modes, and validation.
14. **Regulatory reporting rule validation** — Research assumptions, suitable data, parameters, failure modes, and validation.
15. **Expert-reviewed exception handling** — Research assumptions, suitable data, parameters, failure modes, and validation.

## Required research depth

For each technique, create a dedicated note using [the technique template](../_templates/technique_note.md). Document definition, algorithm, assumptions, preconditions, suitability, parameter choices, computational cost, strengths, limitations, Python/library references, validation, and citations.

## Selection principles

- Select based on semantics, intended use, evidence, and risk.
- Separate detection from modification.
- Prefer reversible, traceable operations.
- Compare with a simple baseline.
- Preserve raw data and record transformations.
