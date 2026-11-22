# Food Service and Food Production

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Food businesses source ingredients, transform recipes, control allergens and safety, manage shelf life and temperature, produce meals or packaged foods, and distribute products. Traceability must connect ingredient lots to recipes, batches, finished products, outlets and customers.

## 2. Main actors and systems

- farmers and ingredient suppliers
- food processors and manufacturers
- restaurants and catering operators
- quality, food-safety and regulatory teams
- retailers, distributors and consumers

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

ingredient sourcing → receiving and inspection → storage and temperature control → recipe/production → packaging and labeling → distribution or service → complaint, recall or waste management.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Ingredient, Supplier, IngredientLot, Recipe, RecipeVersion, Allergen, NutrientProfile, ProductionBatch, ProcessStep, Equipment, TemperatureLog, Packaging, Label, FinishedProduct, ShelfLife, Shipment, Outlet, Order and Recall.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Recipes and bills of materials, ingredient lot records, temperature sensor time series, HACCP checklists, laboratory tests, nutrition panels, expiry/lot labels, POS orders and traceability event records.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

A recipe amount may be as-purchased or edible portion. A batch may include rework from prior lots. Shelf life depends on process, packaging, storage and jurisdiction. Allergen presence is a safety-critical relationship, not an ordinary text attribute.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- ingredient names, grades, species and food codes vary
- recipe units mix mass, volume, count, yield and serving sizes
- allergen declarations are missing, stale or not inherited through ingredients
- lot genealogy is incomplete across repackaging, blending and rework
- expiry, best-before, use-by and production dates are confused
- temperature records have gaps, device errors or missing location context
- nutrition values depend on recipe version, cooking loss and serving basis
- food waste records mix spoilage, trim, overproduction and plate waste

## 8. Sector-specific cleaning and validation requirements

- maintain ingredient/finished-product lot genealogy and recall path
- version recipes, process conditions, packaging and label content
- preserve allergen source and cross-contact declarations
- normalize ingredient quantities with yield, density and edible-portion basis
- validate temperature readings against device calibration, location and hold-time rules
- track expiry basis, timezone and product storage conditions
- separate laboratory result, specification limit and release decision
- use traceability and safety controls approved by qualified food-safety staff

## 9. Unsafe or misleading cleaning decisions

- never remove an allergen term as generic text cleaning
- do not treat missing temperature as safe temperature
- do not overwrite lot history after blending or repacking
- do not convert recipe volumes to mass without ingredient-specific density

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- traceability completeness and recall time
- temperature excursion rate
- waste by cause and stage
- yield and batch variance
- label/allergen defect rate
- supplier nonconformance

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [FAO/WHO Codex Alimentarius](https://www.fao.org/fao-who-codexalimentarius/en/)
- [GS1 traceability and supply-chain standards](https://www.gs1.org/standards)

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
