import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import PlatformFrontEndDetailPage from "@/components/Services/frontend-development/PlatformFrontEndDetailPage";
import { getPlatformFrontendContent } from "@/lib/platform-content/frontendContent";
import {
  getFrontendRouteBySlug,
  getFrontendRoutes,
  type FrontendMetadataKey,
} from "@/lib/platform-content/frontendRoutes";
import { MetadataAngular } from "@/metadata/main/frontend/MetadataAngular";
import { MetadataCss3 } from "@/metadata/main/frontend/MetadataCss3";
import { MetadataHtml5 } from "@/metadata/main/frontend/MetadataHtml5";
import { MetadataJavaScript } from "@/metadata/main/frontend/MetadataJavaScript";
import { MetadataNextjs } from "@/metadata/main/frontend/MetadataNextjs";
import { MetadataReact } from "@/metadata/main/frontend/MetadataReact";
import { MetadataTypeScript } from "@/metadata/main/frontend/MetadataTypeScript";
import { MetadataVue } from "@/metadata/main/frontend/MetadataVue";

type PageParams = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

const metadataByKey: Record<FrontendMetadataKey, Record<string, Metadata>> = {
  angular: MetadataAngular,
  css3: MetadataCss3,
  html5: MetadataHtml5,
  javascript: MetadataJavaScript,
  nextjs: MetadataNextjs,
  react: MetadataReact,
  typescript: MetadataTypeScript,
  vue: MetadataVue,
};

export function generateStaticParams() {
  return getFrontendRoutes().map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, slug } = await params;
  const route = getFrontendRouteBySlug(slug);

  if (!route) {
    return {};
  }

  return metadataByKey[route.metadataKey][locale] ?? metadataByKey[route.metadataKey].en;
}

export default async function Page({ params }: PageParams) {
  const { slug } = await params;
  const route = getFrontendRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  const headersList = await headers();
  const lang = headersList.get("x-locale") || "en";
  const content = await getPlatformFrontendContent(lang);

  return <PlatformFrontEndDetailPage lang={lang} slug={slug} content={content} />;
}
