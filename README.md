# Data Cleaning Research

A research-first knowledge base for understanding, evaluating, and designing reliable data-cleaning systems. This repository will inform the future adaptive data-cleaning capabilities of NUMPA.

## Repository structure

| Area | Purpose |
|---|---|
| [01_knowledge_library](01_knowledge_library/) | Foundational concepts, data-quality dimensions, data types, problem taxonomy, and domain knowledge. |
| [sectors](sectors/README.md) | 33 sector profiles covering business context, data entities and structures, recurring problems, business meaning, cleaning requirements, unsafe actions, metrics and references. |
| [02_technique_library](02_technique_library/) | Individual cleaning methods, algorithms, detection techniques, transformations, and validation methods. |
| [03_experiment_library](03_experiment_library/) | Reproducible experiments, datasets, benchmarks, evaluations, and lessons learned. |
| [04_approaches](04_approaches/) | End-to-end strategies and decision frameworks for selecting and combining techniques. |

## Research principles

1. Research before implementation.
2. Distinguish detection, diagnosis, recommendation, transformation, and validation.
3. Never assume a cleaning operation is universally correct.
4. Preserve original data and document every proposed or applied transformation.
5. Record uncertainty, limitations, risks, and cases where human review is required.
6. Prefer primary sources: official documentation, standards, and peer-reviewed papers.
7. Make experiments reproducible and record software versions, dataset provenance, and evaluation criteria.
8. Separate established evidence from hypotheses and product proposals.

## How to contribute research

Use the templates in each library. Cite sources for technical claims, include the date researched, and update [RESEARCH_INDEX.md](RESEARCH_INDEX.md) when adding substantial material.

## Scope

This repository is a research workspace, not the NUMPA production codebase. Code examples may be included to demonstrate or test methods, but production implementation decisions belong in a separately reviewed design proposal.

## Status

Initial research libraries established. The repository now includes 33 cross-industry sector profiles; detailed evidence reviews and experiments will be added progressively.
