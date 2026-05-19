import type {Metadata} from "next";
import platformContent from "@/data/platform/platformContent.json";
import platformOutfitSeed from "./platformContent.seed.json";

export type PlatformLocale = keyof typeof platformContent;
export type PlatformRouteKey =
    | "home"
    | "about"
    | "history"
    | "world"
    | "outfit"
    | "media"
    | "commerce"
    | "smart-food"
    | "luxury";

export type PlatformAction = {
    label: string;
    href: string;
};

export type PlatformCard = {
    category: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    tags: string[];
    cta: string;
    href: string;
};

export type PlatformSection = {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    layout: "featured" | "grid" | "compact";
    cards: PlatformCard[];
};

export type PlatformHero = {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    actions: PlatformAction[];
    signals: string[];
};

export type PlatformHomeContent = {
    hero: PlatformHero;
    sections: PlatformSection[];
};

export type PlatformTextBlock = {
    title: string;
    body: string;
};

export type PlatformStoryContent = {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    blocks: PlatformTextBlock[];
};

export type PlatformChannelContent = {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    cards: PlatformCard[];
};

type PlatformMeta = {
    title: string;
    description: string;
};

type PlatformContent = {
    meta: Record<PlatformRouteKey, PlatformMeta>;
    home: PlatformHomeContent;
    about: PlatformStoryContent;
    history: PlatformStoryContent;
    channels: Partial<Record<Exclude<PlatformRouteKey, "home" | "about" | "history">, PlatformChannelContent>>;
};

export type PlatformOutfitLocale = "da" | "de" | "en" | "fi" | "fr" | "ja" | "ko" | "nl" | "th" | "zh";

export type PlatformOutfitLocalizedText = {
    en: string;
    th: string;
};

export type PlatformOutfitHeroContent = {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    imageStrategy: string;
};

export type PlatformOutfitLayoutSection = {
    id: string;
    order: number;
    label: string;
    title: string;
    description: string;
    uxPattern: string;
    recommendedImageSetIds?: string[];
};

export type PlatformOutfitAudienceGroup = {
    id: string;
    title: string;
    description: string;
};

export type PlatformOutfitTranslation = {
    seo: PlatformMeta;
    navigationLabel: string;
    hero: PlatformOutfitHeroContent;
    layoutSections: PlatformOutfitLayoutSection[];
    audienceGroups: PlatformOutfitAudienceGroup[];
    zonePairingNote: string;
    productionRules: string[];
    cta: {
        title: string;
        description: string;
        primary: string;
        secondary: string;
    };
};

export type PlatformOutfitGalleryItem = {
    slot: "hero" | "full-body" | "environment" | "detail" | "story";
    label: string;
    description: string;
    recommendedAssetPath: string;
    status: "asset-placeholder" | "ready";
    sourceAttachment: string;
};

export type PlatformOutfitSet = {
    id: string;
    order: number;
    title: PlatformOutfitLocalizedText;
    audience: string;
    audienceGroupId: string;
    sourceAttachment: string;
    visualSummary: PlatformOutfitLocalizedText;
    zoneCandidates: string[];
    subZoneRequired: boolean;
    styleTags: string[];
    productDirection: PlatformOutfitLocalizedText;
    galleryPlan: PlatformOutfitGalleryItem[];
    contentUse: string[];
};

export type PlatformOutfitSeed = {
    version: string;
    updatedBy: string;
    status: string;
    routeGroup: string;
    publicRoutes: Record<string, string>;
    sourceReferences: {
        roadmap: string;
        zoneList: string;
        attachments: string[];
    };
    localeStrategy: {
        defaultLocale: PlatformOutfitLocale;
        primaryLocales: PlatformOutfitLocale[];
        supportedLocales: PlatformOutfitLocale[];
        fallbackBehavior: string;
    };
    translations: Partial<Record<PlatformOutfitLocale, PlatformOutfitTranslation>>;
    outfitSets: PlatformOutfitSet[];
};

