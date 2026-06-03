"use client";

import Link from "next/link";
import HeroSection from "@/components/Home/HeroSection";
import HumanDailyFlow from "@/components/Home/HumanDailyFlow";
import LocalToGlobal from "@/components/Home/LocalToGlobal";
import MobilityFocus from "@/components/Home/MobilityFocus";
import CitySystems from "@/components/Home/CitySystems";
import GlobalPatterns from "@/components/Home/GlobalPatterns";
import UrbanSignals from "@/components/Home/UrbanSignals";
import EditorialPositioning from "@/components/Home/EditorialPositioning";
import type { PlatformSmartCityContent } from "@/lib/platform-content/smartCityContent";
import { usePlatformSmartCityContent } from "@/lib/platform-content/usePlatformSmartCityContent";

export default function PlatformSmartCityPage({
  lang,
  content,
}: {
  lang: string;
  content: PlatformSmartCityContent;
}) {
  const { data: cachedContent } = usePlatformSmartCityContent(lang, content);
  const smartCityContent = cachedContent ?? content;
  const smartCityMain = smartCityContent.smartCityMain;

  return (
    <main className="smart-city-main">
      <div className="container">
        <HeroSection lang={lang} data={smartCityContent.heroSection} />

        <section className="smart-city-main-nav">
          <div className="smart-city-main-nav__grid">
            {smartCityMain.navigation.items.map((item, idx) => (
              <Link
                key={idx}
                href={`/${lang}${item.href}`}
                className="smart-city-main-nav__item"
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="smart-city-main-divider" />

        <HumanDailyFlow lang={lang} data={smartCityContent.humanDailyFlow} />
        <LocalToGlobal lang={lang} data={smartCityContent.localToGlobal} />
        <MobilityFocus lang={lang} data={smartCityContent.mobilityFocus} />
        <CitySystems lang={lang} data={smartCityContent.citySystems} />
        <GlobalPatterns lang={lang} data={smartCityContent.globalPatterns} />
        <UrbanSignals lang={lang} data={smartCityContent.urbanSignals} />
        <EditorialPositioning
          lang={lang}
          data={smartCityContent.editorialPositioning}
        />
      </div>
    </main>
  );
}
