// src/app/[locale]/smart-city/page.tsx

import type {Metadata} from "next";
import {headers} from "next/headers";
import PlatformSmartCityPage from "@/components/SmartCity/PlatformSmartCityPage";
import {getPlatformSmartCityContent} from "@/lib/platform-content/smartCityContent";

const smartCityOgImage =
    "/images-opengraph/smart-city/hero-section/city-shaped-by-people-move.png";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Smart City | Chorn Planet",
        description:
            "Smart City from Chorn Planet studies human flow, mobility, public space, logistics, and city systems through practical urban observation.",
        alternates: {
            canonical: "/smart-city/",
        },
        openGraph: {
            title: "Smart City | Chorn Planet",
            description:
                "Smart City from Chorn Planet studies human flow, mobility, public space, logistics, and city systems through practical urban observation.",
            type: "website",
            images: [
                {
                    url: smartCityOgImage,
                    width: 1200,
                    height: 630,
                    alt: "Chorn Planet Smart City",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Smart City | Chorn Planet",
            description:
                "Smart City from Chorn Planet studies human flow, mobility, public space, logistics, and city systems through practical urban observation.",
            images: [smartCityOgImage],
        },
    };
}

export default async function SmartCityPage() {
    const headers15 = await headers();
    const lang = headers15.get("x-locale") || "en";
    const content = await getPlatformSmartCityContent(lang);

    return <PlatformSmartCityPage lang={lang} content={content}/>;
}
