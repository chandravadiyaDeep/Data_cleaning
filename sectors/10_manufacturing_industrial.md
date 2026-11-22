# Manufacturing and Industrial Operations

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Manufacturing converts materials and capacity into finished or semi-finished goods through routings, machines, labour, quality controls and maintenance. Data is often a blend of transactional ERP/MES records, high-frequency sensor streams and engineering specifications.

## 2. Main actors and systems

- production planners and operators
- process and industrial engineers
- quality and maintenance teams
- warehouse and procurement
- customers, suppliers and auditors

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

demand and production planning → material allocation → work order release → operation execution → in-process inspection → finished-goods receipt → maintenance and continuous improvement.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Product, BOM, Routing, WorkOrder, Operation, WorkCenter, Machine, Shift, Operator, MaterialLot, WIP, ProductionEvent, SensorObservation, Inspection, Defect, Nonconformance, MaintenanceWorkOrder and FinishedLot.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

ERP/MES tables, machine PLC/SCADA time series, quality inspection sheets, maintenance logs, BOM/routing structures, barcode/RFID scans, CAD/engineering attributes and OEE event streams.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

Cycle time depends on the start/stop event definition. OEE depends on availability, performance and quality definitions. A rejected part, reworked part and scrapped part have different dispositions. Engineering tolerance is not a universal statistical outlier threshold.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- part numbers and engineering revisions are not synchronized
- units, tolerances and nominal values differ across design and shop-floor systems
- machine clocks drift and event timestamps are not aligned
- sensor readings mix raw, filtered, resampled and calibrated signals
- downtime, idle, setup, changeover and planned maintenance categories differ
- scrap, rework, yield and rejected quantity are inconsistently counted
- work-order operations are missing or out of sequence
- lot genealogy and component consumption do not reconcile

## 8. Sector-specific cleaning and validation requirements

- preserve part revision, routing version, work center and operation context
- normalize sensor units only with device and calibration metadata
- align event time while preserving source clock and ingestion time
- validate sequence and quantity balance across material issue, WIP, output, scrap and rework
- maintain lot/serial genealogy and equipment lineage
- keep downtime reason codes distinct from raw machine states
- evaluate limits against specification revision and measurement system
- record shift, operator, machine state and product mix for comparison

## 9. Unsafe or misleading cleaning decisions

- do not delete spikes before checking machine events and sensor faults
- do not merge part numbers across engineering revisions without equivalence approval
- do not treat planned stops as unplanned downtime
- do not standardize away meaningful machine-state transitions

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- first-pass yield
- OEE with documented definitions
- scrap and rework rate
- cycle time and throughput
- schedule adherence
- sensor and genealogy completeness

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [ISO 55000 asset management overview](https://www.iso.org/standard/83053.html)
- [OGC SensorThings API](https://www.ogc.org/standards/sensorthings/)

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
