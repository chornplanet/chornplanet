import React from "react";
import AiPloyLandingPage from "@/components/AiCompanions/Main/AiPloyLandingPage";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataAiPloy} from "@/metadata/main/MetadataAiPloy";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import {getAiCompanionsContentForPublicPage} from "@/lib/ai-companions-content/aiCompanionsContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataAiPloy[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const content = await getAiCompanionsContentForPublicPage(lang);

    return (
        <div className="smart-container-top">
            <AiPloyLandingPage lang={lang} ploy={content.aiCompanions.ploy}/>
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
