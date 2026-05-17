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
import {getFallbackLayoutContent} from "@/lib/static-content/publicContentFallbacks";

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
    en: 'TikTok Creator',
    th: 'TikTok ครีเอเตอร์',
    da: 'TikTok-skaber',
    de: 'TikTok-Creator',
    fi: 'TikTok-sisällöntuottaja',
    fr: 'Créateur TikTok',
    ja: 'TikTokクリエイター',
    ko: 'TikTok 크리에이터',
    nl: 'TikTok-creator',
    zh: 'TikTok 创作者',
};

const AI_LUXURY_PLATFORM_NAV_LABELS: Record<string, string> = {
    en: 'AI Luxury Platform',
    th: 'แพลตฟอร์ม AI Luxury',
    da: 'AI Luxury-platform',
    de: 'AI-Luxusplattform',
    fi: 'AI Luxury -alusta',
    fr: 'Plateforme AI Luxury',
    ja: 'AIラグジュアリープラットフォーム',
    ko: 'AI 럭셔리 플랫폼',
    nl: 'AI Luxury-platform',
    zh: 'AI 奢华平台',
};

type MainNavbarGroup = 'Home' | 'AI Luxury' | 'Smart City' | 'Smart Mobility' | 'Smart Food AI' | 'Technology';

const MAIN_NAVBAR_LABELS: Record<MainNavbarGroup, Record<string, string>> = {
    Home: {
        en: 'Home',
        th: 'หน้าแรก',
        da: 'Hjem',
        de: 'Startseite',
        fi: 'Etusivu',
        fr: 'Accueil',
        ja: 'ホーム',
        ko: '홈',
        nl: 'Home',
        zh: '首页',
    },
    'AI Luxury': {
        en: 'AI Luxury Platform',
        th: 'แพลตฟอร์ม AI Luxury',
        da: 'AI Luxury-platform',
        de: 'AI-Luxusplattform',
        fi: 'AI Luxury -alusta',
        fr: 'Plateforme AI Luxury',
        ja: 'AIラグジュアリープラットフォーム',
        ko: 'AI 럭셔리 플랫폼',
        nl: 'AI Luxury-platform',
        zh: 'AI 奢华平台',
    },
    'Smart City': {
        en: 'Smart City',
        th: 'สมาร์ตซิตี้',
        da: 'Smart City',
        de: 'Smart City',
        fi: 'Smart City',
        fr: 'Smart City',
        ja: 'スマートシティ',
        ko: '스마트 시티',
        nl: 'Smart City',
        zh: '智慧城市',
    },
    'Smart Mobility': {
        en: 'Smart Mobility',
        th: 'สมาร์ตโมบิลิตี้',
        da: 'Smart Mobility',
        de: 'Smart Mobility',
        fi: 'Smart Mobility',
        fr: 'Smart Mobility',
        ja: 'スマートモビリティ',
        ko: '스마트 모빌리티',
        nl: 'Smart Mobility',
        zh: '智慧出行',
    },
    'Smart Food AI': {
        en: 'Smart Food AI',
        th: 'สมาร์ตฟู้ด AI',
        da: 'Smart Food AI',
        de: 'Smart Food KI',
        fi: 'Smart Food AI',
        fr: 'Smart Food IA',
        ja: 'スマートフードAI',
        ko: '스마트 푸드 AI',
        nl: 'Smart Food AI',
        zh: '智慧餐饮 AI',
    },
    Technology: {
        en: 'Technology',
        th: 'เทคโนโลยี',
        da: 'Teknologi',
        de: 'Technologie',
        fi: 'Teknologia',
        fr: 'Technologie',
        ja: 'テクノロジー',
        ko: '기술',
        nl: 'Technologie',
        zh: '技术',
    },
};

type MainNavbarItem = Pick<INavbar, 'group' | 'label' | 'link' | 'activeLinks'> & {
    matchGroups?: string[];
    matchLabels?: string[];
    matchLinks?: string[];
};

