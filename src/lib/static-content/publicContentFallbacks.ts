import {AboutContentPayload} from "@/core/domain/about-content.entity";
import {AiCompanionsContentPayload} from "@/core/domain/ai-companions-content.entity";
import {GalleryContentPayload} from "@/core/domain/gallery-content.entity";
import {HomePageContentPayload} from "@/core/domain/homepage-content.entity";
import {LayoutContentPayload} from "@/core/domain/layout-content.entity";
import {PolicyContentPayload} from "@/core/domain/policy-content.entity";
import {SmartFoodAiContentPayload} from "@/core/domain/smart-food-ai-content.entity";
import {SmartCityChiangMaiContentPayload} from "@/lib/model/ISmartCityChiangMai";
import {SmartCityLandingContentPayload} from "@/lib/model/ISmartCityLandingContent";
import {SmartMobilityChiangMaiContentPayload} from "@/lib/model/ISmartMobilityChiangMai";
import {TechnicalExpertiseContentPayload} from "@/core/domain/technical-expertise-content.entity";
import {IImageResponsiveUnit} from "@/image/model/IImageResponsiveUnit";
import {IImageUnit} from "@/image/model/IImageUnit";
import {IFooter} from "@/lib/model/IFooter";
import {INavbar} from "@/lib/model/INavbar";
import {ISmartCityItem} from "@/lib/model/ISmartCity";
import {ISmartImage, ISmartRoute, ISmartSection, IVertiport} from "@/lib/model/ISmartMobility";
import {normalizeAboutContentLocale} from "@/core/domain/about-content.entity";
import {normalizeAiCompanionsContentLocale} from "@/core/domain/ai-companions-content.entity";
import {normalizeGalleryContentLocale} from "@/core/domain/gallery-content.entity";
import {normalizeHomePageLocale} from "@/core/domain/homepage-content.entity";
import {normalizeLayoutContentLocale} from "@/core/domain/layout-content.entity";
import {normalizePolicyContentLocale} from "@/core/domain/policy-content.entity";
import {normalizeSmartCityChiangMaiContentLocale} from "@/core/domain/smart-city-chiang-mai-content.entity";
import {normalizeSmartCityLandingContentLocale} from "@/core/domain/smart-city-landing-content.entity";
import {normalizeSmartFoodAiContentLocale} from "@/core/domain/smart-food-ai-content.entity";
import {normalizeSmartMobilityChiangMaiContentLocale} from "@/core/domain/smart-mobility-chiang-mai-content.entity";
import {normalizeTechnicalExpertiseContentLocale} from "@/core/domain/technical-expertise-content.entity";

const STATIC_FALLBACK_IMAGE_SRC = '/fallback-content.svg';

const EMPTY_RESPONSIVE_IMAGE: IImageResponsiveUnit = {
    title: 'Chorn Planet static fallback image',
    image375: STATIC_FALLBACK_IMAGE_SRC,
    image750: STATIC_FALLBACK_IMAGE_SRC,
    image1200: STATIC_FALLBACK_IMAGE_SRC,
    large: STATIC_FALLBACK_IMAGE_SRC,
    thumbnail: STATIC_FALLBACK_IMAGE_SRC,
};

const EMPTY_IMAGE_UNIT: IImageUnit = {
    title: 'Chorn Planet static fallback image',
    path: STATIC_FALLBACK_IMAGE_SRC,
};

const fallbackText = {
    title: 'Chorn Planet',
    description: 'This page is temporarily using static fallback content while localized MongoDB content is unavailable.',
};

