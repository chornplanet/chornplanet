import type { Metadata } from "next";
import coastalStationsSeed from "@/data/smart-mobility/coastal/en.coastal.json";
import mtsContentSeed from "@/data/smart-mobility/mts/en.mts.json";
import valleyStationsSeed from "@/data/smart-mobility/valley/en.valley.json";

export type MtsImageGenerationSize = {
  width: number;
  height: number;
  aspectRatio: string;
  positionKey: string;
};

export type MtsStation = {
  type: "MTS";
  zone: "Coastal" | "Valley" | string;
  world_map: string;
  mts_line: string;
  mts_network: string;
  mts_station: string;
  slug: string;
  name: string;
  story: string;
  image: {
    src: string;
    alt: string;
  };
  imageGenerationSize: MtsImageGenerationSize;
};

export type MtsLine = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  stations: MtsStation[];
};

export type SmartMobilityContent = {
  locale: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  signals: string[];
  lines: MtsLine[];
};

export type SmartMobilityLandingLine = Omit<MtsLine, "stations"> & {
  stations: MtsStation[];
};

export type SmartMobilityLandingContent = Omit<SmartMobilityContent, "lines"> & {
  heroStation: MtsStation;
  lines: SmartMobilityLandingLine[];
};

export type SmartMobilityMtsDetailAction = {
  label: string;
  href: string;
};

export type SmartMobilityMtsDetailContent = {
  backLinkLabel: string;
  stationTagsAriaLabel: string;
  actions: SmartMobilityMtsDetailAction[];
  related: {
    eyebrow: string;
    title: string;
    description: string;
  };
  relatedCardCta: string;
};

export type SmartMobilityStationDetailContent = {
  detail: SmartMobilityMtsDetailContent;
  station: MtsStation;
  relatedStations: MtsStation[];
};

const DEFAULT_LOCALE = "en";
const coastalStations = coastalStationsSeed as MtsStation[];
const mtsContent = mtsContentSeed as { detail: SmartMobilityMtsDetailContent };
const valleyStations = valleyStationsSeed as MtsStation[];
const allStations = [...coastalStations, ...valleyStations];
const smartMobilityOgImage =
  "/images-opengraph/images-platform/smart-mobility/mts-coastal10-grand-coastal-terminal.png";

export function resolveSmartMobilityLocale(locale?: string | null): string {
  return locale || DEFAULT_LOCALE;
}

export function getSmartMobilityContent(
  locale?: string | null,
): SmartMobilityContent {
  return {
    locale: resolveSmartMobilityLocale(locale),
    seo: {
      title: "MTS Future Civilization Platform | Chorn Planet",
      description:
        "Explore the Chorn Planet MTS future civilization network across coastal and valley mobility stations.",
    },
    hero: {
      eyebrow: "MTS Future Civilization",
      title: "MTS connects Chorn Planet into a living civilization network.",
      description:
        "Move from coastal terminals to alpine valleys through an intelligent mobility layer built for future tourism, smart infrastructure, emotional lifestyle stories and human-centered daily life.",
      primaryCta: "Explore Coastal Line",
      secondaryCta: "Explore Valley Line",
    },
    signals: [
      "Intelligent Mobility",
      "Future Tourism",
      "Smart Infrastructure",
      "Human-Centered Environments",
    ],
    lines: [
      {
        id: "coastal",
        eyebrow: "Coastal Line",
        title: "Ocean mobility districts for future tourism.",
        description:
          "Coastal stations connect beach gateways, marinas, lagoon systems, resort districts and terminal-scale movement into a premium waterfront civilization route.",
        stations: coastalStations,
      },
      {
        id: "valley",
        eyebrow: "Valley Line",
        title: "Alpine mobility environments for intelligent living.",
        description:
          "Valley stations move through floral valleys, waterfall districts, misty mountain points and alpine terminals designed as calm future infrastructure.",
        stations: valleyStations,
      },
    ],
  };
}

export function getSmartMobilityStations(): MtsStation[] {
  return [...allStations];
}

export function getSmartMobilityStationBySlug(
  slug: string,
): MtsStation | undefined {
  return allStations.find((station) => station.slug === slug);
}

export function getRelatedSmartMobilityStations(
  slug: string,
  limit = 9,
): MtsStation[] {
  const current = getSmartMobilityStationBySlug(slug);
  const sameLineStations = current
    ? allStations.filter(
        (station) =>
          station.slug !== slug && station.mts_line === current.mts_line,
      )
    : [];
  const otherStations = allStations.filter(
    (station) =>
      station.slug !== slug &&
      !sameLineStations.some((sameLine) => sameLine.slug === station.slug),
  );

  return [...sameLineStations, ...otherStations].slice(0, limit);
}

export function getSmartMobilityStationDetailContent(
  slug: string,
): SmartMobilityStationDetailContent | undefined {
  const station = getSmartMobilityStationBySlug(slug);

  if (!station) {
    return undefined;
  }

  return {
    detail: mtsContent.detail,
    station,
    relatedStations: getRelatedSmartMobilityStations(station.slug),
  };
}

export function getSmartMobilityMtsDetailActions(): SmartMobilityMtsDetailAction[] {
  return [...mtsContent.detail.actions];
}

export function getRandomSmartMobilityStations(
  stations: MtsStation[],
  limit = 6,
): MtsStation[] {
  return [...stations]
    .map((station) => ({ station, sortKey: Math.random() }))
    .sort((first, second) => first.sortKey - second.sortKey)
    .slice(0, limit)
    .map(({ station }) => station);
}

export function getRandomSmartMobilityStation(): MtsStation {
  return allStations[Math.floor(Math.random() * allStations.length)] ?? allStations[0];
}

export function getSmartMobilityLandingContent(
  locale?: string | null,
): SmartMobilityLandingContent {
  const content = getSmartMobilityContent(locale);

  return {
    ...content,
    heroStation: getRandomSmartMobilityStation(),
    lines: content.lines.map((line) => ({
      ...line,
      stations: getRandomSmartMobilityStations(line.stations, 6),
    })),
  };
}

export function getSmartMobilityMetadata(
  locale?: string | null,
): Metadata {
  const content = getSmartMobilityContent(locale);

  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: {
      canonical: `/${resolveSmartMobilityLocale(locale)}/smart-mobility/`,
    },
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      type: "website",
      url: `/${resolveSmartMobilityLocale(locale)}/smart-mobility/`,
      images: [
        {
          url: smartMobilityOgImage,
          width: 1536,
          height: 1024,
          alt: "MTS Coastal 10 Grand Coastal Terminal central mobility hub",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
      images: [smartMobilityOgImage],
    },
  };
}

export function getSmartMobilityStationMetadata({
  locale,
  slug,
}: {
  locale?: string | null;
  slug: string;
}): Metadata {
  const station = getSmartMobilityStationBySlug(slug);

  if (!station) {
    return {
      title: "MTS station not found",
    };
  }

  return {
    title: `${station.name} | Chorn Planet MTS`,
    description: station.story,
    alternates: {
      canonical: `/${resolveSmartMobilityLocale(locale)}/smart-mobility/mts/${station.slug}/`,
    },
    openGraph: {
      title: station.name,
      description: station.story,
      type: "article",
      url: `/${resolveSmartMobilityLocale(locale)}/smart-mobility/mts/${station.slug}/`,
      images: [
        {
          url: station.image.src,
          width: station.imageGenerationSize.width,
          height: station.imageGenerationSize.height,
          alt: station.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: station.name,
      description: station.story,
      images: [station.image.src],
    },
  };
}
