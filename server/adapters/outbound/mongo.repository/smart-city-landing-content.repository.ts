import {
    mapSmartCityLandingContentResponse,
    normalizeSmartCityLandingContentLocale,
    PartialSmartCityLandingContentPayload,
    SmartCityLandingContentResponse,
} from "@/core/domain/smart-city-landing-content.entity";
import {SmartCityLandingContentInterface} from "@/core/ports/smart-city-landing-content.interface";
import {smartCityLandingContentCollection, withMongoReadRetry} from "@/infrastructure/db/infra.mongodb";
import {getNowTimeBangkokAsia} from "@/utils/timezone";

export class SmartCityLandingContentRepository implements SmartCityLandingContentInterface {

    constructor() {
        this.ensureIndexes().catch((error) => {
            console.error('Failed to create smart city landing content indexes:', error);
        });
    }

    private async ensureIndexes() {
        await smartCityLandingContentCollection.createIndex(
            {locale: 1, slug: 1},
            {unique: true, name: 'unique_smart_city_landing_locale_slug_index'}
        );
    }

    async findByLocaleAndSlug(locale: string, slug: string): Promise<SmartCityLandingContentResponse | null> {
        const normalizedLocale = normalizeSmartCityLandingContentLocale(locale);
        const document = await withMongoReadRetry(
            () => smartCityLandingContentCollection.findOne({locale: normalizedLocale, slug}),
            `smart city landing content ${normalizedLocale}/${slug}`
        );
        return document ? mapSmartCityLandingContentResponse(document) : null;
    }

    async findAll(): Promise<SmartCityLandingContentResponse[]> {
        const documents = await withMongoReadRetry(
            () => smartCityLandingContentCollection
                .find({})
                .sort({locale: 1, slug: 1})
                .toArray(),
            'smart city landing content list'
        );

        return documents.map(mapSmartCityLandingContentResponse);
    }

    async upsertByLocaleAndSlug(
        content: PartialSmartCityLandingContentPayload
    ): Promise<SmartCityLandingContentResponse> {
        const now = getNowTimeBangkokAsia().toISOString();
        const normalizedLocale = normalizeSmartCityLandingContentLocale(content.locale);
        const payload = {
            ...content,
            locale: normalizedLocale,
            updatedAt: now,
        };

        const result = await smartCityLandingContentCollection.findOneAndUpdate(
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
            throw new Error(`Failed to upsert smart city landing content for locale "${normalizedLocale}" and slug "${content.slug}"`);
        }

        return mapSmartCityLandingContentResponse(result);
    }

    async deleteByLocaleAndSlug(locale: string, slug: string): Promise<void> {
        const normalizedLocale = normalizeSmartCityLandingContentLocale(locale);
        await smartCityLandingContentCollection.deleteOne({locale: normalizedLocale, slug});
    }
}
