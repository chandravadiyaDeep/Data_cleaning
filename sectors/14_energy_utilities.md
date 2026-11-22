# Energy and Utilities

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Energy and utility organizations generate, transmit, distribute, trade and bill electricity, gas, water or heat. Data combines physical network topology, metering, SCADA/IoT telemetry, market settlement, customer accounts, outage events and asset maintenance.

## 2. Main actors and systems

- generation and network operators
- retail suppliers and market participants
- field service and asset maintenance teams
- customers and meter operators
- market operators and regulators

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

forecast and schedule → generate/procure → transmit/distribute → meter and monitor → market settlement → customer billing → outage response and asset maintenance.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Asset, NetworkNode, Feeder, Circuit, Meter, MeterPoint, Premise, ServicePoint, CustomerAccount, Tariff, MeterRead, IntervalUsage, Forecast, Dispatch, GenerationUnit, Outage, WorkOrder, MarketInterval and SettlementStatement.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Interval meter readings, SCADA/telemetry streams, geospatial networks, outage logs, market bids/settlement files, asset registers, billing tables, weather feeds and engineering models.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

Consumption is not the same as net consumption when distributed generation or export exists. Meter read can be actual, estimated or validated. Demand, energy, capacity and instantaneous power have different units and time bases. An outage affects a defined set of network assets and customers over an interval.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- meter IDs, service points, premises and customer accounts are mismatched
- interval length, timezone, daylight-saving transitions and settlement calendars differ
- meter estimates, actual reads, corrected reads and substituted reads are conflated
- energy units and scaling factors vary (Wh/kWh/MWh, volume, calorific value)
- negative values may indicate export, reverse flow or correction rather than invalid data
- network topology and asset connectivity become stale after field changes
- sensor outages, telemetry gaps and device resets create discontinuities
- tariffs, losses, demand charges and market prices depend on effective periods

## 8. Sector-specific cleaning and validation requirements

- preserve meter multiplier, unit, channel, direction and read quality
- validate interval completeness against meter calendar and local time rules
- retain original and corrected reads with method and reason
- check physical bounds conditionally by meter type, direction and network configuration
- version topology, tariff, market rules and settlement calendars
- align telemetry with asset, sensor, calibration and event context
- reconcile billing determinants to reads, estimates and tariff periods
- retain outage start/restore/notification times as distinct milestones

## 9. Unsafe or misleading cleaning decisions

- do not replace negative meter values with zero without checking export or correction
- do not interpolate long telemetry gaps as measured energy
- do not mix local calendar days with UTC intervals without explicit conversion
- do not apply today's tariff retrospectively to historical usage

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- meter data completeness and estimation rate
- technical and commercial loss indicators
- outage duration and affected customers
- forecast error and settlement adjustment
- billing correction rate
- asset failure and maintenance response

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [OGC SensorThings API](https://www.ogc.org/standards/sensorthings/)
- [ISO 8601 date/time standard](https://www.iso.org/standard/70907.html)
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
