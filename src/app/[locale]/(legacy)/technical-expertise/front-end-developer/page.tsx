import React from "react";
import FrontEndPageMain from "@/components/Services/frontend-development/FrontEndPageMain";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataFrontEndMain} from "@/metadata/main/frontend/MetadataFrontEndMain";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataFrontEndMain[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const content = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div className="smart-container-top">
            <FrontEndPageMain lang={lang} frontEnd={content.frontEnd}/>
            <CloudExperience lang={lang} cloud={content.cloud}/>
            <HomeFeatureMain lang={lang} feature={content.feature}/>
            <SchemaMarkupServicePage
                name="Frontend Development Services | Chorn Planet"
                description="Chorn Planet provides expert frontend development services, specializing in modern frameworks like Next.js, React, Angular, Vue, HTML5, and CSS3. Build responsive and scalable websites with cutting-edge technologies."
                url="https://chornplanet.com/en/technical-expertise/front-end-developer/"
            />
        </div>
    );
};
