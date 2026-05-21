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
import {ILanguageOption} from "@/lib/model/ILanguage";
import {loadLocalizedContentWithFallback} from "@/lib/localized-content/localizedContentFallback";
import {getFallbackLayoutContent} from "@/lib/static-content/publicContentFallbacks";
import {LanguageOptionList, LanguageOptionRecord} from "@/lib/constants/languageOptions";

const layoutContentService = new LayoutContentService(new LayoutContentRepository());
const LAYOUT_CONTENT_LIST_TAG = 'layout-content';
const LAYOUT_CONTENT_CACHE_VERSION = '2026-05-17-ai-smart-food-label';
const isDevelopment = process.env.NODE_ENV !== 'production';
const REQUIRED_LAYOUT_FIELDS = [
    'navbar',
    'footer',
    'consent',
    'languageOptions',
] as const;

const AI_LUXURY_FOOTER_LABELS: Record<string, string> = {
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
const AI_SMART_FOOD_FOOTER_LABELS: Record<string, string> = {
    en: 'AI Smart Food',
    th: 'AI Smart Food',
    da: 'AI Smart Food',
    de: 'AI Smart Food',
    fi: 'AI Smart Food',
    fr: 'AI Smart Food',
    ja: 'AIスマートフード',
    ko: 'AI 스마트 푸드',
    nl: 'AI Smart Food',
    zh: 'AI 智慧食品',
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

type MainNavbarGroup = 'Home' | 'Luxury' | 'Smart Food' | 'Style' | 'Smart City' | 'Smart Mobility' | 'Technology';

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
    Luxury: {en: 'Luxury', th: 'Luxury', da: 'Luxury', de: 'Luxury', fi: 'Luxury', fr: 'Luxury', ja: 'Luxury', ko: 'Luxury', nl: 'Luxury', zh: 'Luxury'},
    'Smart Food': {en: 'Smart Food', th: 'Smart Food', da: 'Smart Food', de: 'Smart Food', fi: 'Smart Food', fr: 'Smart Food', ja: 'Smart Food', ko: 'Smart Food', nl: 'Smart Food', zh: 'Smart Food'},
    Style: {en: 'Style', th: 'Style', da: 'Style', de: 'Style', fi: 'Style', fr: 'Style', ja: 'Style', ko: 'Style', nl: 'Style', zh: 'Style'},
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
        matchGroups: ['World'],
        matchLabels: ['World'],
        matchLinks: ['/', '/world', '/world/'],
    },
    {
        group: 'Luxury',
        label: 'Luxury',
        link: '/luxury/',
        activeLinks: [],
        matchLabels: ['AI Luxury', 'AI Luxury Platform'],
        matchLinks: ['/luxury', '/luxury/', '/ai-luxury', '/ai-luxury/'],
    },
    {
        group: 'Smart Food',
        label: 'Smart Food',
        link: '/smart-food/',
        activeLinks: [],
        matchGroups: ['AI Integration', 'Smart Food AI'],
        matchLabels: ['AI Integration', 'Smart Food AI', 'AI Smart Food Platform', 'AI Smart Food'],
        matchLinks: ['/smart-food', '/smart-food/', '/smart-food-ai', '/smart-food-ai/'],
    },
    {
        group: 'Style',
        label: 'Style',
        link: '/style/',
        activeLinks: [],
        matchLabels: ['Outfit'],
        matchLinks: ['/style', '/style/', '/outfit', '/outfit/'],
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
        link: '/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway/',
        activeLinks: [],
        matchLinks: ['/smart-mobility', '/smart-mobility/', '/smart-mobility/chiang-mai', '/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway/'],
    },
    {
        group: 'Technology',
        label: 'Technology',
        link: '/technical-expertise/web-development/',
        activeLinks: [],
        matchGroups: ['Technical Expertise'],
        matchLabels: ['Technical Expertise', 'AI Integration'],
        matchLinks: ['/technical-expertise', '/technical-expertise/', '/technical-expertise/web-development', '/technical-expertise/web-development/', '/smart-food-ai', '/smart-food-ai/'],
    },
];
function getLayoutContentTag(locale: string) {
    return `layout-content:${LAYOUT_CONTENT_CACHE_VERSION}:${normalizeLayoutContentLocale(locale)}`;
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
        label: 'AI Smart Food',
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

function normalizeTikTokProjectItem(locale: string, item?: IFooterDetail): IFooterDetail {
    const label = TIKTOK_CONTENT_DEVELOPMENT_FOOTER_LABELS[locale] ?? TIKTOK_CONTENT_DEVELOPMENT_FOOTER_LABELS.en;

    return {
        ...(item ?? {}),
        label,
        link: TIKTOK_CONTENT_DEVELOPMENT_FOOTER_LINK,
    };
}

function isProjectLink(item: IFooterDetail, links: string[]): boolean {
    const normalizedLink = normalizeNavbarPath(item.link);
    return links.map(normalizeNavbarPath).includes(normalizedLink);
}

function isTikTokProjectLink(item: IFooterDetail): boolean {
    return item.link.toLowerCase().includes('tiktok.com/@chornplanet');
}

function normalizeProjectGroup<T extends { items: IFooterDetail[] }>(locale: string, group: T): T {
    const aiLuxuryLinks = ['/ai-luxury', '/ai-luxury/'];
    const aiSmartFoodLinks = ['/smart-food-ai', '/smart-food-ai/'];
    const aiLuxuryItem = group.items.find((item) => isProjectLink(item, aiLuxuryLinks));
    const aiSmartFoodItem = group.items.find((item) => isProjectLink(item, aiSmartFoodLinks));
    const tiktokItem = group.items.find(isTikTokProjectLink);
    const remainingItems = group.items.filter((item) => {
        return !isProjectLink(item, aiLuxuryLinks) &&
            !isProjectLink(item, aiSmartFoodLinks) &&
            !isTikTokProjectLink(item);
    });

    return {
        ...group,
        items: [
            {
                ...(aiLuxuryItem ?? {}),
                label: AI_LUXURY_FOOTER_LABELS[locale] ?? AI_LUXURY_FOOTER_LABELS.en,
                link: '/ai-luxury',
            },
            {
                ...(aiSmartFoodItem ?? {}),
                label: AI_SMART_FOOD_FOOTER_LABELS[locale] ?? AI_SMART_FOOD_FOOTER_LABELS.en,
                link: '/smart-food-ai/',
            },
            normalizeTikTokProjectItem(locale, tiktokItem),
            ...remainingItems,
        ],
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

    return {
        ...footer,
        important: normalizeSmartFoodAiFooterGroup(footer.important),
        project: normalizeProjectGroup(normalizedLocale, footer.project),
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

function normalizePlatformFooter(footer: IFooter): IFooter {
    return {
        ...footer,
        important: {
            title: 'Important Links',
            items: [
                {label: 'About', link: '/about/'},
                {label: 'History', link: '/history/'},
                {label: 'Smart City', link: '/smart-city/'},
                {label: 'Smart Mobility', link: '/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway/'},
                {label: 'Technology', link: '/technical-expertise/web-development/'},
                {label: 'Contact', link: '/contact/'},
            ],
        },
        project: {
            title: 'Projects',
            items: [
                {label: 'Luxury Project', link: '/luxury/'},
                {label: 'Smart Food System', link: '/smart-food/'},
                {label: 'Outfit Scene', link: '/outfit/'},
                {label: 'Chorn Planet', link: '/'},
            ],
        },
        smartCity: {
            title: 'Platform',
            items: [
                {label: 'World', link: '/world/'},
                {label: 'Luxury', link: '/luxury/'},
                {label: 'Smart Food', link: '/smart-food/'},
                {label: 'Outfit', link: '/outfit/'},
                {label: 'Media', link: '/media/'},
                {label: 'Commerce', link: '/commerce/'},
            ],
        },
        technology: {
            title: 'Commerce',
            items: [
                {label: 'Outfit Commerce', link: '/commerce/'},
                {label: 'TikTok Soon', link: 'https://tiktok.com/@chornplanet'},
                {label: 'Grocery Soon', link: '/commerce/'},
                {label: 'Marketplace Links Soon', link: '/commerce/'},
            ],
        },
    };
}

function normalizeLayoutContent(content: LayoutContentPayload): LayoutContentPayload {
    const smartFoodAiContent = normalizeSmartFoodAiLayoutContent(content);

    return {
        ...smartFoodAiContent,
        footer: normalizePlatformFooter(normalizeYoutubeFooterConnect(smartFoodAiContent.footer)),
        languageOptions: normalizeLanguageOptions(smartFoodAiContent.languageOptions),
    };
}

function normalizeLanguageOptions(languageOptions: ILanguageOption[] = []): ILanguageOption[] {
    const optionsByLanguage = new Map(
        languageOptions
            .filter((option) => option?.language && LanguageOptionRecord[option.language])
            .map((option) => [option.language, option])
    );

    return LanguageOptionList.map((defaultOption) => ({
        ...defaultOption,
        ...(optionsByLanguage.get(defaultOption.language) ?? {}),
        language: defaultOption.language,
        label: defaultOption.label,
        locale: defaultOption.locale,
    }));
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
        ['layout-content-by-locale', LAYOUT_CONTENT_CACHE_VERSION, normalizedLocale],
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
        ['layout-content-all', LAYOUT_CONTENT_CACHE_VERSION],
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
