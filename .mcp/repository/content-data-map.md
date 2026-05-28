# Content And Data Map

## Current Content Pattern

MongoDB-backed runtime content is mostly organized as client-facing loader modules under:

```text
src/lib/*-content/
```

These loaders connect to server services and Mongo repositories.

The current platform layer also has seed/fallback content under:

```text
src/lib/platform-content/
src/data/smart-mobility/
src/data/story/
```

Use `.planning/achieved/released.md` to find the source paths for released platform features before deciding whether a content area is MongoDB-backed, static fallback, or temporary seed data.

## Content Loader Areas

- `src/lib/about-content/`
- `src/lib/ai-companions-content/`
- `src/lib/contact-content/`
- `src/lib/gallery-content/`
- `src/lib/homepage-content/`
- `src/lib/layout-content/`
- `src/lib/policy-content/`
- `src/lib/smart-city-chiang-mai-content/`
- `src/lib/smart-city-landing-content/`
- `src/lib/smart-food-ai-content/`
- `src/lib/smart-mobility-chiang-mai-content/`
- `src/lib/technical-expertise-content/`

## Server Content Layers

For content domains, inspect matching files across:

- `server/core/domain/*-content.entity.ts`
- `server/core/ports/*-content.interface.ts`
- `server/core/services/*-content.service.ts`
- `server/adapters/outbound/mongo.repository/*-content.repository.ts`
- `src/app/api/*-content/route.ts`

## Existing API Content Routes

- `/api/about-content`
- `/api/ai-companions-content`
- `/api/contact-content`
- `/api/gallery-content`
- `/api/homepage-content`
- `/api/layout-content`
- `/api/policy-content`
- `/api/smart-city-chiang-mai-content`
- `/api/smart-city-landing-content`
- `/api/smart-mobility-chiang-mai-content`
- `/api/technical-expertise-content`

## Migration Direction

Target architecture:

```text
Next.js Page / Route
  -> Content Loader / Server Service
  -> MongoDB Atlas Repository
  -> Typed Content Schema
  -> Reusable Page Components
```

## Content Change Checklist

- Identify whether content already has a `src/lib/*-content` domain.
- Keep locale keys complete for all 10 locales.
- Prefer typed entities and services over hardcoded page arrays.
- If temporary hardcoded content is necessary, document the removal path in the active plan.
- Never include secrets, API keys, unpublished customer data, or private order data in content fixtures or `.mcp` docs.
