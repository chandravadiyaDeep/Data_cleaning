# Marketing and Advertising

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Marketing measures campaigns and interactions across channels, devices, audiences and conversion systems. A journey can include ad exposures, clicks, site/app events, leads, sales and offline outcomes, with identity, consent, attribution and spend reconciled across platforms.

## 2. Main actors and systems

- brands and marketing teams
- agencies and media buyers
- ad platforms and publishers
- analytics and data engineering teams
- sales, CRM and privacy/legal teams

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

audience and campaign planning → creative and placement setup → ad delivery → exposure/click collection → web/app engagement → lead/order conversion → attribution and billing.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Advertiser, Campaign, AdGroup, Creative, Placement, Impression, Click, Session, Event, Audience, ConsentSignal, IdentityLink, Lead, Opportunity, Order, Conversion, Cost and AttributionModel.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Ad-platform exports, pixel/SDK events, web analytics logs, CRM records, campaign taxonomy tables, cost files, conversion APIs and consent-management events.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

Reach is not impressions; clicks are not sessions; attributed conversions are not necessarily incremental conversions. Campaign cost, billed spend, platform-reported spend and invoiced spend may differ.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- campaign names and IDs differ across tools and naming conventions
- impressions, reach, frequency, clicks and sessions have different counting grains
- cross-device identities are uncertain or unavailable due to consent restrictions
- UTM parameters are missing, malformed, lower/upper case inconsistent or overwritten
- platform timezones and currency conversions mismatch finance reporting
- attribution models assign credit differently and are mistaken for observed causal truth
- bot traffic, duplicate tags and retry events inflate counts
- offline conversions and delayed CRM updates are not joined consistently

## 8. Sector-specific cleaning and validation requirements

- govern campaign taxonomy and immutable platform IDs
- preserve raw event and consent context; do not reconstruct prohibited identities
- define event grain, deduplication key, lookback window and attribution version
- standardize UTM values while preserving original source values
- reconcile costs by account, campaign, date, currency and platform adjustment
- separate observed conversions from modeled or attributed conversions
- document bot filtering, consent loss and measurement gaps
- use privacy-respecting identity and retention practices

## 9. Unsafe or misleading cleaning decisions

- do not deduplicate all repeated ad events without an event ID and platform rule
- do not treat attribution as causal uplift
- do not fill missing consent or user IDs with inferred identity
- do not combine platform metrics with different definitions into one total

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- cost per qualified lead/acquisition
- conversion rate with event definition
- incremental lift from controlled experiments
- spend reconciliation variance
- reach/frequency quality
- attribution coverage and modeled share

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [IAB Tech Lab standards](https://iabtechlab.com/standards/)
- [W3C Data on the Web Best Practices](https://www.w3.org/TR/dwbp/)

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
