import React from "react";
import ServicesDetailsTypeScript
    from "@/components/Services/frontend-development/typescript/ServicesDetailsTypeScript";
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
            <ServicesDetailsTypeScript
                lang={lang}
                stack={frontEnd.typescript}
                frontEnd={frontEnd}
                fullStack={fullStack}
                devOps={devOps}
            />
            <CloudExperience lang={lang} cloud={cloud}/>
            <SchemaMarkupServicePage
                name="TypeScript | Chorn Planet - Custom Software Development Experts"
                description="Learn how Chorn Planet leverages TypeScript to build scalable, robust, and efficient custom software solutions for businesses across industries."
                url="https://chornplanet.com/en/technical-expertise/full-stack-developer/typescript-javascript-developer/"
            />
        </div>
    );
}
