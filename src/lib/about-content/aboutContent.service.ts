import {revalidateTag, unstable_cache} from "next/cache";
import {
    AboutContentPayload,
    AboutContentResponse,
    normalizeAboutContentLocale,
    PartialAboutContentPayload,
} from "@/core/domain/about-content.entity";
import {AboutContentService} from "@/core/services/about-content.service";
import {AboutContentRepository} from "@/adapters/outbound/mongo.repository/about-content.repository";
import {loadLocalizedContentWithFallback} from "@/lib/localized-content/localizedContentFallback";

const aboutContentService = new AboutContentService(new AboutContentRepository());
const ABOUT_CONTENT_LIST_TAG = 'about-content';
const isDevelopment = process.env.NODE_ENV !== 'production';
const REQUIRED_ABOUT_CONTENT_FIELDS = ['about', 'media'] as const;

function getAboutContentTag(locale: string) {
    return `about-content:${normalizeAboutContentLocale(locale)}`;
}

function assertCompleteAboutContent(
    locale: string,
    databaseContent: AboutContentResponse | null
): AboutContentPayload {
    if (!databaseContent) {
        throw new Error(
            `About content not found in MongoDB for locale "${locale}" ` +
            `(database="${process.env.MONGODB_DATABASE}", collection="${process.env.MONGODB_COLLECTION_ABOUT_CONTENT || 'about_content'}")`
        );
    }

    const missingFields = REQUIRED_ABOUT_CONTENT_FIELDS.filter((field) => databaseContent[field] === undefined);

    if (missingFields.length > 0) {
        throw new Error(
            `About content is incomplete for locale "${locale}". Missing fields: ${missingFields.join(', ')}`
        );
    }

    return databaseContent as AboutContentPayload;
}

export async function getAboutContent(locale: string): Promise<AboutContentPayload> {
    const normalizedLocale = normalizeAboutContentLocale(locale);

    if (isDevelopment) {
        const databaseContent = await aboutContentService.findByLocale(normalizedLocale);
        return assertCompleteAboutContent(normalizedLocale, databaseContent);
    }

    const getCachedContent = unstable_cache(
        async () => {
            const databaseContent = await aboutContentService.findByLocale(normalizedLocale);
            return assertCompleteAboutContent(normalizedLocale, databaseContent);
        },
        ['about-content-by-locale', normalizedLocale],
        {
            revalidate: 3600,
            tags: [ABOUT_CONTENT_LIST_TAG, getAboutContentTag(normalizedLocale)],
        }
    );

    return getCachedContent();
}

export async function getAboutContentForPublicPage(locale: string): Promise<AboutContentPayload> {
    return loadLocalizedContentWithFallback({
        locale: normalizeAboutContentLocale(locale),
        context: 'about content public render',
        load: getAboutContent,
    });
}

export async function getAllAboutContent(): Promise<AboutContentResponse[]> {
    if (isDevelopment) {
        try {
            return await aboutContentService.findAll();
        } catch (error) {
            console.error('Failed to load about content list:', error);
            return [];
        }
    }

    const getCachedContent = unstable_cache(
        async () => {
            try {
                return await aboutContentService.findAll();
            } catch (error) {
                console.error('Failed to load about content list:', error);
                return [];
            }
        },
        ['about-content-all'],
        {
            revalidate: 3600,
            tags: [ABOUT_CONTENT_LIST_TAG],
        }
    );

    return getCachedContent();
}

export async function upsertAboutContent(
    content: PartialAboutContentPayload
): Promise<AboutContentResponse> {
    const savedContent = await aboutContentService.upsertByLocale(content);
    revalidateTag(ABOUT_CONTENT_LIST_TAG, 'max');
    revalidateTag(getAboutContentTag(savedContent.locale), 'max');
    return savedContent;
}

export async function deleteAboutContent(locale: string): Promise<void> {
    const normalizedLocale = normalizeAboutContentLocale(locale);
    await aboutContentService.deleteByLocale(normalizedLocale);
    revalidateTag(ABOUT_CONTENT_LIST_TAG, 'max');
    revalidateTag(getAboutContentTag(normalizedLocale), 'max');
}
