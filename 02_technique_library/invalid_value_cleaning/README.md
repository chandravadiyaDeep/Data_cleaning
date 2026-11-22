# 06. Invalid Value Cleaning — Technique Catalogue

This catalogue is a starting research inventory, not a claim that every method is suitable for every dataset. Some entries are detection methods, some are correction methods, and some are validation or downstream preprocessing methods.

## Techniques to research

1. **Range and boundary validation** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
2. **Allowed-set/domain validation** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
3. **Regex and format validation** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
4. **Cross-field logical constraints** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
5. **Check-digit validation** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
6. **Date-order constraints** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
7. **Physical plausibility rules** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
8. **Business-rule validation** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
9. **Reference-table validation** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
10. **Schema and contract validation** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
11. **Constraint-based correction** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
12. **Invalid-value quarantine and exception queues** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
13. **Fuzzy correction against approved vocabularies** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
14. **Rule prioritization and conflict detection** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.

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

- [Knowledge category](../../01_knowledge_library/02_data_cleaning_categories/invalid_value_cleaning/README.md)
- [End-to-end approach](../../04_approaches/invalid_value_cleaning/README.md)
