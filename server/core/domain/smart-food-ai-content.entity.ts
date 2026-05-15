import {ObjectId, WithId} from "mongodb";
import {ISmartFoodAiContent} from "@/lib/model/ISmartFoodAiContent";

export const SMART_FOOD_AI_CONTENT_LOCALES = ['da', 'de', 'en', 'fi', 'fr', 'ja', 'ko', 'nl', 'th', 'zh'] as const;

export type SmartFoodAiContentLocale = typeof SMART_FOOD_AI_CONTENT_LOCALES[number];

export interface SmartFoodAiContentPayload extends ISmartFoodAiContent {
    locale: string;
}

export type PartialSmartFoodAiContentPayload =
    { locale: string } & Partial<Omit<SmartFoodAiContentPayload, 'locale'>>;

export interface SmartFoodAiContentRecord extends PartialSmartFoodAiContentPayload {
    createdAt?: string;
    updatedAt?: string;
}

export interface SmartFoodAiContentResponse extends PartialSmartFoodAiContentPayload {
    id: string;
    createdAt?: string;
    updatedAt?: string;
}

export function normalizeSmartFoodAiContentLocale(locale: string): SmartFoodAiContentLocale {
    if (SMART_FOOD_AI_CONTENT_LOCALES.includes(locale as SmartFoodAiContentLocale)) {
        return locale as SmartFoodAiContentLocale;
    }

    return 'en';
}

export function mapSmartFoodAiContentResponse(
    doc: WithId<SmartFoodAiContentRecord> | (SmartFoodAiContentRecord & {_id: ObjectId})
): SmartFoodAiContentResponse {
    return {
        id: doc._id.toHexString(),
        locale: doc.locale,
        hero: doc.hero,
        proof: doc.proof,
        metadata: doc.metadata,
        workflow: doc.workflow,
        features: doc.features,
        value: doc.value,
        futureDirections: doc.futureDirections,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
    };
}
