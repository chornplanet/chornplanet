"use client";

import HubToChiangMaiAirportMain from "@/components/SmartMobility/ChiangMai/Main/HubToChiangMaiAirportMain";
import HubToDoiInthanonMain from "@/components/SmartMobility/ChiangMai/Main/HubToDoiInthanonMain";
import HubToDoiSuthepMain from "@/components/SmartMobility/ChiangMai/Main/HubToDoiSuthepMain";
import UrbanHubSansaiDoiSaketMain from "@/components/SmartMobility/ChiangMai/Main/UrbanHubSansaiDoiSaketMain";
import VertiportDesignMain from "@/components/SmartMobility/ChiangMai/Main/VertiportDesignMain";
import VisionChiangMaiMain from "@/components/SmartMobility/ChiangMai/Main/VisionChiangMaiMain";
import type { SmartMobilityChiangMaiContentPayload } from "@/lib/model/ISmartMobilityChiangMai";
import { usePlatformSmartMobilityChiangMaiContent } from "@/lib/platform-content/usePlatformSmartMobilityChiangMaiContent";
import type { SmartMobilityChiangMaiSlug } from "./smartMobilityChiangMaiRoutes";

function renderPrimaryContent(
  slug: SmartMobilityChiangMaiSlug,
  lang: string,
  content: SmartMobilityChiangMaiContentPayload,
) {
  switch (slug) {
    case "hub-to-chiang-mai-airport":
      return <HubToChiangMaiAirportMain lang={lang} content={content} />;
    case "hub-to-doi-inthanon":
      return <HubToDoiInthanonMain lang={lang} content={content} />;
    case "hub-to-doi-suthep":
      return <HubToDoiSuthepMain lang={lang} content={content} />;
    case "urban-hub-san-sai-doi-saket":
      return <UrbanHubSansaiDoiSaketMain lang={lang} content={content} />;
    case "vertiport-design":
      return <VertiportDesignMain lang={lang} content={content} />;
    case "vision-smart-mobility-northern-gateway":
      return <VisionChiangMaiMain lang={lang} content={content} />;
  }
}

export function SmartMobilityChiangMaiPage({
  locale,
  slug,
  content,
}: {
  locale: string;
  slug: SmartMobilityChiangMaiSlug;
  content: SmartMobilityChiangMaiContentPayload;
}) {
  const lang = locale || "en";
  const { data: cachedContent } = usePlatformSmartMobilityChiangMaiContent(
    lang,
    slug,
    content,
  );
  const smartMobilityContent = cachedContent ?? content;

  return (
    <main className={`smart-mobility-premium smart-mobility-premium--${slug}`}>
      {renderPrimaryContent(slug, lang, smartMobilityContent)}
    </main>
  );
}
