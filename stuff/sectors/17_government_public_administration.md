# Government and Public Administration

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Government agencies administer public services, benefits, taxation, licensing, regulation, infrastructure and population programs. Data often crosses departments and must support eligibility decisions, service delivery, public accountability and statistical reporting.

## 2. Main actors and systems

- citizens, residents and businesses
- frontline service agencies
- policy and program departments
- tax, licensing and enforcement bodies
- statistical offices, auditors and public data teams

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

application or event registration → identity/eligibility assessment → case decision → service or payment delivery → monitoring and appeal → audit and statutory reporting.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Person, Household, Organization, Address, Case, Application, Benefit, EligibilityAssessment, License, Permit, TaxAccount, Payment, Inspection, EnforcementAction, ServiceInteraction, Jurisdiction and StatisticalIndicator.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Case-management databases, registries, forms, geospatial boundaries, tax/benefit ledgers, administrative event logs, survey samples, document images and open-data publications.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

A person, household, case, application and benefit unit are different grains. Eligibility is a policy decision at a point in time. A program's administrative count is not necessarily a population statistic. A missing record can mean no service event, no eligibility, no report or no data sharing.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- identifiers and household/member relationships differ across programs
- administrative boundaries and codes change over time
- address formats, rural locality names and geocoding coverage vary
- eligibility rules and benefit parameters are effective-dated
- records contain duplicates from multiple channels or household changes
- case status, appeal, suspension and closure are not consistently modeled
- survey estimates and administrative counts are compared without methodology
- public release files can contain disclosure risk even after direct identifiers are removed

## 8. Sector-specific cleaning and validation requirements

- preserve source registry identifiers and legal authority/provenance
- use versioned geographic and administrative reference tables
- store eligibility rule version, decision date and evidence
- distinguish person identity from case/application and household membership
- retain correction and appeal history
- document denominator, reference period and coverage for published indicators
- apply disclosure control, minimization, consent/legal basis and access controls
- separate observed facts, inferred attributes and program decisions

## 9. Unsafe or misleading cleaning decisions

- do not automatically merge citizens based only on names and dates of birth
- do not treat absent administrative records as proof that an event did not occur
- do not compare counts across changing boundary versions without harmonization
- do not publish row-level microdata without disclosure review

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- case-processing time
- eligibility decision correction/appeal rate
- service access and coverage
- registry match quality
- benefit payment reconciliation
- open-data completeness and update latency

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [W3C Data on the Web Best Practices](https://www.w3.org/TR/dwbp/)
- [GOV.UK date/time data standard](https://www.gov.uk/government/publications/open-standards-for-government/date-times-and-time-stamps-standard)
- [ISO 8601](https://www.iso.org/standard/70907.html)

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
