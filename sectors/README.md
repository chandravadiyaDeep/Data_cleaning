# Sector Knowledge Library

This folder contains sector-specific research profiles for building a domain-aware data-cleaning system. The profiles explain how each industry works, what data entities and structures are common, which data-quality problems frequently occur, what the fields mean in business terms, and what controls a cleaning workflow should respect.

**Current coverage:** 33 sector profiles  
**Research status:** Initial cross-industry baseline, to be expanded with primary-source research, country-specific rules, real anonymized datasets and experiments.

## How to use this library

1. Start with the sector closest to the dataset's real business process.
2. Identify the row grain, entities, relationships, event lifecycle and source system before running generic cleaning.
3. Read the business-meaning and unsafe-cleaning sections before changing values.
4. Map observed issues to the 18 data-cleaning categories and relevant technique catalogues.
5. Convert each proposed sector rule into a testable rule with evidence, scope, severity, confidence, owner and review policy.
6. Record uncertain cases as unresolved or requiring domain review. Never guess a business fact merely to remove a null or anomaly.

## Sector index

### Primary industries and natural resources

| Sector profile | Main data emphasis |
|---|---|
| [Agriculture and Agritech](01_agriculture_agritech.md) | Farms, fields, crops, seasons, soil, weather, inputs, harvests and geospatial observations |
| [Mining and Natural Resources](32_mining_natural_resources.md) | Drillholes, assays, geological models, material movement, equipment and stockpiles |
| [Environment, Climate and Sustainability](29_environment_climate.md) | Environmental stations, samples, emissions, sensors, models, uncertainty and spatial data |

### Health and life sciences

| Sector profile | Main data emphasis |
|---|---|
| [Healthcare, Hospitals and Care Delivery](02_healthcare_hospitals.md) | Patients, encounters, conditions, observations, orders, results, medications and claims |
| [Life Sciences and Clinical Research](03_life_sciences_clinical_research.md) | Protocols, participants, sites, visits, endpoints, samples, queries and analysis datasets |
| [Pharmaceuticals and Biotech](04_pharmaceuticals_biotech.md) | Materials, suppliers, batches, process steps, tests, deviations, packaging and release |

### Commerce, finance and customer services

| Sector profile | Main data emphasis |
|---|---|
| [E-commerce and Digital Marketplaces](05_ecommerce_marketplaces.md) | Product variants, sellers, listings, carts, orders, payment states, inventory and returns |
| [Retail and Consumer Packaged Goods](06_retail_consumer_goods.md) | Assortment, stores, GTIN/SKU, pack hierarchy, POS, pricing, promotions and inventory |
| [Banking and Financial Services](07_banking_financial_services.md) | Parties, accounts, journals, ledger entries, payments, lending, balances and risk |
| [Insurance](08_insurance.md) | Policies, coverage, endorsements, premiums, claims, reserves, settlement and reinsurance |
| [Fintech and Payment Processing](09_fintech_payments.md) | Payment intents, attempts, authorization, capture, settlement, fees, refunds and disputes |
| [Real Estate and Property](18_real_estate_property.md) | Parcels, buildings, units, title, ownership interests, leases, valuations and GIS |
| [Hospitality and Travel](20_hospitality_travel.md) | Reservations, guests, room/seat inventory, itineraries, tickets, stay and cancellations |
| [Food Service and Food Production](21_food_service_food_production.md) | Ingredients, lots, recipes, allergens, batches, temperature, shelf life and traceability |

### Industrial operations, infrastructure and mobility

