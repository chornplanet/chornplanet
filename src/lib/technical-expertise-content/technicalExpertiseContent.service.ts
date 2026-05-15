import {revalidateTag, unstable_cache} from "next/cache";
import {
    normalizeTechnicalExpertiseContentLocale,
    PartialTechnicalExpertiseContentPayload,
    TechnicalExpertiseContentPayload,
    TechnicalExpertiseContentResponse,
} from "@/core/domain/technical-expertise-content.entity";
import {TechnicalExpertiseContentService} from "@/core/services/technical-expertise-content.service";
import {TechnicalExpertiseContentRepository} from "@/adapters/outbound/mongo.repository/technical-expertise-content.repository";
import {loadLocalizedContentWithFallback} from "@/lib/localized-content/localizedContentFallback";
import {getFallbackTechnicalExpertiseContent} from "@/lib/static-content/publicContentFallbacks";

const technicalExpertiseContentService =
    new TechnicalExpertiseContentService(new TechnicalExpertiseContentRepository());
const TECHNICAL_EXPERTISE_CONTENT_LIST_TAG = 'technical-expertise-content';
const isDevelopment = process.env.NODE_ENV !== 'production';
const REQUIRED_TECHNICAL_EXPERTISE_CONTENT_FIELDS = [
    'mobileDevelopment',
    'feature',
    'frontEnd',
    'fullStack',
    'devOps',
    'cloud',
    'web3',
    'cloudSolution',
] as const;

function getTechnicalExpertiseContentTag(locale: string) {
    return `technical-expertise-content:${normalizeTechnicalExpertiseContentLocale(locale)}`;
}

function assertCompleteTechnicalExpertiseContent(
    locale: string,
    databaseContent: TechnicalExpertiseContentResponse | null
): TechnicalExpertiseContentPayload {
    if (!databaseContent) {
        throw new Error(
            `Technical expertise content not found in MongoDB for locale "${locale}" ` +
            `(database="${process.env.MONGODB_DATABASE}", collection="${process.env.MONGODB_COLLECTION_TECHNICAL_EXPERTISE_CONTENT || 'technical_expertise_content'}")`
        );
    }

    const missingFields = REQUIRED_TECHNICAL_EXPERTISE_CONTENT_FIELDS.filter((field) => databaseContent[field] === undefined);

    if (missingFields.length > 0) {
        throw new Error(
            `Technical expertise content is incomplete for locale "${locale}". Missing fields: ${missingFields.join(', ')}`
        );
    }

    return databaseContent as TechnicalExpertiseContentPayload;
}

export async function getTechnicalExpertiseContent(locale: string): Promise<TechnicalExpertiseContentPayload> {
    const normalizedLocale = normalizeTechnicalExpertiseContentLocale(locale);

    if (isDevelopment) {
        const databaseContent = await technicalExpertiseContentService.findByLocale(normalizedLocale);
        return assertCompleteTechnicalExpertiseContent(normalizedLocale, databaseContent);
    }

    const getCachedContent = unstable_cache(
        async () => {
            const databaseContent = await technicalExpertiseContentService.findByLocale(normalizedLocale);
            return assertCompleteTechnicalExpertiseContent(normalizedLocale, databaseContent);
        },
        ['technical-expertise-content-by-locale', normalizedLocale],
        {
            revalidate: 3600,
            tags: [TECHNICAL_EXPERTISE_CONTENT_LIST_TAG, getTechnicalExpertiseContentTag(normalizedLocale)],
        }
    );

    return getCachedContent();
}

export async function getTechnicalExpertiseContentForPublicPage(locale: string): Promise<TechnicalExpertiseContentPayload> {
    const normalizedLocale = normalizeTechnicalExpertiseContentLocale(locale);

    return loadLocalizedContentWithFallback({
        locale: normalizedLocale,
        context: 'technical expertise content public render',
        load: getTechnicalExpertiseContent,
        fallback: () => getFallbackTechnicalExpertiseContent(normalizedLocale),
    });
}

export async function getAllTechnicalExpertiseContent(): Promise<TechnicalExpertiseContentResponse[]> {
    if (isDevelopment) {
        try {
            return await technicalExpertiseContentService.findAll();
        } catch (error) {
            console.error('Failed to load technical expertise content list:', error);
            return [];
        }
    }

    const getCachedContent = unstable_cache(
        async () => {
            try {
                return await technicalExpertiseContentService.findAll();
            } catch (error) {
                console.error('Failed to load technical expertise content list:', error);
                return [];
            }
        },
        ['technical-expertise-content-all'],
        {
            revalidate: 3600,
            tags: [TECHNICAL_EXPERTISE_CONTENT_LIST_TAG],
        }
    );

    return getCachedContent();
}

export async function upsertTechnicalExpertiseContent(
    content: PartialTechnicalExpertiseContentPayload
): Promise<TechnicalExpertiseContentResponse> {
    const savedContent = await technicalExpertiseContentService.upsertByLocale(content);
    revalidateTag(TECHNICAL_EXPERTISE_CONTENT_LIST_TAG, 'max');
    revalidateTag(getTechnicalExpertiseContentTag(savedContent.locale), 'max');
    return savedContent;
}

export async function deleteTechnicalExpertiseContent(locale: string): Promise<void> {
    const normalizedLocale = normalizeTechnicalExpertiseContentLocale(locale);
    await technicalExpertiseContentService.deleteByLocale(normalizedLocale);
    revalidateTag(TECHNICAL_EXPERTISE_CONTENT_LIST_TAG, 'max');
    revalidateTag(getTechnicalExpertiseContentTag(normalizedLocale), 'max');
}
