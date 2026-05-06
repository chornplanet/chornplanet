# Styling Map

## Current Styling Model

ChornPlanet is SCSS-first. Tailwind is installed and configured, but most existing pages and components use global SCSS class names and imported vendor CSS.

Global imports live in:

```text
src/app/[locale]/(desktop)/layout.tsx
```

## Imported Style Groups

Vendor/fundamental styles:

- `src/styles/bootstrap.min.css`
- `src/styles/animate.css`
- `src/styles/boxicons.min.css`
- `src/styles/flaticon.css`
- `react-accessible-accordion/dist/fancy-example.css`
- `swiper/swiper-bundle.css`

Core custom styles:

- `src/styles/globals.scss`
- `src/styles/style.scss`
- `src/styles/responsive.scss`
- `src/styles/addition.scss`
- `src/styles/footer.scss`

Navigation styles:

- `src/styles/x-navbar.scss`
- `src/styles/x-navbar-premium.scss`
- `src/styles/x-navbar-language.scss`
- `src/styles/x-color-style.scss`
- `src/styles/x-icon.scss`

Smart City and Smart Mobility styles:

- `src/styles/smart-bottom.scss`
- `src/styles/smart-right.scss`
- `src/styles/smart-privacy.scss`
- `src/styles/smart-hero-section.scss`
- `src/styles/smart-city-slug.scss`
- `src/styles/smart-city-main.scss`
- `src/styles/human-daily-flow.sass.scss`
- `src/styles/local-to-global.scss`
- `src/styles/system-explainers.scss`
- `src/styles/mobility-focus.scss`
- `src/styles/city-systems.scss`
- `src/styles/global-patterns.scss`
- `src/styles/urban-signals.scss`
- `src/styles/editorial-positioning.scss`

## Tailwind Locations

- `tailwind.config.js`
- `postcss.config.js`
- `src/styles/tailwind.scss`
- `src/template/style/tailwind.scss`
- `docs/0100 Setup Tailwind.md`

Tailwind import is currently commented in the main layout. Do not assume Tailwind utilities are globally active without checking the current layout and build output.

## Conventions

- Prefer existing SCSS class conventions.
- `add-` prefixes appear in custom utility and addition-style classes.
- `x-` prefixes appear in navbar and visual variant classes.
- Do not introduce a second design system for a page that already follows SCSS patterns.
- When using `next/image`, include `height: auto` if CSS or props control width.
