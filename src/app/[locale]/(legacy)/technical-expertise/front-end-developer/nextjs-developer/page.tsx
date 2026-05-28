import React from "react";
import ServicesDetailsNextJS from "@/components/Services/frontend-development/nextjs/ServicesDetailsNextJS";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataNextjs} from "@/metadata/main/frontend/MetadataNextjs";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataNextjs[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const {frontEnd, fullStack, devOps} = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div>
            <ServicesDetailsNextJS
                lang={lang}
                stack={frontEnd.nextjs}
                frontEnd={frontEnd}
                fullStack={fullStack}
                devOps={devOps}
            />
            <SchemaMarkupServicePage
                name="Next.js Development Services | Chorn Planet"
                description="Expert Next.js development services by Chorn Planet. Enhance your web applications with scalable and high-performance solutions using Next.js."
                url="https://chornplanet.com/en/technical-expertise/front-end-developer/nextjs-developer"
            />
        </div>
    );
}
