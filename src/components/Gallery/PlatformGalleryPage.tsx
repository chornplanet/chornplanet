"use client";

import AiAomLandingPage from "@/components/AiCompanions/Main/AiAomLandingPage";
import CloudExperience from "@/components/Common/CloudExperience";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import GalleryModuleBottom from "@/components/Gallery/GalleryModuleBottom";
import GalleryPageMain from "@/components/Gallery/GalleryPageMain";
import type { PlatformGalleryContent } from "@/lib/platform-content/galleryContent";
import { usePlatformGalleryContent } from "@/lib/platform-content/usePlatformGalleryContent";

export default function PlatformGalleryPage({
  lang,
  content,
}: {
  lang: string;
  content: PlatformGalleryContent;
}) {
  const { data: cachedContent } = usePlatformGalleryContent(lang, content);
  const galleryContent = cachedContent ?? content;

  return (
    <div className="smart-container-top">
      <GalleryPageMain global={galleryContent.gallery.gallery.global} />
      <GalleryModuleBottom slides={galleryContent.gallery.media.bottomSlides} />
      <CloudExperience lang={lang} cloud={galleryContent.technical.cloud} />
      <AiAomLandingPage
        lang={lang}
        aom={galleryContent.aiCompanions.aiCompanions.aom}
      />
      <HomeFeatureMain
        lang={lang}
        feature={galleryContent.technical.feature}
        isTopSpace={true}
        isHideTopTitle={true}
      />
    </div>
  );
}
