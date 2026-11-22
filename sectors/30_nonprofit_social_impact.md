# Nonprofit and Social Impact

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Nonprofits and social-impact organizations mobilize donations, grants, volunteers, partners and services to pursue mission outcomes. They must connect resources and activities to beneficiaries, outputs and longer-term outcomes without overstating impact or exposing vulnerable populations.

## 2. Main actors and systems

- beneficiaries and communities
- donors and funders
- program and field staff
- volunteers and partner organizations
- monitoring, evaluation and learning teams

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

needs assessment → program design and funding → beneficiary enrollment → service/activity delivery → monitoring and feedback → outcome evaluation → donor reporting and learning.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Organization, Donor, Donation, Grant, Fund, Program, Project, Site, Beneficiary, Household, Eligibility, Service, Activity, Volunteer, Partner, Output, Outcome, Indicator, Survey and Expenditure.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Donor CRM records, grant budgets, beneficiary registries, mobile field forms, attendance/service logs, survey data, financial ledgers, narrative reports and geospatial program coverage.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

A donation is a resource received; a grant commitment may differ from cash received. An output is a delivered activity or service; an outcome is a change for people or communities. Beneficiary counts must define unique person, household, service episode or contact.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- donor and organization names/IDs differ across payment and CRM systems
- beneficiary records may be duplicated across programs or change over time
- household and individual beneficiary units are conflated
- program outputs are reported as outcomes or long-term impact
- currency, restricted funds and grant periods are mixed
- field forms are offline, multilingual and partially synchronized
- indicator definitions vary by funder and reporting cycle
- sensitive beneficiary details create safeguarding and re-identification risk

## 8. Sector-specific cleaning and validation requirements

- define person/household/program participation grain and deduplication policy
- preserve consent, safeguarding constraints and purpose-limited identifiers
- version indicators, survey instruments, eligibility rules and reporting periods
- separate committed, received, restricted, spent and remaining funds
- reconcile program expenditures to project, grant and currency
- capture disaggregation only when safe, necessary and statistically defensible
- record offline sync conflicts, collection method and enumerator metadata
- include uncertainty, missing coverage and attribution limitations in impact reports

## 9. Unsafe or misleading cleaning decisions

- do not count repeat service contacts as unique beneficiaries
- do not infer impact solely from activity volume
- do not merge beneficiary identities automatically across sensitive programs
- do not publish precise locations or small-group breakdowns that expose people

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- unique beneficiaries with defined grain
- service reach and completion
- cost per output/outcome
- restricted-fund utilization
- program outcome change with comparison basis
- data safeguarding and consent compliance

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [IATI Standard for development cooperation data](https://iatistandard.org/en/)
- [W3C Data on the Web Best Practices](https://www.w3.org/TR/dwbp/)
- [GO FAIR principles](https://www.go-fair.org/fair-principles/)

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
