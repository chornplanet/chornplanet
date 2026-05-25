// src/app/[locale]/(desktop)/page.tsx

import type { Metadata } from "next";
import { headers } from "next/headers";
import PlatformHomePage from "@/components/Platform/PlatformHomePage";
import {getPlatformContent, getPlatformMetadata} from "@/lib/platform-content/homeContent";

export async function generateMetadata(): Promise<Metadata> {
  const headers15 = await headers();
  const lang = headers15.get("x-locale") || "en";
  return getPlatformMetadata(lang, "home");
}

export default async function Home() {
  const headers15 = await headers();
  const lang = headers15.get("x-locale") || "en";
  const content = getPlatformContent(lang);
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Chorn Planet | Future Mobility & Smart City Systems Designer, Connected Systems & Early IoT Platforms, Concept to Architecture, System Design & Development",
    logo: "https://chornplanet.com/images/logo/logo-romance-male.png",
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

  return (
    <>
      <PlatformHomePage
        lang={lang}
        content={content.home}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
