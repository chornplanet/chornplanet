import React from "react";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsDocker from "@/components/Services/cloud-devops/docker/ServicesDetailsDocker";
import {Metadata} from "next";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataDocker} from "@/metadata/main/devops/MetadataDocker";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataDocker[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const technicalContent = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div className="smart-container-top">
            <ServicesDetailsDocker
                lang={lang}
                stack={technicalContent.devOps.docker}
                frontEnd={technicalContent.frontEnd}
                fullStack={technicalContent.fullStack}
                devOps={technicalContent.devOps}
            />
            <CloudExperience lang={lang} cloud={technicalContent.cloud}/>
            <SchemaMarkupServicePage
                name="Docker DevOps Services | Chorn Planet"
                description="Chorn Planet offers Docker-based DevOps services for efficient containerization and scalable application deployment."
                url="https://chornplanet.com/en/technical-expertise/cloud-devops/docker/"
            />
        </div>
    );
}
