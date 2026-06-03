"use client";

import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import FullStackPageMain from "@/components/Services/fullstack-development/FullStackPageMain";
import type { PlatformFullstackContent } from "@/lib/platform-content/fullstackContent";
import { usePlatformFullstackContent } from "@/lib/platform-content/usePlatformFullstackContent";

export default function PlatformFullStackPage({
  lang,
  content,
}: {
  lang: string;
  content: PlatformFullstackContent;
}) {
  const { data: cachedContent } = usePlatformFullstackContent(lang, content);
  const fullstackContent = cachedContent ?? content;

  return (
    <>
      <FullStackPageMain lang={lang} fullStack={fullstackContent.fullStack} />
      <HomeFeatureMain lang={lang} feature={fullstackContent.feature} />
    </>
  );
}
