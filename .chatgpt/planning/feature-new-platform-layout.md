# Feature Plan: New ChornPlanet Platform Layout

Repository: `khachornchit/chornplanet`
Branch for planning: `feature/mcp-agent-workspace`
Implementation branch recommendation: `feature/new-platform-layout`
Status: Planning
Owner: Khachornchit Chief Architect → ChatGPT planning → Codex review/implementation

## Problem Statement

The current ChornPlanet web layout, homepage, and navigation were originally designed closer to a smart city / technology / media website. The platform direction has expanded into a broader luxury civilization media and commerce platform.

ChornPlanet now needs a new UX/UI layout that communicates the new product identity:

```text
Luxury Civilization Media Platform
+
Story Commerce Platform
+
Smart Food Lifestyle Layer
+
Chorn DNA-powered outfit/civilization content
```

The new layout must reposition ChornPlanet from a technical services/media website into a premium platform that can support:

- ChornPlanet world and zones
- lady/gentleman outfit and civilization clothing
- media digest content
- premium commerce
- Smart Food system project
- luxury project showcase
- analytics-driven content growth
- future TikTok-first commerce
- future Chorn DNA integration

## Goals

- Redesign the main navigation around new platform channels.
- Redesign homepage layout according to the 15-section direction.
- Preserve existing pages and 10-language capability where applicable.
- Start the new concept practically with Thai and English content first.
- Keep existing Smart City, Smart Mobility, Technology, AI Integration, and legacy About content accessible through footer important links instead of the primary navigation.
- Refactor `/about-chorn` into `/history` as the ChornPlanet history/origin route.
- Add a new `/about` section/page that explains the new ChornPlanet platform concept.
- Add both `/history` and `/about` to Footer → Important Links.
- Add Luxury Project and Smart Food System project sections on the homepage with landing-page links.
- Prepare future routes for World, Outfit, Media, Commerce, Smart Food, and Luxury under `src/app/[locale]/(roadmap)/...`.
- Preserve existing SEO, metadata, sitemap, locale, SCSS, and responsive design patterns.

## Non-Goals

- Do not delete existing Smart City, Smart Mobility, Technology, AI Integration, or About content in this feature unless explicitly approved.
- Do not implement commerce checkout.
- Do not implement Smart Food order submission.
- Do not integrate Chorn DNA runtime REST API in this feature.
- Do not implement admin dashboard in this feature.
- Do not auto-publish content.
- Do not remove existing 10-language infrastructure.

## Existing Architecture Review

Relevant existing rules from `.codex/Agents.md` and `.mcp`:

- ChornPlanet uses Next.js 16 app router, React 18, TypeScript 5.
- Locales are path segments.
- Supported locales: `da`, `de`, `en`, `fi`, `fr`, `ja`, `ko`, `nl`, `th`, `zh`.
- Default locale is `en`.
- `trailingSlash: true` is set in `next.config.mjs`.
- Existing pages mostly use SCSS classes, not Tailwind-heavy markup.
- Existing public pages live under `src/app/[locale]/(desktop)/...`.
- Global styles, `AppProvider`, cookie consent, navbar, footer, AOS, go-to-top, and Vercel Speed Insights are imported under `src/app/[locale]/(desktop)/layout.tsx`.
- The new platform should be placed under `src/app/[locale]/(roadmap)/...`, not `src/app/(roadmap)/[locale]/...`, because the current app already uses `[locale]` as the parent segment.
- The `(desktop)` and `(roadmap)` route groups will generate the same clean public URL shape; they are route-group organization only and are not visible in URLs.
- Public routes should be reflected in sitemap/UrlMaps when indexable.
- Metadata exists under `src/metadata/` and should remain compatible.
- Current architecture direction is toward MongoDB-backed reusable content services.

## Route Group and Layout Strategy

Existing route group:

```text
src/app/[locale]/(desktop)
```

New platform route group:

```text
src/app/[locale]/(roadmap)
```

Public URL examples:

```text
src/app/[locale]/(roadmap)/world/page.tsx       -> /[locale]/world/
src/app/[locale]/(roadmap)/smart-food/page.tsx  -> /[locale]/smart-food/
src/app/[locale]/(roadmap)/luxury/page.tsx      -> /[locale]/luxury/
```

Layout decision:

