import {revalidateTag, unstable_cache} from "next/cache";
import {
    normalizePolicyContentLocale,
    PartialPolicyContentPayload,
    PolicyContentPayload,
    PolicyContentResponse,
} from "@/core/domain/policy-content.entity";
import {PolicyContentService} from "@/core/services/policy-content.service";
import {PolicyContentRepository} from "@/adapters/outbound/mongo.repository/policy-content.repository";
import {loadLocalizedContentWithFallback} from "@/lib/localized-content/localizedContentFallback";
import {getFallbackPolicyContent} from "@/lib/static-content/publicContentFallbacks";

const policyContentService = new PolicyContentService(new PolicyContentRepository());
const POLICY_CONTENT_LIST_TAG = 'policy-content';
const isDevelopment = process.env.NODE_ENV !== 'production';
const REQUIRED_POLICY_CONTENT_FIELDS = [
    'privacyPolicy',
    'termOfService',
    'workplacePolicy',
] as const;

function getPolicyContentTag(locale: string) {
    return `policy-content:${normalizePolicyContentLocale(locale)}`;
}

function assertCompletePolicyContent(
    locale: string,
    databaseContent: PolicyContentResponse | null
): PolicyContentPayload {
    if (!databaseContent) {
        throw new Error(
            `Policy content not found in MongoDB for locale "${locale}" ` +
            `(database="${process.env.MONGODB_DATABASE}", collection="${process.env.MONGODB_COLLECTION_POLICY_CONTENT || 'policy_content'}")`
        );
    }

    const missingFields = REQUIRED_POLICY_CONTENT_FIELDS.filter((field) => databaseContent[field] === undefined);

    if (missingFields.length > 0) {
        throw new Error(
            `Policy content is incomplete for locale "${locale}". Missing fields: ${missingFields.join(', ')}`
        );
    }

    return databaseContent as PolicyContentPayload;
}

export async function getPolicyContent(locale: string): Promise<PolicyContentPayload> {
    const normalizedLocale = normalizePolicyContentLocale(locale);

    if (isDevelopment) {
        const databaseContent = await policyContentService.findByLocale(normalizedLocale);
        return assertCompletePolicyContent(normalizedLocale, databaseContent);
    }

    const getCachedContent = unstable_cache(
        async () => {
            const databaseContent = await policyContentService.findByLocale(normalizedLocale);
            return assertCompletePolicyContent(normalizedLocale, databaseContent);
        },
        ['policy-content-by-locale', normalizedLocale],
        {
            revalidate: 3600,
            tags: [POLICY_CONTENT_LIST_TAG, getPolicyContentTag(normalizedLocale)],
        }
    );

    return getCachedContent();
}

export async function getPolicyContentForPublicPage(locale: string): Promise<PolicyContentPayload> {
    const normalizedLocale = normalizePolicyContentLocale(locale);

    return loadLocalizedContentWithFallback({
        locale: normalizedLocale,
        context: 'policy content public render',
        load: getPolicyContent,
        fallback: () => getFallbackPolicyContent(normalizedLocale),
    });
}

export async function getAllPolicyContent(): Promise<PolicyContentResponse[]> {
    if (isDevelopment) {
        try {
            return await policyContentService.findAll();
        } catch (error) {
            console.error('Failed to load policy content list:', error);
            return [];
        }
    }

    const getCachedContent = unstable_cache(
        async () => {
            try {
                return await policyContentService.findAll();
            } catch (error) {
                console.error('Failed to load policy content list:', error);
                return [];
            }
        },
        ['policy-content-all'],
        {
            revalidate: 3600,
            tags: [POLICY_CONTENT_LIST_TAG],
        }
    );

    return getCachedContent();
}

export async function upsertPolicyContent(
    content: PartialPolicyContentPayload
): Promise<PolicyContentResponse> {
    const savedContent = await policyContentService.upsertByLocale(content);
    revalidateTag(POLICY_CONTENT_LIST_TAG, 'max');
    revalidateTag(getPolicyContentTag(savedContent.locale), 'max');
    return savedContent;
}

export async function deletePolicyContent(locale: string): Promise<void> {
    const normalizedLocale = normalizePolicyContentLocale(locale);
    await policyContentService.deleteByLocale(normalizedLocale);
    revalidateTag(POLICY_CONTENT_LIST_TAG, 'max');
    revalidateTag(getPolicyContentTag(normalizedLocale), 'max');
}
