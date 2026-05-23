# Feature Plan: New ChornPlanet Platform Layout - Phase 1

Repository: `khachornchit/chornplanet`
Branch: `feature/new-platform-layout`
Status: Ready to Ship
Owner: Khachornchit Chief Architect -> ChatGPT planning -> Codex implementation

## Phase 1 Goal

Ship the first platform-facing layout pass after merging the latest `main` branch into the current feature branch.

Phase 1 keeps the latest `main` branch page ownership for existing mature routes where appropriate while introducing the new ChornPlanet platform theme, logo direction, navigation shape, footer theme/content, and canonical Phase 1 platform channels.

## Phase 1 Scope

- Keep the new ChornPlanet logo direction.
- Keep the latest blue platform theme.
- Keep the new themed footer and current footer content direction.
- Preserve the latest `main` branch behavior for existing mature pages that remain outside the new platform route work.
- Keep route rendering stable for existing locales, but expose English only in the language button for launch.
- Use the new theme where the Phase 1 platform routes are active.
- Keep the language dropdown disabled for launch.

## Phase 1 Navigation

Primary navigation labels for Phase 1:

```text
Home
Luxury
Smart Food
Style
Smart City
Smart Mobility
About
```

Route ownership:

- `Home` uses the Phase 2 platform home page layout during Phase 1, with the Smart Food highlight placed directly under the platform hero.
- `Luxury` uses the new theme and route `/luxury/`.
- `Smart Food` uses the new theme and route `/smart-food/`.
- `Style` uses the new platform style route.
- `Smart City` uses the latest `main` branch page.
- `Smart Mobility` uses the latest `main` branch page.
- `About` uses the platform story layout and route `/about/`.

Phase 1 does not keep `World`, `Media`, `Commerce`, or `Technology` in the primary navigation.

## Phase 1 Page Decisions

- Keep Phase 1 focused on navigation, theme, footer, Luxury, Smart Food, and Style.
- Do not complete the new platform Home, Media, or Commerce landing-page experience in Phase 1.
- Move pending Media and Commerce page/component work into Phase 2 planning.
- Home route ownership moved to the platform home layout during Phase 1.
- `/about/` keeps the current platform story layout/content for Phase 1.
- `/about-chorn/` redirects to `/about/`.
- `/history/` has been removed from the roadmap route group and footer links.
- Platform home content has been renamed to `homeContent` and the Phase 2 backup is kept as `homeContentPhase2`.
- Style page seed content has been renamed to `styleContent.seed.json` and its loader to `styleContent.ts`.
- Home and Style content include image generation size metadata for future content workflows.

## Footer

Footer direction:

- Keep the new theme.
- Keep platform/footer content grouping from the feature branch.
- Preserve links to important legacy pages so existing Smart City, Smart Mobility, and Technology content remains discoverable.
- Do not expose removed or deferred Phase 1 routes as primary navigation.
- Footer Platform includes Luxury, Smart Food, Style, Smart City, and Smart Mobility. Media and Commerce are deferred to Phase 2.
- Footer Commerce includes Outfit Commerce and TikTok only.
- Footer Commerce `Outfit Commerce` links to `/style/`.
- Footer Commerce `TikTok` links to `https://tiktok.com/@chornplanet` and opens in a new browser tab.
- Footer Important Links includes Technology.
- Footer Important Links does not include History.
- Footer Connect does not include YouTube or Facebook.

## Navbar Active State

- Smart City must highlight on `/smart-city/` and Smart City detail routes.
- Smart Mobility must highlight on `/smart-mobility/...` routes.
- About must highlight on `/about/` and `/about-chorn/` routes.

## Language Strategy

- Existing locale routes remain render-safe:

```text
da, de, en, fi, fr, ja, ko, nl, th, zh
```

- Show only a static English language button for launch.
- Keep the language dropdown disabled.
- New platform labels and footer content remain render-safe across supported locales.

## Home Hero And Navigation Polish

- Home hero signal chips were removed for a cleaner Phase 1 hero.
- Home hero CTA buttons use equal-width premium styling across desktop, tablet, and mobile.
- The first hero CTA keeps a stronger primary gradient; secondary CTAs use a glass treatment.
- Mobile hero content is left aligned near the lower-left of the image.
- Navbar logo image keeps the simple logo treatment.
- The navbar background layer behind the logo includes a subtle animated aura and signal-wave effect for a premium hi-tech feel.

## About Page Polish

- About content blocks now use complete Phase 1 copy.
- About blocks include tags and route links.
- About page UI renders tags as premium chips and includes link buttons for each block.

## Acceptance Criteria

- Latest `origin/main` is merged into `feature/new-platform-layout`.
- Phase 1 plan lives at `.chatgpt/in-progress/feature-new-platform-layout-1.md`.
- Phase 2 plan lives at `.chatgpt/planning/feature-new-platform-layout-2.md`.
- Primary navigation is Phase 1 aligned.
- Footer uses the new platform theme/content direction.
- Home uses the platform home layout for Phase 1.
- Media and Commerce platform landing/page component work is deferred to Phase 2.
- History route and footer link are removed.
- Language dropdown is disabled and English is the only exposed language button.
- No merge conflict markers remain.
- `npm run build` passes before the task is considered complete.
