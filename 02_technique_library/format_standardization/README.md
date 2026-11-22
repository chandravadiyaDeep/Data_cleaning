# 04. Format Standardization — Technique Catalogue

This catalogue is a starting research inventory, not a claim that every method is suitable for every dataset. Some entries are detection methods, some are correction methods, and some are validation or downstream preprocessing methods.

## Techniques to research

1. **Whitespace trimming and collapsing** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
2. **Unicode normalization (NFC/NFKC where appropriate)** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
3. **Case normalization** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
4. **Date-format canonicalization** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
5. **Phone-number normalization using country metadata** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
6. **Currency code and symbol normalization** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
7. **Locale-aware number formatting** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
8. **Postal-code normalization without losing leading zeros** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
9. **Address component standardization** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
10. **Canonical category dictionaries** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
11. **Regular-expression format rewriting** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
12. **Unit and measurement notation normalization** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
13. **Unicode punctuation and dash normalization** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
14. **Canonical serialization (for example, ISO 8601)** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.

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

- [Knowledge category](../../01_knowledge_library/02_data_cleaning_categories/format_standardization/README.md)
- [End-to-end approach](../../04_approaches/format_standardization/README.md)
