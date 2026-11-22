# Logistics, Freight and Delivery

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Logistics coordinates the movement, storage and handoff of goods across shippers, carriers, ports, warehouses, customs brokers and consignees. Each shipment can contain multiple handling units, legs, stops, documents, service commitments and exception events.

## 2. Main actors and systems

- shippers and consignees
- freight forwarders and carriers
- warehouse and terminal operators
- customs brokers and border agencies
- dispatchers, drivers and customer service

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

booking → pickup → origin handling → line-haul or multimodal movement → customs/border processing → destination handling → last-mile delivery → proof of delivery, billing and claims.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Shipment, Consignment, Order, HandlingUnit, Package, Pallet, Container, Leg, Stop, Route, Carrier, Vehicle, Driver, Facility, Booking, TransportDocument, CustomsEntry, TrackingEvent, ProofOfDelivery, FreightInvoice and DamageClaim. Shipment, consignment and package are different grains.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

EDI messages, transport-management tables, GPS pings, scan events, bills of lading, airway bills, customs declarations, geospatial route data, proof-of-delivery images and freight invoices.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

Estimated time of arrival is a changing prediction, not an actual delivery time. A shipment may be delivered while one package is missing. Gross weight, net weight, dimensional weight and chargeable weight are not interchangeable. A tracking scan is an observation about an event, not necessarily proof of custody transfer.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- shipment, consignment, order, package and container IDs are confused
- carrier status codes differ and are not mapped to a common event taxonomy
- scan events are duplicated, delayed, out of order or attached to wrong package
- timestamps mix local facility time, UTC and carrier event time
- weights and dimensions use different units and chargeable-weight rules
- addresses and location codes are inconsistent across carriers and countries
- multi-leg transfers, split shipments and partial deliveries are flattened
- customs commodity codes and declared values lack version or jurisdiction context

## 8. Sector-specific cleaning and validation requirements

- define identifiers and hierarchy for order, shipment, consignment, handling unit and package
- preserve raw carrier codes and map them with carrier/version provenance
- sort events using event time, sequence and source while retaining ingestion time
- normalize weights and dimensions with explicit measurement basis
- maintain location IDs, coordinates, address quality and jurisdiction
- validate route legs and custody handoffs as a linked event graph
- distinguish planned, estimated and actual milestone timestamps
- reconcile freight invoice accessorial charges against contract and service evidence

## 9. Unsafe or misleading cleaning decisions

- do not delete repeated scans without checking carrier event semantics
- do not assume the latest received event happened last
- do not merge partial shipments into one delivery status
- do not standardize away a carrier exception code without preserving original detail

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- on-time pickup and delivery
- scan coverage and event latency
- shipment visibility completeness
- damage/loss rate
- freight cost per weight/volume/unit
- invoice dispute and accessorial charge rate

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [GS1 standards and identification keys](https://www.gs1.org/standards)
- [ISO 8601 date/time standard](https://www.iso.org/standard/70907.html)
- [OGC standards (route and location data)](https://www.ogc.org/standards/)

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
