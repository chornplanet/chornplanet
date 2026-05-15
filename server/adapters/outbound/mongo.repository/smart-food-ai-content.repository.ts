import {
    mapSmartFoodAiContentResponse,
    normalizeSmartFoodAiContentLocale,
    PartialSmartFoodAiContentPayload,
    SmartFoodAiContentResponse,
} from "@/core/domain/smart-food-ai-content.entity";
import {SmartFoodAiContentInterface} from "@/core/ports/smart-food-ai-content.interface";
import {smartFoodAiContentCollection, withMongoReadRetry} from "@/infrastructure/db/infra.mongodb";
import {getNowTimeBangkokAsia} from "@/utils/timezone";

export class SmartFoodAiContentRepository implements SmartFoodAiContentInterface {

    constructor() {
        this.ensureIndexes().catch((error) => {
            console.error('Failed to create Smart Food AI content indexes:', error);
        });
    }

    private async ensureIndexes() {
        await smartFoodAiContentCollection.createIndex(
            {locale: 1},
            {unique: true, name: 'unique_smart_food_ai_content_locale_index'}
        );
    }

    async findByLocale(locale: string): Promise<SmartFoodAiContentResponse | null> {
        const normalizedLocale = normalizeSmartFoodAiContentLocale(locale);
        const document = await withMongoReadRetry(
            () => smartFoodAiContentCollection.findOne({locale: normalizedLocale}),
            `Smart Food AI content ${normalizedLocale}`
        );
        return document ? mapSmartFoodAiContentResponse(document) : null;
    }

    async findAll(): Promise<SmartFoodAiContentResponse[]> {
        const documents = await withMongoReadRetry(
            () => smartFoodAiContentCollection
                .find({})
                .sort({locale: 1})
                .toArray(),
            'Smart Food AI content list'
        );

        return documents.map(mapSmartFoodAiContentResponse);
    }

    async upsertByLocale(content: PartialSmartFoodAiContentPayload): Promise<SmartFoodAiContentResponse> {
        const now = getNowTimeBangkokAsia().toISOString();
        const normalizedLocale = normalizeSmartFoodAiContentLocale(content.locale);
        const payload = {
            ...content,
            locale: normalizedLocale,
            updatedAt: now,
        };

        const result = await smartFoodAiContentCollection.findOneAndUpdate(
            {locale: normalizedLocale},
            {
                $set: payload,
                $setOnInsert: {
                    createdAt: now,
                },
            },
            {
                upsert: true,
                returnDocument: 'after',
            }
        );

        if (!result) {
            throw new Error(`Failed to upsert Smart Food AI content for locale "${normalizedLocale}"`);
        }

        return mapSmartFoodAiContentResponse(result);
    }

    async deleteByLocale(locale: string): Promise<void> {
        const normalizedLocale = normalizeSmartFoodAiContentLocale(locale);
        await smartFoodAiContentCollection.deleteOne({locale: normalizedLocale});
    }
}
