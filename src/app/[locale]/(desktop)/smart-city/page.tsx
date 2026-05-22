// src/app/[locale]/smart-city/page.tsx

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
