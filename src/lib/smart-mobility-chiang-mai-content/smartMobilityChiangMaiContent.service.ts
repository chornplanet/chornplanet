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
import {IMedia, ISmartImage, ISmartRoute, ISmartSection, IVertiport} from "@/lib/model/ISmartMobility";
import {getFallbackSmartMobilityChiangMaiContent} from "@/lib/static-content/publicContentFallbacks";

const smartMobilityChiangMaiContentService = new SmartMobilityChiangMaiContentService(new SmartMobilityChiangMaiContentRepository());
const SMART_MOBILITY_CHIANG_MAI_CONTENT_LIST_TAG = 'smart-mobility-chiang-mai-content';
const isDevelopment = process.env.NODE_ENV !== 'production';

function getSmartMobilityChiangMaiContentTag(locale: string, slug: string) {
    return `smart-mobility-chiang-mai-content:${normalizeSmartMobilityChiangMaiContentLocale(locale)}:${slug}`;
}

function isCompleteConnectivityMatrix(value: SmartMobilityChiangMaiContentResponse['connectivityMatrix']): boolean {
    return Boolean(value?.title && value?.description);
}

function isSmartMobilityContentList<T>(value: T[] | unknown): value is T[] {
    return Array.isArray(value) && value.length > 0;
}

function mergeSmartMobilityMedia(
    databaseMedia: IMedia | undefined,
    fallbackMedia: IMedia | undefined
): IMedia | undefined {
    if (!databaseMedia) {
        return fallbackMedia;
    }

    return {
        ...fallbackMedia,
        ...databaseMedia,
        image_url: databaseMedia.image_url || fallbackMedia?.image_url,
        image_path: databaseMedia.image_path || fallbackMedia?.image_path,
        video_url: databaseMedia.video_url || fallbackMedia?.video_url,
        video_path: databaseMedia.video_path || fallbackMedia?.video_path,
        image_tags: Array.isArray(databaseMedia.image_tags) && databaseMedia.image_tags.length > 0
            ? databaseMedia.image_tags
            : fallbackMedia?.image_tags,
    };
}

function isCompleteSectionContent(value: SmartMobilityChiangMaiContentResponse['primaryContent']): value is ISmartSection {
    const section = value as ISmartSection | undefined;
    return Boolean(section?.title && section?.description);
}

function isCompleteRouteContent(value: SmartMobilityChiangMaiContentResponse['primaryContent']): value is ISmartRoute {
    const route = value as ISmartRoute | undefined;
    return Boolean(
        route?.title &&
        route?.description &&
        route?.link &&
        route?.transportationModel?.title &&
        route?.transportationModel?.description
    );
}

function isCompleteVertiportContent(value: SmartMobilityChiangMaiContentResponse['primaryContent']): value is IVertiport {
    const vertiport = value as IVertiport | undefined;
    return Boolean(
        vertiport?.title &&
        vertiport?.description &&
        vertiport?.link &&
        vertiport?.structureTitle &&
        Array.isArray(vertiport.structure)
    );
}

function mergeSmartSectionContent(
    databaseContent: SmartMobilityChiangMaiContentResponse['primaryContent'],
    fallbackContent: ISmartSection
): ISmartSection {
    const section = databaseContent as Partial<ISmartSection> | undefined;

    return {
        ...fallbackContent,
        ...section,
        title: section?.title || fallbackContent.title,
        description: section?.description || fallbackContent.description,
        link: section?.link || fallbackContent.link,
        items: section?.items ?? fallbackContent.items,
        media: mergeSmartMobilityMedia(section?.media, fallbackContent.media),
        safeStatement: section?.safeStatement ?? fallbackContent.safeStatement,
    };
}

function mergeSmartRouteContent(
    databaseContent: SmartMobilityChiangMaiContentResponse['primaryContent'],
    fallbackContent: ISmartRoute
): ISmartRoute {
    const route = databaseContent as Partial<ISmartRoute> | undefined;

    return {
        ...fallbackContent,
        ...route,
        title: route?.title || fallbackContent.title,
        description: route?.description || fallbackContent.description,
        link: route?.link || fallbackContent.link,
        contents: route?.contents ?? fallbackContent.contents,
        transportationModel: {
            ...fallbackContent.transportationModel,
            ...route?.transportationModel,
            title: route?.transportationModel?.title || fallbackContent.transportationModel.title,
            description: route?.transportationModel?.description || fallbackContent.transportationModel.description,
            contents: route?.transportationModel?.contents ?? fallbackContent.transportationModel.contents,
            sections: route?.transportationModel?.sections ?? fallbackContent.transportationModel.sections,
        },
        media: mergeSmartMobilityMedia(route?.media, fallbackContent.media),
    };
}

