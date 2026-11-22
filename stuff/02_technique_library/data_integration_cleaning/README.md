# 16. Data Integration Cleaning — Technique Catalogue

This is an initial research inventory, not a claim that every method is suitable for every dataset. Entries may be detection, correction, validation, or downstream preprocessing methods.

## 10+ techniques to investigate

1. **Schema matching** — Research assumptions, suitable data, parameters, failure modes, and validation.
2. **Column-name and semantic mapping** — Research assumptions, suitable data, parameters, failure modes, and validation.
3. **Data type and unit harmonization** — Research assumptions, suitable data, parameters, failure modes, and validation.
4. **Entity resolution across sources** — Research assumptions, suitable data, parameters, failure modes, and validation.
5. **Key reconciliation** — Research assumptions, suitable data, parameters, failure modes, and validation.
6. **Reference-data alignment** — Research assumptions, suitable data, parameters, failure modes, and validation.
7. **Source-priority and survivorship rules** — Research assumptions, suitable data, parameters, failure modes, and validation.
8. **Temporal alignment** — Research assumptions, suitable data, parameters, failure modes, and validation.
9. **Granularity alignment and aggregation** — Research assumptions, suitable data, parameters, failure modes, and validation.
10. **Join validation and row-count reconciliation** — Research assumptions, suitable data, parameters, failure modes, and validation.
11. **Conflict detection and resolution** — Research assumptions, suitable data, parameters, failure modes, and validation.
12. **Null semantics harmonization** — Research assumptions, suitable data, parameters, failure modes, and validation.
13. **Provenance and lineage capture** — Research assumptions, suitable data, parameters, failure modes, and validation.
14. **Incremental change reconciliation** — Research assumptions, suitable data, parameters, failure modes, and validation.
15. **Cross-source anomaly detection** — Research assumptions, suitable data, parameters, failure modes, and validation.

## Required research depth

For each technique, create a dedicated note using [the technique template](../_templates/technique_note.md). Document definition, algorithm, assumptions, preconditions, suitability, parameter choices, computational cost, strengths, limitations, Python/library references, validation, and citations.

## Selection principles

- Select based on semantics, intended use, evidence, and risk.
- Separate detection from modification.
- Prefer reversible, traceable operations.
- Compare with a simple baseline.
- Preserve raw data and record transformations.
