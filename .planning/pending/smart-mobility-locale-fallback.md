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

## Implementation Notes: Cross-Service Follow-Up

After reviewing sibling MongoDB-backed public services, the same reliability class existed outside the original airport route:

- Most `*ForPublicPage` services used requested locale -> EN but had no static fallback when both records were missing or incomplete.
- Other Smart Mobility Chiang Mai pages loaded supplemental AI Companions content as a required `Promise.all` dependency.
- Several Smart Mobility Chiang Mai metadata loaders returned `MetaX[lang]` directly without an English fallback.
- Smart City Chiang Mai detail pages also treated supplemental AI Companions content as required.

This implementation now adds a shared static fallback bridge in:

```text
src/lib/static-content/publicContentFallbacks.ts
```

Public render services now follow requested locale -> EN -> static fallback for:

- About content
- AI Companions content
- Gallery content
- Homepage content
- Layout content
- Policy content
- Smart City Chiang Mai content
- Smart City landing content
- Smart Food AI content
- Smart Mobility Chiang Mai content
- Technical Expertise content

Contact content already had a local static fallback and was left in place.

Supplemental AI Companions sections are now loaded through:

```text
src/lib/ai-companions-content/optionalAiCompanionsContent.ts
```

This keeps primary Smart Mobility and Smart City Chiang Mai route content renderable even if supplemental AI content fails. The optional wrapper logs route context and skips the supplemental sections on failure.

Smart Mobility Chiang Mai metadata pages now use English metadata fallback when an unsupported locale key is requested.

Dev and production routing follow-up:

- A shipped `main` build still produced production server errors and local 404s for `/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway/` in multiple locales.
- The dynamic `[slug]` route was removed for Smart Mobility Chiang Mai because the nested dynamic route was still fragile across dev and deployed builds.
- The six known Smart Mobility Chiang Mai slugs now have explicit concrete route folders again, each delegating to the shared `smartMobilityChiangMaiPage.tsx` helper for metadata, MongoDB public loading, static fallback, and optional AI rendering.
- The concrete route files are intentionally kept as route-entry shims only; shared behavior belongs in `src/app/[locale]/(legacy)/smart-mobility/chiang-mai/smartMobilityChiangMaiPage.tsx`.
- Do not force static fallback content in `next dev`. Local development should still exercise MongoDB content first so missing or incomplete database records are visible while editing.
- The parent `/smart-mobility/chiang-mai/` page now redirects to `/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway/` instead of re-exporting the child page.
- After restarting the dev server, `/en/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway/`, `/th/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway/`, `/fr/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway/`, and `/ja/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway/` each returned HTTP 200 locally on sequential fresh dev checks.
- The shared `loadLocalizedContentWithFallback` helper now bounds each requested-locale and English fallback load attempt with an 8s timeout before moving to the next fallback step. This prevents public pages from hanging for a full MongoDB retry cycle before static fallback content can render.
- The optional AI Companions wrapper now uses the static AI companion payload for supplemental Smart Mobility and Smart City sections. This avoids starting extra MongoDB reads from optional public-route decoration and keeps primary route pages renderable even if shared AI content storage stalls.
- `HomeFeatureLeft` now treats a blank fallback `featureImage.path` as missing and uses the standard morning-sky feature image. This prevents static supplemental AI fallback content from rendering an empty Next/Image source on Smart Mobility pages.
- Smart Mobility Chiang Mai MongoDB records may be partially populated by slug. The public loader now merges missing required nested fields, such as route `transportationModel` or `connectivityMatrix`, from the static per-slug fallback instead of throwing and replacing the whole page with static content. Full static fallback usage still logs; partial field repair is intentionally silent.

The static fallback payloads are intentionally conservative availability bridges. MongoDB remains the source of truth and should still be repaired, reseeded, or audited for complete localized content.

Validation performed:

```text
npm run lint
npm run build
```

`npm run lint` passed with existing `<img>` optimization warnings. `npm run build` passed.
