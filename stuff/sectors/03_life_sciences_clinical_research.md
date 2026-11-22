# Life Sciences and Clinical Research

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Clinical research generates evidence through protocol-governed observations, interventions, samples, visits and statistical analysis. Data meaning is defined by the protocol, version, study arm, visit window, endpoint, population and analysis plan—not only by column names.

## 2. Main actors and systems

- sponsors and contract research organizations
- principal investigators and study sites
- participants and caregivers
- clinical data managers and monitors
- laboratories, statisticians and regulators

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

protocol and amendment approval → site and participant enrollment → screening and consent → scheduled visits and procedures → data capture and query resolution → database lock → analysis and reporting.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Study, ProtocolVersion, Site, Investigator, Participant, Consent, StudyArm, Visit, Event, EligibilityCriterion, Assessment, Specimen, AdverseEvent, Endpoint, DataQuery, Deviation and AnalysisDataset. Participant and site identifiers are often pseudonymous and study-scoped.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

EDC forms, tabular case-report forms, visit/event tables, lab exports, ePRO/eCOA streams, device data, specimen inventory, imaging, adverse-event narratives and analysis datasets. Example: `study_id, protocol_version, subject_id, visit_code, visit_date, form_id, item_code, raw_value, unit, query_status`.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

A blank field can have a protocol-defined reason. Baseline is not necessarily the first recorded value. A visit label may be a nominal schedule while its actual date falls within an allowed window. An adverse event is not the same as a serious adverse event or an adverse reaction.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- protocol amendments alter definitions, schedules, forms and valid values over time
- missed, unscheduled, early or out-of-window visits are misclassified
- subject IDs, site IDs and screening/enrollment states are confused
- units, decimal precision and lab reference ranges vary across sites
- adverse events and concomitant medications require time relationships and coded terms
- derived endpoints depend on windows, baseline rules, estimands and analysis conventions
- query resolution and source-data corrections can create competing versions
- missing data mechanisms differ: not done, not applicable, withdrew, missed visit or technical failure

## 8. Sector-specific cleaning and validation requirements

- version every protocol, form, code list, visit schedule and derivation rule
- preserve raw capture separately from standardized and analysis-ready data
- retain complete audit trail for changes, queries, reasons and approvals
- validate consistency against protocol-specific constraints and visit windows
- track source, site, instrument, collection time, processing time and timezone
- document missingness reason and impact on estimand/analysis population
- use controlled terminology and maintain mapping version and reviewer
- lock analysis datasets reproducibly with derivation code and lineage

## 9. Unsafe or misleading cleaning decisions

- do not treat every missing value as data-entry failure
- do not silently normalize away protocol deviations
- do not mix protocol versions without explicit harmonization
- do not overwrite raw values with derived or imputed analysis values

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- query rate and aging
- protocol deviation rate
- visit-window compliance
- critical data error rate
- reconciliation completeness
- traceability from source to analysis value

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [ClinicalTrials.gov API documentation](https://clinicaltrials.gov/data-api/about-api)
- [ICH guidelines](https://www.ich.org/page/efficacy-guidelines)
- [GO FAIR principles](https://www.go-fair.org/fair-principles/)

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
