import {revalidateTag, unstable_cache} from "next/cache";
import {
    normalizeSmartCityLandingContentLocale,
    PartialSmartCityLandingContentPayload,
    SmartCityLandingContentResponse,
} from "@/core/domain/smart-city-landing-content.entity";
import {SmartCityLandingContentPayload} from "@/lib/model/ISmartCityLandingContent";
import {SmartCityLandingContentService} from "@/core/services/smart-city-landing-content.service";
import {SmartCityLandingContentRepository} from "@/adapters/outbound/mongo.repository/smart-city-landing-content.repository";
import {loadLocalizedContentWithFallback} from "@/lib/localized-content/localizedContentFallback";
import {getFallbackSmartCityLandingContent} from "@/lib/static-content/publicContentFallbacks";

const smartCityLandingContentService = new SmartCityLandingContentService(new SmartCityLandingContentRepository());
const SMART_CITY_LANDING_CONTENT_LIST_TAG = 'smart-city-landing-content';
const isDevelopment = process.env.NODE_ENV !== 'production';

function getSmartCityLandingContentTag(locale: string, slug: string) {
    return `smart-city-landing-content:${normalizeSmartCityLandingContentLocale(locale)}:${slug}`;
}

function assertCompleteSmartCityLandingContent(
    locale: string,
    slug: string,
    databaseContent: SmartCityLandingContentResponse | null
): SmartCityLandingContentPayload {
    if (!databaseContent?.content) {
        throw new Error(
            `Smart city landing content not found in MongoDB for locale "${locale}" and slug "${slug}" ` +
            `(database="${process.env.MONGODB_DATABASE}", collection="${process.env.MONGODB_COLLECTION_SMART_CITY_LANDING_CONTENT || 'smart_city_landing_content'}")`
        );
    }

    return databaseContent as SmartCityLandingContentPayload;
}

export async function getSmartCityLandingContent(locale: string, slug: string): Promise<SmartCityLandingContentPayload> {
    const normalizedLocale = normalizeSmartCityLandingContentLocale(locale);

    if (isDevelopment) {
        const databaseContent = await smartCityLandingContentService.findByLocaleAndSlug(normalizedLocale, slug);
        return assertCompleteSmartCityLandingContent(normalizedLocale, slug, databaseContent);
    }

    const getCachedContent = unstable_cache(
        async () => {
            const databaseContent = await smartCityLandingContentService.findByLocaleAndSlug(normalizedLocale, slug);
            return assertCompleteSmartCityLandingContent(normalizedLocale, slug, databaseContent);
        },
        ['smart-city-landing-content-by-locale-slug', normalizedLocale, slug],
        {
            revalidate: 3600,
            tags: [SMART_CITY_LANDING_CONTENT_LIST_TAG, getSmartCityLandingContentTag(normalizedLocale, slug)],
        }
    );

    return getCachedContent();
}

export async function getSmartCityLandingContentForPublicPage(
    locale: string,
    slug: string
): Promise<SmartCityLandingContentPayload> {
    const normalizedLocale = normalizeSmartCityLandingContentLocale(locale);

    return loadLocalizedContentWithFallback({
        locale: normalizedLocale,
        context: `smart city landing content public render slug="${slug}"`,
        load: (resolvedLocale) => getSmartCityLandingContent(resolvedLocale, slug),
        fallback: () => getFallbackSmartCityLandingContent(normalizedLocale, slug),
    });
}

export async function getAllSmartCityLandingContent(): Promise<SmartCityLandingContentResponse[]> {
    if (isDevelopment) {
        try {
            return await smartCityLandingContentService.findAll();
        } catch (error) {
            console.error('Failed to load smart city landing content list:', error);
            return [];
        }
    }

    const getCachedContent = unstable_cache(
        async () => {
            try {
                return await smartCityLandingContentService.findAll();
            } catch (error) {
                console.error('Failed to load smart city landing content list:', error);
                return [];
            }
        },
        ['smart-city-landing-content-all'],
        {
            revalidate: 3600,
            tags: [SMART_CITY_LANDING_CONTENT_LIST_TAG],
        }
    );

    return getCachedContent();
}

export async function upsertSmartCityLandingContent(
    content: PartialSmartCityLandingContentPayload
): Promise<SmartCityLandingContentResponse> {
    const savedContent = await smartCityLandingContentService.upsertByLocaleAndSlug(content);
    revalidateTag(SMART_CITY_LANDING_CONTENT_LIST_TAG, 'max');
    revalidateTag(getSmartCityLandingContentTag(savedContent.locale, savedContent.slug), 'max');
    return savedContent;
}

export async function deleteSmartCityLandingContent(locale: string, slug: string): Promise<void> {
    const normalizedLocale = normalizeSmartCityLandingContentLocale(locale);
    await smartCityLandingContentService.deleteByLocaleAndSlug(normalizedLocale, slug);
    revalidateTag(SMART_CITY_LANDING_CONTENT_LIST_TAG, 'max');
    revalidateTag(getSmartCityLandingContentTag(normalizedLocale, slug), 'max');
}
