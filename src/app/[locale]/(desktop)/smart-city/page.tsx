// src/app/[locale]/smart-city/page.tsx

import type {Metadata} from "next";
import {headers} from "next/headers";
import Link from "next/link";

import HeroSection from "@/components/Home/HeroSection";
import HumanDailyFlow from '@/components/Home/HumanDailyFlow'
import LocalToGlobal from '@/components/Home/LocalToGlobal'
import MobilityFocus from '@/components/Home/MobilityFocus'
import CitySystems from '@/components/Home/CitySystems'
import GlobalPatterns from '@/components/Home/GlobalPatterns'
import UrbanSignals from '@/components/Home/UrbanSignals'
import EditorialPositioning from '@/components/Home/EditorialPositioning'
import {getHomePageContentForPublicPage} from "@/lib/homepage-content/homePageContent.service";

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
    const homePageContent = await getHomePageContentForPublicPage(lang);
    const smartCityMain = homePageContent.smartCityMain;

    return (
        <main className="smart-city-main">
            <div className="container">
                <HeroSection lang={lang} data={homePageContent.heroSection}/>

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

                <div className="smart-city-main-divider"/>

                <HumanDailyFlow lang={lang} data={homePageContent.humanDailyFlow}/>
                <LocalToGlobal lang={lang} data={homePageContent.localToGlobal}/>
                <MobilityFocus lang={lang} data={homePageContent.mobilityFocus}/>
                <CitySystems lang={lang} data={homePageContent.citySystems}/>
                <GlobalPatterns lang={lang} data={homePageContent.globalPatterns}/>
                <UrbanSignals lang={lang} data={homePageContent.urbanSignals}/>
                <EditorialPositioning lang={lang} data={homePageContent.editorialPositioning}/>
            </div>
        </main>
    );
}
