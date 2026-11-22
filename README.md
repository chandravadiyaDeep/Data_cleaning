# Data Cleaning Research

A research-first workspace for understanding data-quality problems and designing reliable, domain-aware data-cleaning systems.

## Start here

- **[Open the dataset upload test page](https://chandravadiyadeep.github.io/Data_cleaning/)** — a static, browser-only file-selection page. It does not send or process your dataset.
- **[Open the research library](stuff/README.md)** — the knowledge, sector, technique, experiment and approach collections.
- **[Research index](RESEARCH_INDEX.md)** — navigation across the complete research workspace.

## Repository layout

| Location | Purpose |
|---|---|
| [site/](site/) | Minimal GitHub Pages uploader interface. |
| [stuff/01_knowledge_library/](stuff/01_knowledge_library/README.md) | Foundational concepts, data-quality dimensions and the 18-category taxonomy. |
| [stuff/sectors/](stuff/sectors/README.md) | 33 sector profiles covering business context, entities, structures, problems and cleaning requirements. |
| [stuff/02_technique_library/](stuff/02_technique_library/README.md) | Cleaning methods, detection techniques, transformations and validation methods. |
| [stuff/03_experiment_library/](stuff/03_experiment_library/README.md) | Reproducible experiments, datasets, benchmarks and evaluation results. |
| [stuff/04_approaches/](stuff/04_approaches/README.md) | End-to-end cleaning strategies and decision frameworks. |

## Research principles

1. Research before implementation.
2. Distinguish detection, diagnosis, recommendation, transformation and validation.
3. Never assume a cleaning operation is universally correct.
4. Preserve original data and transformation provenance.
5. Record uncertainty, limitations, risks and human-review requirements.
6. Prefer primary sources: official documentation, standards and peer-reviewed papers.
7. Make experiments reproducible and record dataset provenance and software versions.
8. Separate established evidence from hypotheses and product proposals.

## GitHub Pages setup

The repository contains a GitHub Actions workflow that publishes only the `site/` directory. In **Settings → Pages → Build and deployment → Source**, select **GitHub Actions** once. Future updates to `site/` on `main` will trigger deployment automatically.

GitHub Pages is static hosting. The upload page only selects a local file in the browser; no file is sent to GitHub, a backend or a third-party service. Server-side processing and persistent upload storage are not part of this first test page.

## Scope

This repository is a research workspace and upload-interface test, not the NUMPA production codebase. The first data-cleaning approach will be designed separately before any cleaning or analysis functionality is implemented.
