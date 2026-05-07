import {
    mapPolicyContentResponse,
    normalizePolicyContentLocale,
    PartialPolicyContentPayload,
    PolicyContentResponse,
} from "@/core/domain/policy-content.entity";
import {PolicyContentInterface} from "@/core/ports/policy-content.interface";
import {policyContentCollection, withMongoReadRetry} from "@/infrastructure/db/infra.mongodb";
import {getNowTimeBangkokAsia} from "@/utils/timezone";

export class PolicyContentRepository implements PolicyContentInterface {

    constructor() {
        this.ensureIndexes().catch((error) => {
            console.error('Failed to create policy content indexes:', error);
        });
    }

    private async ensureIndexes() {
        await policyContentCollection.createIndex(
            {locale: 1},
            {unique: true, name: 'unique_policy_content_locale_index'}
        );
    }

    async findByLocale(locale: string): Promise<PolicyContentResponse | null> {
        const normalizedLocale = normalizePolicyContentLocale(locale);
        const document = await withMongoReadRetry(
            () => policyContentCollection.findOne({locale: normalizedLocale}),
            `policy content ${normalizedLocale}`
        );
        return document ? mapPolicyContentResponse(document) : null;
    }

    async findAll(): Promise<PolicyContentResponse[]> {
        const documents = await withMongoReadRetry(
            () => policyContentCollection
                .find({})
                .sort({locale: 1})
                .toArray(),
            'policy content list'
        );

        return documents.map(mapPolicyContentResponse);
    }

    async upsertByLocale(content: PartialPolicyContentPayload): Promise<PolicyContentResponse> {
        const now = getNowTimeBangkokAsia().toISOString();
        const normalizedLocale = normalizePolicyContentLocale(content.locale);
        const payload = {
            ...content,
            locale: normalizedLocale,
            updatedAt: now,
        };

        const result = await policyContentCollection.findOneAndUpdate(
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
            throw new Error(`Failed to upsert policy content for locale "${normalizedLocale}"`);
        }

        return mapPolicyContentResponse(result);
    }

    async deleteByLocale(locale: string): Promise<void> {
        const normalizedLocale = normalizePolicyContentLocale(locale);
        await policyContentCollection.deleteOne({locale: normalizedLocale});
    }
}
