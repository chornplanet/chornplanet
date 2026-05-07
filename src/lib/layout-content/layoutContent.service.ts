import {unstable_cache, revalidateTag} from "next/cache";
import {
    LayoutContentPayload,
    LayoutContentResponse,
    normalizeLayoutContentLocale,
    PartialLayoutContentPayload,
} from "@/core/domain/layout-content.entity";
import {LayoutContentService} from "@/core/services/layout-content.service";
import {LayoutContentRepository} from "@/adapters/outbound/mongo.repository/layout-content.repository";
import {INavbar} from "@/lib/model/INavbar";
import {IFooter, IFooterDetail} from "@/lib/model/IFooter";

const layoutContentService = new LayoutContentService(new LayoutContentRepository());
const LAYOUT_CONTENT_LIST_TAG = 'layout-content';
const isDevelopment = process.env.NODE_ENV !== 'production';
const REQUIRED_LAYOUT_FIELDS = [
    'navbar',
    'footer',
    'consent',
    'languageOptions',
] as const;

function getLayoutContentTag(locale: string) {
    return `layout-content:${normalizeLayoutContentLocale(locale)}`;
}

function assertCompleteLayoutContent(
    locale: string,
    databaseContent: LayoutContentResponse | null
): LayoutContentPayload {
    if (!databaseContent) {
        throw new Error(
            `Layout content not found in MongoDB for locale "${locale}" ` +
            `(database="${process.env.MONGODB_DATABASE}", collection="${process.env.MONGODB_COLLECTION_LAYOUT_CONTENT}")`
        );
    }

    const missingFields = REQUIRED_LAYOUT_FIELDS.filter((field) => databaseContent[field] === undefined);

    if (missingFields.length > 0) {
        throw new Error(
            `Layout content is incomplete for locale "${locale}". Missing fields: ${missingFields.join(', ')}`
        );
    }

    return normalizeSmartFoodAiLayoutContent(databaseContent as LayoutContentPayload);
}

function normalizeSmartFoodAiNavbarItem(item: INavbar): INavbar {
    if (item.group !== 'AI Integration' && item.label !== 'AI Integration') {
        return item;
    }

    return {
        ...item,
        group: 'AI Integration',
        label: 'Smart Food AI',
        link: '/smart-food-ai/',
        activeLinks: ['/smart-food-ai/'],
    };
}

function normalizeSmartFoodAiFooterItem(item: IFooterDetail): IFooterDetail {
    if (item.label !== 'AI Integration' && item.link !== '/technical-expertise/ai-solutions/') {
        return item;
    }

    return {
        ...item,
        link: '/ai-companions/fah/',
    };
}

function normalizeSmartFoodAiFooterGroup<T extends { items: IFooterDetail[] }>(group: T): T {
    return {
        ...group,
        items: group.items.map(normalizeSmartFoodAiFooterItem),
    };
}

function normalizeSmartFoodAiFooter(footer: IFooter): IFooter {
    return {
        ...footer,
        important: normalizeSmartFoodAiFooterGroup(footer.important),
        technology: normalizeSmartFoodAiFooterGroup(footer.technology),
    };
}

function normalizeSmartFoodAiLayoutContent(content: LayoutContentPayload): LayoutContentPayload {
    return {
        ...content,
        navbar: content.navbar.map(normalizeSmartFoodAiNavbarItem),
        footer: normalizeSmartFoodAiFooter(content.footer),
    };
}

export async function getLayoutContent(locale: string): Promise<LayoutContentPayload> {
    const normalizedLocale = normalizeLayoutContentLocale(locale);

    if (isDevelopment) {
        const databaseContent = await layoutContentService.findByLocale(normalizedLocale);
        return assertCompleteLayoutContent(normalizedLocale, databaseContent);
    }

    const getCachedContent = unstable_cache(
        async () => {
            const databaseContent = await layoutContentService.findByLocale(normalizedLocale);
            return assertCompleteLayoutContent(normalizedLocale, databaseContent);
        },
        ['layout-content-by-locale', normalizedLocale],
        {
            revalidate: 3600,
            tags: [LAYOUT_CONTENT_LIST_TAG, getLayoutContentTag(normalizedLocale)],
        }
    );

    return getCachedContent();
}

export async function getAllLayoutContent(): Promise<LayoutContentResponse[]> {
    if (isDevelopment) {
        try {
            return await layoutContentService.findAll();
        } catch (error) {
            console.error('Failed to load layout content list:', error);
            return [];
        }
    }

    const getCachedContent = unstable_cache(
        async () => {
            try {
                return await layoutContentService.findAll();
            } catch (error) {
                console.error('Failed to load layout content list:', error);
                return [];
            }
        },
        ['layout-content-all'],
        {
            revalidate: 3600,
            tags: [LAYOUT_CONTENT_LIST_TAG],
        }
    );

    return getCachedContent();
}

export async function upsertLayoutContent(
    content: PartialLayoutContentPayload
): Promise<LayoutContentResponse> {
    const savedContent = await layoutContentService.upsertByLocale(content);
    revalidateTag(LAYOUT_CONTENT_LIST_TAG, 'max');
    revalidateTag(getLayoutContentTag(savedContent.locale), 'max');
    return savedContent;
}

export async function deleteLayoutContent(locale: string): Promise<void> {
    const normalizedLocale = normalizeLayoutContentLocale(locale);
    await layoutContentService.deleteByLocale(normalizedLocale);
    revalidateTag(LAYOUT_CONTENT_LIST_TAG, 'max');
    revalidateTag(getLayoutContentTag(normalizedLocale), 'max');
}
