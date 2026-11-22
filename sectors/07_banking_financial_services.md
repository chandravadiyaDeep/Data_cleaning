# Banking and Financial Services

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Banks and financial institutions manage customer relationships, accounts, balances, payments, lending, deposits, liquidity, risk, financial crime controls and regulatory reporting. Data must preserve transaction state, double-entry relationships, effective time and the distinction between economic event time and system processing time.

## 2. Main actors and systems

- retail and business customers
- front-office and operations teams
- risk, treasury and finance
- payment networks and correspondent banks
- compliance, audit and regulators

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

customer onboarding and KYC → account or facility opening → transaction initiation → authorization and clearing → posting and settlement → reconciliation → risk/compliance monitoring → reporting.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Party, Customer, Account, Product, Agreement, LedgerEntry, Journal, Transaction, PaymentInstruction, PaymentStatus, Counterparty, Branch, Currency, Loan, Collateral, Limit, Alert and RegulatoryReport. Journal entries must balance within the applicable ledger, currency and posting rules.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

Core banking relational records, double-entry ledgers, ISO 20022 messages, card/payment files, batch statements, risk snapshots, KYC documents, market data and audit logs.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

Available balance, ledger balance and credit limit are different. Posting date and value date can differ. A payment message is not necessarily a settled transfer. A reversal is a linked correcting event, not a duplicate to remove.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- customer identity duplicates across channels, products and legal entities
- account number and customer identifier are confused
- debit/credit signs and transaction direction differ by source
- pending, authorized, posted, reversed, settled and returned statuses are mixed
- currency, value date, booking date, settlement date and timezone are confused
- fees, tax, interest and principal are not consistently separated
- ledger extracts contain balancing, suspense and adjustment accounts
- late-arriving reversals and backdated corrections distort snapshots

## 8. Sector-specific cleaning and validation requirements

- preserve immutable transaction identifiers, event sequence and state transitions
- validate double-entry balance at the correct ledger and currency level
- retain sign conventions and source mapping for every account class
- normalize currencies with explicit rate source, timestamp and conversion purpose
- reconcile opening balance + movements = closing balance
- separate customer, account, party, legal entity and beneficial owner identities
- maintain complete provenance and role-based access for financial records
- apply local regulatory and retention rules only after legal/ compliance review

## 9. Unsafe or misleading cleaning decisions

- never delete unmatched ledger entries to force reconciliation
- never collapse reversal and original transaction into one row
- never coerce negative balances to zero as a cleaning step
- never infer customer identity from name similarity alone

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- ledger reconciliation break rate
- payment success and return rate
- unmatched transaction aging
- KYC field completeness
- risk-data lineage and freshness
- reporting restatement and correction rate

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [ISO 20022 financial messaging](https://www.iso20022.org/)
- [Basel Committee — BCBS 239](https://www.bis.org/publ/bcbs239.htm)
- [PCI DSS (where payment-card data is in scope)](https://www.pcisecuritystandards.org/standards/pci-dss/)

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
