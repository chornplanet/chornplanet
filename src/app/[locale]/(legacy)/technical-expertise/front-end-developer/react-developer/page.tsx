import React from "react";
import ServicesDetailsReact from "@/components/Services/frontend-development/react/ServicesDetailsReact";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataReact} from "@/metadata/main/frontend/MetadataReact";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataReact[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const {frontEnd, fullStack, devOps, cloud} = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div className="smart-container-top">
            <ServicesDetailsReact
                lang={lang}
                stack={frontEnd.react}
                frontEnd={frontEnd}
                fullStack={fullStack}
                devOps={devOps}
            />
            <CloudExperience lang={lang} cloud={cloud}/>
            <SchemaMarkupServicePage
                name="React Development Services | Chorn Planet"
                description="Chorn Planet provides top-tier React development services. Build dynamic and responsive user interfaces with React."
                url="https://chornplanet.com/en/technical-expertise/front-end-developer/react-developer/"
            />
        </div>
    );
}
