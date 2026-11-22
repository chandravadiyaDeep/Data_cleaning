# 04 — Approaches

**Purpose:** Research end-to-end strategies for deciding how a dataset should be assessed, cleaned, validated, and monitored.

An approach is a decision process or operating model. A technique is a specific method used within that process. Keep individual algorithm documentation in the Technique Library and compare complete workflows here.

## Approach areas

- `rule_based/` — deterministic rules, constraints, and policy-driven cleaning.
- `statistical/` — distribution-aware and statistical decision strategies.
- `domain_driven/` — industry and business-context strategies.
- `machine_learning/` — learned detection, imputation, and record-matching workflows.
- `ai_assisted/` — LLM-assisted interpretation, planning, and recommendation with deterministic execution.
- `human_in_the_loop/` — review queues, approvals, escalation, and adjudication.
- `probabilistic/` — uncertainty-aware matching and correction decisions.
- `incremental_and_continuous/` — change-based cleaning and ongoing quality monitoring.
- `hybrid_and_adaptive/` — combinations of approaches and context-aware method selection.
- `decision_frameworks/` — selection matrices, risk policies, fallbacks, and orchestration.

## Required approach documentation

Use `_templates/approach_note.md`. Explain the workflow from profiling through validation, what information drives decisions, how uncertainty is handled, when human approval is required, and how quality is measured.

## Core design principle

No approach should assume that every unusual value is wrong or that one cleaning recipe fits every dataset. Preserve originals, make transformations traceable, and make uncertain or high-impact actions reviewable.
