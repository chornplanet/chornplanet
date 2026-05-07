# Feature: Locale MongoDB Render Fallback

## Problem Statement

Production occasionally shows the generic Next.js Server Components error page (`This page could not load`) when users switch from English to Thai or other supported locales.

The current public page render path reads MongoDB-backed localized content during Server Component rendering. Several content loaders use strict assertions that throw when a locale document is missing or incomplete. In production, those throws can fail the full RSC render and surface only as a digest page.

This issue is especially visible on localized routes because the application supports 10 locales, but MongoDB Atlas content completeness may not be guaranteed for every locale and every nested content/slug record.

## Goals

- Prevent public localized pages from crashing when MongoDB content for a non-English locale is missing, incomplete, or temporarily unavailable.
- Preserve strict validation for admin tools, migration scripts, audit scripts, and tests.
- Add a reusable safe content loading pattern: requested locale -> English fallback -> safe static fallback when available.
- Add a locale content completeness audit path for MongoDB-backed public content collections.
- Improve operational notes so ChatGPT/Codex can diagnose this production symptom consistently.

## Non-Goals

- Do not migrate all content collections in this task.
- Do not change production database schemas without explicit approval.
- Do not remove hardcoded or seed content unless explicitly approved.
- Do not change public route structure or supported locale list unless required by the fix.
- Do not deploy production directly from this planning task.

## Existing Architecture Review

### Routing and Locale Context

- Localized pages live under `src/app/[locale]/(desktop)/...`.
- `src/proxy.ts` forwards `x-locale`, `x-cookie-consent`, and `x-pathname` through request headers for Server Components.
- Pages commonly read locale using `await headers()` and `headers().get('x-locale') || 'en'`.

### MongoDB Content Pattern

Current target pattern:

```text
Next.js Page / Route
   ↓
Content Loader / Server Service
   ↓
MongoDB Atlas Repository
   ↓
Typed Content Schema
   ↓
Reusable Page Components
```

Examples:

- `src/lib/homepage-content/homePageContent.service.ts`
- `server/core/domain/homepage-content.entity.ts`
- `server/adapters/outbound/mongo.repository/homepage-content.repository.ts`
- `server/infrastructure/db/infra.mongodb.ts`

The MongoDB infrastructure already includes:

- shared `globalThis.mongoClient`
- bounded MongoDB timeouts
- `withMongoReadRetry(...)`

This helps transient reads, but does not protect against missing or incomplete localized records.

### Current Failure Pattern

Public page content loaders may call strict assertion functions during render, such as homepage content checks. If requested locale content is missing or incomplete, the function throws. This causes the public page Server Component render to fail.

Likely failure classes:

1. Missing locale document.
2. Incomplete locale fields.
3. Missing nested slug/content for that locale.
4. MongoDB transient server selection/connection issue.
5. Component receives undefined nested content after partial data load.

## Proposed Architecture

### 1. Split Strict and Public-Safe Loaders

Create or refactor loaders into two modes:

```text
Strict loader
- Used by admin, scripts, validation, migration, and tests.
- Throws on missing/incomplete data.

Public-safe loader
- Used by public pages.
- Attempts requested locale first.
- Falls back to English.
- Falls back to safe static/default content when available.
- Logs structured errors without crashing the page whenever possible.
```

Suggested naming pattern:

```ts
getHomePageContentStrict(locale)
getHomePageContentForPublicPage(locale)
```

or:

```ts
getHomePageContent(locale, { mode: 'strict' | 'public' })
```

Prefer the least disruptive pattern that fits nearby code.

### 2. Reusable Fallback Helper

Add a small utility for public localized content reads, for example:

```ts
export async function loadLocalizedContentWithFallback<T>({
  locale,
  fallbackLocale = 'en',
  context,
  load,
  fallback,
}: {
  locale: string;
  fallbackLocale?: string;
  context: string;
  load: (locale: string) => Promise<T>;
  fallback?: () => T | Promise<T>;
}): Promise<T> {
  try {
    return await load(locale);
  } catch (localeError) {
    console.error(`[localized-content] ${context} failed for locale=${locale}`, localeError);
  }

  if (locale !== fallbackLocale) {
    try {
      return await load(fallbackLocale);
    } catch (fallbackError) {
      console.error(`[localized-content] ${context} fallback failed for locale=${fallbackLocale}`, fallbackError);
    }
  }

  if (fallback) {
    return await fallback();
  }

  throw new Error(`[localized-content] ${context} failed for locale=${locale} and fallback=${fallbackLocale}`);
}
```

Codex should adjust this design to match repository conventions and TypeScript strictness.

### 3. Homepage First, Then Repeatable Pattern

