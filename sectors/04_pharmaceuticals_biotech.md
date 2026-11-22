# Pharmaceuticals and Biotech Manufacturing

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Pharmaceutical and biotech operations transform controlled materials into regulated products through validated processes. Data must preserve product identity, material genealogy, batch history, environmental conditions, equipment state, test outcomes and release decisions.

## 2. Main actors and systems

- quality assurance and quality control
- manufacturing and process engineering
- supply planning and warehouse teams
- regulatory affairs and validation teams
- contract manufacturers and distributors

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

supplier qualification → material receipt and quarantine → sampling and testing → dispensing and production → in-process controls → packaging and serialization → batch review and release → distribution and recall management.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Product, Formula/BillOfMaterial, Material, SupplierLot, Receipt, Sample, Test, Equipment, Calibration, Batch, ProcessStep, EnvironmentalReading, Deviation, CAPA, ChangeControl, PackagingUnit, SerialNumber and ReleaseDecision. Batch genealogy links finished lots to input lots and process/equipment records.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Batch records, LIMS results, MES event streams, ERP inventory tables, equipment historian data, environmental monitoring series, certificates of analysis, serialization events and controlled documents.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

A batch is a governed production unit, not just a date code. A result is meaningful only with method, specification version, sample, instrument, analyst and status. A material quantity may be gross, net, potency-adjusted or theoretical.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- lot and batch identifiers differ across supplier, plant, packaging and distribution systems
- unit, concentration, potency and assay basis are mixed
- process parameter data have clock drift, sensor calibration changes or missing intervals
- test results are preliminary, retested, invalidated or superseded
- material genealogy and yield reconciliation are incomplete
- equipment and method versions are missing from test context
- label, expiry, storage and serialization data can be inconsistent
- manual transcription and spreadsheet handoffs introduce errors

## 8. Sector-specific cleaning and validation requirements

- preserve electronic records, audit trail, signatures and original value
- maintain versioned master data, specifications, methods and process recipes
- validate units, conversion factors, significant digits and potency basis
- enforce genealogy and reconciliation across material, batch and packaging levels
- distinguish invalid test, retest, investigation, OOS and final disposition
- retain timestamps, equipment ID, calibration status and environmental context
- treat regulatory validation and electronic-record obligations as applicable jurisdiction-specific requirements
- route critical deviations and release-affecting corrections through quality systems

## 9. Unsafe or misleading cleaning decisions

- never auto-delete a failed or out-of-specification test
- never rewrite a released batch's history to make it appear compliant
- never merge lots because descriptions or dates look similar
- never substitute a new specification retroactively without controlled impact assessment

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- batch record completeness
- right-first-time release
- deviation and CAPA recurrence
- material reconciliation variance
- test turnaround time
- traceability and recall response time

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [FDA drug databases and NDC directory](https://www.fda.gov/drugs/drug-approvals-and-databases/national-drug-code-directory)
- [FDA data integrity guidance landing page](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/data-integrity-and-compliance-drug-cgmp-questions-and-answers-guidance-industry)
- [ISO 13485 overview (medical-device quality systems)](https://www.iso.org/standard/13485)

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
