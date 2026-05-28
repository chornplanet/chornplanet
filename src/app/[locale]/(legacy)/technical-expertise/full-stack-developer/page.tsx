import React from "react";
import FullStackPageMain from "@/components/Services/fullstack-development/FullStackPageMain";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataBackEndMain} from "@/metadata/main/backend/MetadataBackEndMain";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataBackEndMain[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const content = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div>
            <FullStackPageMain lang={lang} fullStack={content.fullStack}/>
            <HomeFeatureMain lang={lang} feature={content.feature}/>
            <SchemaMarkupServicePage
                name="Back-End & API Development Services | Chorn Planet"
                description="Chorn Planet offers expert Back-End & API Development services utilizing modern technologies like Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP. Build scalable and robust web applications with our custom software solutions."
                url="https://chornplanet.com/en/technical-expertise/full-stack-developer/"
            />
        </div>
    );
}
