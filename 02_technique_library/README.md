# 02 — Technique Library

**Purpose:** Document individual data-cleaning and data-quality techniques in enough depth to support informed selection and later implementation.

## Suggested sections

- `missing_values/`
- `duplicates_and_entity_resolution/`
- `types_parsing_standardization/`
- `outliers_and_anomalies/`
- `numerical_transformations/`
- `categorical_transformations/`
- `text_cleaning/`
- `time_series/`
- `geospatial/`
- `structural_and_schema/`
- `relational_integrity/`
- `data_integration/`
- `label_quality/`
- `validation_and_constraints/`

## Required technique documentation

Use `_templates/technique_note.md`. Cover assumptions, suitability, parameter choices, complexity, edge cases, failure modes, implementation references, and post-operation validation.

Distinguish **detection** (finding a possible issue), **correction** (changing data), and **validation** (checking the result). A detected anomaly is not automatically an error, and a proposed correction is not automatically safe.
