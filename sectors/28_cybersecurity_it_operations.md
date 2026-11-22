# Cybersecurity and IT Operations

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Security and IT operations observe, detect, investigate and respond to activity across endpoints, identities, networks, cloud services, applications and infrastructure. Data is high-volume, event-oriented and time-sensitive; normalization must not remove indicators or break forensic lineage.

## 2. Main actors and systems

- security operations and incident responders
- IT and cloud platform teams
- identity and access administrators
- threat intelligence providers
- risk, audit and privacy teams

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

asset and identity inventory → telemetry collection → normalization and correlation → alert triage → investigation and containment → recovery → lessons learned and control reporting.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Asset, Identity, Account, Host, Process, NetworkConnection, DNSQuery, AuthenticationEvent, Vulnerability, Configuration, Alert, DetectionRule, Incident, EvidenceArtifact, ThreatIndicator, Control and RemediationAction.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Syslog, Windows/Linux event logs, EDR telemetry, DNS/proxy/firewall events, cloud audit trails, vulnerability scans, network flows, SIEM normalized events and threat-intelligence feeds.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

An alert is not an incident; a detection is not confirmation of compromise. A vulnerability finding depends on asset identity, software version, exposure and scan time. An IP address alone does not identify a person or device.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- hostnames, IPs, device IDs and cloud resource IDs change or are reused
- event timestamps differ due to clock drift, timezone and ingestion delays
- same alert is emitted by multiple tools or rule versions
- log schemas and severity levels differ across vendors
- identity aliases and service accounts are difficult to resolve
- IP addresses may be private, shared, dynamic or reassigned
- parser failures truncate payloads or discard important fields
- retention and redaction requirements vary by data source and investigation context

## 8. Sector-specific cleaning and validation requirements

- preserve raw event, source product/version, parser version and ingestion metadata
- normalize event fields into a common schema without discarding original payload
- track clock offset, event time and ingestion time separately
- deduplicate only with source-aware event IDs and aggregation windows
- maintain effective-dated asset and identity inventories
- retain severity, confidence, rule version and enrichment provenance
- protect secrets, credentials and personal data in logs
- preserve evidence integrity, chain of custody and retention policy

## 9. Unsafe or misleading cleaning decisions

- do not drop repeated authentication events as noise without investigation
- do not treat missing logs as evidence of no activity
- do not merge assets solely by hostname or IP
- do not rewrite forensic source evidence during normalization

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- telemetry source coverage and freshness
- parser failure and field-loss rate
- alert precision and incident conversion
- mean time to detect/respond
- asset identity resolution quality
- evidence completeness

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20)
- [OpenTelemetry semantic conventions](https://opentelemetry.io/docs/concepts/semantic-conventions/)
- [W3C PROV provenance model](https://www.w3.org/TR/prov-overview/)

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
