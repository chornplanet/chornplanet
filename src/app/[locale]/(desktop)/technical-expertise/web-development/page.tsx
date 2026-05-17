import React from "react";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import WebDevelopmentPageMain from "@/components/Services/WebDevelopment/WebDevelopmentPageMain";
import {headers} from "next/headers";
import {MetadataWebDevelopment} from "@/metadata/main/MetadataWebDevelopment";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";
import {getAiCompanionsContentForPublicPage} from "@/lib/ai-companions-content/aiCompanionsContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataWebDevelopment[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const [content, aiCompanionsContent] = await Promise.all([
        getTechnicalExpertiseContentForPublicPage(lang),
        getAiCompanionsContentForPublicPage(lang),
    ]);

    return (
        <div className="smart-container-top">
            <WebDevelopmentPageMain
                lang={lang}
                content={content}
                aiSolutionService={aiCompanionsContent.service}
                aiSolutionSlides={aiCompanionsContent.media.llmSlides}
            />
            
            <HomeFeatureMain lang={lang} feature={content.feature} isHideTopTitle={true}/>
            
            <CloudExperience lang={lang} cloud={content.cloud}/>
            <SchemaMarkupServicePage
                name="Web Development Services | Chorn Planet | Custom Software & Technology Solutions"
                description="Explore Chorn Planet's web development services, including expertise in Next.js, React, Angular, Vue, and more. Chorn Planet offers tailored solutions for businesses across various domains such as Digital Marketing, Blockchain, E-Commerce, and more."
                url="https://chornplanet.com/en/technical-expertise/web-development/"
            />
        </div>
    );
}
