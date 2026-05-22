import type { Metadata } from "next";
import platformStyleSeed from "@/data/platform/styleContent.seed.json";

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

export type PlatformOutfitLocalizedText = {
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
  title: PlatformOutfitLocalizedText;
  audience: string;
  image: PlatformOutfitImage;
  imageGenerationSize: PlatformOutfitImageGenerationSize;
  visualSummary: PlatformOutfitLocalizedText;
  zoneCandidates: string[];
  zoneDisplay: string[];
  subZoneRequired: boolean;
};

export type PlatformOutfitSeed = {
  localeStrategy: {
    defaultLocale: PlatformOutfitLocale;
    supportedLocales: PlatformOutfitLocale[];
  };
  translations: Partial<
    Record<PlatformOutfitLocale, PlatformOutfitTranslation>
  >;
  outfitSets: PlatformOutfitSet[];
};

export type ResolvedPlatformOutfitContent = PlatformOutfitTranslation & {
  locale: PlatformOutfitLocale;
  outfitSets: PlatformOutfitSet[];
  localeStrategy: PlatformOutfitSeed["localeStrategy"];
};

const styleSeed = platformStyleSeed as PlatformOutfitSeed;
const platformOutfitOgImage =
  "/images-platform/styles/01-rice-valley-couple-lanna.png";

export const PLATFORM_OUTFIT_SUPPORTED_LOCALES =
  styleSeed.localeStrategy.supportedLocales;

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
  if (locale && isPlatformOutfitLocale(locale)) {
    return locale;
  }

  return styleSeed.localeStrategy.defaultLocale;
}

export function getPlatformOutfitContent(
  locale?: string | null,
): ResolvedPlatformOutfitContent {
  const resolvedLocale = resolvePlatformOutfitLocale(locale);
  const defaultTranslation =
    styleSeed.translations[styleSeed.localeStrategy.defaultLocale];

  if (!defaultTranslation) {
    throw new Error(
      "Platform style content seed is missing the default English translation.",
    );
  }

  const translation = styleSeed.translations[resolvedLocale] ?? defaultTranslation;

  return {
    ...translation,
    locale: resolvedLocale,
    outfitSets: getPlatformOutfitSets(),
    localeStrategy: styleSeed.localeStrategy,
  };
}

export function getPlatformOutfitSets(): PlatformOutfitSet[] {
  return [...styleSeed.outfitSets].sort(
    (first, second) => first.order - second.order,
  );
}

export function getPlatformOutfitSetById(
  id: string,
): PlatformOutfitSet | undefined {
  return styleSeed.outfitSets.find((outfitSet) => outfitSet.id === id);
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
  return resolvePlatformOutfitLocale(locale) === "th" ? text.th : text.en;
}

export function getPlatformOutfitExampleImagePath(
  outfitSet: Pick<PlatformOutfitSet, "image">,
): string {
  return outfitSet.image.src;
}

export { styleSeed as platformStyleSeed };