const SMART_MOBILITY_CHIANG_MAI_FALLBACK_DESCRIPTIONS: Record<string, string> = {
    'vision-smart-mobility-northern-gateway':
        'An illustrative future mobility scenario exploring how Chiang Mai could evolve as a smart mobility and connectivity gateway within the Upper Mekong Subregion, integrating land, rail, and conceptual air mobility frameworks under long-term planning perspectives.',
    'urban-hub-san-sai-doi-saket':
        'A future-oriented urban mobility scenario illustrating a potential Smart Mobility Hub in the San Sai-Doi Saket corridor, exploring how transport, urban development, and regional connectivity could evolve over the long term.',
    'hub-to-chiang-mai-airport':
        'A future mobility scenario illustrating a potential urban connectivity corridor between a northern urban hub and Chiang Mai International Airport, presented for contextual and informational purposes only.',
    'hub-to-doi-suthep':
        'A conceptual future mobility scenario illustrating how Chiang Mai\'s urban mobility hub could connect to Doi Suthep through low-impact, culturally sensitive transport approaches.',
    'hub-to-doi-inthanon':
        'A long-term future mobility scenario illustrating how an urban mobility hub in Chiang Mai could connect to Doi Inthanon through evolving ground and air transport concepts.',
    'vertiport-design':
        'A future air mobility scenario illustrating how a vertiport could function as a Smart Air Mobility Gateway for Chiang Mai, with conceptual design, ground integration, and low-altitude air mobility explored as a long-term scenario.',
};

const SMART_MOBILITY_CHIANG_MAI_SCENARIO_NOTE = {
    title: 'Conceptual scenario note',
    description:
        'This content is presented for informational scenario planning only and does not represent approved transport service availability, regulatory clearance, or implementation commitment.',
};

const SMART_MOBILITY_CHIANG_MAI_TITLES: Record<string, string> = {
    'vision-smart-mobility-northern-gateway': 'Vision Smart Mobility Northern Gateway',
    'urban-hub-san-sai-doi-saket': 'Urban Hub San Sai Doi Saket',
    'hub-to-chiang-mai-airport': 'Hub to Chiang Mai Airport',
    'hub-to-doi-suthep': 'Hub to Doi Suthep',
    'hub-to-doi-inthanon': 'Hub to Doi Inthanon',
    'vertiport-design': 'Vertiport Design',
};

const SMART_MOBILITY_CHIANG_MAI_SLUGS = Object.keys(SMART_MOBILITY_CHIANG_MAI_TITLES);

function getSmartMobilityChiangMaiImageUrl(slug: string): string {
    return `/smart-mobility/chiang-mai/${slug}.png`;
}

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

