import React from "react";
import AiCompanionsPage from "@/components/AiCompanions/AiCompanionsPage";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataLlmAi} from "@/metadata/main/MetadataLlmAi";
import {getAiCompanionsContentForPublicPage} from "@/lib/ai-companions-content/aiCompanionsContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataLlmAi[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const {service, demo, media} = await getAiCompanionsContentForPublicPage(lang);

    return (
        <div className="smart-container-top">
            <AiSolutionsMain lang={lang} service={service} llmSlides={media.llmSlides}/>
            <AiCompanionsPage lang={lang} demo={demo}/>
        </div>
    )
}
