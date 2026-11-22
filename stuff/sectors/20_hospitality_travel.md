# Hospitality and Travel

> Sector profile for data-cleaning research. This is a domain orientation guide, not a universal schema or a substitute for sector specialists, contractual definitions, or jurisdiction-specific legal review.

**Research status:** Initial sector map · **Scope:** Cross-region baseline · **Last reviewed:** 2026-11-22

## 1. What this sector does

Hospitality and travel businesses sell time- and capacity-constrained experiences: rooms, flights, trips, tours, events, food services and ancillary products. Bookings, inventory, guests, itineraries, tickets, check-ins, cancellations and fulfilment are distinct entities.

## 2. Main actors and systems

- guests and travelers
- hotels, airlines and tour operators
- online travel agencies and booking platforms
- front desk, crew and service teams
- payment, distribution and loyalty partners

Typical system landscape includes operational source systems, spreadsheets and partner feeds, master/reference data, event or sensor pipelines, analytical warehouses, and reporting products. A cleaning engine should identify the source system and the business process before it interprets a field.

## 3. Business lifecycle

search and availability → offer/rate presentation → reservation and payment → confirmation/ticketing → check-in or trip execution → service delivery → cancellation/change/refund → review and loyalty.

A sector workflow is a useful starting point for discovering where data is created, changed, copied, reconciled and retired. Individual organizations will have different process variants.

## 4. Core entities and relationships

Property, RoomType, Room, RatePlan, Availability, Reservation, Guest, Traveler, BookingItem, Ticket, Flight/Trip, Segment, Itinerary, CheckIn, Stay, ServiceEvent, Cancellation, Refund and LoyaltyAccount.

Do not assume these entities live in one flat table. Model entity identity, event identity, relationships, effective periods and source-system identifiers separately. Many sector datasets are naturally relational, hierarchical, event-based, temporal or geospatial.

## 5. Common data structures and examples

PMS/CRS tables, GDS/airline messages, booking APIs, rate/inventory feeds, guest profiles, point-of-sale files, itinerary documents, review text and location/time-series data.

Common structure families to expect:

- **Master/reference data:** relatively stable identities, product/service definitions, locations, categories, code lists and units.
- **Transactions:** business commitments and financial movements, usually with parent/child lines and lifecycle states.
- **Events:** what happened, when, where, to which entity, by whom or by what system, and with what status.
- **Time series and telemetry:** observations indexed by event time, sensor/device, measurement, unit and quality metadata.
- **Documents and unstructured data:** notes, attachments, forms, images, messages and contracts that may contain essential context.
- **Spatial/hierarchical data:** locations, networks, territories, bills of material, organizational trees and parent-child structures.

## 6. Business meaning that cleaning must preserve

A booking is not proof of stay. A reserved room type may not map to a specific room until assignment. Occupancy can be measured by room, bed, guest or capacity. A flight departure/arrival timestamp is local to its airport unless explicitly normalized.

A normalized value is not automatically a semantically correct value. The same field label can represent different business concepts between organizations or even between systems in one organization. Keep definitions, units, currency, statuses, time basis, granularity and denominator explicit.

## 7. Common sector data problems

- guest profiles duplicate across OTA, direct booking and property systems
- reservation, booking item, guest stay and payment are conflated
- timezones, local dates, overnight stays and daylight saving affect duration
- room type, physical room, occupancy and sellable inventory differ
- cancellation policy, no-show and late arrival states vary by rate plan
- currency, taxes, resort fees and exchange rates are not consistently separated
- itineraries have multi-segment connections and schedule changes
- availability snapshots can be stale and lead to overbooking

## 8. Sector-specific cleaning and validation requirements

- retain source channel, rate plan, policy, booking and modification history
- model reservation, guest, stay, room assignment and payment separately
- preserve local timezone and source-local timestamps alongside UTC
- distinguish booked, confirmed, ticketed, checked-in, no-show, cancelled and consumed states
- reconcile room/seat inventory with update time and channel allocation
- separate base rate, taxes, mandatory fees, optional services and refund amount
- link itinerary segments and preserve re-accommodation/change events
- protect identity, passport, payment and travel-history data

## 9. Unsafe or misleading cleaning decisions

- do not count cancelled or no-show reservations as completed stays
- do not deduplicate guests solely by name
- do not convert local travel time to UTC without timezone and daylight-saving context
- do not treat rate changes as booking changes unless the reservation was modified

A cleaning recommendation should be reversible, explainable and proportionate to its impact. For high-impact or regulated records, produce a proposed change and request domain-owner approval rather than silently mutating source data.

## 10. Business metrics that depend on trustworthy data

- occupancy and revenue per available room/seat
- booking conversion and cancellation
- no-show rate
- on-time performance
- guest satisfaction and repeat rate
- channel cost and net revenue

Metric definitions must include grain, population, numerator, denominator, exclusions, time window, currency/unit basis, and treatment of cancellations or late-arriving events.

## 11. Links to the repository's cleaning taxonomy

Relevant categories will commonly include missing values, duplicates, data types, format standardization, invalid values, inconsistent data, numerical/categorical/text cleaning, structural cleaning, relational cleaning, time-series cleaning, geospatial cleaning, data integration and domain-specific cleaning. The correct categories depend on the actual dataset; this sector profile does not prescribe a fixed sequence.

- [Knowledge library — 18 data-cleaning categories](../01_knowledge_library/02_data_cleaning_categories/README.md)
- [Technique library](../02_technique_library/README.md)
- [Approach library](../04_approaches/README.md)

## 12. Standards, datasets and starting references

- [ISO 8601 date/time standard](https://www.iso.org/standard/70907.html)
- [PCI DSS](https://www.pcisecuritystandards.org/standards/pci-dss/)
- [GTFS for public-transit connections](https://gtfs.org/documentation/overview/)

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
