# 01. Missing Value Cleaning — Technique Catalogue

This catalogue is a starting research inventory, not a claim that every method is suitable for every dataset. Some entries are detection methods, some are correction methods, and some are validation or downstream preprocessing methods.

## Techniques to research

1. **Row deletion (listwise deletion)** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
2. **Column deletion based on missingness and utility** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
3. **Mean imputation (numeric, with distribution caveats)** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
4. **Median imputation (robust numeric baseline)** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
5. **Mode imputation (categorical baseline)** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
6. **Constant or sentinel imputation (for example, Unknown; only when semantically valid)** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
7. **Missing-indicator features** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
8. **Forward fill (ordered observations)** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
9. **Backward fill (ordered observations)** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
10. **Linear or time-based interpolation** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
11. **K-nearest-neighbour imputation** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
12. **Regression or model-based imputation** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
13. **Multiple imputation by chained equations (MICE)** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
14. **Hot-deck or donor-based imputation** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
15. **Group-wise imputation** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
16. **Likelihood-based methods such as EM under suitable assumptions** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.

## Technique selection principles

- Select based on data semantics, intended use, evidence, and risk—not convenience.
- Separate issue detection from the decision to modify a value.
- Prefer reversible, traceable operations.
- Compare against a simple baseline.
- Preserve raw data and record every transformation.
- Do not apply ML preprocessing outside a leakage-safe training pipeline.

## Required research depth for every technique

For each technique above, create a dedicated note using [the technique template](../_templates/technique_note.md) when research begins. At minimum document: definition, algorithm, assumptions, preconditions, data suitability, parameter choices, computational cost, strengths, limitations, failure cases, Python/library references, validation, and citations.

## Related

- [Knowledge category](../../01_knowledge_library/02_data_cleaning_categories/missing_value_cleaning/README.md)
- [End-to-end approach](../../04_approaches/missing_value_cleaning/README.md)
