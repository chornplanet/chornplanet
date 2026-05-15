import {unstable_cache, revalidateTag} from "next/cache";
import {ISmartFoodAiMetadataContent} from "@/lib/model/ISmartFoodAiContent";
import {
    normalizeSmartFoodAiContentLocale,
    PartialSmartFoodAiContentPayload,
    SmartFoodAiContentPayload,
    SmartFoodAiContentResponse,
} from "@/core/domain/smart-food-ai-content.entity";
import {SmartFoodAiContentService} from "@/core/services/smart-food-ai-content.service";
import {SmartFoodAiContentRepository} from "@/adapters/outbound/mongo.repository/smart-food-ai-content.repository";
import {loadLocalizedContentWithFallback} from "@/lib/localized-content/localizedContentFallback";
import {getFallbackSmartFoodAiContent} from "@/lib/static-content/publicContentFallbacks";

const smartFoodAiContentService = new SmartFoodAiContentService(new SmartFoodAiContentRepository());
const SMART_FOOD_AI_CONTENT_LIST_TAG = 'smart-food-ai-content';
const isDevelopment = process.env.NODE_ENV !== 'production';
const REQUIRED_SMART_FOOD_AI_CONTENT_FIELDS = [
    'hero',
    'proof',
    'workflow',
    'features',
    'value',
    'futureDirections',
] as const;
const REQUIRED_SMART_FOOD_AI_METADATA_FIELDS = [
    'title',
    'description',
    'openGraphTitle',
] as const;

function getSmartFoodAiContentTag(locale: string) {
    return `smart-food-ai-content:${normalizeSmartFoodAiContentLocale(locale)}`;
}

function assertCompleteSmartFoodAiContent(
    locale: string,
    databaseContent: SmartFoodAiContentResponse | null
): SmartFoodAiContentPayload {
    if (!databaseContent) {
        throw new Error(
            `Smart Food AI content not found in MongoDB for locale "${locale}" ` +
            `(database="${process.env.MONGODB_DATABASE}", collection="${process.env.MONGODB_COLLECTION_SMART_FOOD_AI_CONTENT || 'smart_food_ai_content'}")`
        );
    }

    const missingFields = REQUIRED_SMART_FOOD_AI_CONTENT_FIELDS.filter((field) => databaseContent[field] === undefined);

    if (missingFields.length > 0) {
        throw new Error(
            `Smart Food AI content is incomplete for locale "${locale}". Missing fields: ${missingFields.join(', ')}`
        );
    }

    if (!Array.isArray(databaseContent.hero?.actions)) {
        throw new Error(`Smart Food AI content is incomplete for locale "${locale}". Missing fields: hero.actions`);
    }

    if (!Array.isArray(databaseContent.proof?.paragraphs) || !Array.isArray(databaseContent.proof?.cards)) {
        throw new Error(`Smart Food AI content is incomplete for locale "${locale}". Missing fields: proof paragraphs/cards`);
    }

    if (!Array.isArray(databaseContent.workflow?.steps)) {
        throw new Error(`Smart Food AI content is incomplete for locale "${locale}". Missing fields: workflow.steps`);
    }

    if (!Array.isArray(databaseContent.features?.items) || !Array.isArray(databaseContent.value?.cards)) {
        throw new Error(`Smart Food AI content is incomplete for locale "${locale}". Missing fields: features/items or value/cards`);
    }

    return databaseContent as SmartFoodAiContentPayload;
}

export async function getSmartFoodAiContent(locale: string): Promise<SmartFoodAiContentPayload> {
    const normalizedLocale = normalizeSmartFoodAiContentLocale(locale);

    if (isDevelopment) {
        const databaseContent = await smartFoodAiContentService.findByLocale(normalizedLocale);
        return assertCompleteSmartFoodAiContent(normalizedLocale, databaseContent);
    }

    const getCachedContent = unstable_cache(
        async () => {
            const databaseContent = await smartFoodAiContentService.findByLocale(normalizedLocale);
            return assertCompleteSmartFoodAiContent(normalizedLocale, databaseContent);
        },
        ['smart-food-ai-content-by-locale', normalizedLocale],
        {
            revalidate: 3600,
            tags: [SMART_FOOD_AI_CONTENT_LIST_TAG, getSmartFoodAiContentTag(normalizedLocale)],
        }
    );

    return getCachedContent();
}

