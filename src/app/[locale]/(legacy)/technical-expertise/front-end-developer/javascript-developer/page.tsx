import React from "react";
import ServicesDetailsJavaScript
    from "@/components/Services/frontend-development/javascript/ServicesDetailsJavaScript";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataJavaScript} from "@/metadata/main/frontend/MetadataJavaScript";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataJavaScript[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const {frontEnd, fullStack, devOps} = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div>
            <ServicesDetailsJavaScript
                lang={lang}
                stack={frontEnd.javascript}
                frontEnd={frontEnd}
                fullStack={fullStack}
                devOps={devOps}
            />
            <SchemaMarkupServicePage
                name="JavaScript | Chorn Planet - Custom Software Development Experts"
                description="Learn how Chorn Planet leverages JavaScript to build scalable, robust, and efficient custom software solutions for businesses across industries."
                url="https://chornplanet.com/en/technical-expertise/full-stack-developer/javascript-javascript-developer/"
            />
        </div>
    );
}