Start with homepage because it is the common language-switch target.

Target files to inspect first:

- `src/app/[locale]/(desktop)/page.tsx`
- `src/lib/homepage-content/homePageContent.service.ts`
- `server/core/domain/homepage-content.entity.ts`
- `server/adapters/outbound/mongo.repository/homepage-content.repository.ts`

After homepage, inspect similar public content loaders:

- `src/lib/about-content/*`
- `src/lib/contact-content/*`
- `src/lib/policy-content/*`
- `src/lib/ai-companions-content/*`
- `src/lib/smart-city-landing-content/*`
- `src/lib/smart-city-chiang-mai-content/*`
- `src/lib/smart-mobility-chiang-mai-content/*`
- `src/lib/technical-expertise-content/*`

Apply the same pattern only where public pages can currently crash from missing localized MongoDB content.

### 4. Locale Content Audit Script

Add an audit script to validate MongoDB content completeness across all supported locales.

Suggested command:

```json
"audit:locale-content": "node scripts/audit-locale-content.cjs"
```

Script responsibilities:

- Load environment variables through `dotenv`.
- Connect to MongoDB using the same env names.
- Check all supported locales:
  - `da`, `de`, `en`, `fi`, `fr`, `ja`, `ko`, `nl`, `th`, `zh`
- Verify required fields for homepage first.
- Optionally support additional collections with collection-specific required fields.
- Print a clear report of missing locale records and missing fields.
- Exit non-zero when required content is missing.

Keep the first implementation small and extensible.

### 5. Operational Documentation Update

Update both agent files with a short reliability note:

- `.codex/Agents.md`
- `.chatgpt/Agents.md`

Include:

- public localized pages should not crash when non-English MongoDB content is missing/incomplete
- English fallback rule
- check Vercel logs by digest/time
- check missing locale document, incomplete fields, nested slug/content, MongoDB transient errors, and proxy request headers
- do not fix this only by increasing MongoDB timeout

Also normalize workflow wording if touched:

- `.codex/Agents.md` currently uses `.chatgpt/achieved/`
- `.chatgpt/Agents.md` currently says `.chatgpt/archived/`

Prefer `.chatgpt/achieved/` because the repository already uses that folder.

## Project Structure Guideline

Possible additions:

```text
src/lib/localized-content/
  localizedContentFallback.ts

scripts/
  audit-locale-content.cjs
```

Possible updates:

```text
src/lib/homepage-content/homePageContent.service.ts
src/app/[locale]/(desktop)/page.tsx
.chatgpt/Agents.md
.codex/Agents.md
package.json
```

Codex should keep the implementation scoped and avoid broad formatting churn.

## Migration Plan

1. Inspect current production error logs by digest/time if available.
2. Confirm which route and locale fail most often.
3. Implement homepage public-safe fallback first.
4. Add locale content audit script for homepage required fields.
5. Run the audit against available environment configuration.
6. Extend the fallback pattern to other public MongoDB-backed page loaders where the same fatal assertion exists.
7. Update agent documentation.
8. Run validation checks.
9. Prepare a focused pull request.

## Testing Plan

Minimum checks:

```bash
npm run lint
npm run build
npm run audit:locale-content
```

Manual checks:

- `/en/`
- `/th/`
- `/ja/`
- One locale known to have incomplete content, if available.
- Switch language from English to Thai and from Thai to English.
- Confirm the page renders with fallback content instead of the generic error page.

If local MongoDB credentials are unavailable, Codex should still run lint/build and document that the audit requires environment access.

## Risks And Open Questions

- Some pages may expect fully localized content for SEO. English fallback avoids crashes but may temporarily show English sections on non-English pages.
- Some components may still crash if nested optional fields are absent. Codex should inspect component assumptions for the page being fixed.
- Safe static fallback content may not exist for every collection.
- The correct long-term source of truth for incomplete locale records needs Khachornchit's approval: auto-copy English, machine-translate, admin-entered content, or hide incomplete sections.
- MongoDB Atlas Free Tier may still cause occasional slow reads; fallback/retry improves resilience but does not replace monitoring.

## Acceptance Criteria

- Public homepage no longer crashes when a supported non-English locale homepage document is missing or incomplete; it falls back safely.
- English content remains strict enough that missing core content is visible during validation.
- A locale content audit script exists and reports missing locale records/fields clearly.
- Agent documentation includes the localized MongoDB production render reliability rule.
- Workflow wording for completed planning files is consistent if touched.
- `npm run lint` passes.
- `npm run build` passes before production-facing merge.
- Codex documents any skipped checks and why.

## Suggested Branch

```text
fix/locale-mongodb-render-fallback-planning
```
