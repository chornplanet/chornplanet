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
import {IContact, IContactSocialLink} from "@/lib/model/IContact";

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
const FALLBACK_CONTACT: IContact = {
    location: {
        icon: 'flaticon-pin',
        label: 'Office Location',
        isLink: true,
        link: 'https://www.google.com/maps/place/Chorn+Planet/@18.84633,99.059526,17z/data=!4m6!3m5!1s0x42b952d661374a4f:0x924779e8f9fe3248!8m2!3d18.8463263!4d99.0594875!16s%2Fg%2F11kp_0g9hq',
        linkText: 'Chiang Mai, Thailand',
        button: '',
    },
    email: {
        icon: 'flaticon-email-1',
        label: 'Email',
        isLink: true,
        link: 'mailto:contact@chorn.in.th',
        linkText: 'contact@chorn.in.th',
        button: '',
    },
    tel: {
        icon: 'flaticon-call',
        label: '052 - 000 548',
        isLink: false,
        link: '',
        linkText: 'Mon- Fri : 08:30 - 17:30',
        button: '',
    },
    github: {
        icon: 'bx bxl-github',
        label: 'GitHub',
        isLink: true,
        link: 'https://github.com/chorndigital',
        linkText: 'GitHub Chorn Planet',
        button: '',
    },
    linkedin: {
        icon: 'bx bxl-linkedin',
        label: 'LinkedIn',
        isLink: true,
        link: 'https://www.linkedin.com/company/chornplanet',
        linkText: 'LinkedIn Chorn Planet',
        button: '',
    },
    line: {
        icon: '',
        label: 'Line OA',
        isLink: false,
        link: 'https://lin.ee/YYn0ZYW',
        linkText: 'Line - Chorn Planet',
        button: 'https://scdn.line-apps.com/n/line_add_friends/btn/en.png',
    },
    contacts: [
        {
            icon: 'flaticon-pin',
            label: 'Location',
            isLink: true,
            link: 'https://www.google.com/maps/place/Chorn+Planet/@18.84633,99.059526,17z/data=!4m6!3m5!1s0x42b952d661374a4f:0x924779e8f9fe3248!8m2!3d18.8463263!4d99.0594875!16s%2Fg%2F11kp_0g9hq',
            linkText: 'Chiang Mai, Thailand',
            button: '',
        },
    ],
    contactInfo: {
        title: 'Business Inquiries & Collaborations',
        description: 'Welcome contact from fellow founders, CEO, CTO, and product leaders.',
        header: 'Contact Information',
        roles: [
            {
                title: 'Chorn Planet',
                span: 'Helping Founders Scale Technology, Teams, and Strategy',
                email: 'contact@chorn.in.th',
            },
            {
                title: 'Nearby places',
                span: '',
                nearbyShopping: 'Central Festival Chiang Mai - 20 minutes',
                nearbyUniversity1: 'Maejo University - 22 minutes',
                nearbyUniversity2: 'Chiang Mai University - 29 minutes',
                nearbyAirport: 'Chiang Mai International Airport - 30 minutes',
            },
        ],
    },
};
const FALLBACK_SOCIAL_LINKS: IContactSocialLink[] = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/khachornchit',
        iconClassName: 'bx bxl-linkedin',
        linkClassName: 'linkedin',
        displayText: 'www.linkedin.com',
    },
    {
        label: 'TikTok',
        href: 'https://www.tiktok.com/@chornplanet',
        iconClassName: 'bx bxl-tiktok',
        linkClassName: 'github',
        displayText: 'tiktok.com/@chornplanet',
    },
    YOUTUBE_CONTACT_LINK,
    {
        label: 'GitHub',
        href: 'https://github.com/chorndigital/',
        iconClassName: 'bx bxl-github',
        linkClassName: 'github',
        displayText: 'github.com/chorndigital',
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/chornplanet',
        iconClassName: 'bx bxl-facebook',
        linkClassName: 'facebook',
        displayText: 'facebook.com/chornplanet',
    },
];

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

    if (!databaseContent.contact?.contactInfo || !Array.isArray(databaseContent.contact.contactInfo.roles)) {
        throw new Error(
            `Contact content is incomplete for locale "${locale}". Missing fields: contact.contactInfo.roles`
        );
    }

    if (!Array.isArray(databaseContent.socialLinks)) {
        throw new Error(
            `Contact content is incomplete for locale "${locale}". Missing fields: socialLinks`
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

function getFallbackContactContent(locale: string): ContactContentPayload {
    return {
        locale: normalizeContactContentLocale(locale),
        contact: FALLBACK_CONTACT,
        socialLinks: FALLBACK_SOCIAL_LINKS,
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
        fallback: () => getFallbackContactContent(locale),
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
