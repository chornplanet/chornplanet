import React from "react";
import AiAomLandingPage from "@/components/AiCompanions/Main/AiAomLandingPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataAiAom} from "@/metadata/main/MetadataAiAom";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import {getAiCompanionsContentForPublicPage} from "@/lib/ai-companions-content/aiCompanionsContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataAiAom[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const content = await getAiCompanionsContentForPublicPage(lang);

    return (
        <div className="smart-container-top">
            <AiAomLandingPage lang={lang} aom={content.aiCompanions.aom}/>
            <AiSolutionsMain
                lang={lang}
                service={content.service}
                llmSlides={content.media.llmSlides}
            />
            <HomeFeatureMain
                lang={lang}
                feature={content.feature}
                featureImage={content.media.featureImage}
                isHideTopTitle={true}
            />
        </div>
    )
}
