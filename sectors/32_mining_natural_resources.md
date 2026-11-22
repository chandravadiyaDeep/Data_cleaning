# Mining and Natural Resources

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Mining and natural-resource operations explore, extract, process and transport geological materials under geospatial, safety, environmental, production and asset constraints. Data combines surveys, geology, drilling, assay, fleet telemetry, plant processes, maintenance and sales.

## 2. Main actors and systems

- exploration geologists and surveyors
- mine planners and operators
- processing plant and maintenance teams
- environment, safety and regulatory staff
- traders, logistics and finance

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

exploration and sampling → resource/reserve modeling → mine design and scheduling → drilling/blasting/extraction → haulage and processing → stockpile/grade control → shipment and rehabilitation.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Tenement, Prospect, Drillhole, Collar, Survey, Sample, Assay, GeologicalInterval, BlockModel, ResourceEstimate, ReserveEstimate, Bench, Blast, Equipment, HaulCycle, Stockpile, PlantRun, ProductLot, Shipment and RehabilitationEvent.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Borehole and assay tables, 3D geological models, GIS layers, survey files, fleet-management telemetry, dispatch events, plant sensor streams, weighbridge transactions and laboratory certificates.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

A mineral resource estimate and an ore reserve are different categories with different confidence and modifying factors. Grade needs element, unit, sample interval, method and QA/QC. Tonnage depends on density and volume basis. A zero assay may mean below detection, not absence.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- coordinate reference systems and local mine grids are mixed
- drillhole collars, downhole surveys and interval depths are inconsistent
- sample IDs, QA/QC standards, duplicates and blanks are mislinked
- assay values have detection limits, units and laboratory method differences
- ore grade and tonnage depend on spatial block, density and estimation method
- equipment hours, engine hours, idle and productive time are mixed
- truck payloads, weighbridge and dispatch records do not reconcile
- stockpile and product movements lose source and grade genealogy

## 8. Sector-specific cleaning and validation requirements

- retain raw assays, QA/QC results, lab methods, detection limits and sample chain
- version geological models, block models, estimation parameters and cut-off rules
- preserve CRS, survey datum, local-grid transforms and positional accuracy
- validate drillhole depth and interval relationships
- reconcile material movement by source block, truck, destination and time
- track equipment meter type, reset, operating state and shift
- link stockpile inventory and grade to blending and processing events
- retain safety/environmental monitoring and corrective-action provenance

## 9. Unsafe or misleading cleaning decisions

- do not replace below-detection assays with zero without a stated method
- do not mix resource and reserve classifications
- do not average grades without tonnage and spatial support
- do not transform local mine coordinates without preserving the original grid

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- ore grade and recovery
- material movement reconciliation
- equipment utilization and availability
- assay QA/QC failure rate
- stockpile balance and blend variance
- safety/environmental incident rates

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [ISO 55000 asset management](https://www.iso.org/standard/83053.html)
- [OGC geospatial standards](https://www.ogc.org/standards/)
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
