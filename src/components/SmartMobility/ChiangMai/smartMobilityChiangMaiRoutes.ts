import type { Metadata } from "next";
import { MetaHubChiangMaiAirport } from "@/metadata/smart-mobility/chiang-mai/MetaHubChiangMaiAirport";
import { MetaHubDoiInthanon } from "@/metadata/smart-mobility/chiang-mai/MetaHubDoiInthanon";
import { MetaHubDoiSuthep } from "@/metadata/smart-mobility/chiang-mai/MetaHubDoiSuthep";
import { MetaUrbanHubSansaiDoiSaket } from "@/metadata/smart-mobility/chiang-mai/MetaUrbanHubSansaiDoiSaket";
import { MetaVertiportDesign } from "@/metadata/smart-mobility/chiang-mai/MetaVertiportDesign";
import { MetaVisionMobilityChiangMai } from "@/metadata/smart-mobility/chiang-mai/MetaVisionMobilityChiangMai";

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

export async function generateSmartMobilityChiangMaiMetadata(
  slug: SmartMobilityChiangMaiSlug,
  locale: string,
): Promise<Metadata> {
  const metadata = SMART_MOBILITY_CHIANG_MAI_ROUTE_METADATA[slug];
  return metadata[locale] ?? metadata.en;
}
