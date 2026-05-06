# Analytics API Contracts

These are future runtime contracts. They are not implemented in this roadmap feature.

## Future Internal Routes

```text
GET /api/analytics/search-console
GET /api/analytics/google-analytics
GET /api/analytics/growth-summary
```

These routes should require appropriate authorization or be limited to safe internal use.

## GET /api/analytics/search-console

Purpose:

Read aggregate Google Search Console performance data.

Inputs:

- date range
- page path optional
- query filter optional
- country optional
- device optional

Output:

- clicks
- impressions
- CTR
- average position
- top queries
- top pages
- data gaps

## GET /api/analytics/google-analytics

Purpose:

Read aggregate Google Analytics performance data.

Inputs:

- date range
- route optional
- content category optional
- campaign optional

Output:

- users
- sessions
- page views
- engagement
- traffic sources
- events where already instrumented
- data gaps

## GET /api/analytics/growth-summary

Purpose:

Combine approved analytics sources into an AI-readable improvement summary.

Inputs:

- date range
- focus area: SEO, content, outfit, commerce, Smart Food, luxury, technical UX

Output:

- opportunities
- risks
- recommended planning items
- data gaps
- source coverage

## Future Server Shape

The future implementation should follow existing ChornPlanet server patterns:

```text
server/core/domain/analytics-query.entity.ts
server/core/domain/analytics-growth-summary.entity.ts
server/core/ports/search-console.interface.ts
server/core/ports/google-analytics.interface.ts
server/core/services/analytics-growth.service.ts
server/adapters/outbound/google/search-console.repository.ts
server/adapters/outbound/google/google-analytics.repository.ts
```

## Credential Rules

- Do not commit raw Google credentials.
- Use environment variables or approved secret stores.
- Require explicit approval before connecting production Google properties.
- Prefer aggregate metrics.
- Do not expose personal user data.
