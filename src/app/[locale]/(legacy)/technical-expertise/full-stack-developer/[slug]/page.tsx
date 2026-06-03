import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import PlatformFullStackDetailPage from "@/components/Services/fullstack-development/PlatformFullStackDetailPage";
import { getPlatformFullstackContent } from "@/lib/platform-content/fullstackContent";
import {
  getFullstackRouteBySlug,
  getFullstackRoutes,
  type FullstackMetadataKey,
} from "@/lib/platform-content/fullstackRoutes";
import { MetadataDotnetCore } from "@/metadata/main/backend/MetadataDotnetCore";
import { MetadataGo } from "@/metadata/main/backend/MetadataGo";
import { MetadataJava } from "@/metadata/main/backend/MetadataJava";
import { MetadataNodejs } from "@/metadata/main/backend/MetadataNodejs";
import { MetadataPhp } from "@/metadata/main/backend/MetadataPhp";
import { MetadataPython } from "@/metadata/main/backend/MetadataPython";

type PageParams = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

const metadataByKey: Record<FullstackMetadataKey, Record<string, Metadata>> = {
  dotnetcore: MetadataDotnetCore,
  go: MetadataGo,
  java: MetadataJava,
  nodejs: MetadataNodejs,
  php: MetadataPhp,
  python: MetadataPython,
};

export function generateStaticParams() {
  return getFullstackRoutes().map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, slug } = await params;
  const route = getFullstackRouteBySlug(slug);

  if (!route) {
    return {};
  }

  return metadataByKey[route.metadataKey][locale] ?? metadataByKey[route.metadataKey].en;
}

export default async function Page({ params }: PageParams) {
  const { slug } = await params;
  const route = getFullstackRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  const headersList = await headers();
  const lang = headersList.get("x-locale") || "en";
  const content = await getPlatformFullstackContent(lang);

  return <PlatformFullStackDetailPage lang={lang} slug={slug} content={content} />;
}
