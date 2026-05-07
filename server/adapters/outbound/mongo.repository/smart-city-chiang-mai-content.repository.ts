import {
    mapSmartCityChiangMaiContentResponse,
    normalizeSmartCityChiangMaiContentLocale,
    PartialSmartCityChiangMaiContentPayload,
    SmartCityChiangMaiContentResponse,
} from "@/core/domain/smart-city-chiang-mai-content.entity";
import {SmartCityChiangMaiContentInterface} from "@/core/ports/smart-city-chiang-mai-content.interface";
import {smartCityChiangMaiContentCollection, withMongoReadRetry} from "@/infrastructure/db/infra.mongodb";
import {getNowTimeBangkokAsia} from "@/utils/timezone";

export class SmartCityChiangMaiContentRepository implements SmartCityChiangMaiContentInterface {

    constructor() {
        this.ensureIndexes().catch((error) => {
            console.error('Failed to create smart city Chiang Mai content indexes:', error);
        });
    }

    private async ensureIndexes() {
        await smartCityChiangMaiContentCollection.createIndex(
            {locale: 1, slug: 1},
            {unique: true, name: 'unique_smart_city_chiang_mai_locale_slug_index'}
        );
    }

    async findByLocaleAndSlug(locale: string, slug: string): Promise<SmartCityChiangMaiContentResponse | null> {
        const normalizedLocale = normalizeSmartCityChiangMaiContentLocale(locale);
        const document = await withMongoReadRetry(
            () => smartCityChiangMaiContentCollection.findOne({locale: normalizedLocale, slug}),
            `smart city Chiang Mai content ${normalizedLocale}/${slug}`
        );
        return document ? mapSmartCityChiangMaiContentResponse(document) : null;
    }

    async findAll(): Promise<SmartCityChiangMaiContentResponse[]> {
        const documents = await withMongoReadRetry(
            () => smartCityChiangMaiContentCollection
                .find({})
                .sort({locale: 1, slug: 1})
                .toArray(),
            'smart city Chiang Mai content list'
        );

        return documents.map(mapSmartCityChiangMaiContentResponse);
    }

    async upsertByLocaleAndSlug(
        content: PartialSmartCityChiangMaiContentPayload
    ): Promise<SmartCityChiangMaiContentResponse> {
        const now = getNowTimeBangkokAsia().toISOString();
        const normalizedLocale = normalizeSmartCityChiangMaiContentLocale(content.locale);
        const payload = {
            ...content,
            locale: normalizedLocale,
            updatedAt: now,
        };

        const result = await smartCityChiangMaiContentCollection.findOneAndUpdate(
            {locale: normalizedLocale, slug: content.slug},
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
            throw new Error(`Failed to upsert smart city Chiang Mai content for locale "${normalizedLocale}" and slug "${content.slug}"`);
        }

        return mapSmartCityChiangMaiContentResponse(result);
    }

    async deleteByLocaleAndSlug(locale: string, slug: string): Promise<void> {
        const normalizedLocale = normalizeSmartCityChiangMaiContentLocale(locale);
        await smartCityChiangMaiContentCollection.deleteOne({locale: normalizedLocale, slug});
    }
}
