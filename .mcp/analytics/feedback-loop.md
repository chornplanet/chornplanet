# Analytics Feedback Loop

Analytics should create planning evidence, not automatic production changes.

## On-Demand Loop

```text
ChatGPT / Codex needs growth insight
  -> .mcp analytics tool contract or workflow
  -> approved internal API, export, or report
  -> aggregate AI-readable result
  -> ChatGPT creates or updates .planning/feature-*.md
  -> Khachornchit approves priority
  -> Codex creates an implementation branch
  -> release, content, SEO, UX, or instrumentation improvement
  -> data can be queried again when needed
```

## Rules

- Query only when planning, validation, or prioritization needs evidence.
- Start with read-only aggregate data.
- Return gaps clearly when data is missing.
- Do not auto-create production changes from analytics output.
- Do not schedule always-on monitoring until the on-demand loop is useful and approved.

## AI-Readable Summary Shape

Useful summaries should include:

- date range
- source data available
- source data missing
- key observations
- opportunities
- risks
- recommended planning items
- confidence level
- follow-up instrumentation needs
