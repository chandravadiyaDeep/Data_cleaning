# Legal Services and Compliance

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Legal organizations manage matters, clients, parties, contracts, evidence, filings, obligations, advice, deadlines and outcomes. Data is document-heavy, relationship-rich and highly sensitive; chronology, custody, privilege, jurisdiction and version history can be as important as the text itself.

## 2. Main actors and systems

- clients and counterparties
- lawyers, paralegals and legal operations
- courts, tribunals and regulators
- compliance and records management
- experts, witnesses and e-discovery teams

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

client/matter intake → conflict and identity checks → engagement and scope → document/evidence collection → review and analysis → drafting and filing → hearing/negotiation → outcome, retention and closure.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Client, Party, Matter, MatterRole, Jurisdiction, Court/Authority, Contract, Clause, Document, DocumentVersion, EvidenceItem, Custodian, Communication, Obligation, Deadline, Filing, Hearing, Decision, Invoice and RetentionHold.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Document management systems, contracts, PDFs, email archives, chat exports, case-management tables, court docket data, legal entity registries, billing records and evidence metadata.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

A matter is not identical to a client. A draft, executed contract, amendment and scanned copy are distinct artifacts. A legal deadline is rule- and jurisdiction-dependent. A statement in a document is not automatically an established fact.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- same person or organization appears under aliases, former names and related entities
- matter, client, party and counterparty relationships are confused
- document versions and signatures are not reliably tracked
- dates and deadlines depend on jurisdiction, court rules and service method
- privilege, confidentiality and legal hold status are lost in metadata exports
- OCR/text extraction alters meaning, page order or citations
- legal citations and clause references are inconsistently formatted
- evidence timestamps, custodians and chain-of-custody details are incomplete

## 8. Sector-specific cleaning and validation requirements

- preserve original document bytes, hash, source, custodian and collection metadata
- maintain immutable version, signature and amendment relationships
- track party roles, alias evidence and identity confidence
- record jurisdiction, governing law, effective date and rule version
- retain legal hold, privilege and confidentiality labels with access controls
- preserve page/paragraph/citation coordinates when extracting text
- require lawyer review before changing substantive language or deadline values
- maintain complete audit trail for evidence processing and matter access

## 9. Unsafe or misleading cleaning decisions

- do not deduplicate documents based on text similarity alone
- do not overwrite a signed or filed version with a later draft
- do not auto-normalize legal names without alias traceability
- do not infer privilege or legal status from keywords alone

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- matter data completeness
- deadline and filing exception rate
- document lineage and version accuracy
- conflict-check coverage
- evidence chain-of-custody completeness
- legal hold compliance

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [W3C PROV provenance model](https://www.w3.org/TR/prov-overview/)
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