- Start from the existing `(desktop)` layout behavior because it already owns global SCSS, providers, navbar, footer, consent, animation, and speed insights.
- Implementation may either:
  - extract the shared shell from `src/app/[locale]/(desktop)/layout.tsx` into a reusable layout component and use it from both route groups; or
  - create `src/app/[locale]/(roadmap)/layout.tsx` that intentionally mirrors the `(desktop)` base while allowing different roadmap navigation/content behavior.
- Prefer shared layout extraction if the roadmap platform uses the same provider/navbar/footer architecture.
- Prefer a separate roadmap layout if the new platform concept needs materially different navigation, footer grouping, body classes, imported SCSS bundle, or visual shell.
- Do not try to make `(roadmap)` inherit a sibling `(desktop)` layout directly through filesystem nesting. If both route groups need the same base, extract the shared shell into a component or helper used by both layouts.
- Do not move existing `(desktop)` routes unless the route is being intentionally refactored, redirected, or canonicalized.
- Avoid having the same public path implemented in both `(desktop)` and `(roadmap)` at the same time. If a path moves to `(roadmap)`, the old path should become a redirect/canonical strategy or be removed from the competing route group.

## Styles Organization Review

`src/styles` has been organized before implementation so the roadmap platform can reuse the existing desktop base without adding more flat global style files.

Current style folders:

```text
src/styles/base/          app-wide primitives such as globals and optional Tailwind entry
src/styles/vendor/        third-party CSS files
src/styles/legacy/        inherited template styles and generated CSS artifacts
src/styles/utilities/     shared helper classes and small visual utilities
src/styles/navigation/    navbar and language-switching styles
src/styles/layout/        shared layout surfaces such as footer
src/styles/home/          current homepage section styles
src/styles/smart-city/    Smart City, Smart Mobility, and related legacy platform styles
src/styles/platform/      canonical platform channel styles and future roadmap styles
src/styles/pages/         page-specific standalone styles
```

Roadmap implementation guidance:

- Add new platform layout styles under `src/styles/platform/`.
- Prefer stable scoped prefixes such as `.platform-*`, `.platform-home-*`, and `.platform-channel-*`.
- Keep new page/channel styles under a root page class to prevent leakage into existing `(desktop)` routes.
- Preserve layout import order when extracting shared shell code: base, vendor, external package CSS, legacy/utilities, navigation/layout, then feature/page styles.
- Avoid editing `src/styles/legacy/style.scss` and `src/styles/legacy/responsive.scss` unless the implementation intentionally changes inherited template behavior.
- Use `src/styles/README.md` as the style ownership reference.

## New Platform Positioning

Primary identity:

```text
ChornPlanet
Luxury Civilization Media & Commerce Platform
```

Secondary identity:

```text
World | Outfit | Media | Commerce | Smart Food | Luxury
```

The site should feel like a premium platform/world, not a normal company profile site.

## Proposed New Primary Navigation

Recommended desktop navigation:

```text
World | Outfit | Media | Commerce | Smart Food | Luxury
```

Optional CTA area:

```text
Explore Today
```

or later:

```text
Sign in with LINE
```

### Navigation Channel Meaning

#### World

For ChornPlanet civilization, zones, world-building, scene systems, and destination-like content.

Possible route:

```text
/[locale]/world/
```

#### Outfit

For lady/gentleman outfit, civilization clothing, Chorn DNA-inspired fashion, and product story posts.

Possible route:

```text
/[locale]/outfit/
```

#### Media

For news, entertainment, technology digest, AI/future lifestyle articles, and daily follow-up content.

Possible route:

```text
/[locale]/media/
```

#### Commerce

For premium products, outfit commerce, grocery/online supermarket concepts, product stories, and TikTok-first marketplace direction.

Possible route:

```text
/[locale]/commerce/
```

#### Smart Food

For Smart Food system project, food ordering concept, favorite meal, Line OA login future idea, and food lifestyle content.

Possible route:

```text
/[locale]/smart-food/
```

#### Luxury

For luxury projects, smart city destination vision, Circular Mountain Crown, future mobility, real estate/lifestyle showcases, and investment-facing stories.

Possible route:

```text
/[locale]/luxury/
```

## Existing Navigation Migration

The existing primary navigation may include items such as:

```text
Smart City
Smart Mobility
Technology
AI Integration
About
```

These should be moved out of the primary navigation and preserved in the footer instead.

Recommended footer grouping:

```text
Important Links
- About
- History
- Smart City
- Smart Mobility
- Technology
- AI Integration
- Technical Expertise
- Contact
```

