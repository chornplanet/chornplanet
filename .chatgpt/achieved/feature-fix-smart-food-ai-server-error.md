# Feature Plan: Fix Smart Food AI Server Error Fallback Rendering

Repository: `khachornchit/chornplanet`
Branch: `feature/fix-smart-food-ai-server-error`
Status: Ready for review
Owner: Khachornchit Chief Architect -> ChatGPT planning/fix proposal -> Codex review/validation

## Problem Statement

The public Smart Food AI route showed a generic browser/server error after the page had been left open in Android Chrome for more than one day and then revisited. The same route was later observed failing on desktop. The homepage continued to render normally. After loading the homepage first, `/en/smart-food-ai/` returned to normal on both desktop and mobile.

Observed URL:

```text
https://www.chornplanet.com/en/smart-food-ai/
```

Screenshot symptom:

```text
This Page Couldn't Load
A server error occurred. Reload to try again.
ERROR 258841675
```

## Initial Analysis

The issue pattern suggests the route should be treated as a public render reliability problem rather than a general site outage:

- The homepage was still available.
- The issue was route-specific to Smart Food AI.
- The route recovered after visiting the homepage, which may indicate transient content loading, cache, metadata generation, or warm connection behavior.
- The existing Smart Food AI public content loader already uses the localized fallback chain, but route-level metadata generation could still throw if MongoDB metadata is unavailable for both the requested locale and English.
- Static fallback Smart Food AI content uses empty image paths, which can break `next/image` when fallback content is rendered.

## Goals

- Prevent `/[locale]/smart-food-ai/` from showing a generic server error when Smart Food AI MongoDB content or metadata is temporarily unavailable.
- Preserve the existing content fallback chain: requested locale -> English -> static fallback.
- Add static metadata fallback behavior so metadata generation remains safe during transient MongoDB/content failures.
- Harden Smart Food AI image rendering so static fallback content with an empty `src` does not crash `next/image`.
- Keep the fix small, focused, and low-risk.

## Non-Goals

- Do not redesign the Smart Food AI page.
- Do not change Smart Food AI business copy or positioning.
- Do not migrate or reseed MongoDB content in this branch.
- Do not change global MongoDB connection settings as the first fix.
- Do not reopen the completed Smart Food AI feature scope.
- Do not change homepage, global layout, or navigation behavior unless Codex finds a directly related regression.

## Proposed Architecture

### 1. Metadata fallback hardening

File:

```text
src/metadata/main/MetadataSmartFoodAi.ts
```

Add a small static metadata fallback and return it after both requested-locale and English MongoDB metadata attempts fail.

Before this fix, `loadMetadataContent()` could throw after both metadata attempts failed. Because `generateMetadata()` runs during server rendering, this can surface as a generic server error even when page content itself has fallback protection.

### 2. Image rendering fallback hardening

File:

```text
src/components/SmartFoodAi/SmartFoodAiLandingPage.tsx
```

Add a local image wrapper that renders a placeholder `<div>` when `image.src` is empty. This prevents static fallback content from being passed into `next/image` with an invalid empty source.

## Project Structure Guideline

Keep the fix inside the existing Smart Food AI files:

```text
src/metadata/main/MetadataSmartFoodAi.ts
src/components/SmartFoodAi/SmartFoodAiLandingPage.tsx
```

Do not create a new shared image abstraction unless the same failure pattern is found across multiple public pages.

## Testing Plan

Recommended validation:

1. Run type check/build.
2. Open `/en/smart-food-ai/` with normal MongoDB content available.
3. Temporarily force Smart Food AI metadata loading failure and verify metadata uses static fallback instead of throwing.
4. Temporarily force Smart Food AI page content fallback and verify fallback page renders without `next/image` empty-src errors.
5. Confirm `/` homepage still renders normally.
6. Confirm no regression in Smart Food AI layout when real content with valid image paths is available.

## Risks

- The production digest may still have another contributing cause in Vercel logs, such as stale server component cache, proxy header behavior, or MongoDB connection warmup. This fix addresses the most likely route-level crash paths found in code review.
- Static fallback metadata is intentionally minimal. Complete business-positioned metadata should still come from MongoDB when available.

## Acceptance Criteria

- `/[locale]/smart-food-ai/` does not throw when Smart Food AI MongoDB metadata is unavailable for both requested locale and English.
- `/[locale]/smart-food-ai/` does not throw when static Smart Food AI fallback content contains empty image paths.
- Existing database-backed Smart Food AI content still renders normally.
- The branch changes only route-specific fallback reliability unless Codex identifies a directly related issue.
- PR notes document the observed issue, likely cause, changed files, and validation steps.

## Implementation Summary

Implemented in this branch:

- Added `STATIC_SMART_FOOD_AI_METADATA_FALLBACK` in `MetadataSmartFoodAi.ts`.
- Changed metadata loading to return static fallback instead of throwing after database-backed metadata attempts fail.
- Added `SmartFoodAiImage` wrapper in `SmartFoodAiLandingPage.tsx`.
- Replaced direct `Image` usage inside Smart Food AI page sections with safe wrapper usage.
- Added shared static fallback image hardening in `src/lib/static-content/publicContentFallbacks.ts` so fallback-backed public pages use `/fallback-content.svg` instead of empty image paths.
- Added `public/fallback-content.svg` as the in-repo placeholder asset for render-safe static fallback content.
- Added a `# Critical` reliability rule in `.codex/Agents.md` requiring every feature/fix to check route-level render reliability, shared fallback risks, and regression checks before deployment.

## Validation

- `npm run build` passed after clearing a stale generated `.next` cache.
- `npm run lint` passed with existing non-blocking `<img>` warnings in Smart City and Smart Mobility components.
