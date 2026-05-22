import type { Metadata } from "next";
import platformContent from "@/data/platform/homeContent.json";

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

export type PlatformImageGenerationSize = {
  width: number;
  height: number;
  aspectRatio: string;
  positionKey: string;
};

export type PlatformCard = {
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageGenerationSize?: PlatformImageGenerationSize;
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
  imageGenerationSize?: PlatformImageGenerationSize;
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
  tags?: string[];
  link?: string;
};

export type PlatformStoryContent = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageGenerationSize?: PlatformImageGenerationSize;
  blocks: PlatformTextBlock[];
};

export type PlatformChannelContent = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageGenerationSize?: PlatformImageGenerationSize;
  cards: PlatformCard[];
};

type PlatformMeta = {
  title: string;
  description: string;
};

type PlatformContent = {
  meta: Partial<Record<PlatformRouteKey, PlatformMeta>>;
  home: PlatformHomeContent;
  about: PlatformStoryContent;
  history?: PlatformStoryContent;
  channels: Partial<
    Record<
      Exclude<PlatformRouteKey, "home" | "about" | "history">,
      PlatformChannelContent
    >
  >;
};

type PlatformContentInput = Partial<Omit<PlatformContent, "meta" | "channels">> & {
  meta?: Partial<Record<PlatformRouteKey, PlatformMeta>>;
  channels?: PlatformContent["channels"];
};

const contentByLocale = platformContent as Record<string, PlatformContentInput>;
const defaultContent = contentByLocale.en as PlatformContent;

export function getPlatformContent(locale: string): PlatformContent {
  const localeContent = contentByLocale[locale] ?? {};

  return {
    ...defaultContent,
    ...localeContent,
    meta: {
      ...defaultContent.meta,
      ...(localeContent.meta ?? {}),
    },
    channels: {
      ...defaultContent.channels,
      ...(localeContent.channels ?? {}),
    },
  } as PlatformContent;
}

export function getPlatformMetadata(
  locale: string,
  routeKey: PlatformRouteKey,
): Metadata {
  const content = getPlatformContent(locale);
  const meta =
    content.meta[routeKey] ??
    defaultContent.meta[routeKey] ??
    defaultContent.meta.home;
  const resolvedMeta = meta ?? {
    title: "Chorn Planet",
    description: "Chorn Planet platform.",
  };
  const path = routeKey === "home" ? "/" : `/${routeKey}/`;

  return {
    title: resolvedMeta.title,
    description: resolvedMeta.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: resolvedMeta.title,
      description: resolvedMeta.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedMeta.title,
      description: resolvedMeta.description,
    },
  };
}

export function getPlatformChannelContent(
  locale: string,
  routeKey: Exclude<PlatformRouteKey, "home" | "about" | "history">,
): PlatformChannelContent {
  const content = getPlatformContent(locale);
  return content.channels[routeKey] ?? defaultContent.channels[routeKey]!;
}
