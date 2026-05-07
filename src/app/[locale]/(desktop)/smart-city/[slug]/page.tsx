// src/app/[locale]/smart-city/[slug]/page.tsx

import {headers} from "next/headers";
import {notFound} from "next/navigation";

import HeroObservation from "@/components/SmartCity/HeroObservation";
import SystemExplanation from "@/components/SmartCity/SystemExplanation";
import WhyItMatters from "@/components/SmartCity/WhyItMatters";
import RelatesSignals from "@/components/SmartCity/RelatesSignals";
import {Metadata} from "next";
import {getMetaSmartCityLanding} from "@/metadata/smart-city-landing/getMetaSmartCityLanding";
import {getSmartCityLandingContentForPublicPage} from "@/lib/smart-city-landing-content/smartCityLandingContent.service";

export async function generateMetadata(
    {params}: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const {slug} = await params;
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    const dataMap = getMetaSmartCityLanding({lang})
    return dataMap[slug];
}

export default async function Page(
    {params}: { params: Promise<{ slug: string }> }
) {
    const headers15 = await headers();
    const lang = headers15.get("x-locale") || "en";

    const {slug} = await params
    const data = await getSmartCityLandingContentForPublicPage(lang, slug).catch(() => null);

    if (!data?.content) notFound();

    return (
        <>
            <HeroObservation lang={lang} {...data.content.heroObservation} />

            {data.content.systemExplanation && (
                <SystemExplanation lang={lang} {...data.content.systemExplanation} />
            )}

            {data.content.whyItMatters && (
                <WhyItMatters lang={lang} {...data.content.whyItMatters} />
            )}

            {data.content.relatedSignals && (
                <RelatesSignals lang={lang} signals={data.content.relatedSignals}/>
            )}
        </>
    );
}
