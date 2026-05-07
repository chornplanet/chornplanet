import {
    mapTechnicalExpertiseContentResponse,
    normalizeTechnicalExpertiseContentLocale,
    PartialTechnicalExpertiseContentPayload,
    TechnicalExpertiseContentResponse,
} from "@/core/domain/technical-expertise-content.entity";
import {TechnicalExpertiseContentInterface} from "@/core/ports/technical-expertise-content.interface";
import {technicalExpertiseContentCollection, withMongoReadRetry} from "@/infrastructure/db/infra.mongodb";
import {getNowTimeBangkokAsia} from "@/utils/timezone";

export class TechnicalExpertiseContentRepository implements TechnicalExpertiseContentInterface {

    constructor() {
        this.ensureIndexes().catch((error) => {
            console.error('Failed to create technical expertise content indexes:', error);
        });
    }

    private async ensureIndexes() {
        await technicalExpertiseContentCollection.createIndex(
            {locale: 1},
            {unique: true, name: 'unique_technical_expertise_content_locale_index'}
        );
    }

    async findByLocale(locale: string): Promise<TechnicalExpertiseContentResponse | null> {
        const normalizedLocale = normalizeTechnicalExpertiseContentLocale(locale);
        const document = await withMongoReadRetry(
            () => technicalExpertiseContentCollection.findOne({locale: normalizedLocale}),
            `technical expertise content ${normalizedLocale}`
        );
        return document ? mapTechnicalExpertiseContentResponse(document) : null;
    }

    async findAll(): Promise<TechnicalExpertiseContentResponse[]> {
        const documents = await withMongoReadRetry(
            () => technicalExpertiseContentCollection
                .find({})
                .sort({locale: 1})
                .toArray(),
            'technical expertise content list'
        );

        return documents.map(mapTechnicalExpertiseContentResponse);
    }

    async upsertByLocale(content: PartialTechnicalExpertiseContentPayload): Promise<TechnicalExpertiseContentResponse> {
        const now = getNowTimeBangkokAsia().toISOString();
        const normalizedLocale = normalizeTechnicalExpertiseContentLocale(content.locale);
        const payload = {
            ...content,
            locale: normalizedLocale,
            updatedAt: now,
        };

        const result = await technicalExpertiseContentCollection.findOneAndUpdate(
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
            throw new Error(`Failed to upsert technical expertise content for locale "${normalizedLocale}"`);
        }

        return mapTechnicalExpertiseContentResponse(result);
    }

    async deleteByLocale(locale: string): Promise<void> {
        const normalizedLocale = normalizeTechnicalExpertiseContentLocale(locale);
        await technicalExpertiseContentCollection.deleteOne({locale: normalizedLocale});
    }
}
