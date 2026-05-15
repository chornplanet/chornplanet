import {unstable_cache, revalidateTag} from "next/cache";
import {
    HomePageContentPayload,
    PartialHomePageContentPayload,
    HomePageContentResponse,
    normalizeHomePageLocale,
} from "@/core/domain/homepage-content.entity";
import {HomePageContentService} from "@/core/services/homepage-content.service";
import {HomePageContentRepository} from "@/adapters/outbound/mongo.repository/homepage-content.repository";
import {loadLocalizedContentWithFallback} from "@/lib/localized-content/localizedContentFallback";
import {getFallbackHomePageContent} from "@/lib/static-content/publicContentFallbacks";

const homePageContentService = new HomePageContentService(new HomePageContentRepository());
const HOME_PAGE_CONTENT_LIST_TAG = 'homepage-content';
const isDevelopment = process.env.NODE_ENV !== 'production';
const REQUIRED_HOME_PAGE_FIELDS = [
    'heroSection',
    'humanDailyFlow',
    'localToGlobal',
    'systemExplainers',
    'mobilityFocus',
    'citySystems',
    'globalPatterns',
    'urbanSignals',
    'editorialPositioning',
    'smartCityMain',
    'smartCityHighlight',
    'smartCityTags',
] as const;

function getHomePageContentTag(locale: string) {
    return `homepage-content:${normalizeHomePageLocale(locale)}`;
}

function assertCompleteHomePageContent(
    locale: string,
    databaseContent: HomePageContentResponse | null
): HomePageContentPayload {
    if (!databaseContent) {
        throw new Error(
            `Homepage content not found in MongoDB for locale "${locale}" ` +
            `(database="${process.env.MONGODB_DATABASE}", collection="${process.env.MONGODB_COLLECTION_HOMEPAGE_CONTENT}")`
        );
    }

    const missingFields = REQUIRED_HOME_PAGE_FIELDS.filter((field) => databaseContent[field] === undefined);

    if (missingFields.length > 0) {
        throw new Error(
            `Homepage content is incomplete for locale "${locale}". Missing fields: ${missingFields.join(', ')}`
        );
    }

    return databaseContent as HomePageContentPayload;
}

export async function getHomePageContent(locale: string): Promise<HomePageContentPayload> {
    const normalizedLocale = normalizeHomePageLocale(locale);

    if (isDevelopment) {
        const databaseContent = await homePageContentService.findByLocale(normalizedLocale);
        return assertCompleteHomePageContent(normalizedLocale, databaseContent);
    }

    const getCachedContent = unstable_cache(
        async () => {
            const databaseContent = await homePageContentService.findByLocale(normalizedLocale);
            return assertCompleteHomePageContent(normalizedLocale, databaseContent);
        },
        ['homepage-content-by-locale', normalizedLocale],
        {
            revalidate: 3600,
            tags: [HOME_PAGE_CONTENT_LIST_TAG, getHomePageContentTag(normalizedLocale)],
        }
    );

    return getCachedContent();
}

export async function getHomePageContentForPublicPage(locale: string): Promise<HomePageContentPayload> {
    const normalizedLocale = normalizeHomePageLocale(locale);

    return loadLocalizedContentWithFallback({
        locale: normalizedLocale,
        context: 'homepage content public render',
        load: getHomePageContent,
        fallback: () => getFallbackHomePageContent(normalizedLocale),
    });
}

export async function getAllHomePageContent(): Promise<HomePageContentResponse[]> {
    if (isDevelopment) {
        try {
            return await homePageContentService.findAll();
        } catch (error) {
            console.error('Failed to load homepage content list:', error);
            return [];
        }
    }

    const getCachedContent = unstable_cache(
        async () => {
            try {
                return await homePageContentService.findAll();
            } catch (error) {
                console.error('Failed to load homepage content list:', error);
                return [];
            }
        },
        ['homepage-content-all'],
        {
            revalidate: 3600,
            tags: [HOME_PAGE_CONTENT_LIST_TAG],
        }
    );

    return getCachedContent();
}

export async function upsertHomePageContent(
    content: PartialHomePageContentPayload
): Promise<HomePageContentResponse> {
    const savedContent = await homePageContentService.upsertByLocale(content);
    revalidateTag(HOME_PAGE_CONTENT_LIST_TAG, 'max');
    revalidateTag(getHomePageContentTag(savedContent.locale), 'max');
    return savedContent;
}

export async function deleteHomePageContent(locale: string): Promise<void> {
    const normalizedLocale = normalizeHomePageLocale(locale);
    await homePageContentService.deleteByLocale(normalizedLocale);
    revalidateTag(HOME_PAGE_CONTENT_LIST_TAG, 'max');
    revalidateTag(getHomePageContentTag(normalizedLocale), 'max');
}
