# Automotive and Mobility

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Automotive spans vehicle design, manufacturing, parts distribution, dealership sales, financing, service, fleet operations, connected vehicles and aftermarket supply. Vehicle identity, model year, trim, powertrain, build configuration and service history are essential semantic context.

## 2. Main actors and systems

- OEMs and component suppliers
- dealers and repair shops
- vehicle owners and fleet operators
- financiers, insurers and leasing companies
- regulators and mobility platforms

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

vehicle design and configuration → component sourcing → assembly and quality → vehicle identification and sale → registration/ownership → service/repair → resale, recall or end-of-life.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Vehicle, VIN, Model, ModelYear, Trim, Powertrain, BuildConfiguration, Component, PartNumber, SupplierLot, Dealer, Owner, Registration, OdometerReading, ServiceEvent, WarrantyClaim, Recall, DiagnosticCode and FleetTrip.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

PLM/BOM records, manufacturing genealogy, VIN registries, dealer management systems, parts catalogs, telematics, OBD diagnostic events, warranty claims and service invoices.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

A vehicle model name is not a unique configuration. A service part match requires fitment context. Odometer reading is not automatically monotonic when cluster replacement or correction is legitimate. A diagnostic code is a symptom signal, not a confirmed root cause.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- VINs are mistyped, truncated or represented with whitespace and formatting changes
- model, trim, engine, transmission and market codes vary by region and model year
- parts interchangeability depends on fitment, revision, build date and vehicle configuration
- odometer values may be miles or kilometres and can be replaced or reset
- diagnostic trouble codes need module, vehicle state and code-set version
- warranty and recall eligibility depend on VIN range, production date and component lot
- ownership and vehicle location data are sensitive and time-dependent
- telemetry packets may be out of order, duplicated or generated under different firmware

## 8. Sector-specific cleaning and validation requirements

- validate VIN structure and preserve raw submitted value
- key vehicle configuration by VIN plus authoritative build attributes and effective dates
- version parts catalog, interchange and fitment rules
- store distance units, reading source, timestamp and replacement/correction reason
- retain diagnostic code system, firmware and vehicle operating context
- link warranty, recall and service events to vehicle/component genealogy
- separate owner identity from vehicle identity and apply privacy controls
- validate telematics timestamps, sequence numbers, units and sensor calibration

## 9. Unsafe or misleading cleaning decisions

- do not infer vehicle configuration from model name alone
- do not deduplicate service events merely because the same part and date recur
- do not discard odometer decreases without investigating replacement or correction
- do not treat a DTC as a definitive fault diagnosis

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- VIN decode success
- parts fitment accuracy
- warranty claim rejection/recurrence
- recall completion
- service interval compliance
- fleet utilization and telematics coverage

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [NHTSA vehicle product information and VIN tools](https://www.nhtsa.gov/vin-decoder)
- [ISO 8601 date/time standard](https://www.iso.org/standard/70907.html)

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
