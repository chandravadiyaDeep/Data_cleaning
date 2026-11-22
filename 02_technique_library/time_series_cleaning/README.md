# 13. Time-Series Cleaning — Technique Catalogue

This is an initial research inventory, not a claim that every method is suitable for every dataset. Some entries are detection, correction, validation, or downstream preprocessing methods.

## 10+ techniques to investigate

1. **Timestamp parsing and timezone normalization** — Research assumptions, suitable data, parameters, failure modes, and validation.
2. **Duplicate timestamp/event handling** — Research assumptions, suitable data, parameters, failure modes, and validation.
3. **Resampling to a defined frequency** — Research assumptions, suitable data, parameters, failure modes, and validation.
4. **Forward/backward fill with limits** — Research assumptions, suitable data, parameters, failure modes, and validation.
5. **Time-based interpolation** — Research assumptions, suitable data, parameters, failure modes, and validation.
6. **Seasonal interpolation** — Research assumptions, suitable data, parameters, failure modes, and validation.
7. **Rolling median/mean filtering** — Research assumptions, suitable data, parameters, failure modes, and validation.
8. **Savitzky-Golay filtering** — Research assumptions, suitable data, parameters, failure modes, and validation.
9. **Kalman filtering/smoothing** — Research assumptions, suitable data, parameters, failure modes, and validation.
10. **Change-point detection** — Research assumptions, suitable data, parameters, failure modes, and validation.
11. **Seasonal decomposition-based anomaly detection** — Research assumptions, suitable data, parameters, failure modes, and validation.
12. **Gap and interval detection** — Research assumptions, suitable data, parameters, failure modes, and validation.
13. **Clock-drift correction using reference signals** — Research assumptions, suitable data, parameters, failure modes, and validation.
14. **Irregular-sampling methods** — Research assumptions, suitable data, parameters, failure modes, and validation.
15. **Event-time versus processing-time reconciliation** — Research assumptions, suitable data, parameters, failure modes, and validation.

## Required research depth

For each technique, create a dedicated note using [the technique template](../_templates/technique_note.md). Document definition, algorithm, assumptions, preconditions, suitability, parameter choices, computational cost, strengths, limitations, Python/library references, validation, and citations.

## Selection principles

- Select based on semantics, intended use, evidence, and risk.
- Separate detection from modification.
- Prefer reversible, traceable operations.
- Compare with a simple baseline.
- Preserve raw data and record transformations.
