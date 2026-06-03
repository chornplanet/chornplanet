import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import PlatformCloudDevOpsDetailPage from "@/components/Services/cloud-devops/PlatformCloudDevOpsDetailPage";
import { getPlatformCloudDevopsContent } from "@/lib/platform-content/cloudDevopsContent";
import {
  getCloudDevopsRouteBySlug,
  getCloudDevopsRoutes,
  type CloudDevopsMetadataKey,
} from "@/lib/platform-content/cloudDevopsRoutes";
import { MetadataAppium } from "@/metadata/main/devops/MetadataAppium";
import { MetadataDocker } from "@/metadata/main/devops/MetadataDocker";
import { MetadataGitHub } from "@/metadata/main/devops/MetadataGitHub";
import { MetadataGitLab } from "@/metadata/main/devops/MetadataGitLab";
import { MetadataJenkins } from "@/metadata/main/devops/MetadataJenkins";
import { MetadataKube } from "@/metadata/main/devops/MetadataKube";
import { MetadataPostman } from "@/metadata/main/devops/MetadataPostman";
import { MetadataSelenium } from "@/metadata/main/devops/MetadataSelenium";
import { MetadataSoapUI } from "@/metadata/main/devops/MetadataSoapui";

type PageParams = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

const metadataByKey: Record<CloudDevopsMetadataKey, Record<string, Metadata>> = {
  appium: MetadataAppium,
  docker: MetadataDocker,
  github: MetadataGitHub,
  gitlab: MetadataGitLab,
  jenkins: MetadataJenkins,
  kubernetes: MetadataKube,
  postman: MetadataPostman,
  selenium: MetadataSelenium,
  soapui: MetadataSoapUI,
};

export function generateStaticParams() {
  return getCloudDevopsRoutes().map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, slug } = await params;
  const route = getCloudDevopsRouteBySlug(slug);

  if (!route) {
    return {};
  }

  return metadataByKey[route.metadataKey][locale] ?? metadataByKey[route.metadataKey].en;
}

export default async function Page({ params }: PageParams) {
  const { slug } = await params;
  const route = getCloudDevopsRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  const headersList = await headers();
  const lang = headersList.get("x-locale") || "en";
  const content = await getPlatformCloudDevopsContent(lang);

  return <PlatformCloudDevOpsDetailPage lang={lang} slug={slug} content={content} />;
}
