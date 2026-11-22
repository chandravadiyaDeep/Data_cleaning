# Construction and Infrastructure

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Construction delivers a built asset through design, engineering, procurement, site execution, inspection, commissioning and handover. Information is multi-disciplinary and revision-controlled; model objects, drawings, specifications, site events and cost/schedule records must stay aligned.

## 2. Main actors and systems

- owners and asset operators
- architects and engineers
- general contractors and subcontractors
- quantity surveyors and procurement
- inspectors, safety teams and regulators

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

requirements and concept → design and BIM coordination → estimate and tender → procurement → site construction and inspections → change control → testing/commissioning → handover and operation.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Project, Site, Asset, Facility, BuildingElement, Space, System, Model, Drawing, Specification, Revision, WorkPackage, Activity, Schedule, Quantity, CostCode, RFI, Submittal, ChangeOrder, Inspection, Defect and HandoverRecord.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

BIM models, IFC files, CAD drawings, schedules, bills of quantities, cost ledgers, daily reports, inspection forms, sensor/IoT records, geospatial surveys and document-management metadata.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

Design intent, approved-for-construction status, installed state and as-built state are different. A quantity takeoff depends on measurement rule, model version and scope. Cost committed, cost incurred, forecast final cost and cash paid are separate.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- drawing/model revision mismatch between site and design offices
- element GUIDs and classification systems differ across BIM tools
- units and coordinate origins vary between discipline models
- work breakdown, cost codes and schedule activity IDs are inconsistent
- quantities are double-counted across model views or subcontract packages
- RFI, submittal, change and defect statuses are disconnected
- as-built condition differs from design model but updates are not synchronized
- progress percentages mix physical, financial and schedule-weighted meanings

## 8. Sector-specific cleaning and validation requirements

- preserve revision, status, author, discipline and approval timestamps
- retain stable element identifiers and model lineage across revisions
- normalize units and coordinate systems using explicit transforms
- link quantities to measurement rule, model revision and work package
- model change orders and their approved scope/cost/schedule impact
- validate schedule dependencies and actual progress events
- distinguish design values from field-verified as-built values
- retain evidence for inspection, safety, quality and commissioning records

## 9. Unsafe or misleading cleaning decisions

- do not overwrite an issued drawing with a later revision without history
- do not sum quantities from overlapping model exports blindly
- do not equate payment progress with physical completion
- do not snap BIM geometry without preserving coordinate reference and transform

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- rework and defect rates
- schedule variance and delay
- cost variance and forecast accuracy
- RFI/submittal cycle time
- model coordination issue closure
- handover asset-data completeness

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [buildingSMART IFC standard](https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/)
- [buildingSMART standards server](https://standards.buildingsmart.org/)
- [ISO 55000 asset management](https://www.iso.org/standard/83053.html)

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
