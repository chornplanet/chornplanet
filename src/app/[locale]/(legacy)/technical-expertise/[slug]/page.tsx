import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import PlatformTechnicalExpertisePage from "@/components/Services/technical-expertise/PlatformTechnicalExpertisePage";
import { getPlatformTechnicalExpertiseContent } from "@/lib/platform-content/technicalExpertiseContent";
import {
  getTechnicalExpertiseRouteBySlug,
  getTechnicalExpertiseRoutes,
  type TechnicalExpertiseMetadataKey,
} from "@/lib/platform-content/technicalExpertiseRoutes";
import { MetadataCloudSolution } from "@/metadata/main/MetadataCloudSolution";
import { MetadataLlmAi } from "@/metadata/main/MetadataLlmAi";
import { MetadataWeb3 } from "@/metadata/main/MetadataWeb3";
import { MetadataWebDevelopment } from "@/metadata/main/MetadataWebDevelopment";

type PageParams = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

const metadataByKey: Partial<
  Record<TechnicalExpertiseMetadataKey, Record<string, Metadata>>
> = {
  aiSolutions: MetadataLlmAi,
  cloudInfrastructure: MetadataCloudSolution,
  webDevelopment: MetadataWebDevelopment,
  web3: MetadataWeb3,
};

export function generateStaticParams() {
  return getTechnicalExpertiseRoutes().map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, slug } = await params;
  const route = getTechnicalExpertiseRouteBySlug(slug);

  if (!route) {
    return {};
  }

  const routeMetadata = metadataByKey[route.metadataKey];

  return routeMetadata?.[locale] ?? routeMetadata?.en ?? {};
}

export default async function Page({ params }: PageParams) {
  const { slug } = await params;
  const route = getTechnicalExpertiseRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  const headersList = await headers();
  const lang = headersList.get("x-locale") || "en";
  const content = await getPlatformTechnicalExpertiseContent(lang);

  return <PlatformTechnicalExpertisePage lang={lang} slug={slug} content={content} />;
}
