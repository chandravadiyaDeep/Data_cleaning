# E-commerce and Digital Marketplaces

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

E-commerce connects product discovery, catalog presentation, pricing, inventory, checkout, payment, fulfilment, delivery, returns and seller settlement. The same product may appear as a parent item, variant, seller offer, marketplace listing and channel-specific catalog record.

## 2. Main actors and systems

- buyers and account holders
- brands, sellers and merchants
- catalog and merchandising teams
- payment providers and fraud teams
- warehouses, carriers and customer support

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

catalog ingestion → listing validation → search and discovery → price/promotion and availability → cart → checkout/payment → order allocation → pick/pack/ship → delivery → return/refund/review.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Product, ProductVariant, GTIN/SKU, Seller, Listing/Offer, Price, Promotion, InventoryLocation, Cart, Order, OrderLine, PaymentAttempt, Capture, Shipment, DeliveryEvent, Return, Refund, Review and Customer. OrderLine should reference the purchased variant and seller offer snapshot, not only the current catalog.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Catalog feeds, JSON APIs, event streams, relational orders, clickstream events, inventory snapshots, payment gateway exports, shipment tracking feeds, images and customer reviews. Example order line: `order_id, line_id, variant_id, seller_id, quantity, unit_price, currency, discount, tax, fulfilment_status`.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

A listing is an offer, not necessarily a unique product. An order is a commercial commitment; a payment attempt may fail or be retried. Revenue, gross merchandise value, net sales, cash received and seller payout are different measures.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- SKU, GTIN, seller SKU and variant identifiers are incorrectly conflated
- product attributes have inconsistent names, units, option values and category taxonomies
- prices mix list price, sale price, tax-inclusive price, currency and effective time
- inventory snapshots arrive late and oversell or understate stock
- order, payment authorization, capture, refund and chargeback are separate lifecycle events
- web events are duplicated, missing consent context or affected by bot traffic
- address and phone formats vary by locale; delivery failures can reflect invalid or incomplete addresses
- returns and refunds may be partial, multi-line or reason-coded differently

## 8. Sector-specific cleaning and validation requirements

- maintain canonical product, variant, seller and offer identities with source IDs
- preserve order-time snapshots of title, price, tax, promotion and seller terms
- normalize currency and tax only with explicit effective date and jurisdiction
- model payment as a stateful event sequence; do not deduplicate by amount alone
- reconcile inventory by SKU/location/time and source freshness
- standardize category and attribute vocabularies without discarding original feed values
- retain consent, collection purpose and privacy constraints for behavioral data
- validate partial shipments, cancellations, returns and refunds at line-item level

## 9. Unsafe or misleading cleaning decisions

- do not collapse distinct product variants because their titles match
- do not overwrite historical order prices with current catalog prices
- do not treat authorization as captured payment or order as delivered
- do not count retries as independent sales or delete them as duplicates

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- catalog attribute completeness
- search-to-cart and cart-to-order conversion
- stockout and oversell rate
- payment success and reconciliation rate
- on-time delivery
- return/refund and seller-dispute rates

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [GS1 GTIN product identification](https://www2.gs1.org/standards/id-keys/gtin)
- [PCI Security Standards Council — PCI DSS](https://www.pcisecuritystandards.org/standards/pci-dss/)
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
