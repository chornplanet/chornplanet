import React from "react";
import ServicesDetailsPython from "@/components/Services/fullstack-development/python/ServicesDetailsPython";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataPython} from "@/metadata/main/backend/MetadataPython";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataPython[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const {frontEnd, fullStack, devOps} = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div>
            <ServicesDetailsPython
                lang={lang}
                stack={fullStack.python}
                frontEnd={frontEnd}
                fullStack={fullStack}
                devOps={devOps}
            />
            <SchemaMarkupServicePage
                name="Python Full Stack Development | Chorn Planet"
                description="Chorn Planet offers Python full stack development services to build dynamic and scalable web applications."
                url="https://chornplanet.com/en/technical-expertise/full-stack-developer/python-developer/"
            />
        </div>
    );
}
