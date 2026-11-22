# [Sector Name]

> A domain profile for a data-cleaning system. This is a research guide, not a universal schema or legal/compliance opinion.

**Research status:** [Hypothesis / Initial profile / Evidence reviewed / Validated]  
**Geographic scope:** [Country / region / cross-region]  
**Last reviewed:** YYYY-MM-DD  
**Domain reviewer:** [Role or team, if available]

## 1. Sector overview and business model
What the sector does, how value is created, its major subdomains and common operating models.

## 2. Actors, organizations and systems
Customers, operators, suppliers, regulators, intermediaries, platforms and systems that create or consume the data.

## 3. Business lifecycle and workflows
Describe the major process stages from initiation through completion, cancellation, correction or closure.

## 4. Core entities, relationships and row grain
List entities and identify parent/child, many-to-many, event and effective-dated relationships. State what one row represents in each important dataset.

## 5. Common data structures
Describe transactional tables, master data, event logs, time series, documents, spatial data, hierarchies, APIs and partner feeds. Include illustrative schemas without presenting them as universal.

## 6. Business meaning and domain vocabulary
Define important fields, measures, units, statuses, lifecycle states, time concepts, denominators and concepts that are often confused.

## 7. Common data-quality problems
List concrete failure modes and the source processes that create them.

## 8. Sector-specific cleaning and validation requirements
Describe conditional rules, reference data, relationships, provenance, validation evidence and safe automation boundaries.

## 9. Unsafe cleaning actions
Identify values that must not be auto-corrected, merged, imputed, removed or overwritten without domain review.

## 10. Business metrics and downstream decisions
Explain which KPIs and decisions depend on the data and provide grain/denominator definitions.

## 11. Links to the 18 cleaning categories
Link relevant knowledge categories and technique catalogues. Explain where sector context changes the choice of technique.

## 12. Standards, datasets and authoritative references
Prefer official standards bodies, regulators, research institutions and primary documentation. Record versions, publication dates, jurisdiction and applicability.

## 13. Questions to ask before cleaning
Include data owner, source, grain, keys, units, calendars, missingness meaning, downstream impact, approval and reversibility.

## 14. Research gaps and experiments
List unresolved assumptions, candidate public datasets, anonymization needs, test scenarios and experiments required before turning guidance into production rules.
