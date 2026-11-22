# Insurance

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Insurance transfers defined risks through policies, premiums, underwriting, claims, reserves and reinsurance. Records are contract- and coverage-specific; a policy can contain endorsements, insured objects, multiple risks, beneficiaries and changing terms over its coverage period.

## 2. Main actors and systems

- policyholders and beneficiaries
- agents, brokers and underwriters
- claims handlers and assessors
- actuaries and reserving teams
- reinsurers, service providers and regulators

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

quote → risk submission → underwriting → bind and issue policy → endorsement/renewal → premium collection → claim notification → assessment and reserve → settlement, recovery or closure.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Party, InsuredObject, Risk, Quote, Policy, Coverage, Endorsement, PremiumInstallment, Payment, Claim, ClaimExposure, LossEvent, Reserve, Settlement, Recovery, ReinsuranceTreaty and Broker. Claim coverage must be evaluated against policy terms effective at loss time.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Policy administration tables, broker submissions, actuarial triangles, claims notes, repair estimates, medical/legal attachments, payment transactions, catastrophe data and regulatory returns.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

Premium written, earned premium and cash premium received are different. Incurred loss can include paid plus case reserves and may be adjusted by reinsurance. A claim is not proof that the loss is covered.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- policy and endorsement versions are not aligned with claim loss dates
- insured, policyholder, claimant, beneficiary and payer are conflated
- coverage limits, deductibles, sublimits and currencies are inconsistently represented
- claim statuses, reopened claims and partial settlements are flattened
- dates for incident, notification, policy inception, expiry and processing are confused
- address/geospatial risk data use different geocoding precision and hazard layers
- actuarial triangles and development periods are misaligned
- reinsurance participation and recoveries are not linked to gross claims consistently

## 8. Sector-specific cleaning and validation requirements

- version policy wording, coverage, endorsements and rating variables
- evaluate contract validity using incident date and applicable coverage period
- preserve gross, ceded and net values separately
- track claims state transitions and reopenings as events
- retain currency, valuation date, reserve type and actuarial development period
- validate party roles and insured-object relationships
- keep source estimates and adjuster conclusions distinct from approved settlements
- document the accounting basis and jurisdiction-specific reporting framework

## 9. Unsafe or misleading cleaning decisions

- do not merge claim records based only on claimant and incident date
- do not replace historical policy terms with current terms
- do not convert missing reserve to zero without checking process state
- do not remove reopened claims as duplicates

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- claim frequency and severity
- loss ratio with defined premium basis
- claim cycle time and reopen rate
- reserve development and adequacy
- coverage decision overturn rate
- gross-to-net reconciliation

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [IFRS 17 Insurance Contracts](https://www.ifrs.org/issued-standards/list-of-standards/ifrs-17-insurance-contracts/)
- [ISO 8601 date and time standard](https://www.iso.org/standard/70907.html)

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
