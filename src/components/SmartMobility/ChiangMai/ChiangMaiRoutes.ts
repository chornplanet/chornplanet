import type { Metadata } from "next";
import { MetaHubChiangMaiAirport } from "@/metadata/smart-mobility/chiang-mai/MetaHubChiangMaiAirport";
import { MetaHubDoiInthanon } from "@/metadata/smart-mobility/chiang-mai/MetaHubDoiInthanon";
import { MetaHubDoiSuthep } from "@/metadata/smart-mobility/chiang-mai/MetaHubDoiSuthep";
import { MetaUrbanHubSansaiDoiSaket } from "@/metadata/smart-mobility/chiang-mai/MetaUrbanHubSansaiDoiSaket";
import { MetaVertiportDesign } from "@/metadata/smart-mobility/chiang-mai/MetaVertiportDesign";
import { MetaVisionMobilityChiangMai } from "@/metadata/smart-mobility/chiang-mai/MetaVisionMobilityChiangMai";
import {
  getSmartMobilityMtsDetailActions,
  type SmartMobilityMtsDetailAction,
} from "@/lib/platform-content/smartMobilityContent";

export const SMART_MOBILITY_CHIANG_MAI_DEFAULT_SLUG =
  "vision-smart-mobility-northern-gateway";

export const SMART_MOBILITY_CHIANG_MAI_ROUTE_METADATA = {
  "hub-to-chiang-mai-airport": MetaHubChiangMaiAirport,
  "hub-to-doi-inthanon": MetaHubDoiInthanon,
  "hub-to-doi-suthep": MetaHubDoiSuthep,
  "urban-hub-san-sai-doi-saket": MetaUrbanHubSansaiDoiSaket,
  "vertiport-design": MetaVertiportDesign,
  "vision-smart-mobility-northern-gateway": MetaVisionMobilityChiangMai,
} as const;

export type SmartMobilityChiangMaiSlug =
  keyof typeof SMART_MOBILITY_CHIANG_MAI_ROUTE_METADATA;

export type SmartMobilityChiangMaiAction = SmartMobilityMtsDetailAction & {
  slug?: SmartMobilityChiangMaiSlug;
};

export const SMART_MOBILITY_CHIANG_MAI_ROUTE_LABELS: Record<
  SmartMobilityChiangMaiSlug,
  string
> = {
  "hub-to-chiang-mai-airport": "Chiang Mai Airport",
  "hub-to-doi-inthanon": "Doi Inthanon",
  "hub-to-doi-suthep": "Doi Suthep",
  "urban-hub-san-sai-doi-saket": "San Sai-Doi Saket",
  "vertiport-design": "Vertiport Design",
  "vision-smart-mobility-northern-gateway": "Northern Gateway",
};

export function isSmartMobilityChiangMaiSlug(
  slug: string,
): slug is SmartMobilityChiangMaiSlug {
  return slug in SMART_MOBILITY_CHIANG_MAI_ROUTE_METADATA;
}

export function getSmartMobilityChiangMaiSlugs(): SmartMobilityChiangMaiSlug[] {
  return Object.keys(
    SMART_MOBILITY_CHIANG_MAI_ROUTE_METADATA,
  ) as SmartMobilityChiangMaiSlug[];
}

function getSmartMobilityChiangMaiRouteHref(
  slug: SmartMobilityChiangMaiSlug,
) {
  return `/smart-mobility/chiang-mai/${slug}/`;
}

function getSmartMobilityChiangMaiSlugFromHref(
  href: string,
): SmartMobilityChiangMaiSlug | undefined {
  return getSmartMobilityChiangMaiSlugs().find((slug) =>
    href.includes(`/smart-mobility/chiang-mai/${slug}/`),
  );
}

export function getSmartMobilityChiangMaiActions(): SmartMobilityChiangMaiAction[] {
  const actionsByHref = new Map<string, SmartMobilityChiangMaiAction>();

  for (const action of getSmartMobilityMtsDetailActions()) {
    actionsByHref.set(action.href, {
      ...action,
      slug: getSmartMobilityChiangMaiSlugFromHref(action.href),
    });
  }

  for (const slug of getSmartMobilityChiangMaiSlugs()) {
    const href = getSmartMobilityChiangMaiRouteHref(slug);

    if (!actionsByHref.has(href)) {
      actionsByHref.set(href, {
        label: SMART_MOBILITY_CHIANG_MAI_ROUTE_LABELS[slug],
        href,
        slug,
      });
    }
  }

  return [...actionsByHref.values()];
}

export async function generateSmartMobilityChiangMaiMetadata(
  slug: SmartMobilityChiangMaiSlug,
  locale: string,
): Promise<Metadata> {
  const metadata = SMART_MOBILITY_CHIANG_MAI_ROUTE_METADATA[slug];
  return metadata[locale] ?? metadata.en;
}
