# Feature: Smart Mobility Locale Fallback Reliability

## Problem Statement

The public page `/en/smart-mobility/chiang-mai/hub-to-chiang-mai-airport/` showed a generic Server Components error page in production. The route depends on MongoDB-backed localized Smart Mobility content and supplemental AI Companions content. If the requested locale, English fallback, or nested required fields are missing or incomplete, the public page can crash.

## Goals

- Prevent public localized Smart Mobility pages from crashing when MongoDB content is missing or incomplete.
- Follow the `Agents.md` localized MongoDB render reliability rule: requested locale → EN → static fallback.
- Add a static fallback bridge for the Chiang Mai airport route.
- Keep supplemental AI content optional so it cannot crash the primary route content.
- Improve route content completeness validation before rendering components.

## Non-Goals

- Do not replace MongoDB as the source of truth.
- Do not remove existing localized MongoDB content services.
- Do not redesign the Smart Mobility page UI.
- Do not migrate or reseed all Smart Mobility content in this branch.

## Existing Architecture Review

Current route:

```text
Next.js Page / Route
   ↓
getSmartMobilityChiangMaiContentForPublicPage(locale, slug)
   ↓
loadLocalizedContentWithFallback(requested locale → EN)
   ↓
MongoDB service/repository
   ↓
HubToChiangMaiAirportMain
```

The route also loads AI Companions content for supplemental sections. If AI Companions content fails, the whole route previously failed because both content promises were loaded together without isolation.

## Proposed Architecture

Use the existing fallback architecture but complete it with a static fallback for the affected route:

```text
requested locale
   ↓ failure
EN fallback
   ↓ failure
static route fallback
   ↓
public page still renders
```

Supplemental AI sections are loaded through an optional wrapper:

```text
load optional AI companions content
   ↓ success → render sections
   ↓ failure → log and skip sections
```

## Project Structure Guideline

- Keep public render fallback logic inside `src/lib/smart-mobility-chiang-mai-content/smartMobilityChiangMaiContent.service.ts`.
- Keep route-specific optional supplemental handling inside the affected page file.
- Keep MongoDB strict loaders available for admin, migration, and audit workflows.

## Migration Plan

This branch adds static fallback only as a safety bridge. MongoDB remains the intended source of truth. A later Codex task may reseed or audit `smart_mobility_chiang_mai_content` records for all required locales and slugs.

## Testing Plan

Recommended validation:

- Load `/en/smart-mobility/chiang-mai/hub-to-chiang-mai-airport/` with complete MongoDB content.
- Temporarily simulate missing requested-locale content and confirm EN fallback renders.
- Temporarily simulate missing EN content and confirm static fallback renders.
- Temporarily simulate missing AI Companions content and confirm the Smart Mobility primary page still renders.
- Verify page metadata falls back to EN if an unsupported locale key is requested.

## Risks and Open Questions

- The static fallback copy is intentionally conservative and should be replaced by MongoDB content once records are complete.
- Other Smart Mobility route slugs may need their own static fallback if production logs show similar crashes.
- Existing images in static fallback should be verified against deployed assets.

## Acceptance Criteria

- The Chiang Mai airport route does not crash when localized MongoDB content is missing or incomplete.
- The route can render with static fallback content if requested locale and EN both fail.
- Supplemental AI sections do not block the primary Smart Mobility page render.
- Errors are logged with context for follow-up MongoDB repair.
