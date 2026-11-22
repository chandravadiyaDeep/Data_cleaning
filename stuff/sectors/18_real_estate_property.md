# Real Estate and Property

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Real estate manages land, buildings, units, ownership or tenure interests, leases, transactions, valuations, facilities and geographic risk. Data is inherently spatial and temporal: a property has legal identity, physical components, occupancy and market history that may not align.

## 2. Main actors and systems

- owners, buyers, tenants and occupants
- brokers and property managers
- developers and lenders
- valuers, surveyors and title professionals
- municipal and land-record authorities

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

land/property identification → listing and due diligence → valuation and transaction → title/lease registration → occupancy and rent collection → maintenance/capital works → refinance or disposal.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Parcel, Building, Unit, Address, PropertyInterest, Owner, Party, Title/Deed, Lease, Listing, Transaction, Valuation, Mortgage, Tenant, OccupancyPeriod, WorkOrder, UtilityAccount and ZoningDesignation.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Cadastral GIS polygons, title/registry documents, property listings, valuation models, leases, rent ledgers, building plans, inspection reports and geospatial market datasets.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

A property, parcel, building and unit are different entities. Asking price, transaction price, assessed value, appraised value and insured value are distinct. Ownership share, possession, tenancy and beneficial interest are not interchangeable.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- parcel IDs, survey numbers, addresses and listing IDs do not align
- one building has multiple units, addresses, entrances and ownership interests
- area values use carpet, built-up, gross, rentable or land area definitions
- title status, encumbrances, lease dates and ownership shares are versioned
- currency, price basis and transaction dates are inconsistent
- geocoding points are approximate or assigned to parcel centroid
- valuation comparables differ in condition, tenure, floor, date and property type
- duplicate listings may represent same asset but different broker mandates or campaigns

## 8. Sector-specific cleaning and validation requirements

- preserve legal parcel/title identifier, jurisdiction and source document
- retain geometry, CRS, survey date, positional accuracy and parcel version
- record area definition and unit with each measurement
- version ownership, lease, valuation, zoning and tax status with effective dates
- model currency, consideration, fees, concessions and transaction type separately
- link listings to property carefully while preserving listing-level source records
- validate address and coordinates against authoritative jurisdictional sources
- require legal/title review for identity merges or ownership corrections

## 9. Unsafe or misleading cleaning decisions

- do not merge parcels because addresses match
- do not normalize area measures without knowing the area definition
- do not replace historical valuations with latest estimates
- do not infer ownership from an online listing

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- listing-to-sale conversion
- days on market
- rent collection and vacancy
- valuation error by property class
- title/parcel match rate
- maintenance cost per area/unit

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [Open Geospatial Consortium standards](https://www.ogc.org/standards/)
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
