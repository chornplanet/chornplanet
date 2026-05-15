import {
    PartialSmartFoodAiContentPayload,
    SmartFoodAiContentResponse,
} from "@/core/domain/smart-food-ai-content.entity";

export interface SmartFoodAiContentInterface {
    findByLocale(locale: string): Promise<SmartFoodAiContentResponse | null>;
    findAll(): Promise<SmartFoodAiContentResponse[]>;
    upsertByLocale(content: PartialSmartFoodAiContentPayload): Promise<SmartFoodAiContentResponse>;
    deleteByLocale(locale: string): Promise<void>;
}