const MAIN_NAVBAR_ITEMS: MainNavbarItem[] = [
    {
        group: 'Home',
        label: 'Home',
        link: '/',
        activeLinks: [],
        matchLinks: ['/'],
    },
    {
        group: 'AI Luxury',
        label: 'AI Luxury Platform',
        link: '/ai-luxury',
        activeLinks: [],
        matchLabels: ['AI Luxury', 'AI Luxury Platform'],
        matchLinks: ['/ai-luxury', '/ai-luxury/'],
    },
    {
        group: 'Smart City',
        label: 'Smart City',
        link: '/smart-city/',
        activeLinks: [],
        matchLinks: ['/smart-city', '/smart-city/'],
    },
    {
        group: 'Smart Mobility',
        label: 'Smart Mobility',
        link: '/smart-mobility/chiang-mai/',
        activeLinks: [],
        matchLinks: ['/smart-mobility', '/smart-mobility/', '/smart-mobility/chiang-mai/'],
    },
    {
        group: 'Smart Food AI',
        label: 'Smart Food AI',
        link: '/smart-food-ai/',
        activeLinks: [],
        matchGroups: ['AI Integration', 'Smart Food AI'],
        matchLabels: ['AI Integration', 'Smart Food AI'],
        matchLinks: ['/smart-food-ai', '/smart-food-ai/', '/technical-expertise/ai-solutions/'],
    },
    {
        group: 'Technology',
        label: 'Technology',
        link: '/technical-expertise/web-development/',
        activeLinks: [],
        matchLinks: [
            '/technology',
            '/technology/',
            '/technical-expertise',
            '/technical-expertise/ai-solutions/',
            '/technical-expertise/web-development/',
        ],
    },
];

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

function normalizeNavbarPath(path: string): string {
    if (path === '/') {
        return path;
    }

    return path.endsWith('/') ? path.slice(0, -1) : path;
}

function isMainNavbarGroup(group: string): group is MainNavbarGroup {
    return group in MAIN_NAVBAR_LABELS;
}

function getMainNavbarLabel(group: string, locale: string, fallback: string): string {
    if (!isMainNavbarGroup(group)) {
        return fallback;
    }

    const labels = MAIN_NAVBAR_LABELS[group];
    return labels[locale] ?? labels.en ?? fallback;
}

function getMainNavbarMatchLabels(group: string, fallbackLabels: string[]): string[] {
    if (!isMainNavbarGroup(group)) {
        return fallbackLabels;
    }

    return [...fallbackLabels, ...Object.values(MAIN_NAVBAR_LABELS[group])];
}

function normalizeMainNavbar(locale: string, navbar: INavbar[]): INavbar[] {
    const normalizedLocale = normalizeLayoutContentLocale(locale);

    return MAIN_NAVBAR_ITEMS.map((template) => {
        const navbarTemplate: Pick<INavbar, 'group' | 'label' | 'link' | 'activeLinks'> = {
            group: template.group,
            label: getMainNavbarLabel(template.group, normalizedLocale, template.label),
            link: template.link,
            activeLinks: template.activeLinks,
        };
        const templateMatchGroups = [template.group, ...(template.matchGroups ?? [])];
        const templateMatchLabels = getMainNavbarMatchLabels(template.group, [template.label, ...(template.matchLabels ?? [])]);
        const templateMatchLinks = [template.link, ...(template.matchLinks ?? [])].map(normalizeNavbarPath);

        const existingItem = navbar.find((item) => {
            const itemLinks = [item.link, ...(item.activeLinks ?? [])].map(normalizeNavbarPath);

            return templateMatchLabels.includes(item.label) ||
                templateMatchGroups.includes(item.group) ||
                itemLinks.some((link) => templateMatchLinks.includes(link));
        });

        return {
            ...(existingItem ?? {
                level: 0,
                isSubmenu: false,
                submenu: [],
            }),
            ...navbarTemplate,
            isSubmenu: false,
            submenu: [],
        };
    });
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
        navbar: normalizeMainNavbar(content.locale, content.navbar.map(normalizeSmartFoodAiNavbarItem)),
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
    const normalizedLocale = normalizeLayoutContentLocale(locale);

    return loadLocalizedContentWithFallback({
        locale: normalizedLocale,
        context: 'layout content public render',
        load: getLayoutContent,
        fallback: () => getFallbackLayoutContent(normalizedLocale),
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
