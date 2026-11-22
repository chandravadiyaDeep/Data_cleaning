# Environment, Climate and Sustainability

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Environmental and climate programs measure natural systems, emissions, resource use, ecosystem conditions, hazards and intervention outcomes. Data combines sensors, laboratories, satellites, surveys, models, facility inventories and administrative reports; methods and uncertainty are central to interpretation.

## 2. Main actors and systems

- environmental agencies and regulators
- utilities, industry and facility operators
- scientists and monitoring organizations
- communities and NGOs
- climate and sustainability reporting teams

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

monitoring design → sampling/measurement → laboratory or sensor processing → quality assurance → spatial/temporal aggregation → modeling and impact assessment → reporting and intervention.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Site, Station, Sensor, Sample, Specimen, Parameter, Observation, Unit, Method, Calibration, EmissionSource, ActivityData, EmissionFactor, Inventory, ModelRun, Scenario, Habitat, Species, Event and Intervention.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Environmental sensor time series, lab samples, station datasets, satellite rasters, GIS layers, emissions inventories, weather/hydrology observations, survey records and model outputs.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

Below detection limit is not zero. A modeled estimate is not a direct measurement. Emissions depend on activity data, factor, scope, boundary, gas and global-warming-potential version. Concentration, load, flux and total mass are different physical quantities.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- station/site metadata and sensor locations are inaccurate or changed
- units, dry/wet basis, reference temperature and pressure differ
- measurements mix instantaneous, interval average, daily summary and modeled estimates
- detection limits, censored values and below-quantification results are mishandled
- calibration, laboratory method and sample chain are incomplete
- emission factors and conversion factors are outdated or scope-inappropriate
- raster grids, coordinate systems and spatial resolutions are mismatched
- uncertainty, confidence intervals and scenario assumptions are dropped

## 8. Sector-specific cleaning and validation requirements

- retain method, instrument, calibration, detection/quantification limit and uncertainty
- normalize units with reference conditions and measurement basis
- store observed, estimated, imputed and modeled data with explicit quality flags
- version emission factors, model parameters, boundaries and scenario assumptions
- preserve coordinate reference system, raster resolution, spatial extent and acquisition date
- validate temporal aggregation and sampling frequency
- retain sample custody and laboratory QA/QC records
- report uncertainty and coverage alongside aggregated indicators

## 9. Unsafe or misleading cleaning decisions

- do not replace below-detection results with zero without an approved statistical method
- do not mix observed and modeled values without labeling
- do not average measurements with incompatible units or spatial support
- do not remove extreme environmental events as outliers before checking hazard context

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- monitoring completeness and uptime
- measurement uncertainty
- emissions intensity with defined scope
- pollutant exceedance rate
- model bias and validation error
- spatial and temporal coverage

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [OGC geospatial standards](https://www.ogc.org/standards/)
- [OGC SensorThings API](https://www.ogc.org/standards/sensorthings/)
- [ISO 14000 environmental management overview](https://www.iso.org/iso-14001-environmental-management.html)

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
