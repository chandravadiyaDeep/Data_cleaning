# Education and EdTech

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Education institutions manage learners, guardians, staff, programs, courses, sections, terms, attendance, assessments, learning activities, outcomes and credentials. The same learner participates in changing institutional, course and program relationships over time.

## 2. Main actors and systems

- learners and guardians
- teachers, faculty and assessors
- schools, colleges and universities
- learning platforms and content providers
- accreditors, employers and education authorities

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

admission and identity registration → program/course enrollment → teaching and learning activities → attendance and assessment → grading and progression → credential issuance → alumni and outcomes tracking.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Person, Learner, Guardian, Institution, Program, Course, Section, AcademicTerm, Enrollment, Instructor, AttendanceEvent, Assessment, Question, Attempt, Grade, Competency, Credential and LearningActivity.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

SIS relational exports, LMS event logs, gradebooks, exam and question-bank data, roster files, attendance systems, digital credentials, content metadata and longitudinal learner records.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

Enrollment is time-bounded and is not equivalent to course completion. An assessment score depends on maximum points, rubric, attempt, weighting, accommodations and grading policy. Attendance can represent presence, participation or a specific session check-in; it is not universally binary.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- learner IDs differ across SIS, LMS, exam and credential providers
- course codes and section identifiers change by term or campus
- term calendars and grading scales vary across institutions
- late enrollment, withdrawal, transfer and incomplete states are misread
- attendance modes and attendance evidence differ
- assessment attempts, retakes, accommodations and grade revisions are flattened
- learning analytics events have inconsistent actor/object/action semantics
- guardian and learner roles or age-related privacy constraints are mishandled

## 8. Sector-specific cleaning and validation requirements

- preserve institution-specific learner IDs and controlled crosswalks
- version program, course, section, term and grading schemes
- model enrollment lifecycle and status effective dates
- keep raw score, maximum score, normalized score and final grade distinct
- preserve assessment attempt history and approved accommodations
- standardize event schemas while retaining source LMS activity details
- validate attendance against session schedule and mode
- apply learner privacy, guardian permissions and retention controls

## 9. Unsafe or misleading cleaning decisions

- do not convert missing grade to zero without policy evidence
- do not collapse repeated assessment attempts
- do not compare grades across unadjusted grading systems
- do not infer learning outcome from clicks or time-on-page alone

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- enrollment and retention
- course completion and progression
- assessment reliability and grade distribution
- attendance and participation coverage
- learning outcome attainment
- credential verification success

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [1EdTech standards](https://standards.1edtech.org/)
- [W3C Verifiable Credentials](https://www.w3.org/TR/vc-data-model-2.0/)

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
