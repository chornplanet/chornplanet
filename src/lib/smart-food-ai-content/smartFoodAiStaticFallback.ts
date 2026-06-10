import {
    normalizeSmartFoodAiContentLocale,
    SmartFoodAiContentLocale,
    SmartFoodAiContentPayload,
} from "@/core/domain/smart-food-ai-content.entity";
import enSmartFoodContent from "@/data/smart-food/en.smart-food.json";
import thSmartFoodContent from "@/data/smart-food/th.smart-food.json";
import {ISmartFoodAiMetadataContent} from "@/lib/model/ISmartFoodAiContent";

const SMART_FOOD_AI_STATIC_FALLBACK_BY_LOCALE: Partial<Record<SmartFoodAiContentLocale, SmartFoodAiContentPayload>> = {
    en: enSmartFoodContent as SmartFoodAiContentPayload,
    th: thSmartFoodContent as SmartFoodAiContentPayload,
};

const SMART_FOOD_AI_STATIC_FALLBACK = SMART_FOOD_AI_STATIC_FALLBACK_BY_LOCALE.en!;

export const SMART_FOOD_AI_STATIC_METADATA_FALLBACK: ISmartFoodAiMetadataContent =
    SMART_FOOD_AI_STATIC_FALLBACK.metadata!;

export function getSmartFoodAiStaticMetadataFallback(locale: string): ISmartFoodAiMetadataContent {
    const normalizedLocale = normalizeSmartFoodAiContentLocale(locale);
    const fallbackContent =
        SMART_FOOD_AI_STATIC_FALLBACK_BY_LOCALE[normalizedLocale] ?? SMART_FOOD_AI_STATIC_FALLBACK;

    return fallbackContent.metadata ?? SMART_FOOD_AI_STATIC_METADATA_FALLBACK;
}

export function getSmartFoodAiStaticFallback(locale: string): SmartFoodAiContentPayload {
    const normalizedLocale = normalizeSmartFoodAiContentLocale(locale);
    const fallbackContent =
        SMART_FOOD_AI_STATIC_FALLBACK_BY_LOCALE[normalizedLocale] ?? SMART_FOOD_AI_STATIC_FALLBACK;

    return {
        ...fallbackContent,
        locale: normalizedLocale,
    };
}
