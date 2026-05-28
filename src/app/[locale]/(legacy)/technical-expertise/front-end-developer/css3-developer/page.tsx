import React from "react";
import ServicesDetailsCss3 from "@/components/Services/frontend-development/css3/ServicesDetailsCss3";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataCss3} from "@/metadata/main/frontend/MetadataCss3";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataCss3[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const {frontEnd, fullStack, devOps, cloud} = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div className="smart-container-top">
            <ServicesDetailsCss3
                lang={lang}
                stack={frontEnd.css3}
                frontEnd={frontEnd}
                fullStack={fullStack}
                devOps={devOps}
            />
            <CloudExperience lang={lang} cloud={cloud}/>
            <SchemaMarkupServicePage
                name="CSS3 Development Services | Chorn Planet"
                description="Enhance your web applications with Chorn Planet’s CSS3 development services for modern and visually appealing designs."
                url="https://chornplanet.com/en/technical-expertise/front-end-developer/css3-developer/"
            />
        </div>
    );
}
