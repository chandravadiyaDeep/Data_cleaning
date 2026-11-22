# Telecommunications

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Telecommunications operators provision connectivity and digital services, operate network infrastructure, manage subscribers and service assurance, and bill usage or subscriptions. Data spans network topology, configuration, alarms, sessions, usage records, customer/product accounts and service-level commitments.

## 2. Main actors and systems

- network operations and engineering
- subscribers and enterprise customers
- customer care and billing teams
- roaming and interconnect partners
- regulators and wholesale operators

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

customer/order capture → service qualification → provisioning and activation → network usage and event generation → charging/billing → assurance and incident resolution → cancellation or change.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Party, Subscriber, CustomerAccount, Subscription, ProductOffering, Service, Resource, NetworkElement, Cell/Site, Configuration, Alarm, TroubleTicket, Session, UsageRecord/CDR, RoamingPartner, Invoice and SLA.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Call/detail records, data session records, network counters, alarms, topology graphs, configuration snapshots, provisioning events, CRM/BSS/OSS tables and partner settlement files.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

A subscriber is not always the legal customer or payer. A data session and a billable usage record are different layers. An alarm is an indication, not necessarily a root cause. A service can be commercially active while one network resource is unavailable.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- subscriber, account, SIM/eSIM, device, service and network identifiers are conflated
- network counters reset, wrap, roll over or change with software versions
- CDRs have duplicate, partial, late or split records
- usage is rounded and rated differently by tariff, roaming and wholesale agreements
- cell/site identifiers are reused or reconfigured over time
- alarm storms create event floods and duplicate root-cause symptoms
- billing periods and network event times cross timezones and cutoff windows
- service status and provisioning state differ between BSS and OSS

## 8. Sector-specific cleaning and validation requirements

- preserve source identifiers and effective-dated network topology
- version counter definitions, units, device/software and reset semantics
- deduplicate CDRs using stable event IDs and source-specific rules
- retain rating, tariff, roaming and rounding logic version
- reconcile BSS service state with OSS/network state without overwriting either
- model alarms, tickets and incidents as related but distinct objects
- normalize time with timezone and network clock metadata
- protect location, communication and subscriber data with strict access controls

## 9. Unsafe or misleading cleaning decisions

- do not sum counters across a reset without reconstructing increments
- do not treat every alarm as a separate incident
- do not merge customer and subscriber identities
- do not assume all CDR duplicates are duplicates without checking partial-record semantics

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- CDR completeness and billing leakage
- network availability and service quality
- alarm-to-incident correlation
- provisioning success and activation time
- usage settlement variance
- customer-impact duration

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [TM Forum Open APIs](https://www.tmforum.org/oda/open-apis/)
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
