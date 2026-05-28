import React from "react";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsGitLab from "@/components/Services/cloud-devops/gitlab/ServicesDetailsGitLab";
import {Metadata} from "next";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataGitLab} from "@/metadata/main/devops/MetadataGitLab";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataGitLab[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const technicalContent = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div className="smart-container-top">
            <ServicesDetailsGitLab
                lang={lang}
                stack={technicalContent.devOps.gitlab}
                frontEnd={technicalContent.frontEnd}
                fullStack={technicalContent.fullStack}
                devOps={technicalContent.devOps}
            />
            <CloudExperience lang={lang} cloud={technicalContent.cloud}/>
            <SchemaMarkupServicePage
                name="GitLab DevOps Services | Chorn Planet"
                description="Chorn Planet provides GitLab-based DevOps services for continuous integration, automation, and version control solutions."
                url="https://chornplanet.com/en/technical-expertise/cloud-devops/gitlab/"
            />
        </div>
    );
}