export type ResolvedPlatformOutfitContent = PlatformOutfitTranslation & {
    locale: PlatformOutfitLocale;
    version: string;
    routeGroup: string;
    publicRoutes: Record<string, string>;
    outfitSets: PlatformOutfitSet[];
    sourceReferences: PlatformOutfitSeed["sourceReferences"];
    localeStrategy: PlatformOutfitSeed["localeStrategy"];
};

const contentByLocale = platformContent as Record<string, PlatformContent>;
const defaultContent = contentByLocale.en;
const outfitSeed = platformOutfitSeed as PlatformOutfitSeed;

export const PLATFORM_OUTFIT_SUPPORTED_LOCALES = outfitSeed.localeStrategy.supportedLocales;

export function getPlatformContent(locale: string): PlatformContent {
    return {
        ...defaultContent,
        ...(contentByLocale[locale] ?? {}),
        meta: {
            ...defaultContent.meta,
            ...(contentByLocale[locale]?.meta ?? {}),
        },
        channels: {
            ...defaultContent.channels,
            ...(contentByLocale[locale]?.channels ?? {}),
        },
    };
}

export function getPlatformMetadata(locale: string, routeKey: PlatformRouteKey): Metadata {
    const content = getPlatformContent(locale);
    const meta = content.meta[routeKey] ?? defaultContent.meta[routeKey];
    const path = routeKey === "home" ? "/" : `/${routeKey}/`;

    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: path,
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
        },
    };
}

export function getPlatformChannelContent(locale: string, routeKey: Exclude<PlatformRouteKey, "home" | "about" | "history">): PlatformChannelContent {
    const content = getPlatformContent(locale);
    return content.channels[routeKey] ?? defaultContent.channels[routeKey]!;
}

export function isPlatformOutfitLocale(locale: string): locale is PlatformOutfitLocale {
    return PLATFORM_OUTFIT_SUPPORTED_LOCALES.includes(locale as PlatformOutfitLocale);
}

export function resolvePlatformOutfitLocale(locale?: string | null): PlatformOutfitLocale {
    if (locale && isPlatformOutfitLocale(locale)) {
        return locale;
    }

    return outfitSeed.localeStrategy.defaultLocale;
}

export function getPlatformOutfitContent(locale?: string | null): ResolvedPlatformOutfitContent {
    const resolvedLocale = resolvePlatformOutfitLocale(locale);
    const defaultTranslation = outfitSeed.translations[outfitSeed.localeStrategy.defaultLocale];

    if (!defaultTranslation) {
        throw new Error("Platform outfit content seed is missing the default English translation.");
    }

    const translation = outfitSeed.translations[resolvedLocale] ?? defaultTranslation;

    return {
        ...translation,
        locale: resolvedLocale,
        version: outfitSeed.version,
        routeGroup: outfitSeed.routeGroup,
        publicRoutes: outfitSeed.publicRoutes,
        outfitSets: getPlatformOutfitSets(),
        sourceReferences: outfitSeed.sourceReferences,
        localeStrategy: outfitSeed.localeStrategy,
    };
}

export function getPlatformOutfitSets(): PlatformOutfitSet[] {
    return [...outfitSeed.outfitSets].sort((first, second) => first.order - second.order);
}

export function getPlatformOutfitSetById(id: string): PlatformOutfitSet | undefined {
    return outfitSeed.outfitSets.find((outfitSet) => outfitSet.id === id);
}

export function getPlatformOutfitSetsByAudience(audienceGroupId: string): PlatformOutfitSet[] {
    return getPlatformOutfitSets().filter((outfitSet) => outfitSet.audienceGroupId === audienceGroupId);
}

export function getPlatformOutfitSetsByZone(zoneFileName: string): PlatformOutfitSet[] {
    return getPlatformOutfitSets().filter((outfitSet) => outfitSet.zoneCandidates.includes(zoneFileName));
}

export function getPlatformOutfitLocalizedText(text: PlatformOutfitLocalizedText, locale?: string | null): string {
    return resolvePlatformOutfitLocale(locale) === "th" ? text.th : text.en;
}

export {outfitSeed as platformOutfitSeed};
