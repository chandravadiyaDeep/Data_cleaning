# 03. Data Type Cleaning — Technique Catalogue

This catalogue is a starting research inventory, not a claim that every method is suitable for every dataset. Some entries are detection methods, some are correction methods, and some are validation or downstream preprocessing methods.

## Techniques to research

1. **Schema-driven type casting** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
2. **Safe numeric parsing** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
3. **Locale-aware decimal parsing** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
4. **Date and datetime parsing with explicit formats** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
5. **Timezone localization and conversion** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
6. **Boolean token mapping** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
7. **Nullable integer and boolean types** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
8. **Decimal types for exact monetary values** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
9. **Identifier preservation as strings** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
10. **Mixed-type column profiling** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
11. **Unit-aware type validation** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
12. **Enum/domain type validation** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
13. **Coercion with rejected-value quarantine** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
14. **Format inference with ambiguity reporting** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.

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

- [Knowledge category](../../01_knowledge_library/02_data_cleaning_categories/data_type_cleaning/README.md)
- [End-to-end approach](../../04_approaches/data_type_cleaning/README.md)
