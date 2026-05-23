import type { Metadata } from "next";
import platformStyleEnSeed from "@/data/style/en.seed.json";
import platformStyleThSeed from "@/data/style/th.seed.json";

type PlatformMeta = {
  title: string;
  description: string;
};

export type PlatformOutfitLocale =
  | "da"
  | "de"
  | "en"
  | "fi"
  | "fr"
  | "ja"
  | "ko"
  | "nl"
  | "th"
  | "zh";

export type PlatformOutfitLocalizedText = string | {
  en: string;
  th: string;
};

export type PlatformOutfitHeroImage = {
  slot: "primary" | "secondary" | "tertiary";
  src: string;
  alt: string;
  sizes: string;
  imageGenerationSize?: PlatformOutfitImageGenerationSize;
};

export type PlatformOutfitImageGenerationSize = {
  width: number;
  height: number;
  aspectRatio: string;
  positionKey: string;
};

export type PlatformOutfitImage = {
  src: string;
  alt: string;
};

export type PlatformOutfitDetailImage = {
  imageGenerationSize: PlatformOutfitImageGenerationSize;
  image: PlatformOutfitImage;
};

export type PlatformOutfitHeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  imageStrategy: string;
  images: PlatformOutfitHeroImage[];
};

export type PlatformOutfitLayoutSection = {
  id: string;
  label: string;
  title: string;
  description: string;
};

export type PlatformOutfitAudienceGroup = {
  id: string;
  title: string;
  description: string;
};

export type PlatformOutfitTranslation = {
  seo: PlatformMeta;
  hero: PlatformOutfitHeroContent;
  layoutSections: PlatformOutfitLayoutSection[];
  audienceGroups: PlatformOutfitAudienceGroup[];
  zonePairingNote: string;
  productionRules: string[];
  cta: {
    title: string;
    description: string;
    primary: string;
  };
};

export type PlatformOutfitSet = {
  id: string;
  order: number;
  title: string;
  audience: string;
  image: PlatformOutfitImage;
  imageGenerationSize: PlatformOutfitImageGenerationSize;
  images: PlatformOutfitDetailImage[];
  story: string;
  tags: string[];
  tiktok_url: string;
  visualSummary: string;
  zoneCandidates: string[];
  zoneDisplay: string[];
  subZoneRequired: boolean;
};

export type PlatformOutfitSeed = {
  locale: PlatformOutfitLocale;
  localeStrategy: {
    defaultLocale: PlatformOutfitLocale;
    supportedLocales: PlatformOutfitLocale[];
  };
  content: PlatformOutfitTranslation;
  outfitSets: PlatformOutfitSet[];
};

export type ResolvedPlatformOutfitContent = PlatformOutfitTranslation & {
  locale: PlatformOutfitLocale;
  outfitSets: PlatformOutfitSet[];
  localeStrategy: PlatformOutfitSeed["localeStrategy"];
};

const styleSeeds = {
  en: platformStyleEnSeed,
  th: platformStyleThSeed,
} as Record<string, PlatformOutfitSeed>;
const defaultStyleSeed = styleSeeds.en;
const platformOutfitOgImage =
  "/images-platform/styles/01-rice-valley-couple-lanna.png";

export const PLATFORM_OUTFIT_SUPPORTED_LOCALES =
  defaultStyleSeed.localeStrategy.supportedLocales;

export function getPlatformOutfitMetadata(locale?: string | null): Metadata {
  const content = getPlatformOutfitContent(locale);

  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: {
      canonical: "/style/",
    },
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      type: "website",
      images: [
        {
          url: platformOutfitOgImage,
          width: 1600,
          height: 1000,
          alt: "Rice Valley Couple Lanna",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
      images: [platformOutfitOgImage],
    },
  };
}

export function getPlatformOutfitDetailMetadata({
  locale,
  slug,
}: {
  locale?: string | null;
  slug: string;
}): Metadata {
  const outfitSet = getPlatformOutfitSetById(slug, locale);

  if (!outfitSet) {
    return {
      title: "Style outfit not found",
    };
  }

  const title = getPlatformOutfitLocalizedText(outfitSet.title, locale);
  const description = getPlatformOutfitLocalizedText(outfitSet.story, locale);
  const ogImageOutfitSet = getPlatformOutfitSetById(slug, "en") ?? outfitSet;

  return {
    title: `${title} | Chorn Planet Style`,
    description,
    alternates: {
      canonical: `/style/${outfitSet.id}/`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: ogImageOutfitSet.image.src,
          width: ogImageOutfitSet.imageGenerationSize.width,
          height: ogImageOutfitSet.imageGenerationSize.height,
          alt: ogImageOutfitSet.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageOutfitSet.image.src],
    },
  };
}

export function isPlatformOutfitLocale(
  locale: string,
): locale is PlatformOutfitLocale {
  return PLATFORM_OUTFIT_SUPPORTED_LOCALES.includes(
    locale as PlatformOutfitLocale,
  );
}

export function resolvePlatformOutfitLocale(
  locale?: string | null,
): PlatformOutfitLocale {
  if (locale && isPlatformOutfitLocale(locale) && styleSeeds[locale]) {
    return locale as PlatformOutfitLocale;
  }

  return defaultStyleSeed.localeStrategy.defaultLocale;
}

function getPlatformOutfitSeed(locale?: string | null): PlatformOutfitSeed {
  return styleSeeds[resolvePlatformOutfitLocale(locale)] ?? defaultStyleSeed;
}

export function getPlatformOutfitContent(
  locale?: string | null,
): ResolvedPlatformOutfitContent {
  const resolvedLocale = resolvePlatformOutfitLocale(locale);
  const seed = getPlatformOutfitSeed(resolvedLocale);

  return {
    ...seed.content,
    locale: resolvedLocale,
    outfitSets: getPlatformOutfitSets(resolvedLocale),
    localeStrategy: defaultStyleSeed.localeStrategy,
  };
}

export function getPlatformOutfitSets(
  locale?: string | null,
): PlatformOutfitSet[] {
  return [...getPlatformOutfitSeed(locale).outfitSets].sort(
    (first, second) => first.order - second.order,
  );
}

export function getPlatformOutfitSetById(
  id: string,
  locale?: string | null,
): PlatformOutfitSet | undefined {
  return getPlatformOutfitSeed(locale).outfitSets.find(
    (outfitSet) => outfitSet.id === id,
  );
}

export function getPlatformOutfitSetsByZone(
  zoneFileName: string,
): PlatformOutfitSet[] {
  return getPlatformOutfitSets().filter((outfitSet) =>
    outfitSet.zoneCandidates.includes(zoneFileName),
  );
}

export function getPlatformOutfitLocalizedText(
  text: PlatformOutfitLocalizedText,
  locale?: string | null,
): string {
  if (typeof text === "string") {
    return text;
  }

  return resolvePlatformOutfitLocale(locale) === "th" ? text.th : text.en;
}

export function getPlatformOutfitExampleImagePath(
  outfitSet: Pick<PlatformOutfitSet, "image">,
): string {
  return outfitSet.image.src;
}

export { defaultStyleSeed as platformStyleSeed };
