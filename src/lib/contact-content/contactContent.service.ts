import {unstable_cache, revalidateTag} from "next/cache";
import {
    ContactContentPayload,
    ContactContentResponse,
    normalizeContactContentLocale,
    PartialContactContentPayload,
} from "@/core/domain/contact-content.entity";
import {ContactContentService} from "@/core/services/contact-content.service";
import {ContactContentRepository} from "@/adapters/outbound/mongo.repository/contact-content.repository";
import {loadLocalizedContentWithFallback} from "@/lib/localized-content/localizedContentFallback";
import {IContactSocialLink} from "@/lib/model/IContact";

const contactContentService = new ContactContentService(new ContactContentRepository());
const CONTACT_CONTENT_LIST_TAG = 'contact-content';
const isDevelopment = process.env.NODE_ENV !== 'production';
const REQUIRED_CONTACT_CONTENT_FIELDS = ['contact', 'socialLinks'] as const;
const YOUTUBE_CONTACT_LINK: IContactSocialLink = {
    label: 'Youtube',
    href: 'https://www.youtube.com/@chornplanet',
    iconClassName: 'bx bxl-youtube',
    linkClassName: 'youtube',
    displayText: 'youtube.com/@chornplanet',
};

function getContactContentTag(locale: string) {
    return `contact-content:${normalizeContactContentLocale(locale)}`;
}

function assertCompleteContactContent(
    locale: string,
    databaseContent: ContactContentResponse | null
): ContactContentPayload {
    if (!databaseContent) {
        throw new Error(
            `Contact content not found in MongoDB for locale "${locale}" ` +
            `(database="${process.env.MONGODB_DATABASE}", collection="${process.env.MONGODB_COLLECTION_CONTACT_CONTENT || 'contact_content'}")`
        );
    }

    const missingFields = REQUIRED_CONTACT_CONTENT_FIELDS.filter((field) => databaseContent[field] === undefined);

    if (missingFields.length > 0) {
        throw new Error(
            `Contact content is incomplete for locale "${locale}". Missing fields: ${missingFields.join(', ')}`
        );
    }

    return normalizeContactSocialLinks(databaseContent as ContactContentPayload);
}

function normalizeContactSocialLinks(content: ContactContentPayload): ContactContentPayload {
    const hasYoutube = content.socialLinks.some((item) => item.href === YOUTUBE_CONTACT_LINK.href);

    if (hasYoutube) {
        return content;
    }

    const tiktokIndex = content.socialLinks.findIndex((item) => {
        const label = item.label.toLowerCase();
        const href = item.href.toLowerCase();
        return label === 'tiktok' || href.includes('tiktok.com/@chornplanet');
    });

    const socialLinks = [...content.socialLinks];
    socialLinks.splice(tiktokIndex >= 0 ? tiktokIndex + 1 : socialLinks.length, 0, YOUTUBE_CONTACT_LINK);

    return {
        ...content,
        socialLinks,
    };
}

export async function getContactContent(locale: string): Promise<ContactContentPayload> {
    const normalizedLocale = normalizeContactContentLocale(locale);

    if (isDevelopment) {
        const databaseContent = await contactContentService.findByLocale(normalizedLocale);
        return assertCompleteContactContent(normalizedLocale, databaseContent);
    }

    const getCachedContent = unstable_cache(
        async () => {
            const databaseContent = await contactContentService.findByLocale(normalizedLocale);
            return assertCompleteContactContent(normalizedLocale, databaseContent);
        },
        ['contact-content-by-locale', normalizedLocale],
        {
            revalidate: 3600,
            tags: [CONTACT_CONTENT_LIST_TAG, getContactContentTag(normalizedLocale)],
        }
    );

    return getCachedContent();
}

export async function getContactContentForPublicPage(locale: string): Promise<ContactContentPayload> {
    return loadLocalizedContentWithFallback({
        locale: normalizeContactContentLocale(locale),
        context: 'contact content public render',
        load: getContactContent,
    });
}

export async function getAllContactContent(): Promise<ContactContentResponse[]> {
    if (isDevelopment) {
        try {
            return await contactContentService.findAll();
        } catch (error) {
            console.error('Failed to load contact content list:', error);
            return [];
        }
    }

    const getCachedContent = unstable_cache(
        async () => {
            try {
                return await contactContentService.findAll();
            } catch (error) {
                console.error('Failed to load contact content list:', error);
                return [];
            }
        },
        ['contact-content-all'],
        {
            revalidate: 3600,
            tags: [CONTACT_CONTENT_LIST_TAG],
        }
    );

    return getCachedContent();
}

export async function upsertContactContent(
    content: PartialContactContentPayload
): Promise<ContactContentResponse> {
    const savedContent = await contactContentService.upsertByLocale(content);
    revalidateTag(CONTACT_CONTENT_LIST_TAG, 'max');
    revalidateTag(getContactContentTag(savedContent.locale), 'max');
    return savedContent;
}

export async function deleteContactContent(locale: string): Promise<void> {
    const normalizedLocale = normalizeContactContentLocale(locale);
    await contactContentService.deleteByLocale(normalizedLocale);
    revalidateTag(CONTACT_CONTENT_LIST_TAG, 'max');
    revalidateTag(getContactContentTag(normalizedLocale), 'max');
}
