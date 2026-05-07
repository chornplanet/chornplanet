import {revalidateTag, unstable_cache} from "next/cache";
import {
    normalizeSmartMobilityChiangMaiContentLocale,
    PartialSmartMobilityChiangMaiContentPayload,
    SmartMobilityChiangMaiContentResponse,
} from "@/core/domain/smart-mobility-chiang-mai-content.entity";
import {SmartMobilityChiangMaiContentPayload} from "@/lib/model/ISmartMobilityChiangMai";
import {SmartMobilityChiangMaiContentService} from "@/core/services/smart-mobility-chiang-mai-content.service";
import {SmartMobilityChiangMaiContentRepository} from "@/adapters/outbound/mongo.repository/smart-mobility-chiang-mai-content.repository";
import {loadLocalizedContentWithFallback} from "@/lib/localized-content/localizedContentFallback";

const smartMobilityChiangMaiContentService = new SmartMobilityChiangMaiContentService(new SmartMobilityChiangMaiContentRepository());
const SMART_MOBILITY_CHIANG_MAI_CONTENT_LIST_TAG = 'smart-mobility-chiang-mai-content';
const isDevelopment = process.env.NODE_ENV !== 'production';

function getSmartMobilityChiangMaiContentTag(locale: string, slug: string) {
    return `smart-mobility-chiang-mai-content:${normalizeSmartMobilityChiangMaiContentLocale(locale)}:${slug}`;
}

function assertCompleteSmartMobilityChiangMaiContent(
    locale: string,
    slug: string,
    databaseContent: SmartMobilityChiangMaiContentResponse | null
): SmartMobilityChiangMaiContentPayload {
    if (!databaseContent?.primaryContent || !databaseContent.rightItems || !databaseContent.bottomCards) {
        throw new Error(
            `Smart mobility Chiang Mai content not found in MongoDB for locale "${locale}" and slug "${slug}" ` +
            `(database="${process.env.MONGODB_DATABASE}", collection="${process.env.MONGODB_COLLECTION_SMART_MOBILITY_CHIANG_MAI_CONTENT || 'smart_mobility_chiang_mai_content'}")`
        );
    }

    return databaseContent as SmartMobilityChiangMaiContentPayload;
}

export async function getSmartMobilityChiangMaiContent(locale: string, slug: string): Promise<SmartMobilityChiangMaiContentPayload> {
    const normalizedLocale = normalizeSmartMobilityChiangMaiContentLocale(locale);

    if (isDevelopment) {
        const databaseContent = await smartMobilityChiangMaiContentService.findByLocaleAndSlug(normalizedLocale, slug);
        return assertCompleteSmartMobilityChiangMaiContent(normalizedLocale, slug, databaseContent);
    }

    const getCachedContent = unstable_cache(
        async () => {
            const databaseContent = await smartMobilityChiangMaiContentService.findByLocaleAndSlug(normalizedLocale, slug);
            return assertCompleteSmartMobilityChiangMaiContent(normalizedLocale, slug, databaseContent);
        },
        ['smart-mobility-chiang-mai-content-by-locale-slug', normalizedLocale, slug],
        {
            revalidate: 3600,
            tags: [SMART_MOBILITY_CHIANG_MAI_CONTENT_LIST_TAG, getSmartMobilityChiangMaiContentTag(normalizedLocale, slug)],
        }
    );

    return getCachedContent();
}

export async function getSmartMobilityChiangMaiContentForPublicPage(
    locale: string,
    slug: string
): Promise<SmartMobilityChiangMaiContentPayload> {
    return loadLocalizedContentWithFallback({
        locale: normalizeSmartMobilityChiangMaiContentLocale(locale),
        context: `smart mobility Chiang Mai content public render slug="${slug}"`,
        load: (resolvedLocale) => getSmartMobilityChiangMaiContent(resolvedLocale, slug),
    });
}

export async function getAllSmartMobilityChiangMaiContent(): Promise<SmartMobilityChiangMaiContentResponse[]> {
    if (isDevelopment) {
        try {
            return await smartMobilityChiangMaiContentService.findAll();
        } catch (error) {
            console.error('Failed to load smart mobility Chiang Mai content list:', error);
            return [];
        }
    }

    const getCachedContent = unstable_cache(
        async () => {
            try {
                return await smartMobilityChiangMaiContentService.findAll();
            } catch (error) {
                console.error('Failed to load smart mobility Chiang Mai content list:', error);
                return [];
            }
        },
        ['smart-mobility-chiang-mai-content-all'],
        {
            revalidate: 3600,
            tags: [SMART_MOBILITY_CHIANG_MAI_CONTENT_LIST_TAG],
        }
    );

    return getCachedContent();
}

export async function upsertSmartMobilityChiangMaiContent(
    content: PartialSmartMobilityChiangMaiContentPayload
): Promise<SmartMobilityChiangMaiContentResponse> {
    const savedContent = await smartMobilityChiangMaiContentService.upsertByLocaleAndSlug(content);
    revalidateTag(SMART_MOBILITY_CHIANG_MAI_CONTENT_LIST_TAG, 'max');
    revalidateTag(getSmartMobilityChiangMaiContentTag(savedContent.locale, savedContent.slug), 'max');
    return savedContent;
}

export async function deleteSmartMobilityChiangMaiContent(locale: string, slug: string): Promise<void> {
    const normalizedLocale = normalizeSmartMobilityChiangMaiContentLocale(locale);
    await smartMobilityChiangMaiContentService.deleteByLocaleAndSlug(normalizedLocale, slug);
    revalidateTag(SMART_MOBILITY_CHIANG_MAI_CONTENT_LIST_TAG, 'max');
    revalidateTag(getSmartMobilityChiangMaiContentTag(normalizedLocale, slug), 'max');
}
