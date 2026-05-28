import React from "react";
import ServicesDetailsGitHub from "@/components/Services/cloud-devops/github/ServicesDetailsGitHub";
import {Metadata} from "next";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataGitHub} from "@/metadata/main/devops/MetadataGitHub";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataGitHub[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const technicalContent = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div>
            <ServicesDetailsGitHub
                lang={lang}
                stack={technicalContent.devOps.github}
                frontEnd={technicalContent.frontEnd}
                fullStack={technicalContent.fullStack}
                devOps={technicalContent.devOps}
            />
            <SchemaMarkupServicePage
                name="GitHub DevOps Services | Chorn Planet"
                description="Chorn Planet offers DevOps services integrating GitHub for version control, continuous integration, and automated workflows."
                url="https://chornplanet.com/en/technical-expertise/cloud-devops/github/"
            />
        </div>
    );
}
