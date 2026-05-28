# Metadata And SEO Map

## Metadata Locations

- Main metadata aggregators: `src/metadata/main/Metadata<Name>.ts`
- Locale-specific metadata: `src/metadata/pages/...`
- Feature metadata: `src/metadata/smart-city`, `src/metadata/smart-city-landing`, `src/metadata/smart-mobility`
- Metadata link helpers: `src/metadata/metadataLink/`
- Image version helpers: `src/metadata/version/`

## Page Pattern

Pages commonly read the locale header and return metadata from a locale map:

```ts
export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataName[lang];
}
```

## Sitemap

`src/app/sitemap.ts`:

- imports locales and site URL from `src/lib/SiteUrlLocales.ts`
- delegates route inventory to `src/lib/sitemap/sitemapRoutes.ts`
- discovers static public routes from `src/app/[locale]`
- adds dynamic Smart City, MTS, and Style detail routes from content services or platform seed data
- filters redirected and non-indexable utility routes
- emits localized URLs with trailing slashes
- emits language alternates for each localized URL

## Robots

`src/app/robots.ts`:

- allows public crawling
- disallows `/api/openai` and `/_next/static/`
- points to `https://www.chornplanet.com/sitemap.xml`

## Route And Image Sources

- Sitemap route inventory: `src/lib/sitemap/sitemapRoutes.ts`
- Public image registry: `src/image/ImageUrl.ts`
- OpenGraph image rewrite behavior: `next.config.mjs`

## SEO/LLM Direction

Future `llm.txt` and `llm-full.txt` should be public-facing summaries only. They must not expose internal strategy, credentials, draft plans, private URLs, or unpublished commerce/customer data.

## Metadata Change Checklist

- Add metadata for all 10 locales.
- Keep canonical URLs and alternate language URLs aligned.
- Add schema markup for public service pages when useful.
- Add a `page.tsx` under `src/app/[locale]` for static indexed routes, or add a dynamic resolver in `src/lib/sitemap/sitemapRoutes.ts` for dynamic slug routes.
- Keep titles/descriptions human and accurate; avoid keyword stuffing.
