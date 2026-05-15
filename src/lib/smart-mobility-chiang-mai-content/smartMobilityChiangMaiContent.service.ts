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
import {ISmartRoute} from "@/lib/model/ISmartMobility";

const smartMobilityChiangMaiContentService = new SmartMobilityChiangMaiContentService(new SmartMobilityChiangMaiContentRepository());
const SMART_MOBILITY_CHIANG_MAI_CONTENT_LIST_TAG = 'smart-mobility-chiang-mai-content';
const isDevelopment = process.env.NODE_ENV !== 'production';

function getSmartMobilityChiangMaiContentTag(locale: string, slug: string) {
    return `smart-mobility-chiang-mai-content:${normalizeSmartMobilityChiangMaiContentLocale(locale)}:${slug}`;
}

function isCompleteConnectivityMatrix(value: SmartMobilityChiangMaiContentResponse['connectivityMatrix']): boolean {
    return Boolean(value?.title && value?.description);
}

function isCompleteRouteContent(value: SmartMobilityChiangMaiContentResponse['primaryContent']): value is ISmartRoute {
    const route = value as ISmartRoute | undefined;
    return Boolean(
        route?.title &&
        route?.description &&
        route?.transportationModel?.title &&
        route?.transportationModel?.description
    );
}

function getStaticSmartMobilityChiangMaiContentFallback(
    locale: string,
    slug: string
): SmartMobilityChiangMaiContentPayload {
    if (slug === 'hub-to-chiang-mai-airport') {
        return {
            locale: normalizeSmartMobilityChiangMaiContentLocale(locale),
            slug,
            pageType: 'route',
            primaryContent: {
                title: 'Hub to Chiang Mai Airport',
                description: 'A Smart Mobility route concept connecting the Chiang Mai urban hub with Chiang Mai International Airport through coordinated mobility service planning.',
                link: '/smart-mobility/chiang-mai/hub-to-chiang-mai-airport/',
                transportationModel: {
                    title: 'Mobility service model',
                    description: 'The route content is temporarily served from a static fallback while localized MongoDB content is unavailable or incomplete. This keeps the public page available and prevents localized render crashes.',
                    sections: [
                        {
                            title: 'Urban hub connection',
                            description: 'Connects the city hub with airport access planning for future smart mobility service coordination.'
                        },
                        {
                            title: 'Airport access workflow',
                            description: 'Supports structured route explanation, service handoff logic, and public-facing mobility communication.'
                        },
                        {
                            title: 'MongoDB content fallback',
                            description: 'The permanent content source should remain MongoDB. This fallback is a safety bridge for public rendering reliability.'
                        }
                    ]
                },
                media: {
                    image_url: '/images/smart-city/chiang-mai-airport-smart-mobility.jpg',
                    image_tags: ['Smart Mobility', 'Chiang Mai', 'Airport']
                }
            },
            connectivityMatrix: {
                title: 'Chiang Mai Smart Mobility Connectivity',
                description: 'This page describes a mobility connection between the Chiang Mai urban hub and Chiang Mai International Airport. It uses safe static fallback content when database-backed localized content is missing or incomplete.'
            },
            safeStatement: {
                title: 'Concept and service planning note',
                description: 'This content explains a smart mobility planning framework and should not be interpreted as a guarantee of transport service availability, operating approval, or infrastructure deployment.'
            },
            rightItems: [],
            bottomCards: []
        };
    }

    throw new Error(
        `No static smart mobility Chiang Mai fallback configured for locale "${locale}" and slug "${slug}"`
    );
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

    if (databaseContent.pageType === 'route') {
        const missingFields: string[] = [];

        if (!isCompleteRouteContent(databaseContent.primaryContent)) {
            missingFields.push('primaryContent.transportationModel');
        }

        if (!isCompleteConnectivityMatrix(databaseContent.connectivityMatrix)) {
            missingFields.push('connectivityMatrix');
        }

        if (missingFields.length > 0) {
            throw new Error(
                `Smart mobility Chiang Mai route content is incomplete for locale "${locale}" and slug "${slug}". Missing fields: ${missingFields.join(', ')}`
            );
        }
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
    const normalizedLocale = normalizeSmartMobilityChiangMaiContentLocale(locale);

    return loadLocalizedContentWithFallback({
        locale: normalizedLocale,
        context: `smart mobility Chiang Mai content public render slug="${slug}"`,
        load: (resolvedLocale) => getSmartMobilityChiangMaiContent(resolvedLocale, slug),
        fallback: () => getStaticSmartMobilityChiangMaiContentFallback(normalizedLocale, slug),
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
