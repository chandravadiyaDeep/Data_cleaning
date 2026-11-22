# 01. Missing Value Cleaning — Approach

## Objective

Define a context-aware workflow for assessing and addressing missing value cleaning issues.

## Recommended decision workflow

1. **Establish context:** identify dataset purpose, field meaning, domain, source, and downstream use.
2. **Profile:** measure prevalence, distribution, affected segments, and relationships to other fields.
3. **Detect:** apply suitable checks and candidate methods from the [technique catalogue](../../02_technique_library/missing_value_cleaning/README.md).
4. **Diagnose:** distinguish confirmed errors from legitimate rare values, unknown states, and ambiguous cases.
5. **Rank risk:** consider impact, confidence, reversibility, affected records, and regulatory/business consequences.
6. **Choose response:** retain, flag, standardize, correct from an authoritative source, impute, quarantine, or request human review.
7. **Preview:** show affected records, proposed changes, rationale, and expected side effects.
8. **Approve:** require explicit approval for destructive, high-impact, or uncertain changes.
9. **Execute:** apply deterministic, versioned transformations to a working copy; preserve originals.
10. **Validate:** rerun checks and compare distributions, constraints, row counts, and downstream outcomes.
11. **Audit:** store rule/method version, parameters, provenance, before/after values, approvals, and validation results.
12. **Monitor:** detect recurrence, source drift, and changes in assumptions.

## Method-selection considerations

Profile missingness by row, column, segment, and time; distinguish true missing, not applicable, censored, and unknown states; investigate MCAR/MAR/MNAR plausibility; assess whether missingness itself is informative; select deletion or imputation based on intended use and assumptions; fit imputers only on training data when modelling; preserve missingness indicators where useful; compare distributions and downstream performance; record uncertainty and never imply imputed values were observed.

## Risk and approval policy

- **Low risk:** deterministic, reversible formatting changes supported by clear rules may be automated under an explicit policy.
- **Medium risk:** transformations that alter interpretation or affect a subset of records should be previewed and may require approval.
- **High risk:** deletion, inferred replacement, entity merging, regulated-domain corrections, and uncertain changes require explicit review or authoritative evidence.

Risk classification must be based on impact, uncertainty, reversibility, and context—not only the operation name.

## Evaluation

Measure at least:
- Detection precision and recall where labelled truth is available.
- Number and proportion of records/fields affected.
- Constraint violations before and after.
- Information loss and unintended changes.
- Distribution and subgroup impact.
- Downstream task impact where relevant.
- Runtime and resource use.
- Human review rate and disagreement rate.

## Related research

- [Knowledge category](../../01_knowledge_library/02_data_cleaning_categories/missing_value_cleaning/README.md)
- [Technique catalogue](../../02_technique_library/missing_value_cleaning/README.md)
- [Approach template](../_templates/approach_note.md)

## Open questions

- Which evidence is sufficient to auto-correct?
- What confidence calibration is appropriate?
- Which cases should be escalated?
- What benchmark datasets represent this category?
- How should the strategy adapt when source patterns change?
