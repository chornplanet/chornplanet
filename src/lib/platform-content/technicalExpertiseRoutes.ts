import technicalExpertiseSeed from "@/data/technical-expertise/en.technical-expertise.json";

export type TechnicalExpertisePageKey =
  | "aiSolutions"
  | "cloudInfrastructure"
  | "mobileDevelopment"
  | "webDevelopment"
  | "web3";

export type TechnicalExpertiseMetadataKey = TechnicalExpertisePageKey;

export type TechnicalExpertiseRouteConfig = {
  slug: string;
  pageKey: TechnicalExpertisePageKey;
  metadataKey: TechnicalExpertiseMetadataKey;
  schema?: {
    name: string;
    description: string;
    url: string;
  };
};

const technicalExpertiseRoutes =
  technicalExpertiseSeed.routes as unknown as TechnicalExpertiseRouteConfig[];

export function getTechnicalExpertiseRoutes(): TechnicalExpertiseRouteConfig[] {
  return technicalExpertiseRoutes;
}

export function getTechnicalExpertiseRouteBySlug(
  slug: string,
): TechnicalExpertiseRouteConfig | undefined {
  return technicalExpertiseRoutes.find((route) => route.slug === slug);
}
