# 16. Data Integration Cleaning

## Scope

Combining multiple datasets with mismatched schemas, semantics, units, keys, timing, granularity, and conflicting source values.

## Research questions

1. What is the intended use and semantic meaning of the data?
2. How can genuine errors be distinguished from valid but unusual values?
3. What source, schema, domain rule, or reference establishes correctness?
4. What is the least destructive response?
5. How will changes be validated and audited?

## Principles

- Detection is not correction.
- Preserve original values and provenance.
- Record uncertainty, assumptions, and limitations.
- Escalate high-impact or ambiguous decisions for review.

## Related research

- [Technique catalogue](../../../02_technique_library/data_integration_cleaning/README.md)
- [Approach](../../../04_approaches/data_integration_cleaning/README.md)
