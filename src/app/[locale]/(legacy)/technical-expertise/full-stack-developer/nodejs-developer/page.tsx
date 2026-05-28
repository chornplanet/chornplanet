import React from "react";
import ServicesDetailsNodejs from "@/components/Services/fullstack-development/nodejs/ServicesDetailsNodejs";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataNodejs} from "@/metadata/main/backend/MetadataNodejs";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataNodejs[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const {frontEnd, fullStack, devOps} = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div>
            <ServicesDetailsNodejs
                lang={lang}
                stack={fullStack.nodejs}
                frontEnd={frontEnd}
                fullStack={fullStack}
                devOps={devOps}
            />
            <SchemaMarkupServicePage
                name="Node.js Full Stack Development | Chorn Planet"
                description="Chorn Planet offers Node.js full stack development services for building scalable and efficient applications."
                url="https://chornplanet.com/en/technical-expertise/full-stack-developer/nodejs-developer/"
            />
        </div>
    );
}
