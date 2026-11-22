# Software, SaaS and Product Analytics

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Software companies build, operate, sell and support digital products. Their data spans tenants, users, accounts, subscriptions, feature entitlements, application events, logs, traces, incidents, support tickets, usage meters and billing. Product analytics must distinguish technical activity from business value.

## 2. Main actors and systems

- end users and customer administrators
- product and engineering teams
- site reliability and support teams
- sales, finance and customer success
- security, privacy and compliance

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

account signup/provisioning → tenant and user configuration → product usage → telemetry and support → subscription/entitlement changes → metering and billing → renewal, expansion or churn.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Organization/Tenant, User, Membership, Workspace, Product, Feature, Entitlement, Subscription, Plan, Invoice, UsageEvent, Session, Experiment, Deployment, Incident, Trace, Span, LogRecord, SupportTicket and FeatureFlag.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Event streams, application logs, distributed traces, metrics, relational product databases, billing exports, CRM/support records, feature flag histories and experiment assignments.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

A user event is not necessarily a unique human action. Active user, seat, tenant, session, API call and billable unit are different grains. A feature exposure is not proof of engagement or value. Subscription state and invoice/payment state are separate.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- tenant/user/account IDs differ between application, billing, analytics and CRM
- event schemas evolve and old clients keep sending prior versions
- duplicate events arise from retries, offline clients and SDK behavior
- timestamps, client clocks and server clocks differ
- anonymous-to-authenticated identity stitching is incomplete or consent-limited
- usage units change between product plans and metering versions
- feature flags and experiments create inconsistent exposure/assignment records
- logs and traces contain secrets or personal data that should not be analyzed as ordinary attributes

## 8. Sector-specific cleaning and validation requirements

- version event schemas and preserve client/server schema version
- use stable tenant-scoped identifiers and document identity stitching rules
- deduplicate using event IDs and idempotency semantics rather than payload similarity
- retain event time, ingestion time, client version and timezone context
- model plan entitlements and metering rules as effective-dated records
- separate product events, infrastructure telemetry, support actions and billing usage
- redact credentials and minimize personal data in logs/traces
- align activation, retention, churn and usage metrics to explicit cohort definitions

## 9. Unsafe or misleading cleaning decisions

- do not count retries as user actions without event semantics
- do not merge users across tenants without authorization and business justification
- do not rewrite historical usage using current plan limits
- do not assume a missing event means no product use

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- activation and time to value
- retention and churn by cohort
- feature adoption and experiment outcomes
- usage-to-billing reconciliation
- service availability and latency
- support resolution and incident recurrence

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [OpenTelemetry semantic conventions](https://opentelemetry.io/docs/concepts/semantic-conventions/)
- [NIST AI Risk Management Framework (for AI-enabled product risk)](https://www.nist.gov/itl/ai-risk-management-framework)
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