function mergeVertiportContent(
    databaseContent: SmartMobilityChiangMaiContentResponse['primaryContent'],
    fallbackContent: IVertiport
): IVertiport {
    const vertiport = databaseContent as Partial<IVertiport> | undefined;

    return {
        ...fallbackContent,
        ...vertiport,
        title: vertiport?.title || fallbackContent.title,
        description: vertiport?.description || fallbackContent.description,
        link: vertiport?.link || fallbackContent.link,
        structureTitle: vertiport?.structureTitle || fallbackContent.structureTitle,
        structure: vertiport?.structure ?? fallbackContent.structure,
        media: mergeSmartMobilityMedia(vertiport?.media, fallbackContent.media),
    };
}

function mergeSmartMobilityChiangMaiContentWithFallback(
    locale: string,
    slug: string,
    databaseContent: SmartMobilityChiangMaiContentResponse
): SmartMobilityChiangMaiContentPayload {
    const fallbackContent = getFallbackSmartMobilityChiangMaiContent(locale, slug, {log: false});
    const fallbackPrimaryContent = fallbackContent.primaryContent;
    let primaryContent: SmartMobilityChiangMaiContentPayload['primaryContent'];

    if (databaseContent.pageType === 'route') {
        primaryContent = mergeSmartRouteContent(
            databaseContent.primaryContent,
            fallbackPrimaryContent as ISmartRoute
        );
    } else if (databaseContent.pageType === 'vertiport') {
        primaryContent = mergeVertiportContent(
            databaseContent.primaryContent,
            fallbackPrimaryContent as IVertiport
        );
    } else {
        primaryContent = mergeSmartSectionContent(
            databaseContent.primaryContent,
            fallbackPrimaryContent as ISmartSection
        );
    }

    return {
        ...fallbackContent,
        ...databaseContent,
        locale: databaseContent.locale || fallbackContent.locale,
        slug: databaseContent.slug || fallbackContent.slug,
        pageType: databaseContent.pageType || fallbackContent.pageType,
        primaryContent,
        connectivityMatrix: isCompleteConnectivityMatrix(databaseContent.connectivityMatrix)
            ? databaseContent.connectivityMatrix
            : fallbackContent.connectivityMatrix,
        safeStatement: databaseContent.safeStatement ?? fallbackContent.safeStatement,
        rightItems: isSmartMobilityContentList<ISmartImage>(databaseContent.rightItems)
            ? databaseContent.rightItems
            : fallbackContent.rightItems,
        bottomCards: isSmartMobilityContentList<ISmartSection | ISmartRoute>(databaseContent.bottomCards)
            ? databaseContent.bottomCards
            : fallbackContent.bottomCards,
    };
}

function assertCompleteSmartMobilityChiangMaiContent(
    locale: string,
    slug: string,
    databaseContent: SmartMobilityChiangMaiContentResponse | null
): SmartMobilityChiangMaiContentPayload {
    if (
        !databaseContent?.primaryContent ||
        !isSmartMobilityContentList(databaseContent.rightItems) ||
        !isSmartMobilityContentList(databaseContent.bottomCards)
    ) {
        throw new Error(
            `Smart mobility Chiang Mai content not found in MongoDB for locale "${locale}" and slug "${slug}" ` +
            `(database="${process.env.MONGODB_DATABASE}", collection="${process.env.MONGODB_COLLECTION_SMART_MOBILITY_CHIANG_MAI_CONTENT || 'smart_mobility_chiang_mai_content'}")`
        );
    }

    const mergedContent = mergeSmartMobilityChiangMaiContentWithFallback(locale, slug, databaseContent);

    if (mergedContent.pageType === 'route' && !isCompleteRouteContent(mergedContent.primaryContent)) {
        throw new Error(
            `Smart mobility Chiang Mai route content is incomplete for locale "${locale}" and slug "${slug}" after fallback merge.`
        );
    }

    if (mergedContent.pageType === 'vertiport' && !isCompleteVertiportContent(mergedContent.primaryContent)) {
        throw new Error(
            `Smart mobility Chiang Mai vertiport content is incomplete for locale "${locale}" and slug "${slug}" after fallback merge.`
        );
    }

    if (mergedContent.pageType !== 'route' && mergedContent.pageType !== 'vertiport' && !isCompleteSectionContent(mergedContent.primaryContent)) {
        throw new Error(
            `Smart mobility Chiang Mai section content is incomplete for locale "${locale}" and slug "${slug}" after fallback merge.`
        );
    }

    return mergedContent;
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
        fallback: () => getFallbackSmartMobilityChiangMaiContent(normalizedLocale, slug),
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
