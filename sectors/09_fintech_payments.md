# Fintech and Payment Processing

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Payment businesses move value between payers, payees, merchants, wallets, banks and networks. Their data is event-oriented and stateful: initiation, authorization, capture, clearing, settlement, refund, reversal, dispute and payout may be separate records.

## 2. Main actors and systems

- consumers and business payers
- merchants and platforms
- payment gateways and processors
- banks, card networks and UPI/payment rails
- fraud, risk, reconciliation and support teams

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

instrument/token setup → payment initiation → authentication → authorization → capture → clearing and settlement → merchant payout → refund/dispute/reconciliation.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

PaymentIntent, PaymentAttempt, InstrumentToken, Authorization, Capture, ClearingRecord, Settlement, Fee, Refund, Reversal, Chargeback, Dispute, Payout, Merchant, Terminal and RiskDecision. One intent can have multiple attempts; one capture may be split across settlements.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Webhooks, API events, processor settlement files, bank statements, card network messages, UPI references, wallet ledgers, fraud signals and reconciliation tables.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

A successful authorization is not equal to cash settlement. A refund is not always an immediate reversal. Gross transaction value, processed volume, fee revenue, net settlement and merchant payout are separate measures.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- webhook delivery is at-least-once, leading to duplicate event deliveries
- payment intent, attempt, authorization, capture and settlement are confused
- merchant order IDs and processor references are not consistently mapped
- fees, interchange, tax, FX and net payouts are mixed
- partial captures/refunds and split settlements are flattened
- time zones, settlement windows and cutoff dates vary by rail and country
- risk scores, device fingerprints and token data have sensitive handling requirements
- dispute and chargeback events arrive long after the original transaction

## 8. Sector-specific cleaning and validation requirements

- design idempotency keys and event-level deduplication without deleting distinct attempts
- preserve event ordering, original references and lifecycle state
- reconcile gross amount − fees − adjustments = net settlement at the correct batch level
- keep original currency and settlement currency with FX rate source/time
- model partial captures, split refunds, reversals and disputes explicitly
- mask or tokenize sensitive payment credentials; do not ingest prohibited authentication data
- retain webhook payload provenance and delivery metadata
- validate payout totals against processor files and bank movement

## 9. Unsafe or misleading cleaning decisions

- do not deduplicate solely on amount, timestamp and merchant
- do not treat repeated webhook delivery as repeated payment
- do not remove failed attempts from reliability analysis
- do not assume refund initiated means refund completed

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- authorization and capture rates
- settlement reconciliation variance
- chargeback and fraud rates
- payout delay
- webhook duplicate and processing failure rate
- fee leakage and net settlement accuracy

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [PCI Security Standards Council — PCI DSS](https://www.pcisecuritystandards.org/standards/pci-dss/)
- [ISO 20022](https://www.iso20022.org/)

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
