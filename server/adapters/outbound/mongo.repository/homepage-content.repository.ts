import {
    PartialHomePageContentPayload,
    HomePageContentResponse,
    mapHomePageContentResponse,
    normalizeHomePageLocale,
} from "@/core/domain/homepage-content.entity";
import {HomePageContentInterface} from "@/core/ports/homepage-content.interface";
import {homePageContentCollection, withMongoReadRetry} from "@/infrastructure/db/infra.mongodb";
import {getNowTimeBangkokAsia} from "@/utils/timezone";

export class HomePageContentRepository implements HomePageContentInterface {

    constructor() {
        this.ensureIndexes().catch((error) => {
            console.error('Failed to create homepage content indexes:', error);
        });
    }

    private async ensureIndexes() {
        await homePageContentCollection.createIndex(
            {locale: 1},
            {unique: true, name: 'unique_homepage_locale_index'}
        );
    }

    async findByLocale(locale: string): Promise<HomePageContentResponse | null> {
        const normalizedLocale = normalizeHomePageLocale(locale);
        const document = await withMongoReadRetry(
            () => homePageContentCollection.findOne({locale: normalizedLocale}),
            `homepage content ${normalizedLocale}`
        );
        return document ? mapHomePageContentResponse(document) : null;
    }

    async findAll(): Promise<HomePageContentResponse[]> {
        const documents = await withMongoReadRetry(
            () => homePageContentCollection
                .find({})
                .sort({locale: 1})
                .toArray(),
            'homepage content list'
        );

        return documents.map(mapHomePageContentResponse);
    }

    async upsertByLocale(content: PartialHomePageContentPayload): Promise<HomePageContentResponse> {
        const now = getNowTimeBangkokAsia().toISOString();
        const normalizedLocale = normalizeHomePageLocale(content.locale);
        const payload = {
            ...content,
            locale: normalizedLocale,
            updatedAt: now,
        };

        const result = await homePageContentCollection.findOneAndUpdate(
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
            throw new Error(`Failed to upsert homepage content for locale "${normalizedLocale}"`);
        }

        return mapHomePageContentResponse(result);
    }

    async deleteByLocale(locale: string): Promise<void> {
        const normalizedLocale = normalizeHomePageLocale(locale);
        await homePageContentCollection.deleteOne({locale: normalizedLocale});
    }
}
