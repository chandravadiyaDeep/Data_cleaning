# 15. Label Cleaning — Technique Catalogue

This is an initial research inventory, not a claim that every method is suitable for every dataset. Some entries are detection, correction, validation, or downstream preprocessing methods.

## 10+ techniques to investigate

1. **Label-distribution and class-prior audit** — Research assumptions, suitable data, parameters, failure modes, and validation.
2. **Duplicate-label conflict detection** — Research assumptions, suitable data, parameters, failure modes, and validation.
3. **Cross-annotator agreement analysis** — Research assumptions, suitable data, parameters, failure modes, and validation.
4. **Adjudication by expert reviewers** — Research assumptions, suitable data, parameters, failure modes, and validation.
5. **Guideline-based relabelling** — Research assumptions, suitable data, parameters, failure modes, and validation.
6. **Confident learning / label-issue ranking** — Research assumptions, suitable data, parameters, failure modes, and validation.
7. **Out-of-fold prediction disagreement** — Research assumptions, suitable data, parameters, failure modes, and validation.
8. **Weak-supervision label models** — Research assumptions, suitable data, parameters, failure modes, and validation.
9. **Rule-based label validation** — Research assumptions, suitable data, parameters, failure modes, and validation.
10. **Hierarchical-label consistency checks** — Research assumptions, suitable data, parameters, failure modes, and validation.
11. **Multi-label constraint validation** — Research assumptions, suitable data, parameters, failure modes, and validation.
12. **Temporal label-version reconciliation** — Research assumptions, suitable data, parameters, failure modes, and validation.
13. **Active-learning review prioritization** — Research assumptions, suitable data, parameters, failure modes, and validation.
14. **Label provenance and version tracking** — Research assumptions, suitable data, parameters, failure modes, and validation.

## Required research depth

For each technique, create a dedicated note using [the technique template](../_templates/technique_note.md). Document definition, algorithm, assumptions, preconditions, suitability, parameter choices, computational cost, strengths, limitations, Python/library references, validation, and citations.

## Selection principles

- Select based on semantics, intended use, evidence, and risk.
- Separate detection from modification.
- Prefer reversible, traceable operations.
- Compare with a simple baseline.
- Preserve raw data and record transformations.
