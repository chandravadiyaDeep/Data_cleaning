# 02. Duplicate Cleaning — Technique Catalogue

This catalogue is a starting research inventory, not a claim that every method is suitable for every dataset. Some entries are detection methods, some are correction methods, and some are validation or downstream preprocessing methods.

## Techniques to research

1. **Exact row duplicate detection** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
2. **Primary-key duplicate detection** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
3. **Composite-key duplicate detection** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
4. **Business-key duplicate detection** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
5. **Sorted-neighbourhood indexing** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
6. **Blocking and candidate generation** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
7. **Levenshtein edit-distance matching** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
8. **Jaro-Winkler similarity** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
9. **Token-based similarity (Jaccard or cosine)** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
10. **Phonetic matching (Soundex/Metaphone)** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
11. **Probabilistic record linkage (Fellegi–Sunter)** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
12. **Rule-based entity resolution** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
13. **Embedding-based semantic matching** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
14. **Graph-based entity clustering** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.
15. **Survivorship rules and golden-record creation** — Research its assumptions, suitable data, parameters, failure modes, and validation requirements.

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

- [Knowledge category](../../01_knowledge_library/02_data_cleaning_categories/duplicate_cleaning/README.md)
- [End-to-end approach](../../04_approaches/duplicate_cleaning/README.md)
