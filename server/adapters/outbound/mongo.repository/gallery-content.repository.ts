import {
    GalleryContentResponse,
    mapGalleryContentResponse,
    normalizeGalleryContentLocale,
    PartialGalleryContentPayload,
} from "@/core/domain/gallery-content.entity";
import {GalleryContentInterface} from "@/core/ports/gallery-content.interface";
import {galleryContentCollection, withMongoReadRetry} from "@/infrastructure/db/infra.mongodb";
import {getNowTimeBangkokAsia} from "@/utils/timezone";

export class GalleryContentRepository implements GalleryContentInterface {

    constructor() {
        this.ensureIndexes().catch((error) => {
            console.error('Failed to create gallery content indexes:', error);
        });
    }

    private async ensureIndexes() {
        await galleryContentCollection.createIndex(
            {locale: 1},
            {unique: true, name: 'unique_gallery_content_locale_index'}
        );
    }

    async findByLocale(locale: string): Promise<GalleryContentResponse | null> {
        const normalizedLocale = normalizeGalleryContentLocale(locale);
        const document = await withMongoReadRetry(
            () => galleryContentCollection.findOne({locale: normalizedLocale}),
            `gallery content ${normalizedLocale}`
        );
        return document ? mapGalleryContentResponse(document) : null;
    }

    async findAll(): Promise<GalleryContentResponse[]> {
        const documents = await withMongoReadRetry(
            () => galleryContentCollection
                .find({})
                .sort({locale: 1})
                .toArray(),
            'gallery content list'
        );

        return documents.map(mapGalleryContentResponse);
    }

    async upsertByLocale(content: PartialGalleryContentPayload): Promise<GalleryContentResponse> {
        const now = getNowTimeBangkokAsia().toISOString();
        const normalizedLocale = normalizeGalleryContentLocale(content.locale);
        const payload = {
            ...content,
            locale: normalizedLocale,
            updatedAt: now,
        };

        const result = await galleryContentCollection.findOneAndUpdate(
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
            throw new Error(`Failed to upsert gallery content for locale "${normalizedLocale}"`);
        }

        return mapGalleryContentResponse(result);
    }

    async deleteByLocale(locale: string): Promise<void> {
        const normalizedLocale = normalizeGalleryContentLocale(locale);
        await galleryContentCollection.deleteOne({locale: normalizedLocale});
    }
}
