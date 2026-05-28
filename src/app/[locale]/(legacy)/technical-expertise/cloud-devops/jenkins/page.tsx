import React from "react";
import FooterMain from "@/components/Footer/FooterMain";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsJenkins from "@/components/Services/cloud-devops/jenkins/ServicesDetailsJenkins";
import {Metadata} from "next";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataJenkins} from "@/metadata/main/devops/MetadataJenkins";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataJenkins[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const technicalContent = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div className="smart-container-top">
            <ServicesDetailsJenkins
                lang={lang}
                stack={technicalContent.devOps.jenkins}
                frontEnd={technicalContent.frontEnd}
                fullStack={technicalContent.fullStack}
                devOps={technicalContent.devOps}
            />
            <CloudExperience lang={lang} cloud={technicalContent.cloud}/>
            <FooterMain lang={lang}/>
            <SchemaMarkupServicePage
                name="Jenkins DevOps Services | Chorn Planet"
                description="Chorn Planet offers Jenkins-based DevOps services for automating builds, testing, and deployment in your development pipeline."
                url="https://chornplanet.com/en/technical-expertise/cloud-devops/jenkins/"
            />
        </div>
    )
}