This keeps existing content discoverable without diluting the new platform navigation.

## New `/about` Section

Create a new platform-level About section/page:

```text
/[locale]/about/
```

Purpose:

`/about/` should explain what ChornPlanet is under the new platform concept, not only company background.

Recommended positioning:

```text
ChornPlanet is a Luxury Civilization Media & Commerce Platform combining world-building, AI-assisted media, Chorn DNA-powered outfit/civilization content, premium commerce, Smart Food, luxury projects, and analytics-assisted growth.
```

Recommended content blocks:

1. Platform Overview
2. What ChornPlanet Combines
   - World / Civilization
   - Outfit / Civilization Clothing
   - Media
   - Commerce
   - Smart Food
   - Luxury Projects
3. Chorn DNA Connection
4. Smart Food Connection
5. Commerce Direction
6. Growth and Analytics Direction
7. Vision / North Star

Footer placement:

```text
Footer -> Important Links -> About
```

Implementation guidance:

- `/about/` should be a new platform-about page.
- `/history/` should describe origin/history/background.
- `/about-chorn/` should be redirected or repositioned to `/history/`.
- `/about/` and `/history/` should not duplicate the same content.
- Add metadata for `/about/`.
- Add `/about/` to UrlMaps/sitemap when indexable.
- Thai and English should be refined first; preserve 10-language route compatibility.

## `/about-chorn` to `/history` Refactor

The existing `/about-chorn/` route should be refactored into:

```text
/[locale]/history/
```

Implementation guidance:

- Create or migrate page route from `/about-chorn/` to `/history/`.
- Preserve existing content where appropriate, but reposition it as ChornPlanet history/origin.
- Add `/history/` to footer Important Links.
- Consider redirecting `/about-chorn/` to `/history/` to preserve SEO and existing links.
- Update metadata, UrlMaps, sitemap, and internal links.
- Keep locale support for all 10 languages where existing content exists.
- Thai and English can be refined first for the new concept.

## Homepage Layout: 15 Recommended Items

### 1. Hero Civilization Campaign

Purpose:

Immediately communicate the new ChornPlanet platform identity.

Content:

```text
ChornPlanet
Luxury Civilization Media & Commerce Platform
```

Suggested CTAs:

```text
Explore Today
View Outfit Collection
Discover Smart Food
```

Visual direction:

- full-width cinematic visual
- luxury editorial tone
- Chorn DNA-inspired figure/outfit/zone image
- premium typography
- large negative space

### 2. Today on ChornPlanet

Purpose:

Create a daily platform feed and traffic entry point.

Cards:

- Featured Outfit Story
- Technology / AI Digest
- Smart Food Highlight
- Luxury Project Highlight

### 3. Civilization Outfit Collection

Purpose:

Make outfit/civilization clothing the first commercial and visual wedge.

Cards:

- Lady Outfit
- Gentleman Outfit
- Civilization Clothing
- Lanna Future Luxury
- Coastal Resort Look
- Mountain Travel Look
- Urban Core Look

### 4. Explore ChornPlanet Zones

Purpose:

World-building, SEO, and Chorn DNA connection.

Cards:

- Mountain
- Coastal
- Lotus Pond
- Airport Gateway
- Urban Core
- River Valley
- Flower Valley
- Smart City

Each card should eventually connect to:

- zone identity
- recommended outfit
- related stories
- related commerce/product

### 5. Premium Commerce

Purpose:

Introduce commerce as story-commerce, not hard selling.

Cards:

- Outfit Product Story
- Smart Food Product Story
- Luxury Lifestyle Product
- Grocery / Online Supermarket Soon

### 6. Smart Food Experience

Purpose:

Show Smart Food as a project and future user experience layer.

Cards/links:

- Smart Food System Project
- Favorite Meal Concept
- Order via Website Concept
- Line OA Login Future
- Food Story

The homepage should link to a Smart Food landing page.

### 7. Daily Digest: News / Entertainment / Technology

Purpose:

Support daily traffic growth.

Cards:

- AI & Technology
- Entertainment
- Future Lifestyle
- Platform News

### 8. Luxury Projects

Purpose:

Strengthen premium brand and investor-facing narrative.

Cards:

- Luxury Project Landing Page
- Smart City / Future City
- ChornPlanet Circular Mountain Crown
- Future Mobility
- Coastal Destination

The homepage should link to a Luxury Project landing page.

### 9. Trending / Popular / Analytics-driven Section

Purpose:

