# Routing Map

## App Router Structure

- Localized public pages are under `src/app/[locale]/(legacy)/`.
- Current platform route-group pages are under `src/app/[locale]/(roadmap)/`; the group name is not part of the URL.
- The route group `(legacy)` does not appear in URLs.
- API endpoints are under `src/app/api/`.
- Next metadata routes are `src/app/sitemap.ts` and `src/app/robots.ts`.
- `src/proxy.ts` handles locale redirect behavior and request headers.

## Public Page Families

- Home: `src/app/[locale]/(legacy)/page.tsx`
- Platform home: `src/components/Platform/PlatformHomePage.tsx` with content from `src/lib/platform-content/homeContent.ts`.
- Platform Luxury: `src/app/[locale]/(roadmap)/luxury/page.tsx`.
- Platform Smart Food: `src/app/[locale]/(roadmap)/smart-food/page.tsx`.
- Platform Style: `src/app/[locale]/(roadmap)/style/page.tsx` and `src/app/[locale]/(roadmap)/style/[slug]/page.tsx`.
- Platform Story: `src/app/[locale]/(roadmap)/story/page.tsx`.
- MTS Smart Mobility: `src/app/[locale]/(roadmap)/smart-mobility/page.tsx`, `src/app/[locale]/(roadmap)/smart-mobility/mts/page.tsx`, and `src/app/[locale]/(roadmap)/smart-mobility/mts/[slug]/page.tsx`.
- Static brand/service pages: `about-chorn`, `contact`, `gallery`, policies, and terms.
- AI companion pages: `ai-companions`, `ai-companions/aom`, `ai-companions/fah`, `ai-companions/ploy`.
- Smart City pages: `smart-city`, `smart-city/[slug]`, and `smart-city/chiang-mai/[slug]`.
- Smart Mobility pages: `smart-mobility/chiang-mai` plus named Chiang Mai route pages.
- Technical Expertise pages: frontend, backend, cloud/devops, AI solutions, mobile, web, and web3 route families.

## Dynamic Routes

- `src/app/[locale]/(legacy)/smart-city/[slug]/page.tsx`
- `src/app/[locale]/(legacy)/smart-city/chiang-mai/[slug]/page.tsx`
- `src/app/[locale]/(roadmap)/style/[slug]/page.tsx`
- `src/app/[locale]/(roadmap)/smart-mobility/mts/[slug]/page.tsx`

Dynamic route sitemap entries come from:

- `src/lib/smart-city-landing-content/smartCityLandingContent.service.ts`
- `src/lib/smart-city-chiang-mai-content/smartCityChiangMaiContent.service.ts`

## URL Rules

- `next.config.mjs` sets `trailingSlash: true`.
- Internal links should include trailing slashes.
- Root `/` redirects to `/en`.
- Non-localized public application paths redirect to the default locale through `src/proxy.ts`, except skipped asset/API paths.
- `next.config.mjs` includes redirects for legacy `/technology/`, `/ai-integration/`, `/about/`, and `/smart-mobility/`.

## When Adding Routes

Update these together when the route should be public and indexed:

- Page under `src/app/[locale]/(legacy)/.../page.tsx`
- Metadata under `src/metadata/...`
- `src/lib/UrlMaps.ts` for static sitemap inclusion and images
- Dynamic sitemap source service if the route is slug-backed
- Navigation content if it belongs in menu/footer
- All 10 locales
