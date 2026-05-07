import {
    AiCompanionsContentResponse,
    mapAiCompanionsContentResponse,
    normalizeAiCompanionsContentLocale,
    PartialAiCompanionsContentPayload,
} from "@/core/domain/ai-companions-content.entity";
import {AiCompanionsContentInterface} from "@/core/ports/ai-companions-content.interface";
import {aiCompanionsContentCollection, withMongoReadRetry} from "@/infrastructure/db/infra.mongodb";
import {getNowTimeBangkokAsia} from "@/utils/timezone";

export class AiCompanionsContentRepository implements AiCompanionsContentInterface {

    constructor() {
        this.ensureIndexes().catch((error) => {
            console.error('Failed to create AI companions content indexes:', error);
        });
    }

    private async ensureIndexes() {
        await aiCompanionsContentCollection.createIndex(
            {locale: 1},
            {unique: true, name: 'unique_ai_companions_content_locale_index'}
        );
    }

    async findByLocale(locale: string): Promise<AiCompanionsContentResponse | null> {
        const normalizedLocale = normalizeAiCompanionsContentLocale(locale);
        const document = await withMongoReadRetry(
            () => aiCompanionsContentCollection.findOne({locale: normalizedLocale}),
            `AI companions content ${normalizedLocale}`
        );
        return document ? mapAiCompanionsContentResponse(document) : null;
    }

    async findAll(): Promise<AiCompanionsContentResponse[]> {
        const documents = await withMongoReadRetry(
            () => aiCompanionsContentCollection
                .find({})
                .sort({locale: 1})
                .toArray(),
            'AI companions content list'
        );

        return documents.map(mapAiCompanionsContentResponse);
    }

    async upsertByLocale(content: PartialAiCompanionsContentPayload): Promise<AiCompanionsContentResponse> {
        const now = getNowTimeBangkokAsia().toISOString();
        const normalizedLocale = normalizeAiCompanionsContentLocale(content.locale);
        const payload = {
            ...content,
            locale: normalizedLocale,
            updatedAt: now,
        };

        const result = await aiCompanionsContentCollection.findOneAndUpdate(
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
            throw new Error(`Failed to upsert AI companions content for locale "${normalizedLocale}"`);
        }

        return mapAiCompanionsContentResponse(result);
    }

    async deleteByLocale(locale: string): Promise<void> {
        const normalizedLocale = normalizeAiCompanionsContentLocale(locale);
        await aiCompanionsContentCollection.deleteOne({locale: normalizedLocale});
    }
}
