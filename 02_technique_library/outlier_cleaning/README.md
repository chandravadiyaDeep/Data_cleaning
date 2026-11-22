# 05. Outlier Cleaning — Technique Catalogue

This catalogue is a starting research inventory, not a claim that every method is suitable for every dataset. Some entries are detection methods, some are correction methods, and some are validation or downstream preprocessing methods.

## Techniques to research

1. **IQR fences** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
2. **Z-score screening** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
3. **Modified Z-score using MAD** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
4. **Winsorization/capping** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
5. **Quantile clipping** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
6. **Robust covariance and Mahalanobis distance** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
7. **Isolation Forest** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
8. **Local Outlier Factor** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
9. **One-Class SVM** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
10. **DBSCAN noise-point detection** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
11. **Seasonal-Hybrid ESD or decomposition-based detection** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
12. **Change-point detection** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
13. **Domain-boundary checks** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
14. **Peer-group or conditional outlier analysis** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
15. **Human-reviewed anomaly flagging** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.

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

- [Knowledge category](../../01_knowledge_library/02_data_cleaning_categories/outlier_cleaning/README.md)
- [End-to-end approach](../../04_approaches/outlier_cleaning/README.md)
