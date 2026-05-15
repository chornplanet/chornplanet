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
import {loadLocalizedContentWithFallback} from "@/lib/localized-content/localizedContentFallback";

const layoutContentService = new LayoutContentService(new LayoutContentRepository());
const LAYOUT_CONTENT_LIST_TAG = 'layout-content';
const isDevelopment = process.env.NODE_ENV !== 'production';
const REQUIRED_LAYOUT_FIELDS = [
    'navbar',
    'footer',
    'consent',
    'languageOptions',
] as const;

const SMART_FOOD_AI_FOOTER_LABELS: Record<string, string> = {
    da: 'Smart Food AI',
    de: 'Smart Food KI',
    en: 'Smart Food AI',
    fi: 'Smart Food AI',
    fr: 'Smart Food IA',
    ja: 'スマートフードAI',
    ko: '스마트 푸드 AI',
    nl: 'Smart Food AI',
    th: 'สมาร์ทฟู้ด AI',
    zh: '智慧餐饮 AI',
};
const YOUTUBE_FOOTER_LINK: IFooterDetail = {
    label: 'Youtube',
    link: 'https://www.youtube.com/@chornplanet',
};
const TIKTOK_CONTENT_DEVELOPMENT_FOOTER_LINK = 'https://tiktok.com/@chornplanet';
const TIKTOK_CONTENT_DEVELOPMENT_FOOTER_LABELS: Record<string, string> = {
    da: 'TikTok-indholdsudvikling',
    de: 'TikTok-Content-Entwicklung',
    en: 'TikTok Content Development',
    fi: 'TikTok-sisällön kehittäminen',
    fr: 'Développement de contenu TikTok',
    ja: 'TikTokコンテンツ開発',
    ko: 'TikTok 콘텐츠 개발',
    nl: 'TikTok-contentontwikkeling',
    th: 'การพัฒนาคอนเทนต์ TikTok',
    zh: 'TikTok 内容开发',
};

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

    return normalizeLayoutContent(databaseContent as LayoutContentPayload);
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

function normalizeSmartFoodAiProjectGroup<T extends { items: IFooterDetail[] }>(locale: string, group: T): T {
    const hasSmartFoodAi = group.items.some((item) => item.link === '/smart-food-ai/');

    if (hasSmartFoodAi) {
        return group;
    }

    return {
        ...group,
        items: [
            {
                label: SMART_FOOD_AI_FOOTER_LABELS[locale] ?? SMART_FOOD_AI_FOOTER_LABELS.en,
                link: '/smart-food-ai/',
            },
            ...group.items,
        ],
    };
}

function normalizeTikTokContentDevelopmentProjectGroup<T extends { items: IFooterDetail[] }>(locale: string, group: T): T {
    const label = TIKTOK_CONTENT_DEVELOPMENT_FOOTER_LABELS[locale] ?? TIKTOK_CONTENT_DEVELOPMENT_FOOTER_LABELS.en;

    return {
        ...group,
        items: group.items.map((item) => {
            if (item.link !== TIKTOK_CONTENT_DEVELOPMENT_FOOTER_LINK) {
                return item;
            }

            return {
                ...item,
                label,
            };
        }),
    };
}

function normalizeSmartFoodAiFooter(locale: string, footer: IFooter): IFooter {
    const normalizedLocale = normalizeLayoutContentLocale(locale);
    const projectWithSmartFoodAi = normalizeSmartFoodAiProjectGroup(normalizedLocale, footer.project);

    return {
        ...footer,
        important: normalizeSmartFoodAiFooterGroup(footer.important),
        project: normalizeTikTokContentDevelopmentProjectGroup(normalizedLocale, projectWithSmartFoodAi),
        technology: normalizeSmartFoodAiFooterGroup(footer.technology),
    };
}

function normalizeSmartFoodAiLayoutContent(content: LayoutContentPayload): LayoutContentPayload {
    return {
        ...content,
        navbar: content.navbar.map(normalizeSmartFoodAiNavbarItem),
        footer: normalizeSmartFoodAiFooter(content.locale, content.footer),
    };
}

function normalizeYoutubeFooterConnect(footer: IFooter): IFooter {
    const hasYoutube = footer.connect.items.some((item) => item.link === YOUTUBE_FOOTER_LINK.link);

    if (hasYoutube) {
        return footer;
    }

    const tiktokIndex = footer.connect.items.findIndex((item) => {
        const label = item.label.toLowerCase();
        const link = item.link.toLowerCase();
        return label === 'tiktok' || link.includes('tiktok.com/@chornplanet');
    });

    const connectItems = [...footer.connect.items];
    connectItems.splice(tiktokIndex >= 0 ? tiktokIndex + 1 : connectItems.length, 0, YOUTUBE_FOOTER_LINK);

    return {
        ...footer,
        connect: {
            ...footer.connect,
            items: connectItems,
        },
    };
}

function normalizeLayoutContent(content: LayoutContentPayload): LayoutContentPayload {
    const smartFoodAiContent = normalizeSmartFoodAiLayoutContent(content);

    return {
        ...smartFoodAiContent,
        footer: normalizeYoutubeFooterConnect(smartFoodAiContent.footer),
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

export async function getLayoutContentForPublicPage(locale: string): Promise<LayoutContentPayload> {
    return loadLocalizedContentWithFallback({
        locale: normalizeLayoutContentLocale(locale),
        context: 'layout content public render',
        load: getLayoutContent,
    });
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
