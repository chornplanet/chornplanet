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
import {
    getFallbackPolicyContent,
    getPolicyContentFallbackPayload,
} from "@/lib/static-content/publicContentFallbacks";
import type {IPolicy, IPolicyContent, IPolicyDetail} from "@/lib/model/IPolicy";

const policyContentService = new PolicyContentService(new PolicyContentRepository());
const POLICY_CONTENT_LIST_TAG = 'policy-content';
const isDevelopment = process.env.NODE_ENV !== 'production';
const REQUIRED_POLICY_CONTENT_FIELDS = [
    'privacyPolicy',
    'termOfService',
    'workplacePolicy',
] as const;

function hasText(value: unknown): value is string {
    return typeof value === 'string' && value.trim().length > 0;
}

function hasRenderableDetail(detail: IPolicyDetail): boolean {
    return hasText(detail.title) && hasText(detail.description);
}

function hasRenderableContent(content: IPolicyContent): boolean {
    const hasDetails = Array.isArray(content.details) && content.details.some(hasRenderableDetail);

    return hasText(content.title) && (
        hasText(content.description) ||
        hasText(content.expand) ||
        hasDetails
    );
}

function getPolicyContentIssues(policy: IPolicy | undefined, field: string): string[] {
    const issues: string[] = [];

    if (!policy) {
        return [`${field} is missing`];
    }

    if (!hasText(policy.title)) {
        issues.push(`${field}.title is missing`);
    }

    if (!hasText(policy.subTitle)) {
        issues.push(`${field}.subTitle is missing`);
    }

    if (!hasText(policy.description)) {
        issues.push(`${field}.description is missing`);
    }

    if (!Array.isArray(policy.contents) || policy.contents.length === 0) {
        issues.push(`${field}.contents is empty`);
    } else if (!policy.contents.some(hasRenderableContent)) {
        issues.push(`${field}.contents has no renderable content`);
    }

    return issues;
}

function getPolicyContentTag(locale: string) {
    return `policy-content:${normalizePolicyContentLocale(locale)}`;
}

function isRenderablePolicy(policy: IPolicy | undefined): policy is IPolicy {
    return getPolicyContentIssues(policy, 'policy').length === 0;
}

function mergePublicPolicyContent(
    locale: string,
    databaseContent: PolicyContentResponse,
    fallbackContent: PolicyContentPayload
): PolicyContentPayload {
    const merged = REQUIRED_POLICY_CONTENT_FIELDS.reduce((payload, field) => {
        const candidate = databaseContent[field];

        return {
            ...payload,
            [field]: isRenderablePolicy(candidate) ? candidate : fallbackContent[field],
        };
    }, {
        locale: normalizePolicyContentLocale(locale),
    } as PolicyContentPayload);

    return merged;
}

async function findPolicyContentByLocale(locale: string): Promise<PolicyContentResponse | null> {
    const normalizedLocale = normalizePolicyContentLocale(locale);

    if (isDevelopment) {
        return policyContentService.findByLocale(normalizedLocale);
    }

    const getCachedContent = unstable_cache(
        async () => policyContentService.findByLocale(normalizedLocale),
        ['policy-content-public-by-locale', normalizedLocale],
        {
            revalidate: 3600,
            tags: [POLICY_CONTENT_LIST_TAG, getPolicyContentTag(normalizedLocale)],
        }
    );

    return getCachedContent();
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
    const nestedIssues = REQUIRED_POLICY_CONTENT_FIELDS.flatMap((field) =>
        getPolicyContentIssues(databaseContent[field], field)
    );

    if (missingFields.length > 0 || nestedIssues.length > 0) {
        throw new Error(
            `Policy content is incomplete for locale "${locale}". ` +
            [
                missingFields.length > 0 ? `Missing fields: ${missingFields.join(', ')}` : '',
                nestedIssues.length > 0 ? `Invalid content: ${nestedIssues.join(', ')}` : '',
            ].filter(Boolean).join('. ')
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
        load: async (resolvedLocale) => {
            const databaseContent = await findPolicyContentByLocale(resolvedLocale);

            if (!databaseContent) {
                throw new Error(`Policy content not found for locale "${resolvedLocale}"`);
            }

            return mergePublicPolicyContent(resolvedLocale, databaseContent, {
                ...getPolicyContentFallbackPayload(resolvedLocale),
                locale: normalizePolicyContentLocale(resolvedLocale),
            });
        },
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