Future analytics-driven placement.

Initial state:

- manually curated trending cards

Future state:

```text
Google Analytics / Search Console / platform signals
  ↓
AI growth summary
  ↓
recommended homepage placement
```

### 10. New Route Structure

Recommended route-group placement for the first implementation:

```text
src/app/[locale]/(roadmap)/page.tsx
src/app/[locale]/(roadmap)/world/page.tsx
src/app/[locale]/(roadmap)/outfit/page.tsx
src/app/[locale]/(roadmap)/media/page.tsx
src/app/[locale]/(roadmap)/commerce/page.tsx
src/app/[locale]/(roadmap)/smart-food/page.tsx
src/app/[locale]/(roadmap)/luxury/page.tsx
src/app/[locale]/(roadmap)/about/page.tsx
src/app/[locale]/(roadmap)/history/page.tsx
```

Clean public URLs:

```text
/[locale]/
/[locale]/world/
/[locale]/outfit/
/[locale]/media/
/[locale]/commerce/
/[locale]/smart-food/
/[locale]/luxury/
/[locale]/about/
/[locale]/history/
```

Future detail routes can be added after the landing channel architecture is stable:

```text
/[locale]/world/zones/
/[locale]/world/zones/[zoneSlug]/

/[locale]/outfit/lady/
/[locale]/outfit/gentleman/
/[locale]/outfit/civilization-clothing/

/[locale]/media/news/
/[locale]/media/entertainment/
/[locale]/media/technology/

/[locale]/commerce/outfit/
/[locale]/commerce/grocery/
/[locale]/commerce/smart-food/
/[locale]/commerce/luxury/

/[locale]/smart-food/favorite-meal/
/[locale]/smart-food/order/
/[locale]/smart-food/line-login/

/[locale]/luxury/projects/
```

Implementation should start with the homepage and landing routes only, then expand detail routes later.

### 11. UX/UI Style Direction

Design language:

```text
Luxury editorial
Large cinematic image
Soft gradient
Deep spacing
Premium typography
Minimal but immersive
```

Recommended color palette:

```text
White / Ivory
Gold
Deep Navy
Soft Black
Natural Green
Lotus Pink Accent
```

Component direction:

```text
large rounded cards
cinematic image cards
glassmorphism only where useful
soft shadows
clear CTAs
responsive grid
premium spacing
```

### 12. Card Design Standard

Every content card should follow a common structure:

```text
Image
Category
Title
Short description
Tags
CTA
```

Example:

```text
Category: Outfit
Title: Luxury Lanna Dress in Lotus Pond Sanctuary
Description: A soft civilization look for nature-luxury lifestyle.
Tags: Zone22 / Lady / Chorn DNA
CTA: View Story
```

### 13. Detail Page Design Direction

Future detail pages should behave like magazine + commerce pages:

```text
Hero image
Title
Subtitle
Category / Zone / Tags
Story content
6-scene gallery
Related outfit
Related zone
Related product
CTA to TikTok / Product / Smart Food
```

This applies especially to outfit, zone, commerce, and luxury detail pages.

### 14. Admin / Draft System Future Direction

Future admin routes may include:

```text
/admin/content-drafts
/admin/outfit-drafts
/admin/media-digest
/admin/products
/admin/analytics
```

Status model:

```text
draft
reviewed
approved
published
archived
```

This is future direction only and should not be implemented in this layout feature unless approved.

### 15. Chorn DNA UX Integration

Future outfit/civilization content creation should follow:

```text
Select Content Type
  ↓
Select Lady / Gentleman
  ↓
Select or Random Zone
  ↓
Resolve with Chorn DNA
  ↓
Generate StoryGenProduct Draft
  ↓
Review
  ↓
Publish later
```

UI may eventually display badges such as:

```text
Validated by Chorn DNA
Zone22 / Sub-Zone B
StoryGenProduct Ready
```

This feature should prepare the visual and route structure, but runtime Chorn DNA validation belongs to a later integration feature.

## Language Strategy

The new concept may start with:

```text
Thai
English
```

But the existing 10-language routing and localization structure should remain intact.

Implementation guidance:

- Use Thai and English as the first refined content languages.
- For other locales, keep existing fallback or translated content behavior where practical.
- Do not remove 10-language support.
- Ensure routes work for all existing locale segments.

## Footer Design

Recommended footer sections:

