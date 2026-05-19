import type {Metadata} from "next";
import platformContent from "@/data/platform/platformContent.json";

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

const contentByLocale = platformContent as Record<string, PlatformContent>;
const defaultContent = contentByLocale.en;

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
