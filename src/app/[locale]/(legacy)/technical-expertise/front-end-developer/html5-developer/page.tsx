import React from "react";
import ServicesDetailsHtml5 from "@/components/Services/frontend-development/html5/ServicesDetailsHtml5";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataHtml5} from "@/metadata/main/frontend/MetadataHtml5";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataHtml5[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const {frontEnd, fullStack, devOps} = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div>
            <ServicesDetailsHtml5
                lang={lang}
                stack={frontEnd.html5}
                frontEnd={frontEnd}
                fullStack={fullStack}
                devOps={devOps}
            />
            <SchemaMarkupServicePage
                name="HTML5 Development Services | Chorn Planet"
                description="Chorn Planet offers expert HTML5 development services to create responsive and engaging web applications."
                url="https://chornplanet.com/en/technical-expertise/front-end-developer/html5-developer/"
            />
        </div>
    );
}
