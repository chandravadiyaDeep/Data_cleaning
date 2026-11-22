# Healthcare, Hospitals and Care Delivery

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Healthcare data supports diagnosis, treatment, prevention, care coordination, billing, quality improvement and resource planning. The central unit is not simply a person row: it is a person’s longitudinal record made of time-bounded encounters, clinical observations, orders, procedures, medication events and administrative transactions.

## 2. Main actors and systems

- patients and caregivers
- clinicians and allied health professionals
- hospitals, clinics and laboratories
- pharmacies and diagnostic providers
- payers, public-health agencies and health-IT operators

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

patient identity and registration → appointment/admission → encounter and assessment → orders and results → diagnosis/procedure/medication → discharge or follow-up → claim and payment.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Patient, PersonIdentifier, Encounter, Practitioner, Organization, Condition, Observation, DiagnosticReport, ServiceRequest, Procedure, MedicationRequest, MedicationAdministration, AllergyIntolerance, Device, Claim and Consent. A patient can have many encounters; an observation belongs to a clinical context and has an effective time, performer, value, unit and status.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Relational EHR tables; HL7 v2 messages; FHIR resources and APIs; claims and remittance files; laboratory result tables; medical images; waveform streams; clinical notes; scanned documents; pharmacy transactions. Example observation: `patient_id, encounter_id, code_system, code, value, unit, effective_time, status, performer_id, specimen_id`.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

Clinical facts are contextual and time-sensitive. A blood-pressure value needs units, measurement method, posture/context and time. A diagnosis may be suspected, ruled out, historical or active. Medication prescribed is not the same as medication dispensed or administered. A claim diagnosis is not necessarily a confirmed clinical diagnosis.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- duplicate or fragmented patient identities across facilities and identifier systems
- encounter, specimen, order and result records are orphaned or linked incorrectly
- clinical codes, local terminology and free-text descriptions disagree
- units and reference intervals vary by laboratory, method, age and patient context
- results may be preliminary, corrected, cancelled, final or amended but appear as duplicate rows
- dates may represent collection, observation, entry, validation or discharge time
- missingness may mean not measured, refused, unknown, not applicable or not documented
- claims contain line-level adjustments, reversals and resubmissions that resemble duplicates
- de-identification may leave re-identification risk in dates, rare conditions or free text

## 8. Sector-specific cleaning and validation requirements

- preserve source record, facility, author, timestamps, status and audit history
- use terminology mappings with source code system, version and mapping confidence
- validate units and reference ranges against method and relevant patient context
- retain corrected/amended result history instead of overwriting prior states
- link records with governed identity resolution; retain match confidence and review path
- treat clinical missingness explicitly; do not impute clinical facts for operational convenience
- apply access controls, minimization, consent and jurisdiction-specific privacy obligations
- require qualified clinical governance before transforming information used in care

## 9. Unsafe or misleading cleaning decisions

- never auto-correct a clinical value solely because it is statistically unusual
- never collapse medication order, dispensing and administration into one event
- never erase amended results or audit trail
- never infer a diagnosis from a claim field without documenting its provenance

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- patient identity match precision and false-merge rate
- order-to-result completeness and turnaround time
- terminology mapping coverage
- duplicate encounter and orphan-result rates
- data latency and amendment rate
- clinical measure completeness with denominator definitions

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [HL7 FHIR specification](https://www.hl7.org/fhir/)
- [US ONC overview of FHIR resources](https://healthit.gov/interoperability/investments/fhir/)
- [WHO ICD classification](https://www.who.int/standards/classifications/classification-of-diseases)

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
