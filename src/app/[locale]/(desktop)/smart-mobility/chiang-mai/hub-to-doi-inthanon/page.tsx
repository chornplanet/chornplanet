import React from "react";
import {Metadata} from "next";
import {headers} from "next/headers";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import HubToDoiInthanonMain from "@/components/SmartMobility/ChiangMai/Main/HubToDoiInthanonMain";
import {MetaHubDoiInthanon} from "@/metadata/smart-mobility/chiang-mai/MetaHubDoiInthanon";
import {getSmartMobilityChiangMaiContentForPublicPage} from "@/lib/smart-mobility-chiang-mai-content/smartMobilityChiangMaiContent.service";
import {getAiCompanionsContentForPublicPage} from "@/lib/ai-companions-content/aiCompanionsContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetaHubDoiInthanon[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const [content, aiContent] = await Promise.all([
        getSmartMobilityChiangMaiContentForPublicPage(lang, 'hub-to-doi-inthanon'),
        getAiCompanionsContentForPublicPage(lang),
    ]);

    return (
        <>
            <HubToDoiInthanonMain lang={lang} content={content}/>
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
