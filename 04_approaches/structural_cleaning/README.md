# 11. Structural Cleaning — Approach

## Objective

Define a context-aware workflow for structural cleaning.

## End-to-end decision workflow

1. Establish dataset purpose, field meaning, domain, source, and downstream use.
2. Profile prevalence, distribution, affected segments, and relationships.
3. Detect candidate issues using appropriate methods from the [technique catalogue](../../02_technique_library/structural_cleaning/README.md).
4. Diagnose confirmed errors versus legitimate rare values or ambiguous cases.
5. Rank risk using impact, confidence, reversibility, and business consequences.
6. Choose to retain, flag, standardize, correct from an authoritative source, quarantine, or request review.
7. Preview affected records, proposed changes, rationale, and side effects.
8. Require approval for destructive, high-impact, or uncertain changes.
9. Execute versioned transformations on a working copy; preserve originals.
10. Validate constraints, distributions, row counts, and downstream outcomes.
11. Audit methods, parameters, provenance, before/after values, approvals, and results.
12. Monitor recurrence and source drift.

## Category-specific strategy

Inspect metadata and samples before full loading; infer delimiters, quoting, headers, and encoding with ambiguity reporting; compare row widths and schemas; detect spreadsheet presentation features; reconstruct only with evidence; quarantine malformed records; preserve source row locations; validate parsed output against an explicit schema.

## Risk policy

- **Low:** deterministic, reversible formatting under an explicit policy.
- **Medium:** preview transformations that affect interpretation or subsets of records.
- **High:** deletion, inferred replacement, entity merging, regulated-domain changes, and uncertain corrections require review or authoritative evidence.

Risk depends on impact, uncertainty, reversibility, and context—not just operation name.

## Evaluation

Measure detection precision/recall where truth labels exist, affected rows, constraint violations before/after, unintended changes, subgroup impact, downstream task impact, runtime, and human review/disagreement rates.

## Related research

- [Knowledge category](../../01_knowledge_library/02_data_cleaning_categories/structural_cleaning/README.md)
- [Technique catalogue](../../02_technique_library/structural_cleaning/README.md)
- [Approach template](../_templates/approach_note.md)
