# Locale And i18n Map

## Locales

Canonical locale list lives in `src/lib/SiteUrlLocales.ts`:

```text
da, de, en, fi, fr, ja, ko, nl, th, zh
```

`src/proxy.ts` also contains the locale matcher. Keep both aligned.

## Runtime Locale Flow

1. `src/proxy.ts` reads the first path segment.
2. If no valid locale exists, it redirects to `/en`.
3. It writes `x-locale`, `x-pathname`, and `x-cookie-consent` response headers.
4. Pages and layouts call `headers()` and read `x-locale`.
5. Components receive `lang` props and load localized content.

## Layout Locale Use

`src/app/[locale]/(desktop)/layout.tsx`:

- sets `<html lang={lang}>`
- keeps `data-scroll-behavior="smooth"`
- loads layout content with `getLayoutContent(lang)`
- passes localized navbar, consent, and footer content to shared components

## Content Locale Rules

- User-facing content must support all 10 locales.
- Content services should return locale-specific values based on `lang`.
- Do not hardcode English copy in shared components unless the component is intentionally non-localized.
- Metadata must also support all 10 locales for public pages.

## Locale Change Checklist

If adding or renaming a locale, update:

- `src/lib/SiteUrlLocales.ts`
- `src/proxy.ts`
- metadata locale maps under `src/metadata/`
- content loaders under `src/lib/*-content/`
- sitemap behavior in `src/app/sitemap.ts`
- navigation language options through layout content
