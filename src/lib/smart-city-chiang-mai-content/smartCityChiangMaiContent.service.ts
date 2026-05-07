import {revalidateTag, unstable_cache} from "next/cache";
import {
    normalizeSmartCityChiangMaiContentLocale,
    PartialSmartCityChiangMaiContentPayload,
    SmartCityChiangMaiContentResponse,
} from "@/core/domain/smart-city-chiang-mai-content.entity";
import {SmartCityChiangMaiContentPayload} from "@/lib/model/ISmartCityChiangMai";
import {SmartCityChiangMaiContentService} from "@/core/services/smart-city-chiang-mai-content.service";
import {SmartCityChiangMaiContentRepository} from "@/adapters/outbound/mongo.repository/smart-city-chiang-mai-content.repository";
import {loadLocalizedContentWithFallback} from "@/lib/localized-content/localizedContentFallback";

const smartCityChiangMaiContentService = new SmartCityChiangMaiContentService(new SmartCityChiangMaiContentRepository());
const SMART_CITY_CHIANG_MAI_CONTENT_LIST_TAG = 'smart-city-chiang-mai-content';
const isDevelopment = process.env.NODE_ENV !== 'production';

function getSmartCityChiangMaiContentTag(locale: string, slug: string) {
    return `smart-city-chiang-mai-content:${normalizeSmartCityChiangMaiContentLocale(locale)}:${slug}`;
}

function assertCompleteSmartCityChiangMaiContent(
    locale: string,
    slug: string,
    databaseContent: SmartCityChiangMaiContentResponse | null
): SmartCityChiangMaiContentPayload {
    if (!databaseContent?.item || !databaseContent.relatedItems || !databaseContent.bottomContent) {
        throw new Error(
            `Smart city Chiang Mai content not found in MongoDB for locale "${locale}" and slug "${slug}" ` +
            `(database="${process.env.MONGODB_DATABASE}", collection="${process.env.MONGODB_COLLECTION_SMART_CITY_CHIANG_MAI_CONTENT || 'smart_city_chiang_mai_content'}")`
        );
    }

    return databaseContent as SmartCityChiangMaiContentPayload;
}

export async function getSmartCityChiangMaiContent(locale: string, slug: string): Promise<SmartCityChiangMaiContentPayload> {
    const normalizedLocale = normalizeSmartCityChiangMaiContentLocale(locale);

    if (isDevelopment) {
        const databaseContent = await smartCityChiangMaiContentService.findByLocaleAndSlug(normalizedLocale, slug);
        return assertCompleteSmartCityChiangMaiContent(normalizedLocale, slug, databaseContent);
    }

    const getCachedContent = unstable_cache(
        async () => {
            const databaseContent = await smartCityChiangMaiContentService.findByLocaleAndSlug(normalizedLocale, slug);
            return assertCompleteSmartCityChiangMaiContent(normalizedLocale, slug, databaseContent);
        },
        ['smart-city-chiang-mai-content-by-locale-slug', normalizedLocale, slug],
        {
            revalidate: 3600,
            tags: [SMART_CITY_CHIANG_MAI_CONTENT_LIST_TAG, getSmartCityChiangMaiContentTag(normalizedLocale, slug)],
        }
    );

    return getCachedContent();
}

export async function getSmartCityChiangMaiContentForPublicPage(
    locale: string,
    slug: string
): Promise<SmartCityChiangMaiContentPayload> {
    return loadLocalizedContentWithFallback({
        locale: normalizeSmartCityChiangMaiContentLocale(locale),
        context: `smart city Chiang Mai content public render slug="${slug}"`,
        load: (resolvedLocale) => getSmartCityChiangMaiContent(resolvedLocale, slug),
    });
}

export async function getAllSmartCityChiangMaiContent(): Promise<SmartCityChiangMaiContentResponse[]> {
    if (isDevelopment) {
        try {
            return await smartCityChiangMaiContentService.findAll();
        } catch (error) {
            console.error('Failed to load smart city Chiang Mai content list:', error);
            return [];
        }
    }

    const getCachedContent = unstable_cache(
        async () => {
            try {
                return await smartCityChiangMaiContentService.findAll();
            } catch (error) {
                console.error('Failed to load smart city Chiang Mai content list:', error);
                return [];
            }
        },
        ['smart-city-chiang-mai-content-all'],
        {
            revalidate: 3600,
            tags: [SMART_CITY_CHIANG_MAI_CONTENT_LIST_TAG],
        }
    );

    return getCachedContent();
}

export async function upsertSmartCityChiangMaiContent(
    content: PartialSmartCityChiangMaiContentPayload
): Promise<SmartCityChiangMaiContentResponse> {
    const savedContent = await smartCityChiangMaiContentService.upsertByLocaleAndSlug(content);
    revalidateTag(SMART_CITY_CHIANG_MAI_CONTENT_LIST_TAG, 'max');
    revalidateTag(getSmartCityChiangMaiContentTag(savedContent.locale, savedContent.slug), 'max');
    return savedContent;
}

export async function deleteSmartCityChiangMaiContent(locale: string, slug: string): Promise<void> {
    const normalizedLocale = normalizeSmartCityChiangMaiContentLocale(locale);
    await smartCityChiangMaiContentService.deleteByLocaleAndSlug(normalizedLocale, slug);
    revalidateTag(SMART_CITY_CHIANG_MAI_CONTENT_LIST_TAG, 'max');
    revalidateTag(getSmartCityChiangMaiContentTag(normalizedLocale, slug), 'max');
}
