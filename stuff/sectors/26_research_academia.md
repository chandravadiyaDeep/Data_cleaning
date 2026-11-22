# Research and Academia

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Research organizations create, collect, analyze, publish, preserve and reuse evidence. Data may be experimental, observational, computational, qualitative, administrative or derived. Reproducibility depends on methods, instruments, versions, sample definitions, provenance, consent and research context.

## 2. Main actors and systems

- researchers and principal investigators
- research participants and communities
- data stewards and librarians
- universities, funders and publishers
- ethics committees and infrastructure teams

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

research question and protocol → ethics/permissions → data collection → processing and quality control → analysis and reproducibility → publication and repository deposit → preservation and reuse.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Project, Grant, Protocol, Researcher, Affiliation, Participant/Sample, Specimen, Instrument, Dataset, DataFile, Variable, Observation, Method, SoftwareEnvironment, AnalysisRun, Publication, RepositoryDeposit, License and Consent.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

CSV/TSV, relational datasets, notebooks, code repositories, lab instrument files, image/audio/video, survey data, qualitative transcripts, geospatial rasters, simulation outputs and metadata records.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

A variable is defined by operationalization, instrument, unit, population and collection protocol. A sample is not necessarily a participant. A derived measure may embed assumptions. An outlier may be a scientifically important observation, not an error.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- variable definitions and units are undocumented or change between collection waves
- sample IDs and specimen IDs are confused or reused
- instrument calibration and software versions are absent
- data files are separated from codebooks, protocols and analysis scripts
- missingness and exclusion criteria are undocumented
- derived datasets overwrite raw data or lose provenance
- different research groups use inconsistent vocabularies and formats
- license, consent and permitted reuse are unclear

## 8. Sector-specific cleaning and validation requirements

- preserve immutable raw data and record all processing steps
- use persistent identifiers and rich metadata for projects, datasets, samples and publications
- retain codebook, protocol, instrument, software and method versions
- document consent, ethics approval, access conditions and license
- record exclusions, transformations, imputation and uncertainty transparently
- validate schema, units, ranges and sample relationships against protocol
- retain scripts and environment details needed to reproduce derived data
- separate confidential participant data from shareable research outputs

## 9. Unsafe or misleading cleaning decisions

- do not remove unusual observations without scientific review
- do not fill missing values without recording method and analysis impact
- do not overwrite original measurements with normalized values
- do not treat open access as equivalent to unrestricted reuse permission

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- dataset completeness and metadata coverage
- reproducibility of analysis outputs
- provenance completeness
- reuse and citation
- protocol deviation and exclusion traceability
- FAIR assessment

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [GO FAIR principles](https://www.go-fair.org/fair-principles/)
- [W3C Data on the Web Best Practices](https://www.w3.org/TR/dwbp/)
- [ClinicalTrials.gov API (clinical study records)](https://clinicaltrials.gov/data-api/about-api)

These links are research entry points, not a declaration that every listed standard is mandatory for every organization. Verify version, scope, licensing, national adoption and applicability before using a standard as a validation rule.

## 13. Questions to ask before designing a cleaning workflow

1. What real-world entity, event or measurement does each row represent?
2. What is the table grain, and what uniquely identifies a record at that grain?
3. Which source system owns the field, and can the original value be retained?
4. Which domain definitions, code lists, units, currencies, calendars and timezones apply?
5. Which values are legitimately unknown, not applicable, pending, suppressed or not observed?
6. Which errors are safe to correct automatically, and which require subject-matter review?
7. What downstream decisions, customer outcomes, safety controls or regulatory reports depend on this field?
8. How will we prove that the cleaning improved quality without changing valid business meaning?

## 14. Research gaps and next steps

This profile is a starting hypothesis map. Expand it with country-specific requirements, organization-level process maps, canonical data models, real anonymized sample datasets, failure examples and references to primary standards. Every new validation rule should record its owner, scope, evidence, severity, false-positive risk, version and approval route.
