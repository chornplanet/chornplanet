"use client";

import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import CloudDevOpsModuleMain from "@/components/Services/cloud-devops/CloudDevOpsModuleMain";
import type { PlatformCloudDevopsContent } from "@/lib/platform-content/cloudDevopsContent";
import { usePlatformCloudDevopsContent } from "@/lib/platform-content/usePlatformCloudDevopsContent";

export default function PlatformCloudDevOpsPage({
  lang,
  content,
}: {
  lang: string;
  content: PlatformCloudDevopsContent;
}) {
  const { data: cachedContent } = usePlatformCloudDevopsContent(lang, content);
  const cloudDevopsContent = cachedContent ?? content;

  return (
    <>
      <CloudDevOpsModuleMain lang={lang} devOps={cloudDevopsContent.devOps} />
      <HomeFeatureMain lang={lang} feature={cloudDevopsContent.feature} />
    </>
  );
}
