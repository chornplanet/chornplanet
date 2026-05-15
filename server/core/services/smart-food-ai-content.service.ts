import {
    PartialSmartFoodAiContentPayload,
    SmartFoodAiContentResponse,
} from "@/core/domain/smart-food-ai-content.entity";
import {SmartFoodAiContentInterface} from "@/core/ports/smart-food-ai-content.interface";

export class SmartFoodAiContentService implements SmartFoodAiContentInterface {
    constructor(private readonly repository: SmartFoodAiContentInterface) {
    }

    async findByLocale(locale: string): Promise<SmartFoodAiContentResponse | null> {
        return this.repository.findByLocale(locale);
    }

    async findAll(): Promise<SmartFoodAiContentResponse[]> {
        return this.repository.findAll();
    }

    async upsertByLocale(content: PartialSmartFoodAiContentPayload): Promise<SmartFoodAiContentResponse> {
        return this.repository.upsertByLocale(content);
    }

    async deleteByLocale(locale: string): Promise<void> {
        return this.repository.deleteByLocale(locale);
    }
}