export async function getSmartFoodAiContentForPublicPage(locale: string): Promise<SmartFoodAiContentPayload> {
    const normalizedLocale = normalizeSmartFoodAiContentLocale(locale);

    return loadLocalizedContentWithFallback({
        locale: normalizedLocale,
        context: 'Smart Food AI content public render',
        load: getSmartFoodAiContent,
        fallback: () => getFallbackSmartFoodAiContent(normalizedLocale),
    });
}

function assertCompleteSmartFoodAiMetadataContent(
    locale: string,
    databaseContent: SmartFoodAiContentResponse | null
): ISmartFoodAiMetadataContent {
    if (!databaseContent?.metadata) {
        throw new Error(`Smart Food AI metadata not found in MongoDB for locale "${locale}"`);
    }

    const missingFields = REQUIRED_SMART_FOOD_AI_METADATA_FIELDS.filter(
        (field) => !databaseContent.metadata?.[field]
    );

    if (missingFields.length > 0) {
        throw new Error(
            `Smart Food AI metadata is incomplete for locale "${locale}". Missing fields: ${missingFields.join(', ')}`
        );
    }

    return databaseContent.metadata;
}

export async function getSmartFoodAiMetadataContent(locale: string): Promise<ISmartFoodAiMetadataContent> {
    const normalizedLocale = normalizeSmartFoodAiContentLocale(locale);

    if (isDevelopment) {
        const databaseContent = await smartFoodAiContentService.findByLocale(normalizedLocale);
        return assertCompleteSmartFoodAiMetadataContent(normalizedLocale, databaseContent);
    }

    const getCachedContent = unstable_cache(
        async () => {
            const databaseContent = await smartFoodAiContentService.findByLocale(normalizedLocale);
            return assertCompleteSmartFoodAiMetadataContent(normalizedLocale, databaseContent);
        },
        ['smart-food-ai-metadata-by-locale', normalizedLocale],
        {
            revalidate: 3600,
            tags: [SMART_FOOD_AI_CONTENT_LIST_TAG, getSmartFoodAiContentTag(normalizedLocale)],
        }
    );

    return getCachedContent();
}

export async function getAllSmartFoodAiContent(): Promise<SmartFoodAiContentResponse[]> {
    if (isDevelopment) {
        try {
            return await smartFoodAiContentService.findAll();
        } catch (error) {
            console.error('Failed to load Smart Food AI content list:', error);
            return [];
        }
    }

    const getCachedContent = unstable_cache(
        async () => {
            try {
                return await smartFoodAiContentService.findAll();
            } catch (error) {
                console.error('Failed to load Smart Food AI content list:', error);
                return [];
            }
        },
        ['smart-food-ai-content-all'],
        {
            revalidate: 3600,
            tags: [SMART_FOOD_AI_CONTENT_LIST_TAG],
        }
    );

    return getCachedContent();
}

export async function upsertSmartFoodAiContent(
    content: PartialSmartFoodAiContentPayload
): Promise<SmartFoodAiContentResponse> {
    const savedContent = await smartFoodAiContentService.upsertByLocale(content);
    revalidateTag(SMART_FOOD_AI_CONTENT_LIST_TAG, 'max');
    revalidateTag(getSmartFoodAiContentTag(savedContent.locale), 'max');
    return savedContent;
}

export async function deleteSmartFoodAiContent(locale: string): Promise<void> {
    const normalizedLocale = normalizeSmartFoodAiContentLocale(locale);
    await smartFoodAiContentService.deleteByLocale(normalizedLocale);
    revalidateTag(SMART_FOOD_AI_CONTENT_LIST_TAG, 'max');
    revalidateTag(getSmartFoodAiContentTag(normalizedLocale), 'max');
}
