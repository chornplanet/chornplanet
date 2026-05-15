import {revalidateTag, unstable_cache} from "next/cache";
import {
    AiCompanionsContentPayload,
    AiCompanionsContentResponse,
    normalizeAiCompanionsContentLocale,
    PartialAiCompanionsContentPayload,
} from "@/core/domain/ai-companions-content.entity";
import {AiCompanionsContentService} from "@/core/services/ai-companions-content.service";
import {AiCompanionsContentRepository} from "@/adapters/outbound/mongo.repository/ai-companions-content.repository";
import {loadLocalizedContentWithFallback} from "@/lib/localized-content/localizedContentFallback";
import {getFallbackAiCompanionsContent} from "@/lib/static-content/publicContentFallbacks";

const aiCompanionsContentService = new AiCompanionsContentService(new AiCompanionsContentRepository());
const AI_COMPANIONS_CONTENT_LIST_TAG = 'ai-companions-content';
const isDevelopment = process.env.NODE_ENV !== 'production';
const REQUIRED_AI_COMPANIONS_CONTENT_FIELDS = ['demo', 'service', 'aiCompanions', 'feature', 'media'] as const;

function getAiCompanionsContentTag(locale: string) {
    return `ai-companions-content:${normalizeAiCompanionsContentLocale(locale)}`;
}

function assertCompleteAiCompanionsContent(
    locale: string,
    databaseContent: AiCompanionsContentResponse | null
): AiCompanionsContentPayload {
    if (!databaseContent) {
        throw new Error(
            `AI companions content not found in MongoDB for locale "${locale}" ` +
            `(database="${process.env.MONGODB_DATABASE}", collection="${process.env.MONGODB_COLLECTION_AI_COMPANIONS_CONTENT || 'ai_companions_content'}")`
        );
    }

    const missingFields = REQUIRED_AI_COMPANIONS_CONTENT_FIELDS.filter((field) => databaseContent[field] === undefined);

    if (missingFields.length > 0) {
        throw new Error(
            `AI companions content is incomplete for locale "${locale}". Missing fields: ${missingFields.join(', ')}`
        );
    }

    return databaseContent as AiCompanionsContentPayload;
}

export async function getAiCompanionsContent(locale: string): Promise<AiCompanionsContentPayload> {
    const normalizedLocale = normalizeAiCompanionsContentLocale(locale);

    if (isDevelopment) {
        const databaseContent = await aiCompanionsContentService.findByLocale(normalizedLocale);
        return assertCompleteAiCompanionsContent(normalizedLocale, databaseContent);
    }

    const getCachedContent = unstable_cache(
        async () => {
            const databaseContent = await aiCompanionsContentService.findByLocale(normalizedLocale);
            return assertCompleteAiCompanionsContent(normalizedLocale, databaseContent);
        },
        ['ai-companions-content-by-locale', normalizedLocale],
        {
            revalidate: 3600,
            tags: [AI_COMPANIONS_CONTENT_LIST_TAG, getAiCompanionsContentTag(normalizedLocale)],
        }
    );

    return getCachedContent();
}

export async function getAiCompanionsContentForPublicPage(locale: string): Promise<AiCompanionsContentPayload> {
    const normalizedLocale = normalizeAiCompanionsContentLocale(locale);

    return loadLocalizedContentWithFallback({
        locale: normalizedLocale,
        context: 'AI companions content public render',
        load: getAiCompanionsContent,
        fallback: () => getFallbackAiCompanionsContent(normalizedLocale),
    });
}

export async function getAllAiCompanionsContent(): Promise<AiCompanionsContentResponse[]> {
    if (isDevelopment) {
        try {
            return await aiCompanionsContentService.findAll();
        } catch (error) {
            console.error('Failed to load AI companions content list:', error);
            return [];
        }
    }

    const getCachedContent = unstable_cache(
        async () => {
            try {
                return await aiCompanionsContentService.findAll();
            } catch (error) {
                console.error('Failed to load AI companions content list:', error);
                return [];
            }
        },
        ['ai-companions-content-all'],
        {
            revalidate: 3600,
            tags: [AI_COMPANIONS_CONTENT_LIST_TAG],
        }
    );

    return getCachedContent();
}

export async function upsertAiCompanionsContent(
    content: PartialAiCompanionsContentPayload
): Promise<AiCompanionsContentResponse> {
    const savedContent = await aiCompanionsContentService.upsertByLocale(content);
    revalidateTag(AI_COMPANIONS_CONTENT_LIST_TAG, 'max');
    revalidateTag(getAiCompanionsContentTag(savedContent.locale), 'max');
    return savedContent;
}

export async function deleteAiCompanionsContent(locale: string): Promise<void> {
    const normalizedLocale = normalizeAiCompanionsContentLocale(locale);
    await aiCompanionsContentService.deleteByLocale(normalizedLocale);
    revalidateTag(AI_COMPANIONS_CONTENT_LIST_TAG, 'max');
    revalidateTag(getAiCompanionsContentTag(normalizedLocale), 'max');
}
