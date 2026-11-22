# Retail and Consumer Packaged Goods

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Retail manages assortment, pricing, stores, channels, suppliers, stock, promotions and point-of-sale transactions. Consumer packaged goods adds product formulation, packaging hierarchy, trade promotion, distributor and retail execution data.

## 2. Main actors and systems

- retailers and store operators
- brands and manufacturers
- distributors and wholesalers
- merchandising and category managers
- store associates and shoppers

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

assortment planning → supplier purchase order → receiving → inventory and replenishment → pricing and promotion → point of sale → returns and loyalty → settlement and performance analysis.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Product, GTIN, SKU, PackSize, Brand, Category, Supplier, Store, Location, PurchaseOrder, Receipt, InventorySnapshot, PriceZone, Promotion, POSLine, ReturnLine, LoyaltyAccount and Planogram. Pack, case and each-level quantities need explicit conversion relationships.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

POS line files, inventory snapshots, product master spreadsheets, supplier EDI, planograms, promotion calendars, loyalty transactions, store traffic counters and demand forecasts.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

Sell-through is consumer purchase from a retailer; sell-in is supplier sales to the retailer. On-hand is not always available-to-promise. A promotion may change margin differently from sales volume, and returns can be recorded on a different date from the original sale.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- same item has different SKU identifiers by retailer, supplier and channel
- case, inner pack and each quantities are confused
- store calendars and trading days differ from calendar days
- POS voids, returns, exchanges and discounts are incorrectly interpreted
- promotion periods overlap, have eligibility rules or are applied at basket level
- inventory on hand, in transit, reserved and sellable stock are mixed
- product dimensions, weights and package hierarchies are incomplete
- loyalty identities are shared, merged or privacy restricted

## 8. Sector-specific cleaning and validation requirements

- use GTIN/SKU crosswalks with effective dates and pack-level units
- retain POS event types: sale, void, refund, exchange, discount and correction
- distinguish physical, reserved, damaged, in-transit and available inventory
- model promotion eligibility, funding, stacking and time zone explicitly
- reconcile sales and inventory using store, register, business date and item
- preserve source-specific fiscal calendars and store trading calendars
- validate product hierarchy and dimensions with packaging level
- govern loyalty identity resolution and opt-out/consent states

## 9. Unsafe or misleading cleaning decisions

- do not sum case and each quantities without conversion
- do not treat all negative POS lines as data errors
- do not infer consumer demand directly from shipments to retailers
- do not rewrite returns against the current product hierarchy without preserving sold-item identity

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- sell-through and sell-in
- gross margin and markdown rate
- inventory turns and stock availability
- promotion lift and incremental margin
- shrink and adjustment rates
- POS reconciliation and return rates

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [GS1 standards](https://www.gs1.org/standards)
- [GS1 GTIN](https://www2.gs1.org/standards/id-keys/gtin)
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
