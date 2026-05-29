# Feature Plan: Public Page TanStack Data Standardization

Repository: `khachornchit/chornplanet`
Branch: `main`
Status: Planning - ready for implementation
Owner: Khachornchit Chief Architect -> ChatGPT planning -> Codex implementation
Created: 2026-05-29

## Goal

Standardize Chorn Planet public page data loading across embedded seed data and MongoDB-backed content, starting with Home and Smart Food.

The target is not to load every public page at once. The target is to expose every public page through the same content-access pattern, cache model, image normalization, fallback behavior, and future TanStack Query client hydration path.

Initial rollout pages:

- Home
- Smart Food

Later rollout pages:

- Luxury
- Style
- Smart City
- Smart Mobility
- Story
- About

## Existing Situation

### Home

- Route: `src/app/[locale]/(legacy)/page.tsx`.
- Page gets locale from `headers()`.
- Page loads content synchronously using `getPlatformContent(lang)`.
- `getPlatformContent` imports embedded seed JSON from `src/data/home/en.seed.json` and `src/data/home/th.seed.json`.
- Home renders through `src/components/Platform/PlatformHomePage.tsx`.
- Home images are mostly stable public/static paths consumed by `next/image` through platform cards and the homepage hero.

### Smart Food

- Route: `src/app/[locale]/(roadmap)/smart-food/page.tsx`.
- Page gets locale from `headers()`.
- Page loads async MongoDB-backed content through `getSmartFoodAiContentForPublicPage(lang)`.
- Loader lives in `src/lib/smart-food-ai-content/smartFoodAiContent.service.ts`.
- Production uses `unstable_cache` and cache tags.
- Public render uses static fallback through `getSmartFoodAiStaticFallback`.
- Smart Food renders through `src/components/SmartFoodAi/SmartFoodAiLandingPage.tsx`.
- The current component contains a temporary hardcoded direct image workaround for the proof image while the original `SmartFoodAiImage` block is commented out.

## Problem Found

Home and Smart Food currently use different data-loading models:

- Home: embedded seed JSON -> sync helper -> server component render.
- Smart Food: MongoDB repository -> service -> fallback -> server component render.

This difference creates inconsistent behavior for:

- Data normalization.
- Fallback selection.
- Image path validation.
- Cache invalidation.
- Client-side reuse and prefetching.
- Future public-page caching with TanStack Query.

The Smart Food page has repeated image-loading issues around `SmartFoodAiImage`, and the issue reportedly still appears even when rendering the proof image directly with `next/image`.

The temporary direct image workaround is a symptom-level workaround, not a stable fix.

## Root-Cause Hypotheses To Validate

The implementation should verify the exact browser and network failure before changing runtime behavior. Possible causes:

1. MongoDB image paths may not match real files under `public/`.
2. Some MongoDB image paths may miss the leading slash.
3. Some MongoDB image paths may be stale after previous content updates.
4. Static fallback content may contain valid images while MongoDB content contains invalid image objects.
5. Production cache may preserve stale MongoDB image values.
6. `SmartFoodAiImage` currently checks only missing `src` and `/fallback-content.svg`.
7. Workflow images using `fill` require parent containers with stable dimensions and positioning.
8. If direct fixed `next/image` also fails, the issue is more likely data/path/cache related than `fill` alone.
9. If future MongoDB content uses external image URLs, `next.config` image remote rules must be updated.

## Target Architecture

Create one public content layer that supports both seed-backed and MongoDB-backed pages.

Flow:

1. Page server component gets locale.
2. Public page content service loads the page by page key and locale.
3. Page-specific source adapter loads from seed data or MongoDB.
4. Shared normalizers validate content and images.
5. Shared fallback behavior returns render-safe content.
6. Server component renders SEO-safe first load.
7. TanStack Query supports optional hydration, client cache reuse, prefetching, and interactive public sections.

TanStack Query should not replace server-rendered public pages. It should support client-side cache behavior after the first render.

## Proposed Files To Add

- `src/lib/public-content/publicPageContent.types.ts`
- `src/lib/public-content/publicPageContent.registry.ts`
- `src/lib/public-content/publicPageContent.service.ts`
- `src/lib/public-content/publicPageImage.ts`
- `src/lib/public-content/publicPageQueryKeys.ts`
- `src/lib/tanstack/queryClient.ts`
- `src/components/providers/TanStackProvider.tsx`
- `src/components/PublicContent/PublicImage.tsx`

Optional later:

- `src/components/PublicContent/PublicPageHydrationBoundary.tsx`
- `src/hooks/public-content/usePublicPageContent.ts`

## Public Content Contract

Create a shared normalized contract that both Home and Smart Food can map into.

Suggested public page keys:

- `home`
- `luxury`
- `smart-food`
- `style`
- `smart-city`
- `smart-mobility`
- `story`
- `about`

Suggested normalized image fields:

- `src`
- `alt`
- `width`
- `height`
- `aspectRatio`
- `positionKey`
- `objectFit`
- `objectPosition`

Suggested public content fields:

- `pageKey`
- `locale`
- `source`
- `cacheTag`
- `payload`

