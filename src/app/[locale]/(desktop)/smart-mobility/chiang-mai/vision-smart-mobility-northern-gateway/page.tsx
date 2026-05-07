import React from "react";
import VisionChiangMaiMain from "@/components/SmartMobility/ChiangMai/Main/VisionChiangMaiMain";
import {Metadata} from "next";
import {headers} from "next/headers";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import {MetaVisionMobilityChiangMai} from "@/metadata/smart-mobility/chiang-mai/MetaVisionMobilityChiangMai";
import {getSmartMobilityChiangMaiContentForPublicPage} from "@/lib/smart-mobility-chiang-mai-content/smartMobilityChiangMaiContent.service";
import {getAiCompanionsContentForPublicPage} from "@/lib/ai-companions-content/aiCompanionsContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetaVisionMobilityChiangMai[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const [content, aiContent] = await Promise.all([
        getSmartMobilityChiangMaiContentForPublicPage(lang, 'vision-smart-mobility-northern-gateway'),
        getAiCompanionsContentForPublicPage(lang),
    ]);

    return (
        <>
            <VisionChiangMaiMain lang={lang} content={content}/>
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
        </>
    )
}
