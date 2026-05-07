// src/app/[locale]/(desktop)/smart-city/chiang-mai/[slug]/page.tsx

import React from "react";
import {Metadata} from "next";
import {headers} from "next/headers";
import {notFound} from "next/navigation"

import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";

import SmartCityMain from "@/components/SmartCity/ChiangMai/SmartCityMain";
import {getMetaSmartCity} from "@/metadata/smart-city/getMetaSmartCity";
import {getSmartCityChiangMaiContentForPublicPage} from "@/lib/smart-city-chiang-mai-content/smartCityChiangMaiContent.service";
import {getAiCompanionsContentForPublicPage} from "@/lib/ai-companions-content/aiCompanionsContent.service";

export async function generateMetadata(
    {params}: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const {slug} = await params;
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    const dataMap = getMetaSmartCity({lang})
    return dataMap[slug];
}

export default async function Page(
    {params}: { params: Promise<{ slug: string }> }
) {
    const headers15 = await headers();
    const lang = headers15.get("x-locale") || "en";

    const {slug} = await params
    const smartCityContent = await getSmartCityChiangMaiContentForPublicPage(lang, slug).catch(() => null);
    if (!smartCityContent?.item) notFound();

    const aiContent = await getAiCompanionsContentForPublicPage(lang);

    return (
        <div className="container">
            <SmartCityMain
                lang={lang}
                smartCityItem={smartCityContent.item}
                relatedItems={smartCityContent.relatedItems}
                bottomContent={smartCityContent.bottomContent}
            />
            <AiSolutionsMain
                lang={lang}
                service={aiContent.service}
                llmSlides={aiContent.media.llmSlides}
            />
            <HomeFeatureMain
                lang={lang}
                feature={aiContent.feature}
                featureImage={aiContent.media.featureImage}
                isHideTopTitle={true}
            />
        </div>
    );
}
