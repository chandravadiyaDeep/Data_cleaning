# 14. Geospatial Cleaning — Technique Catalogue

This is an initial research inventory, not a claim that every method is suitable for every dataset. Some entries are detection, correction, validation, or downstream preprocessing methods.

## 10+ techniques to investigate

1. **Latitude/longitude range validation** — Research assumptions, suitable data, parameters, failure modes, and validation.
2. **Coordinate reference system identification** — Research assumptions, suitable data, parameters, failure modes, and validation.
3. **CRS transformation** — Research assumptions, suitable data, parameters, failure modes, and validation.
4. **Axis-order validation** — Research assumptions, suitable data, parameters, failure modes, and validation.
5. **Geometry validity checks** — Research assumptions, suitable data, parameters, failure modes, and validation.
6. **Geometry repair** — Research assumptions, suitable data, parameters, failure modes, and validation.
7. **Address parsing and standardization** — Research assumptions, suitable data, parameters, failure modes, and validation.
8. **Geocoding with authoritative sources** — Research assumptions, suitable data, parameters, failure modes, and validation.
9. **Reverse geocoding** — Research assumptions, suitable data, parameters, failure modes, and validation.
10. **Spatial duplicate detection** — Research assumptions, suitable data, parameters, failure modes, and validation.
11. **Spatial outlier detection** — Research assumptions, suitable data, parameters, failure modes, and validation.
12. **Snapping to roads or boundaries (with evidence)** — Research assumptions, suitable data, parameters, failure modes, and validation.
13. **Topology validation** — Research assumptions, suitable data, parameters, failure modes, and validation.
14. **Administrative-boundary consistency** — Research assumptions, suitable data, parameters, failure modes, and validation.
15. **Distance and plausibility checks** — Research assumptions, suitable data, parameters, failure modes, and validation.

## Required research depth

For each technique, create a dedicated note using [the technique template](../_templates/technique_note.md). Document definition, algorithm, assumptions, preconditions, suitability, parameter choices, computational cost, strengths, limitations, Python/library references, validation, and citations.

## Selection principles

- Select based on semantics, intended use, evidence, and risk.
- Separate detection from modification.
- Prefer reversible, traceable operations.
- Compare with a simple baseline.
- Preserve raw data and record transformations.
