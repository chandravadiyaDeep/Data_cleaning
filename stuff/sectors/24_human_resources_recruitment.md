# Human Resources and Recruitment

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

HR data manages the workforce lifecycle from workforce planning and recruitment through hiring, compensation, performance, learning, mobility, leave and separation. Records represent people, positions, applications and employment episodes, each with different privacy, access and legal contexts.

## 2. Main actors and systems

- candidates and employees
- recruiters and hiring managers
- HR operations and payroll
- learning and benefits teams
- legal, privacy and workforce analytics

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

workforce planning → requisition approval → job posting → application and screening → interview and selection → offer and onboarding → employment changes → payroll/benefits/performance → offboarding.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Person, Candidate, Application, JobRequisition, JobPosting, Position, Department, LegalEntity, EmploymentEpisode, Contract, CompensationComponent, PayrollRun, BenefitEnrollment, LeaveRequest, PerformanceReview, Skill, TrainingCourse and SeparationEvent.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

ATS applicant records, HRIS relational data, payroll exports, time/attendance records, job posting feeds, skills taxonomies, performance forms, learning events and documents.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

A position is an organizational slot; a person may move through multiple employment episodes. Salary, total compensation, payroll cost and employer cost differ. Application rejection, withdrawal, ineligibility and no-response are distinct outcomes.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- the same person appears in candidate, employee, contractor and alumni systems
- job title, position, job family and grade are conflated
- employment status and effective dates are not aligned across HRIS and payroll
- compensation includes base, variable, equity, allowances and local currency
- leave and attendance codes differ by jurisdiction and policy
- skills are free-text and taxonomy versions differ
- applications, interviews and offers have many-to-many relationships
- sensitive attributes are over-collected or joined to analytics without appropriate controls

## 8. Sector-specific cleaning and validation requirements

- separate person, candidate profile, application, job, position and employment episode
- preserve effective-dated department, manager, role and legal-entity history
- normalize compensation with currency, pay frequency, full-time-equivalent and component type
- version job family, grade, skills taxonomy and policy definitions
- retain recruitment stage and disposition reason with time and actor
- minimize sensitive data and enforce purpose-based access and retention
- validate payroll totals with approved earnings/deductions and pay period
- document fairness and bias risks when preparing data for automated hiring or performance models

## 9. Unsafe or misleading cleaning decisions

- do not merge candidate and employee records on name alone
- do not treat blank salary as zero
- do not infer protected characteristics from names or location
- do not remove employment history because current status is inactive

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- time to fill and stage conversion
- offer acceptance
- headcount and attrition with defined population
- payroll reconciliation
- internal mobility and training completion
- skills coverage and data access audit

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [Schema.org JobPosting](https://schema.org/JobPosting)
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