```text
Platform
- World
- Outfit
- Media
- Commerce
- Smart Food
- Luxury

Important Links
- About
- History
- Smart City
- Smart Mobility
- Technology
- AI Integration
- Technical Expertise
- Contact

Projects
- Luxury Project
- Smart Food System
- Chorn DNA
- ChornPlanet

Commerce
- Outfit Commerce
- TikTok Soon
- Grocery Soon
- Marketplace Links Soon
```

Footer should preserve existing important pages and reduce primary navigation clutter.

## Implementation Phases

### Phase 0: Route Group and Layout Foundation

- Create `src/app/[locale]/(roadmap)/`.
- Decide whether `(roadmap)` uses:
  - a shared layout shell extracted from `src/app/[locale]/(desktop)/layout.tsx`; or
  - its own `src/app/[locale]/(roadmap)/layout.tsx` based on the same providers and global style requirements.
- Keep route groups under `[locale]` so locale routing remains compatible with the existing app.
- Confirm there are no duplicate public URL owners between `(desktop)` and `(roadmap)` for the same path.

### Phase 1: Navigation and Footer Restructure

- Create new primary navigation channels.
- Move legacy navigation items to footer Important Links.
- Add `/about/` and `/history/` to footer Important Links.
- Add responsive mobile navigation design.
- Preserve locale and trailing slash behavior.

### Phase 2: Homepage Layout Shell

- Add new homepage under `src/app/[locale]/(roadmap)/page.tsx` if the roadmap platform is taking over the clean `/{locale}/` homepage.
- If the existing `(desktop)` homepage remains active temporarily, explicitly document which route group owns `/{locale}/` before implementation.
- Add new homepage section order.
- Create reusable section/card components if practical.
- Add Luxury Project and Smart Food System project sections with landing-page links.

### Phase 3: Canonical Smart Food and Luxury Refactors

- Refactor or reposition `src/app/[locale]/(desktop)/smart-food-ai` into `src/app/[locale]/(roadmap)/smart-food`.
- Refactor or reposition `src/app/[locale]/(desktop)/ai-luxury` into `src/app/[locale]/(roadmap)/luxury`.
- Preserve SEO value with redirects or canonical metadata from `/[locale]/smart-food-ai/` to `/[locale]/smart-food/`.
- Preserve SEO value with redirects or canonical metadata from `/[locale]/ai-luxury/` to `/[locale]/luxury/`.
- Do not duplicate completed Smart Food AI and AI Luxury pages into competing permanent routes.

### Phase 4: `/about` and `/history` Routes

- Add `/[locale]/about/` route for the new ChornPlanet platform concept.
- Add `/[locale]/history/` route for origin/history/background.
- Reuse/refactor `/about-chorn/` content into `/history/` where appropriate.
- Add footer Important Links for both About and History.
- Add redirect from `/about-chorn/` to `/history/` if practical.
- Update metadata, UrlMaps, and sitemap.

### Phase 5: New Landing Routes

Add landing pages or placeholders for:

```text
/world/
/outfit/
/media/
/commerce/
/smart-food/
/luxury/
```

Start with Thai and English refined content, but keep route compatibility for all 10 locales.

### Phase 6: Responsive UX/UI Polish

- Desktop nav
- Tablet nav
- Mobile hamburger or bottom sheet menu
- Card grid responsiveness
- Hero readability
- Section spacing
- Image ratio consistency
- Accessibility basics

### Phase 7: SEO and Metadata Update

- Add/update metadata for new routes.
- Update sitemap/UrlMaps.
- Ensure `/about/` defines new platform concept.
- Ensure `/history/` metadata replaces `/about-chorn/` positioning.
- Preserve existing metadata while migration to MongoDB is pending.

## Suggested Project Structure

Codex should inspect existing patterns before implementation. Possible additions:

```text
src/components/Platform/Home/
  PlatformHero.tsx
  TodayOnChornPlanet.tsx
  OutfitCollectionSection.tsx
  ZonesSection.tsx
  PremiumCommerceSection.tsx
  SmartFoodSection.tsx
  DailyDigestSection.tsx
  LuxuryProjectsSection.tsx
  TrendingSection.tsx

src/components/Platform/Cards/
  PlatformContentCard.tsx
  PlatformFeatureCard.tsx
  PlatformProjectCard.tsx

src/data/platform-home/
  PlatformHomeEN.ts
  PlatformHomeTH.ts
  index.ts

src/data/platform-about/
  PlatformAboutEN.ts
  PlatformAboutTH.ts
  index.ts

src/app/[locale]/(roadmap)/layout.tsx
src/app/[locale]/(roadmap)/page.tsx
src/app/[locale]/(roadmap)/world/page.tsx
src/app/[locale]/(roadmap)/outfit/page.tsx
src/app/[locale]/(roadmap)/media/page.tsx
src/app/[locale]/(roadmap)/commerce/page.tsx
src/app/[locale]/(roadmap)/smart-food/page.tsx
src/app/[locale]/(roadmap)/luxury/page.tsx
src/app/[locale]/(roadmap)/about/page.tsx
src/app/[locale]/(roadmap)/history/page.tsx
```

