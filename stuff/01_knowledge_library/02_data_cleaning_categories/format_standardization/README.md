# 04. Format Standardization

## Scope

Equivalent values represented differently: dates, phone numbers, addresses, currencies, capitalization, codes, and whitespace.

## What this category covers

This category is one part of a practical data-cleaning taxonomy. It can overlap with other categories: a single record may have a type problem, an invalid value, and a cross-field inconsistency at the same time.

## Key questions

1. What is the intended use of this dataset and field?
2. Is the observed value genuinely wrong, merely unusual, missing, or represented differently?
3. What source, schema, domain rule, or reference can establish the expected meaning?
4. What is the least destructive response?
5. How will the result be validated and audited?

## Research boundaries

- Detection is not correction.
- A statistical anomaly is not automatically an error.
- Preserve original values and provenance.
- Record uncertainty and assumptions.
- Escalate high-impact or ambiguous decisions for review.

## Related research

- [Technique catalogue](../../../02_technique_library/format_standardization/README.md)
- [Approach and decision strategy](../../../04_approaches/format_standardization/README.md)

## Open research questions

- Which subtypes are most common in real datasets?
- Which signals reliably distinguish errors from legitimate values?
- Which methods are safe for this category and intended use?
- What metrics reveal whether a correction improved data quality?
- Which decisions require domain expertise or human approval?
