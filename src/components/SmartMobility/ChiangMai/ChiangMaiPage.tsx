"use client";

import MainChiangMai from "@/components/SmartMobility/ChiangMai/MainChiangMai";
import type { SmartMobilityChiangMaiContentPayload } from "@/lib/model/ISmartMobilityChiangMai";
import { usePlatformSmartMobilityChiangMaiContent } from "@/lib/platform-content/usePlatformSmartMobilityChiangMaiContent";
import type { SmartMobilityChiangMaiSlug } from "./ChiangMaiRoutes";

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
      <MainChiangMai lang={lang} content={smartMobilityContent} />
    </main>
  );
}