Existing source routes to inspect and refactor where useful:

```text
src/app/[locale]/(desktop)/page.tsx
src/app/[locale]/(desktop)/layout.tsx
src/app/[locale]/(desktop)/about-chorn/
src/app/[locale]/(desktop)/smart-food-ai/
src/app/[locale]/(desktop)/ai-luxury/
```

If existing component naming conventions differ, follow the closest existing pattern.

## Testing Plan

Run:

```bash
yarn lint
yarn build
```

Manual checks:

- `/en/`
- `/th/`
- `/en/world/`
- `/th/world/`
- `/en/outfit/`
- `/th/outfit/`
- `/en/smart-food/`
- `/th/smart-food/`
- `/en/luxury/`
- `/th/luxury/`
- `/en/about/`
- `/th/about/`
- `/en/history/`
- `/th/history/`

Responsive checks:

- desktop wide
- laptop
- tablet
- mobile

SEO checks:

- metadata exists for new route pages
- UrlMaps/sitemap behavior updated
- `/about/` metadata describes the new platform concept
- `/about-chorn/` redirect behavior decided and tested
- `/smart-food-ai/` redirect or canonical behavior decided and tested
- `/ai-luxury/` redirect or canonical behavior decided and tested

## Risks and Open Questions

- Should `(roadmap)` extract and share the existing `(desktop)` layout shell, or keep a separate roadmap layout based on the new platform concept?
- Should `src/app/[locale]/(roadmap)/page.tsx` immediately replace the clean `/{locale}/` homepage, or should the existing `(desktop)` homepage remain active while the roadmap homepage is prepared?
- Should `/about-chorn/` be redirected permanently to `/history/`, or kept as a legacy route with canonical link?
- Should `/smart-food-ai/` and `/ai-luxury/` be redirected permanently to `/smart-food/` and `/luxury/`, or kept temporarily with canonical links?
- Should `/about/` and `/history/` both be implemented in the first pass, or should `/about/` be a simple landing page first?
- Should the first implementation create all new landing routes, or only homepage + navigation first?
- Should Smart Food and Luxury sections link to existing pages or new placeholder landing pages?
- How much visual redesign should be done in the first feature before it becomes too large?
- Should platform-home and platform-about data start in `src/data/` or MongoDB-backed content service?
- Should non-Thai/English locales use English fallback for new sections initially?

## Acceptance Criteria

- New platform route group is placed under `src/app/[locale]/(roadmap)/...`.
- Existing `src/app/[locale]/(desktop)/...` route group is preserved unless specific routes are intentionally refactored.
- `(roadmap)` layout strategy is explicit: shared extracted shell or separate roadmap layout.
- New primary navigation reflects platform channels, not legacy technical service categories.
- Navigation is practical and responsive for desktop/tablet/mobile.
- Smart City, Smart Mobility, Technology, AI Integration, and legacy About are removed from primary nav and preserved in footer Important Links where applicable.
- `/about/` route exists and explains the new ChornPlanet platform concept.
- `/about/` is added to footer Important Links.
- `/history/` route exists and replaces/refactors `/about-chorn/` positioning.
- `/history/` is added to footer Important Links.
- `/smart-food/` route exists as the canonical Smart Food channel, reusing or repositioning the completed Smart Food AI foundation where practical.
- `/luxury/` route exists as the canonical Luxury channel, reusing or repositioning the completed AI Luxury foundation where practical.
- `/smart-food-ai/` and `/ai-luxury/` SEO handling is decided through redirect or canonical strategy.
- Homepage includes Luxury Project and Smart Food System project sections with landing-page links.
- Homepage follows the new ChornPlanet concept and major section order.
- Thai and English content are refined first.
- Existing 10-language routing support is preserved.
- SEO metadata, UrlMaps, sitemap, and redirects are considered.
- Lint/build pass.
