# Agriculture and Agritech

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Agriculture converts land, water, seed, inputs, labour, machinery, weather and biological processes into crops, livestock and marketable output. Data must be interpreted by farm, field, crop cycle, season, animal group and location; a value that is normal for one crop, region or growth stage may be abnormal for another.

## 2. Main actors and systems

- farmers and farm managers
- agronomists and extension workers
- input suppliers and equipment dealers
- commodity buyers, cooperatives and processors
- irrigation operators, insurers and lenders

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

farm and field registration → crop/animal planning → input application → field operations and observations → harvest or production → grading and storage → sale, insurance or payment.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Farm, Field/Plot, Season, Crop, Variety, SoilSample, InputApplication, Operation, WeatherObservation, IrrigationEvent, HarvestLot, Grade, LivestockGroup, AnimalEvent, Buyer, Sale and FarmPayment. Typical links are Field → Season → Crop, InputApplication → Field/Date/Input, and HarvestLot → Field/Season → Sale.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Farm-management tables; plot boundary polygons; soil laboratory results; weather and sensor time series; satellite or drone rasters; machinery telemetry; input invoices; harvest/lot records; paper forms and multilingual notes. Example grain: `farm_id, field_id, crop_code, season_id, observed_at, parameter, value, unit, source, geo_ref`.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

Yield is not just a number: it needs crop, area basis, moisture basis, grade, harvest window and field context. Input rate needs active ingredient or nutrient basis, applied quantity, treated area and unit. Soil measurements need depth, sampling method, lab method and sample date. A missing rainfall value is not zero rainfall.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- field and farm identifiers differ between government, supplier and farmer systems
- area units mix acres, hectares, local land measures and rounded estimates
- crop names, varieties and growth-stage labels are local, multilingual or misspelled
- GPS points and field boundaries are inaccurate, shifted or use unknown coordinate systems
- sensor observations have gaps, clock drift, calibration changes and impossible physical readings
- yield records mix harvested weight, marketable weight, moisture-adjusted weight and area denominators
- input applications are duplicated or lack active ingredient, concentration, unit or application rate
- weather, planting and harvest dates are attached to the wrong season or timezone

## 8. Sector-specific cleaning and validation requirements

- retain original farmer-entered labels alongside normalized crop and variety codes
- normalize units only after identifying the measured quantity and conversion basis
- validate agronomic ranges conditionally by crop, region, growth stage, season and instrument
- preserve geometry, CRS, precision and acquisition date for spatial data
- treat missing sensor readings as unknown; never silently interpolate long gaps
- deduplicate using farm/field/season/event identity and source evidence, not matching numbers alone
- record sample depth, lab method, moisture basis, calibration and provenance
- validate yield using a matching area, harvest period and weight basis

## 9. Unsafe or misleading cleaning decisions

- do not replace unknown rainfall or soil values with zero
- do not remove extreme yields without checking crop failure, exceptional conditions or measurement basis
- do not average measurements across different soil depths, crop stages or units
- do not snap field boundaries or GPS observations without preserving the original geometry

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- yield per area with explicit area and weight basis
- input cost and use per treated area
- water use and irrigation efficiency
- harvest loss and grade distribution
- field-operation timeliness
- forecast error by crop, geography and season

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [FAOSTAT](https://www.fao.org/faostat/en/#home)
- [FAO WaPOR (water productivity)](https://www.fao.org/in-action/remote-sensing-for-water-productivity/en/)
- [OGC standards for geospatial interoperability](https://www.ogc.org/standards/)

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