const TIKTOK_CREATOR_FOOTER_LABELS: Record<string, string> = {
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

function getMainNavbarLabel(group: MainNavbarGroup, locale: string): string {
    const labels = MAIN_NAVBAR_LABELS[group];
    return labels[locale] ?? labels.en;
}

function getFallbackFooterProjectItems(locale: string) {
    return [
        {
            label: AI_LUXURY_FOOTER_LABELS[locale] ?? AI_LUXURY_FOOTER_LABELS.en,
            link: '/ai-luxury',
        },
        {
            label: AI_SMART_FOOD_FOOTER_LABELS[locale] ?? AI_SMART_FOOD_FOOTER_LABELS.en,
            link: '/smart-food-ai/',
        },
        {
            label: TIKTOK_CREATOR_FOOTER_LABELS[locale] ?? TIKTOK_CREATOR_FOOTER_LABELS.en,
            link: 'https://tiktok.com/@chornplanet',
        },
        {
            label: 'Future Mobility Scenario',
            link: '/smart-mobility/chiang-mai/',
        },
        {
            label: 'Future Smart City Scenario',
            link: '/smart-city/',
        },
    ];
}

function logStaticFallback(context: string, locale: string, slug?: string) {
    console.error(
        `[localized-content] Using static fallback for ${context} locale="${locale}"${slug ? ` slug="${slug}"` : ''}`
    );
}

function createPolicy(title: string) {
    return {
        title,
        subTitle: 'Static fallback notice',
        description: fallbackText.description,
        contents: [
            {
                title: 'Temporary content source',
                description: 'MongoDB remains the source of truth. This static fallback exists only to keep the public page available.',
                details: [],
            },
        ],
    };
}

function createSmartCityItem(slug = 'smart-city-fallback'): ISmartCityItem {
    return {
        sceneNumber: 'Fallback',
        sceneName: 'Smart City fallback',
        title: 'Smart City Chiang Mai',
        concept: 'Public render fallback',
        description: fallbackText.description,
        features: [
            {
                title: 'Localized content fallback',
                description: 'Requested locale and English content were unavailable or incomplete.',
            },
        ],
        link: `/smart-city/chiang-mai/${slug}/`,
        media: {
            image_url: STATIC_FALLBACK_IMAGE_SRC,
            image_tags: ['Smart City', 'Chiang Mai'],
        },
    };
}

function getSmartMobilityChiangMaiFallbackDescription(slug: string): string {
    return SMART_MOBILITY_CHIANG_MAI_FALLBACK_DESCRIPTIONS[slug] ??
        'A future-oriented smart mobility scenario for Chiang Mai, presented for contextual and informational purposes only.';
}

function createSmartSection(slug: string, title: string): ISmartSection {
    const description = getSmartMobilityChiangMaiFallbackDescription(slug);

    return {
        title,
        description,
        link: `/smart-mobility/chiang-mai/${slug}/`,
        items: [
            {
                title: 'Scenario overview',
                description,
            },
            SMART_MOBILITY_CHIANG_MAI_SCENARIO_NOTE,
        ],
        media: {
            image_url: getSmartMobilityChiangMaiImageUrl(slug),
            image_tags: ['Smart Mobility', 'Chiang Mai'],
        },
    };
}

function createSmartRoute(slug: string, title: string): ISmartRoute {
    const section = createSmartSection(slug, title);

    return {
        ...section,
        link: section.link ?? `/smart-mobility/chiang-mai/${slug}/`,
        transportationModel: {
            title: 'Conceptual mobility model',
            description: section.description,
            sections: [
                {
                    title: 'Planning context',
                    description: SMART_MOBILITY_CHIANG_MAI_SCENARIO_NOTE.description,
                },
            ],
        },
    };
}

function createVertiport(slug: string): IVertiport {
    const description = getSmartMobilityChiangMaiFallbackDescription(slug);

    return {
        title: 'Vertiport Design',
        description,
        link: `/smart-mobility/chiang-mai/${slug}/`,
        structureTitle: 'Conceptual vertiport structure',
        structure: [
            {
                title: 'Planning context',
                items: [
                    {
                        title: SMART_MOBILITY_CHIANG_MAI_SCENARIO_NOTE.title,
                        description: SMART_MOBILITY_CHIANG_MAI_SCENARIO_NOTE.description,
                    },
                ],
            },
        ],
        media: {
            image_url: getSmartMobilityChiangMaiImageUrl(slug),
            image_tags: ['Smart Mobility', 'Vertiport'],
        },
    };
}

function createSmartMobilityRelatedItem(slug: string): ISmartImage {
    return {
        title: SMART_MOBILITY_CHIANG_MAI_TITLES[slug] ?? 'Smart Mobility Chiang Mai',
        link: `/smart-mobility/chiang-mai/${slug}/`,
        media: {
            image_url: getSmartMobilityChiangMaiImageUrl(slug),
            image_tags: ['Smart Mobility', 'Chiang Mai'],
        },
    };
}

function createSmartMobilityFallbackRelatedItems(currentSlug: string): ISmartImage[] {
    return SMART_MOBILITY_CHIANG_MAI_SLUGS
        .filter((slug) => slug !== currentSlug)
        .map(createSmartMobilityRelatedItem);
}

function createSmartMobilityFallbackBottomCards(currentSlug: string): Array<ISmartSection | ISmartRoute> {
    return SMART_MOBILITY_CHIANG_MAI_SLUGS
        .filter((slug) => slug !== currentSlug)
        .slice(0, 2)
        .map((slug) => {
            const title = SMART_MOBILITY_CHIANG_MAI_TITLES[slug] ?? 'Smart Mobility Chiang Mai';
            return slug === 'hub-to-chiang-mai-airport' ||
                slug === 'hub-to-doi-suthep' ||
                slug === 'hub-to-doi-inthanon'
                ? createSmartRoute(slug, title)
                : createSmartSection(slug, title);
        });
}

function createService() {
    return {
        title: 'AI Solutions',
        description: fallbackText.description,
        services: [
            {
                title: 'Fallback service summary',
                description: 'Supplemental AI content is temporarily unavailable.',
            },
        ],
        demo: {
            title: 'AI companion demo',
            description: fallbackText.description,
            link: {
                text: 'Contact Chorn Planet',
                href: '/contact/',
            },
            procedure: {
                title: 'Fallback procedure',
                steps: [
                    {
                        title: 'Restore content',
                        description: 'Repair or reseed the AI Companions MongoDB record.',
                    },
                ],
            },
            note: [],
        },
    };
}

function createFeature() {
    const stacks = [
        {
            title: 'Front End Development',
            description: 'Public pages render with conservative static fallback content.',
            link: '/technical-expertise/front-end-developer/',
            icon: 'flaticon-check',
        },
        {
            title: 'Full Stack Development',
            description: 'Public pages render with conservative static fallback content.',
            link: '/technical-expertise/full-stack-developer/',
            icon: 'flaticon-check',
        },
        {
            title: 'Web Development',
            description: 'Public pages render with conservative static fallback content.',
            link: '/technical-expertise/web-development/',
            icon: 'flaticon-check',
        },
    ];

    return {
        title: 'Digital Product Development',
        span: 'Static fallback',
        subTitle: fallbackText.description,
        stacks,
    };
}

function createAiLanding(name: string) {
    return {
        name,
        category: 'AI Companion',
        thumbnail: STATIC_FALLBACK_IMAGE_SRC,
        pages: {
            landing: {
                link: `/ai-companions/${name.toLowerCase()}/`,
                image: EMPTY_IMAGE_UNIT,
            },
        },
        title: `${name} AI Companion`,
        features: [
            {
                title: 'Static fallback',
                description: fallbackText.description,
                items: [],
            },
        ],
        sidebars: [],
        line: {
            link: '',
            button: '',
        },
        relevants: [],
    };
}

function createTechStack(title: string, link: string) {
    return {
        title,
        description: fallbackText.description,
        image: '',
        alt: title,
        readMore: 'Read more',
        link,
        features: [
            {title: 'Overview', description: fallbackText.description, list: []},
            {title: 'Use cases', description: fallbackText.description, list: ['Static fallback']},
            {title: 'Delivery note', description: fallbackText.description, list: []},
        ],
        faqs: [],
        frameworks: [],
    };
}

function createServiceGroup(title: string) {
    return {
        title,
        descriptions: [fallbackText.description],
        items: [
            {
                title: 'Static fallback',
                description: 'Restore MongoDB content for complete service detail.',
            },
        ],
    };
}

export function getFallbackAboutContent(locale: string): AboutContentPayload {
    const normalizedLocale = normalizeAboutContentLocale(locale);
    logStaticFallback('about content', normalizedLocale);

    return {
        locale: normalizedLocale,
        about: {
            title: 'About',
            span: 'Chorn Planet',
            subTitle: fallbackText.description,
            description: [
                {
                    title: 'Content fallback',
                    description: fallbackText.description,
                },
            ],
            stacks: [],
        },
        media: {
            mainImage: EMPTY_RESPONSIVE_IMAGE,
        },
    };
}

export function getFallbackAiCompanionsContent(
    locale: string,
    options: { log?: boolean } = {}
): AiCompanionsContentPayload {
    const normalizedLocale = normalizeAiCompanionsContentLocale(locale);
    if (options.log !== false) {
        logStaticFallback('AI companions content', normalizedLocale);
    }

    return {
        locale: normalizedLocale,
        demo: createService().demo,
        service: createService(),
        aiCompanions: {
            fah: createAiLanding('Fah'),
            aom: createAiLanding('Aom'),
            ploy: createAiLanding('Ploy'),
        },
        feature: createFeature(),
        media: {
            featureImage: EMPTY_IMAGE_UNIT,
            llmSlides: [],
        },
    };
}

export function getFallbackGalleryContent(locale: string): GalleryContentPayload {
    const normalizedLocale = normalizeGalleryContentLocale(locale);
    logStaticFallback('gallery content', normalizedLocale);

    return {
        locale: normalizedLocale,
        gallery: {
            global: {
                title: 'Gallery',
                description: fallbackText.description,
            },
            slides: [],
        },
        media: {
            bottomSlides: [],
        },
    };
}

export function getFallbackHomePageContent(locale: string): HomePageContentPayload {
    const normalizedLocale = normalizeHomePageLocale(locale);
    logStaticFallback('homepage content', normalizedLocale);
    const image = {url: STATIC_FALLBACK_IMAGE_SRC, alt: 'Static fallback'};
    const dailyFlow = {
        title: 'Daily flow',
        paragraph: fallbackText.description,
        image,
        category: 'fallback',
        signalFocus: ['content reliability'],
        landingUrl: '/smart-city/',
    };

    return {
        locale: normalizedLocale,
        heroSection: {
            headline: 'Chorn Planet',
            paragraph: fallbackText.description,
            softTexts: [],
            image,
            purpose: 'Public render fallback',
            narrativeRole: 'fallback',
            section: 'hero',
            category: 'fallback',
            signalFocus: ['content reliability'],
            landingUrl: '/smart-city/',
        },
        humanDailyFlow: {
            headline: 'Human Daily Flow',
            paragraph: fallbackText.description,
            morningFlow: dailyFlow,
            middayFlow: dailyFlow,
            eveningFlow: dailyFlow,
            purpose: 'Public render fallback',
            narrativeRole: 'fallback',
            section: 'daily-flow',
            category: 'fallback',
            lang: normalizedLocale,
        },
        localToGlobal: {
            headline: 'Local to Global',
            paragraph: fallbackText.description,
            items: [],
            purpose: 'Public render fallback',
            narrativeRole: 'fallback',
            section: 'local-to-global',
            category: 'fallback',
            signalFocus: ['content reliability'],
            landingUrl: '/smart-city/',
            lang: normalizedLocale,
        },
        systemExplainers: {
            headline: 'System Explainers',
            paragraph: fallbackText.description,
            systems: [],
        },
        mobilityFocus: {
            headline: 'Mobility Focus',
            paragraph: fallbackText.description,
            signals: [],
        },
        citySystems: {
            headline: 'City Systems',
            paragraph: fallbackText.description,
            systems: [],
        },
        globalPatterns: {
            headline: 'Global Patterns',
            paragraph: fallbackText.description,
            signals: [],
        },
        urbanSignals: {
            headline: 'Urban Signals',
            paragraph: fallbackText.description,
            signals: [],
        },
        editorialPositioning: {
            headline: 'Editorial Positioning',
            paragraphs: [fallbackText.description],
            principles: [],
        },
        smartCityMain: {
            hero: {
                title: 'Smart City',
                paragraphs: [fallbackText.description],
                cta: {
                    label: 'Explore',
                    href: '/smart-city/',
                },
                image,
            },
            navigation: {
                headline: 'Smart City Signals',
                items: [],
            },
        },
        smartCityHighlight: createSmartCityItem('smart-city-fallback'),
        smartCityTags: ['Smart City', 'Fallback'],
    };
}

export function getFallbackLayoutContent(locale: string): LayoutContentPayload {
    const normalizedLocale = normalizeLayoutContentLocale(locale);
    logStaticFallback('layout content', normalizedLocale);
    const createNavItem = (group: string, label: string, link: string): INavbar => ({
        group,
        label,
        level: 0,
        link,
        activeLinks: [],
        isSubmenu: false,
        submenu: [],
    });
    const navItems: INavbar[] = [
        createNavItem('Home', getMainNavbarLabel('Home', normalizedLocale), '/'),
        createNavItem('AI Luxury', getMainNavbarLabel('AI Luxury', normalizedLocale), '/ai-luxury'),
        createNavItem('Smart City', getMainNavbarLabel('Smart City', normalizedLocale), '/smart-city/'),
        createNavItem('Smart Mobility', getMainNavbarLabel('Smart Mobility', normalizedLocale), '/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway/'),
        createNavItem('Smart Food AI', getMainNavbarLabel('Smart Food AI', normalizedLocale), '/smart-food-ai/'),
        createNavItem('Technology', getMainNavbarLabel('Technology', normalizedLocale), '/technical-expertise/web-development/'),
    ];
    const footerItems = [
        {label: 'Home', link: '/'},
        {label: 'Contact', link: '/contact/'},
        {label: 'Terms of Service', link: '/terms-of-service/'},
        {label: 'Privacy Policy', link: '/privacy-policy/'},
        {label: 'Workplace Policy', link: '/workplace-policy/'},
    ];
    const footer: IFooter = {
        title: 'Chorn Planet',
        link: '/',
        www: 'chornplanet.com',
        description: fallbackText.description,
        social: {title: 'Social', items: []},
        important: {title: 'Important', items: footerItems},
        project: {title: 'Projects', items: getFallbackFooterProjectItems(normalizedLocale)},
        smartCity: {title: 'Smart City', items: []},
        technology: {title: 'Technology', items: []},
        connect: {title: 'Connect', items: []},
    };

    return {
        locale: normalizedLocale,
        navbar: navItems,
        footer,
        consent: {
            description: 'This site uses cookies to improve the public experience.',
            policyLink: '/privacy-policy/',
            policyLabel: 'Privacy Policy',
            buttonText: 'Accept',
        },
        languageOptions: [
            {language: 'English', label: 'EN', locale: 'en'},
            {language: 'Thai', label: 'TH', locale: 'th'},
        ],
    };
}

export function getFallbackPolicyContent(locale: string): PolicyContentPayload {
    const normalizedLocale = normalizePolicyContentLocale(locale);
    logStaticFallback('policy content', normalizedLocale);

    return {
        locale: normalizedLocale,
        privacyPolicy: createPolicy('Privacy Policy'),
        termOfService: createPolicy('Terms of Service'),
        workplacePolicy: createPolicy('Workplace Policy'),
    };
}

export function getFallbackSmartCityChiangMaiContent(locale: string, slug: string): SmartCityChiangMaiContentPayload {
    const normalizedLocale = normalizeSmartCityChiangMaiContentLocale(locale);
    logStaticFallback('smart city Chiang Mai content', normalizedLocale, slug);

    return {
        locale: normalizedLocale,
        slug,
        item: createSmartCityItem(slug),
        relatedItems: [],
        bottomContent: {
            safeStatement: {
                title: 'Static fallback note',
                description: fallbackText.description,
            },
            bottomCards: [],
        },
    };
}

export function getFallbackSmartCityLandingContent(locale: string, slug: string): SmartCityLandingContentPayload {
    const normalizedLocale = normalizeSmartCityLandingContentLocale(locale);
    logStaticFallback('smart city landing content', normalizedLocale, slug);

    return {
        locale: normalizedLocale,
        slug,
        content: {
            heroObservation: {
                headline: 'Smart City Signal',
                paragraphs: [fallbackText.description],
                tags: ['Smart City', 'Fallback'],
                cta: {
                    label: 'Back to Smart City',
                    href: '/smart-city/',
                },
            },
        },
    };
}

export function getFallbackSmartFoodAiContent(locale: string): SmartFoodAiContentPayload {
    const normalizedLocale = normalizeSmartFoodAiContentLocale(locale);
    logStaticFallback('Smart Food AI content', normalizedLocale);
    const image = {src: STATIC_FALLBACK_IMAGE_SRC, alt: 'Static fallback'};
    const heading = {
        eyebrow: 'Static fallback',
        title: 'Smart Food AI',
        text: fallbackText.description,
    };

    return {
        locale: normalizedLocale,
        metadata: {
            title: 'Smart Food AI | Chorn Planet',
            description: fallbackText.description,
            openGraphTitle: 'Smart Food AI',
        },
        hero: {
            eyebrow: 'Smart Food AI',
            title: 'Smart Food AI',
            lead: fallbackText.description,
            support: 'MongoDB content should be restored for complete localized copy.',
            actionsLabel: 'Smart Food AI actions',
            actions: [
                {label: 'Contact', href: '/contact/', variant: 'primary'},
            ],
            visual: {
                ...image,
                ariaLabel: 'Smart Food AI fallback visual',
            },
        },
        proof: {
            heading,
            paragraphs: [fallbackText.description],
            image,
            cards: [
                {index: '01', title: 'Fallback', text: fallbackText.description},
            ],
        },
        workflow: {
            id: 'workflow',
            heading,
            steps: [
                {
                    title: 'Restore content',
                    text: 'Repair or reseed Smart Food AI MongoDB content.',
                    image,
                },
            ],
        },
        features: {
            heading,
            items: ['Static fallback content'],
        },
        value: {
            id: 'value',
            heading,
            cards: [
                {title: 'Availability', text: 'The public page remains available while content is restored.'},
            ],
        },
        futureDirections: ['Restore complete localized MongoDB content.'],
    };
}

export function getFallbackSmartMobilityChiangMaiContent(
    locale: string,
    slug: string,
    {log = true}: { log?: boolean } = {}
): SmartMobilityChiangMaiContentPayload {
    const normalizedLocale = normalizeSmartMobilityChiangMaiContentLocale(locale);
    if (log) {
        logStaticFallback('smart mobility Chiang Mai content', normalizedLocale, slug);
    }
    const title = SMART_MOBILITY_CHIANG_MAI_TITLES[slug] ?? 'Smart Mobility Chiang Mai';
    const pageType =
        slug === 'vertiport-design' ? 'vertiport' :
            slug === 'vision-smart-mobility-northern-gateway' ? 'vision' :
                slug === 'urban-hub-san-sai-doi-saket' ? 'urbanHub' :
                    'route';
    const primaryContent =
        pageType === 'vertiport' ? createVertiport(slug) :
            pageType === 'route' ? createSmartRoute(slug, title) :
                createSmartSection(slug, title);

    return {
        locale: normalizedLocale,
        slug,
        pageType,
        primaryContent,
        connectivityMatrix: {
            title: 'Chiang Mai Smart Mobility Connectivity',
            description:
                'A conceptual connectivity view for Chiang Mai smart mobility scenarios across urban hubs, airport access, mountain destinations, and future air mobility concepts.',
        },
        safeStatement: SMART_MOBILITY_CHIANG_MAI_SCENARIO_NOTE,
        rightItems: createSmartMobilityFallbackRelatedItems(slug),
        bottomCards: createSmartMobilityFallbackBottomCards(slug),
    };
}

export function getFallbackTechnicalExpertiseContent(locale: string): TechnicalExpertiseContentPayload {
    const normalizedLocale = normalizeTechnicalExpertiseContentLocale(locale);
    logStaticFallback('technical expertise content', normalizedLocale);
    const angular = createTechStack('Angular Development', '/technical-expertise/front-end-developer/angular-developer/');
    const css3 = createTechStack('CSS3 Development', '/technical-expertise/front-end-developer/css3-developer/');
    const html5 = createTechStack('HTML5 Development', '/technical-expertise/front-end-developer/html5-developer/');
    const nextjs = createTechStack('Next.js Development', '/technical-expertise/front-end-developer/nextjs-developer/');
    const react = createTechStack('React Development', '/technical-expertise/front-end-developer/react-developer/');
    const typescript = createTechStack('TypeScript Development', '/technical-expertise/front-end-developer/typescript-developer/');
    const vue = createTechStack('Vue Development', '/technical-expertise/front-end-developer/vue-developer/');
    const javascript = createTechStack('JavaScript Development', '/technical-expertise/front-end-developer/javascript-developer/');
    const dotnetcore = createTechStack('.NET Core Development', '/technical-expertise/full-stack-developer/dotnetcore-developer/');
    const go = createTechStack('Go Development', '/technical-expertise/full-stack-developer/go-developer/');
    const java = createTechStack('Java Spring Boot Development', '/technical-expertise/full-stack-developer/java-spring-boot-developer/');
    const nodejs = createTechStack('Node.js Development', '/technical-expertise/full-stack-developer/nodejs-developer/');
    const php = createTechStack('PHP Development', '/technical-expertise/full-stack-developer/php-developer/');
    const python = createTechStack('Python Development', '/technical-expertise/full-stack-developer/python-developer/');
    const appium = createTechStack('Appium', '/technical-expertise/cloud-devops/appium/');
    const docker = createTechStack('Docker', '/technical-expertise/cloud-devops/docker/');
    const github = createTechStack('GitHub', '/technical-expertise/cloud-devops/github/');
    const gitlab = createTechStack('GitLab', '/technical-expertise/cloud-devops/gitlab/');
    const jenkins = createTechStack('Jenkins', '/technical-expertise/cloud-devops/jenkins/');
    const kubernetes = createTechStack('Kubernetes', '/technical-expertise/cloud-devops/kubernetes/');
    const postman = createTechStack('Postman', '/technical-expertise/cloud-devops/postman/');
    const selenium = createTechStack('Selenium', '/technical-expertise/cloud-devops/selenium/');
    const soapui = createTechStack('SoapUI', '/technical-expertise/cloud-devops/soapui/');

    return {
        locale: normalizedLocale,
        mobileDevelopment: {
            pageTitle: 'Mobile Development',
        },
        feature: createFeature(),
        frontEnd: {
            title: 'Front End Development',
            span: 'Static fallback',
            subTitle: fallbackText.description,
            angular,
            css3,
            html5,
            nextjs,
            react,
            typescript,
            vue,
            javascript,
            stacks: [angular, css3, html5, nextjs, react, typescript, vue, javascript],
            services: createServiceGroup('Front End Services'),
        },
        fullStack: {
            title: 'Full Stack Development',
            span: 'Static fallback',
            subTitle: fallbackText.description,
            dotnetcore,
            go,
            java,
            nodejs,
            php,
            python,
            stacks: [dotnetcore, go, java, nodejs, php, python],
            services: createServiceGroup('Full Stack Services'),
        },
        devOps: {
            title: 'Cloud DevOps',
            span: 'Static fallback',
            subTitle: fallbackText.description,
            appium,
            docker,
            github,
            gitlab,
            jenkins,
            kubernetes,
            postman,
            selenium,
            soapui,
            stacks: [appium, docker, github, gitlab, jenkins, kubernetes, postman, selenium, soapui],
            services: createServiceGroup('DevOps Services'),
        },
        cloud: {
            title: 'Cloud Infrastructure',
            span: 'Static fallback',
            subTitle: fallbackText.description,
            stacks: [
                {
                    title: 'Cloud Architecture',
                    description: fallbackText.description,
                    image: '',
                    alt: 'Cloud Architecture',
                    readMore: 'Read more',
                    link: '/technical-expertise/cloud-infrastructure-systems-architecture/',
                },
            ],
        },
        web3: {
            title: 'Web3 Blockchain',
            span: 'Static fallback',
            subTitle: fallbackText.description,
            services: createServiceGroup('Web3 Services'),
        },
        cloudSolution: {
            title: 'Cloud Infrastructure Systems Architecture',
            descriptions: [
                {title: 'Static fallback', span: 'Availability', description: fallbackText.description},
            ],
            benefits: ['Public page availability'],
            sections: [
                {title: 'Restore content', span: 'MongoDB', description: 'Repair or reseed localized technical expertise content.'},
            ],
            migrationProcess: [
                {
                    phase: 'Content restoration',
                    description: fallbackText.description,
                    outcomes: ['MongoDB content restored'],
                },
            ],
        },
    };
}
