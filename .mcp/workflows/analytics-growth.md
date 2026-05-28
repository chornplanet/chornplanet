# Analytics Growth Workflow

Use this workflow when ChornPlanet work is intended to improve traffic, content performance, commerce clicks, retention, or investor-ready growth visibility.

## Goal

Use analytics to help ChornPlanet grow from:

```text
10K daily traffic -> 100K -> 500K -> 1M
```

## Process

1. Define the growth question.
2. Identify available analytics data.
3. Identify missing instrumentation.
4. Review aggregate traffic and content performance.
5. Connect performance to content categories, zones, products, or campaigns.
6. Create an AI-readable summary with opportunities, risks, data gaps, and confidence.
7. Recommend one practical next planning or implementation action.

## On-demand feedback loop

```text
ChatGPT / Codex needs growth insight
  -> .mcp analytics tool contract or workflow
  -> approved internal API, export, or report
  -> aggregate AI-readable summary
  -> ChatGPT creates or updates .planning/in-progress/*.md
  -> Khachornchit approves priority
  -> Codex creates an implementation branch
```

## AI assistant questions

Future analytics workflows should answer:

- Which content categories drive traffic?
- Which outfit posts perform best?
- Which zones perform best?
- Which posts generate product clicks?
- Which traffic source is growing?
- Which page needs SEO improvement?
- Which product should be promoted again?
- Which content schedule should change?

## Output artifacts

- daily growth summary
- weekly growth report
- campaign analysis
- SEO improvement task
- content recommendation
- product promotion recommendation
- instrumentation gap note

Initial report shapes live under:

```text
.mcp/analytics/reports/
```

## Rules

- Prefer aggregate data.
- Do not expose personal user data.
- Do not invent metrics.
- If data is unavailable, state the gap and recommend instrumentation.
- Do not connect Google Search Console or Google Analytics APIs without explicit approval.
- Do not make production changes automatically from analytics output.
- Start with on-demand planning support before always-on daily monitoring.
