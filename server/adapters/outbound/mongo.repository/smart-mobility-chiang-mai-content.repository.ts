import {
    mapSmartMobilityChiangMaiContentResponse,
    normalizeSmartMobilityChiangMaiContentLocale,
    PartialSmartMobilityChiangMaiContentPayload,
    SmartMobilityChiangMaiContentResponse,
} from "@/core/domain/smart-mobility-chiang-mai-content.entity";
import {SmartMobilityChiangMaiContentInterface} from "@/core/ports/smart-mobility-chiang-mai-content.interface";
import {smartMobilityChiangMaiContentCollection, withMongoReadRetry} from "@/infrastructure/db/infra.mongodb";
import {getNowTimeBangkokAsia} from "@/utils/timezone";

export class SmartMobilityChiangMaiContentRepository implements SmartMobilityChiangMaiContentInterface {

    constructor() {
        this.ensureIndexes().catch((error) => {
            console.error('Failed to create smart mobility Chiang Mai content indexes:', error);
        });
    }

    private async ensureIndexes() {
        await smartMobilityChiangMaiContentCollection.createIndex(
            {locale: 1, slug: 1},
            {unique: true, name: 'unique_smart_mobility_chiang_mai_locale_slug_index'}
        );
    }

    async findByLocaleAndSlug(locale: string, slug: string): Promise<SmartMobilityChiangMaiContentResponse | null> {
        const normalizedLocale = normalizeSmartMobilityChiangMaiContentLocale(locale);
        const document = await withMongoReadRetry(
            () => smartMobilityChiangMaiContentCollection.findOne({locale: normalizedLocale, slug}),
            `smart mobility Chiang Mai content ${normalizedLocale}/${slug}`
        );
        return document ? mapSmartMobilityChiangMaiContentResponse(document) : null;
    }

    async findAll(): Promise<SmartMobilityChiangMaiContentResponse[]> {
        const documents = await withMongoReadRetry(
            () => smartMobilityChiangMaiContentCollection.find({}).sort({locale: 1, slug: 1}).toArray(),
            'smart mobility Chiang Mai content list'
        );
        return documents.map(mapSmartMobilityChiangMaiContentResponse);
    }

    async upsertByLocaleAndSlug(
        content: PartialSmartMobilityChiangMaiContentPayload
    ): Promise<SmartMobilityChiangMaiContentResponse> {
        const now = getNowTimeBangkokAsia().toISOString();
        const normalizedLocale = normalizeSmartMobilityChiangMaiContentLocale(content.locale);
        const payload = {...content, locale: normalizedLocale, updatedAt: now};

        const result = await smartMobilityChiangMaiContentCollection.findOneAndUpdate(
            {locale: normalizedLocale, slug: content.slug},
            {$set: payload, $setOnInsert: {createdAt: now}},
            {upsert: true, returnDocument: 'after'}
        );

        if (!result) {
            throw new Error(`Failed to upsert smart mobility Chiang Mai content for locale "${normalizedLocale}" and slug "${content.slug}"`);
        }

        return mapSmartMobilityChiangMaiContentResponse(result);
    }

    async deleteByLocaleAndSlug(locale: string, slug: string): Promise<void> {
        const normalizedLocale = normalizeSmartMobilityChiangMaiContentLocale(locale);
        await smartMobilityChiangMaiContentCollection.deleteOne({locale: normalizedLocale, slug});
    }
}
