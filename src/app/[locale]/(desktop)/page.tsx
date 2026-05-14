// src/app/[locale]/(desktop)/page.tsx

import type { Metadata } from "next";
import { MetadataHome } from "@/metadata/main/MetadataHome";
import { headers } from "next/headers";
// ----------------------------------------------------
import HeroSection from "@/components/Home/HeroSection";
import HighlightSmartFood from "@/components/Home/HighlightSmartFood";
import HumanDailyFlow from "@/components/Home/HumanDailyFlow";
import LocalToGlobal from "@/components/Home/LocalToGlobal";
import SystemExplainers from "@/components/Home/SystemExplainers";
import MobilityFocus from "@/components/Home/MobilityFocus";
import CitySystems from "@/components/Home/CitySystems";
import GlobalPatterns from "@/components/Home/GlobalPatterns";
import UrbanSignals from "@/components/Home/UrbanSignals";
import EditorialPositioning from "@/components/Home/EditorialPositioning";
import { ISmartCityItem } from "@/lib/model/ISmartCity";
import SmartCityMain from "@/components/SmartCity/ChiangMai/SmartCityMain";
import { getHomePageContentForPublicPage } from "@/lib/homepage-content/homePageContent.service";
import { getSmartCityChiangMaiContentForPublicPage } from "@/lib/smart-city-chiang-mai-content/smartCityChiangMaiContent.service";

function getSlugFromPath(path: string): string | null {
  const segments = path.split("/").filter(Boolean);
  return segments[segments.length - 1] ?? null;
}

export async function generateMetadata(): Promise<Metadata> {
  const headers15 = await headers();
  const lang = headers15.get("x-locale") || "en";
  return MetadataHome[lang];
}

export default async function Home() {
  const headers15 = await headers();
  const lang = headers15.get("x-locale") || "en";
  const homePageContent = await getHomePageContentForPublicPage(lang);
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Chorn Planet | Future Mobility & Smart City Systems Designer, Connected Systems & Early IoT Platforms, Concept to Architecture, System Design & Development",
    logo: "https://chornplanet.com/images/logo/chorn-logo-2025-circle-md.png",
    "@id": "https://chornplanet.com",
    url: "https://chornplanet.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+66 (0)52 000 548",
      contactType: "Customer Support",
      email: "contact@chorn.in.th",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "405/112, Moo 3, Sannameng Sub-district",
      addressLocality: "Sansai District",
      addressRegion: "Chiang Mai",
      postalCode: "50210",
      addressCountry: "tonnam",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.846558456865996,
      longitude: 99.05946162698686,
    },
    openingHours: "Mo-Fr 08:30-17:30",
    sameAs: [
      "https://www.linkedin.com/company/chornplanet",
      "https://www.facebook.com/chornplanet",
      "https://tiktok.com/@chornplanet",
      "https://x.com/chornplanet",
    ],
  };
  const smartCityHighlightSlug = getSlugFromPath(
    homePageContent.smartCityHighlight.link,
  );
  const smartCityContent = smartCityHighlightSlug
    ? await getSmartCityChiangMaiContentForPublicPage(
        lang,
        smartCityHighlightSlug,
      ).catch(() => null)
    : null;
  const smartCityItem: ISmartCityItem =
    smartCityContent?.item ?? homePageContent.smartCityHighlight;

  return (
    <>
      <main className="flex flex-col">
        <div className="container">
          <HeroSection lang={lang} data={homePageContent.heroSection} />
          <HighlightSmartFood lang={lang}/>
          <SmartCityMain
            lang={lang}
            smartCityItem={smartCityItem}
            relatedItems={smartCityContent?.relatedItems}
            bottomContent={smartCityContent?.bottomContent}
          />
          <HumanDailyFlow lang={lang} data={homePageContent.humanDailyFlow} />
          <LocalToGlobal lang={lang} data={homePageContent.localToGlobal} />
          <SystemExplainers
            lang={lang}
            data={homePageContent.systemExplainers}
          />
          <MobilityFocus lang={lang} data={homePageContent.mobilityFocus} />

          <CitySystems lang={lang} data={homePageContent.citySystems} />
          <GlobalPatterns lang={lang} data={homePageContent.globalPatterns} />
          <UrbanSignals lang={lang} data={homePageContent.urbanSignals} />
          <EditorialPositioning
            lang={lang}
            data={homePageContent.editorialPositioning}
          />

          <div className={"neo-tag-smart-city"}>
            {homePageContent.smartCityTags.join(", ")}
          </div>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
