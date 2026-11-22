# Public Transportation

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Public-transport operators publish networks, stops, routes, trips, timetables, fares, vehicles, real-time service updates, passenger counts and accessibility information. Schedule data describes planned service; real-time feeds describe changing operational conditions.

## 2. Main actors and systems

- transit agencies and operators
- passengers and accessibility groups
- dispatch and control centers
- ticketing and payment providers
- transport authorities and journey-planning platforms

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

network and timetable planning → schedule publication → vehicle and crew dispatch → real-time service monitoring → fare validation and passenger movement → service performance reporting.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Agency, Route, Stop, Station, Trip, StopTime, Calendar, Shape, Vehicle, Block, FareProduct, FareRule, Transfer, ServiceAlert, TripUpdate, VehiclePosition and PassengerCount.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

GTFS Schedule text files, GTFS Realtime protobuf feeds, AVL/GPS streams, ticketing transactions, passenger counts, vehicle maintenance records, route geometry and accessibility metadata.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

A route is a rider-facing service grouping; a trip is one vehicle journey; a stop time is a scheduled event. Service day may not equal calendar day. Scheduled arrival, predicted arrival and observed arrival are distinct.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- route, trip, stop and agency IDs are unstable or reused across feed versions
- stop coordinates, platform locations and station hierarchies are wrong
- service calendars, exceptions and dates are inconsistent
- times after midnight can belong to the previous service day and exceed 24:00:00
- schedule and real-time feeds use different trip identifiers or timestamps
- headway-based service and fixed trips are modeled differently
- fare media, transfers, concessions and fare zones are incomplete
- accessibility, pathway and elevator information is stale

## 8. Sector-specific cleaning and validation requirements

- validate feed against current GTFS specification and agency publishing rules
- preserve persistent IDs across feed versions where possible
- retain service calendar, exception dates, timezone and service-day semantics
- check stop/route/trip foreign-key integrity and shape alignment
- distinguish static schedule from real-time update and vehicle observation
- validate geographic coordinates, parent stations and pathways
- document fare products, rules, transfer and concession assumptions
- measure feed freshness and validity horizon

## 9. Unsafe or misleading cleaning decisions

- do not reject times greater than 24:00:00 as malformed without applying GTFS service-day rules
- do not overwrite scheduled time with predicted time
- do not change persistent stop IDs casually
- do not interpret an absent real-time update as proof that a trip is cancelled

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- feed validity and freshness
- schedule adherence and headway regularity
- trip completion and cancellation
- passenger load and transfer reliability
- accessibility data completeness
- stop and route geometry quality

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [Official GTFS Schedule Reference](https://gtfs.org/documentation/schedule/reference/)
- [GTFS overview](https://gtfs.org/documentation/overview/)
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