## Public Image Normalization

Implement a small image normalizer before content reaches page components.

Required behavior:

- Trim image `src`.
- Ensure local public asset paths start with `/`.
- Reject empty image paths.
- Convert missing or invalid image values to `/fallback-content.svg`.
- Preserve alt text where available.
- Provide safe fallback alt text when missing.
- Preserve declared image generation metadata where available.
- Return predictable image object shape for both Home and Smart Food.

Then replace or update `SmartFoodAiImage` so it uses the shared normalizer. The component should no longer contain one-off hardcoded path fixes.

## TanStack Query Standardization

Add TanStack Query:

- Package: `@tanstack/react-query`.
- Keep first-load public pages server-rendered for SEO.
- Use TanStack for client cache reuse, optional hydration, interactive sections, and future page prefetching.

Recommended public defaults:

- `staleTime`: 10 minutes.
- `gcTime`: 30 minutes.
- `refetchOnWindowFocus`: false for public page content.

Use stable query keys:

- `public-page`, locale, `home`.
- `public-page`, locale, `smart-food`.

Important: Home -> Smart Food -> Home can reuse TanStack browser cache only after content has been hydrated or fetched on the client. Server rendering and Next route cache remain separate from TanStack browser memory cache.

## API Route For Public Page Content

Add a normalized client-facing API route for public page content:

- `GET /api/public-pages/[pageKey]?locale=en`

This API should call the same server public content service used by the page server components. Do not create separate loading logic for API and page render.

## Phase 1 Implementation: Home + Smart Food

### Step 1: Add public content service

Create a registry with Home and Smart Food loaders.

### Step 2: Wrap Home loader

Move existing Home seed loading behind the new public content service:

- Current: `getPlatformContent(lang)`.
- New: `loadHomePublicContent(locale)`.
- Keep `src/data/home/*.seed.json` as the Home source for Phase 1.

### Step 3: Wrap Smart Food loader

Move existing Smart Food content loading behind the new public content service:

- Current: `getSmartFoodAiContentForPublicPage(lang)`.
- New: `loadSmartFoodPublicContent(locale)`.
- Keep MongoDB as the primary Smart Food source.

### Step 4: Replace Smart Food image workaround

Remove the temporary hardcoded proof image block.

Restore data-driven rendering through the shared image normalizer. Either introduce a shared `PublicImage` component or update `SmartFoodAiImage` to call the same normalizer internally.

### Step 5: Add TanStack provider and optional hydration

Start with Home and Smart Food only.

Use server render for initial content. Use TanStack for subsequent client cache, future public page prefetch, and interactive public sections.

Do not force all public pages to load at app startup.

### Step 6: Add diagnostics

Add development-only diagnostics for invalid image `src` values including page key, locale, source, and position key.

Do not add noisy production logs.

## Phase 2 Rollout: Remaining Public Pages

After Home and Smart Food are stable on the public site, implement the same pattern for:

- Luxury
- Style
- Smart City
- Smart Mobility
- Story
- About

Each page should use the public content registry, shared image normalization, stable query keys, and server render first.

## Acceptance Criteria

### Functional

- Home still renders from current embedded seed data.
- Smart Food still renders from MongoDB with static fallback.
- Home and Smart Food both pass through the same public content service shape.
- Smart Food proof image renders from content data again, not a hardcoded workaround.
- Invalid Smart Food image paths safely fallback instead of breaking the visual area.
- Local public image paths are normalized before reaching `next/image`.
- Home image behavior remains stable.

### Caching

- Public pages are not all loaded globally at app start.
- Home has a stable query key.
- Smart Food has a stable query key.
- Returning Home after visiting another hydrated page can reuse TanStack client cache where applicable.
- Server-rendered first load remains SEO-safe.

### Code Quality

- No duplicated image normalization logic between Home and Smart Food.
- No temporary hardcoded Smart Food image workaround remains.
- Public content API and server page render share the same loader.
- `npm run build` passes.
- `npm run lint` passes or known unrelated lint errors are documented.

### Regression Checks

Manually verify:

- `/en/`
- `/en/smart-food/`
- `/th/`
- `/th/smart-food/`

Check browser DevTools:

- No 404 for Smart Food images.
- No Next/Image runtime error.
- No hydration mismatch around Smart Food proof or workflow images.
- Navigation Home -> Smart Food -> Home remains stable.

## Out of Scope

- Migrating all Home content to MongoDB in this item.
- Loading all public pages globally at app start.
- Replacing Redux across the application.
- Admin/editor mutation flows.
- Full public page rollout beyond Home and Smart Food before Phase 1 validation.

## Implementation Notes

- Keep `src/data/home/*.seed.json` as seed and fallback data for now.
- Keep MongoDB as Smart Food primary content source.
- Prefer a small public content facade over a large rewrite.
- Treat image normalization as a first-class fix, separate from TanStack Query.
- TanStack improves client cache behavior, but it will not fix invalid image paths by itself.
- The Smart Food image issue must be proven fixed by validating final normalized image paths and browser network requests.
