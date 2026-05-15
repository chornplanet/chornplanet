import React from "react";
import {Metadata} from "next";
import {headers} from "next/headers";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import HubToChiangMaiAirportMain
    from "@/components/SmartMobility/ChiangMai/Main/HubToChiangMaiAirportMain";
import {MetaHubChiangMaiAirport} from "@/metadata/smart-mobility/chiang-mai/MetaHubChiangMaiAirport";
import {getSmartMobilityChiangMaiContentForPublicPage} from "@/lib/smart-mobility-chiang-mai-content/smartMobilityChiangMaiContent.service";
import {getAiCompanionsContentForPublicPage} from "@/lib/ai-companions-content/aiCompanionsContent.service";
import {AiCompanionsContentPayload} from "@/core/domain/ai-companions-content.entity";

async function loadOptionalAiCompanionsContent(lang: string): Promise<AiCompanionsContentPayload | null> {
    try {
        return await getAiCompanionsContentForPublicPage(lang);
    } catch (error) {
        console.error(
            `[smart-mobility] Optional AI companions content failed for hub-to-chiang-mai-airport locale="${lang}"`,
            error
        );
        return null;
    }
}

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetaHubChiangMaiAirport[lang] ?? MetaHubChiangMaiAirport.en;
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const [content, aiContent] = await Promise.all([
        getSmartMobilityChiangMaiContentForPublicPage(lang, 'hub-to-chiang-mai-airport'),
        loadOptionalAiCompanionsContent(lang),
    ]);

    return (
        <>
            <HubToChiangMaiAirportMain lang={lang} content={content}/>
            {
                aiContent &&
                <>
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
            }
        </>
    )
}
