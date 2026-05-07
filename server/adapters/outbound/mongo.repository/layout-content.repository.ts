import {
    LayoutContentResponse,
    mapLayoutContentResponse,
    normalizeLayoutContentLocale,
    PartialLayoutContentPayload,
} from "@/core/domain/layout-content.entity";
import {LayoutContentInterface} from "@/core/ports/layout-content.interface";
import {layoutContentCollection, withMongoReadRetry} from "@/infrastructure/db/infra.mongodb";
import {getNowTimeBangkokAsia} from "@/utils/timezone";

export class LayoutContentRepository implements LayoutContentInterface {

    constructor() {
        this.ensureIndexes().catch((error) => {
            console.error('Failed to create layout content indexes:', error);
        });
    }

    private async ensureIndexes() {
        await layoutContentCollection.createIndex(
            {locale: 1},
            {unique: true, name: 'unique_layout_locale_index'}
        );
    }

    async findByLocale(locale: string): Promise<LayoutContentResponse | null> {
        const normalizedLocale = normalizeLayoutContentLocale(locale);
        const document = await withMongoReadRetry(
            () => layoutContentCollection.findOne({locale: normalizedLocale}),
            `layout content ${normalizedLocale}`
        );
        return document ? mapLayoutContentResponse(document) : null;
    }

    async findAll(): Promise<LayoutContentResponse[]> {
        const documents = await withMongoReadRetry(
            () => layoutContentCollection
                .find({})
                .sort({locale: 1})
                .toArray(),
            'layout content list'
        );

        return documents.map(mapLayoutContentResponse);
    }

    async upsertByLocale(content: PartialLayoutContentPayload): Promise<LayoutContentResponse> {
        const now = getNowTimeBangkokAsia().toISOString();
        const normalizedLocale = normalizeLayoutContentLocale(content.locale);
        const payload = {
            ...content,
            locale: normalizedLocale,
            updatedAt: now,
        };

        const result = await layoutContentCollection.findOneAndUpdate(
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
            throw new Error(`Failed to upsert layout content for locale "${normalizedLocale}"`);
        }

        return mapLayoutContentResponse(result);
    }

    async deleteByLocale(locale: string): Promise<void> {
        const normalizedLocale = normalizeLayoutContentLocale(locale);
        await layoutContentCollection.deleteOne({locale: normalizedLocale});
    }
}
