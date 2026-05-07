import {
    ContactContentResponse,
    mapContactContentResponse,
    normalizeContactContentLocale,
    PartialContactContentPayload,
} from "@/core/domain/contact-content.entity";
import {ContactContentInterface} from "@/core/ports/contact-content.interface";
import {contactContentCollection, withMongoReadRetry} from "@/infrastructure/db/infra.mongodb";
import {getNowTimeBangkokAsia} from "@/utils/timezone";

export class ContactContentRepository implements ContactContentInterface {

    constructor() {
        this.ensureIndexes().catch((error) => {
            console.error('Failed to create contact content indexes:', error);
        });
    }

    private async ensureIndexes() {
        await contactContentCollection.createIndex(
            {locale: 1},
            {unique: true, name: 'unique_contact_content_locale_index'}
        );
    }

    async findByLocale(locale: string): Promise<ContactContentResponse | null> {
        const normalizedLocale = normalizeContactContentLocale(locale);
        const document = await withMongoReadRetry(
            () => contactContentCollection.findOne({locale: normalizedLocale}),
            `contact content ${normalizedLocale}`
        );
        return document ? mapContactContentResponse(document) : null;
    }

    async findAll(): Promise<ContactContentResponse[]> {
        const documents = await withMongoReadRetry(
            () => contactContentCollection
                .find({})
                .sort({locale: 1})
                .toArray(),
            'contact content list'
        );

        return documents.map(mapContactContentResponse);
    }

    async upsertByLocale(content: PartialContactContentPayload): Promise<ContactContentResponse> {
        const now = getNowTimeBangkokAsia().toISOString();
        const normalizedLocale = normalizeContactContentLocale(content.locale);
        const payload = {
            ...content,
            locale: normalizedLocale,
            updatedAt: now,
        };

        const result = await contactContentCollection.findOneAndUpdate(
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
            throw new Error(`Failed to upsert contact content for locale "${normalizedLocale}"`);
        }

        return mapContactContentResponse(result);
    }

    async deleteByLocale(locale: string): Promise<void> {
        const normalizedLocale = normalizeContactContentLocale(locale);
        await contactContentCollection.deleteOne({locale: normalizedLocale});
    }
}
