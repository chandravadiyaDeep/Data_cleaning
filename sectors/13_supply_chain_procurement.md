# Supply Chain and Procurement

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Supply-chain functions plan, source, buy, make, move and return materials across multi-tier supplier networks. Data joins demand, supplier capacity, purchase contracts, bills of material, inventory, inbound/outbound logistics and financial commitments.

## 2. Main actors and systems

- procurement and sourcing teams
- suppliers and contract manufacturers
- planning and inventory control
- production and distribution
- finance, risk and sustainability teams

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

demand signal → supply plan → sourcing and qualification → purchase order/contract → supplier confirmation → receipt and inspection → invoice matching → replenishment and supplier performance.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Supplier, SupplierSite, Item, ApprovedManufacturer, Contract, PurchaseOrder, POLine, ScheduleLine, ASN, Receipt, InspectionLot, InventoryPosition, Forecast, BOM, LeadTime, Invoice, PaymentTerm, SupplierRisk and SupplierAssessment.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

ERP master data, EDI purchase orders and ASNs, supplier portals, forecast files, inventory snapshots, contract documents, quality certificates, logistics milestones and spend cubes.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

A purchase order is a commitment; a forecast is an expectation. An ASN is a notification, not proof of receipt. Supplier on-time delivery needs a defined requested date, confirmed date, actual receipt date and tolerance rule. Spend can be committed, invoiced, paid or accrued.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- the same supplier has multiple names, legal entities, sites and remittance identities
- item numbers and units of measure differ between buyer and supplier
- purchase order revisions and schedule-line changes are not time-versioned
- lead times confuse quoted, planned, actual and end-to-end elapsed time
- inventory snapshots mix on-hand, reserved, available, in-transit and consigned stock
- three-way match discrepancies arise from timing, tolerance, tax and partial receipt
- BOM and supplier substitution relationships are missing
- multi-tier supplier dependencies and country-of-origin fields are incomplete

## 8. Sector-specific cleaning and validation requirements

- govern supplier, legal-entity, site, item and manufacturer identities separately
- preserve PO version, line, schedule and requested/confirmed dates
- normalize units only using item-specific conversion factors
- model inventory states and ownership explicitly
- match PO, receipt and invoice at the correct line and quantity grain
- track lead-time definition and event timestamps
- retain approved alternate/substitute material and effective dates
- record source, coverage and confidence for supplier-risk attributes

## 9. Unsafe or misleading cleaning decisions

- do not use supplier-name fuzzy matching as an automatic master-data merge
- do not treat a forecast row as a purchase order
- do not net away receipt/invoice timing differences without a documented policy
- do not compare suppliers using unadjusted lead times across different products and lanes

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- supplier on-time/in-full
- purchase price variance
- inventory days and stockout rate
- PO-to-invoice match rate
- supplier concentration and risk coverage
- lead-time variability

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [GS1 supply-chain standards](https://www.gs1.org/standards)
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
