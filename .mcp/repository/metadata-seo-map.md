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

- imports `UrlMaps` from `src/lib/UrlMaps.ts`
- imports locales and site URL from `src/lib/SiteUrlLocales.ts`
- adds dynamic Smart City routes from content services
- emits localized URLs with trailing slashes
- includes images for static URL map entries

## Robots

`src/app/robots.ts`:

- allows public crawling
- disallows `/api/openai` and `/_next/static/`
- points to `https://chornplanet.com/sitemap.xml`

## URL And Image Maps

- Static sitemap route inventory: `src/lib/UrlMaps.ts`
- Public image registry: `src/image/ImageUrl.ts`
- OpenGraph image rewrite behavior: `next.config.mjs`

## SEO/LLM Direction

Future `llm.txt` and `llm-full.txt` should be public-facing summaries only. They must not expose internal strategy, credentials, draft plans, private URLs, or unpublished commerce/customer data.

## Metadata Change Checklist

- Add metadata for all 10 locales.
- Keep canonical URLs and alternate language URLs aligned.
- Add schema markup for public service pages when useful.
- Update sitemap source for any indexed route.
- Keep titles/descriptions human and accurate; avoid keyword stuffing.