| Sector profile | Main data emphasis |
|---|---|
| [Manufacturing and Industrial Operations](10_manufacturing_industrial.md) | BOMs, routings, work orders, machines, sensors, inspections, defects and lot genealogy |
| [Automotive and Mobility](11_automotive_mobility.md) | VIN, vehicle configuration, parts fitment, service, warranty, recall and telematics |
| [Logistics, Freight and Delivery](12_logistics_freight.md) | Shipments, packages, legs, scans, carrier events, customs, delivery and freight invoices |
| [Supply Chain and Procurement](13_supply_chain_procurement.md) | Suppliers, contracts, purchase orders, ASNs, receipts, inventory, lead time and invoices |
| [Energy and Utilities](14_energy_utilities.md) | Assets, meters, interval reads, network topology, tariffs, outages and settlements |
| [Telecommunications](15_telecommunications.md) | Subscribers, services, network elements, alarms, sessions, CDRs and billing |
| [Construction and Infrastructure](19_construction_infrastructure.md) | BIM/IFC, assets, drawings, revisions, work packages, quantities, changes and inspections |
| [Public Transportation](33_public_transportation.md) | Agencies, routes, stops, trips, stop times, calendars, fares and real-time feeds |

### People, public services and institutions

| Sector profile | Main data emphasis |
|---|---|
| [Education and EdTech](16_education_edtech.md) | Learners, programs, courses, terms, enrollment, assessment, grades and credentials |
| [Government and Public Administration](17_government_public_administration.md) | People, households, cases, eligibility, benefits, permits, payments and public indicators |
| [Human Resources and Recruitment](24_human_resources_recruitment.md) | Candidates, applications, jobs, positions, employment episodes, payroll and skills |
| [Legal Services and Compliance](27_legal_compliance.md) | Clients, matters, parties, contracts, documents, evidence, jurisdiction and deadlines |
| [Nonprofit and Social Impact](30_nonprofit_social_impact.md) | Donors, grants, programs, beneficiaries, activities, outputs, outcomes and expenditure |
| [Sports, Fitness and Performance](31_sports_fitness.md) | Athletes, teams, competitions, training, wearables, performance, injury and membership |

### Digital, media and knowledge industries

| Sector profile | Main data emphasis |
|---|---|
| [Media and Entertainment](22_media_entertainment.md) | Works, assets, versions, rights, territories, releases, audience events and royalties |
| [Marketing and Advertising](23_marketing_advertising.md) | Campaigns, creatives, impressions, clicks, sessions, consent, leads, conversions and spend |
| [Software, SaaS and Product Analytics](25_software_saas_product_analytics.md) | Tenants, users, subscriptions, events, telemetry, experiments, usage and billing |
| [Research and Academia](26_research_academia.md) | Projects, protocols, samples, variables, methods, datasets, analysis and provenance |
| [Cybersecurity and IT Operations](28_cybersecurity_it_operations.md) | Assets, identities, logs, events, alerts, vulnerabilities, incidents and evidence |

## Cross-sector principles

- **Context before correction:** infer no business meaning from a column name alone.
- **Grain before deduplication:** determine what one row represents before defining a duplicate.
- **Status before null handling:** a blank can mean unknown, not applicable, pending, not collected, suppressed or not yet received.
- **Time before aggregation:** preserve event time, processing time, timezone, calendar and effective periods.
- **Units before numeric validation:** know the quantity, unit, conversion basis, precision and measurement method.
- **Relationships before flattening:** preserve parent/child, many-to-many, hierarchy and event links.
- **Provenance before transformation:** retain source value, source identifier, rule version, execution time and approval.
- **Risk before automation:** safety-critical, financial, legal, regulated and rights-affecting changes need stricter controls.
- **Evidence before generalization:** a rule valid for one country, organization, instrument or workflow is not automatically universal.

## How sector knowledge connects to the rest of the repository

- [Knowledge library and cleaning categories](../01_knowledge_library/README.md)
- [Technique library](../02_technique_library/README.md)
- [Experiment library](../03_experiment_library/README.md)
- [End-to-end approaches](../04_approaches/README.md)

Sector profiles describe the domain and its business semantics. Technique documents explain individual methods. Experiments test methods on known datasets. Approach documents combine suitable techniques into controlled workflows. Keep those responsibilities separate.
