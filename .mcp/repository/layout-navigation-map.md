# Layout And Navigation Map

## Root Layout

Main localized layout:

```text
src/app/[locale]/(legacy)/layout.tsx
```

Responsibilities:

- imports global/vendor/custom SCSS
- loads `DM_Sans`
- reads locale and cookie consent headers
- loads layout content from `src/lib/layout-content/layoutContent.service.ts`
- wraps pages with `AppProvider`
- renders `CookieConsentChecking`, `NavbarContainer`, `FooterMain`, `AosAnimation`, `GoTop`, and `SpeedInsights`

## Navigation Components

Primary navigation files:

- `src/components/Navbar/NavbarContainer.tsx`
- `src/components/Navbar/DesktopNavbarContainer.tsx`
- `src/components/Navbar/HamburgerButton.tsx`
- `src/components/Navbar/LanguageButton.tsx`

Navigation styling:

- `src/styles/navigation/navbar.scss`
- `src/styles/navigation/navbar-premium.scss`
- `src/styles/navigation/navbar-language.scss`
- `src/styles/utilities/additional-icon.scss`

## Footer Components

Primary footer files:

- `src/components/Footer/FooterMain.tsx`
- `src/components/Footer/FooterCopyRight.tsx`
- `src/components/Footer/Left/FooterLogoSocial.tsx`
- `src/components/Footer/smart-footer/*`
- `src/styles/layout/footer.scss`

## Navigation Content Source

Layout/nav/footer copy comes through `getLayoutContent(lang)`. Current platform launch normalization happens in `src/lib/layout-content/layoutContent.service.ts`, including the primary navigation:

```text
Home
Luxury
Smart Food
Style
Smart City
Smart Mobility
Story
About
```

Inspect:

- `src/lib/layout-content/layoutContent.service.ts`
- `server/core/services/layout-content.service.ts`
- `server/adapters/outbound/mongo.repository/layout-content.repository.ts`

Current footer normalization keeps `Platform`, `Projects`, `Commerce`, `Important Links`, and `Connect` aligned with the platform architecture, removes YouTube/Facebook from Connect, and keeps TikTok as an external commerce link.

## Future Expansion Guidance

- Add media, commerce, Smart Food, and civilization links through layout content first, then render components.
- Preserve localized route prefixes and trailing slashes.
- Keep dense navigation scannable; avoid adding large marketing blocks inside the nav.
- For menu changes, check desktop and mobile behavior because navbar components share content.
