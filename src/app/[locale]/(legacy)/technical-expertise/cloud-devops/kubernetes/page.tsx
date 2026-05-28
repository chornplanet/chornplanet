import React from "react";
import ServicesDetailsKubernetes from "@/components/Services/cloud-devops/kubernetes/ServicesDetailsKubernetes";
import {Metadata} from "next";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataKube} from "@/metadata/main/devops/MetadataKube";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataKube[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const technicalContent = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div>
            <ServicesDetailsKubernetes
                lang={lang}
                stack={technicalContent.devOps.kubernetes}
                frontEnd={technicalContent.frontEnd}
                fullStack={technicalContent.fullStack}
                devOps={technicalContent.devOps}
            />
            <SchemaMarkupServicePage
                name="Kubernetes DevOps Services | Chorn Planet"
                description="Chorn Planet provides Kubernetes-based DevOps services for automating deployment, scaling, and management of containerized applications."
                url="https://chornplanet.com/en/technical-expertise/cloud-devops/kubernetes/"
            />
        </div>
    )
}
