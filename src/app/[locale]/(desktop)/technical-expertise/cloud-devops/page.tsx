import React from "react";
import CloudExperience from "@/components/Common/CloudExperience";
import CloudDevOpsModuleMain from "@/components/Services/cloud-devops/CloudDevOpsModuleMain";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataBackEndMain} from "@/metadata/main/backend/MetadataBackEndMain";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataBackEndMain[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const content = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div className="smart-container-top">
            <CloudDevOpsModuleMain lang={lang} devOps={content.devOps}/>
            <CloudExperience lang={lang} cloud={content.cloud}/>
            <HomeFeatureMain lang={lang} feature={content.feature}/>
            <SchemaMarkupServicePage
                name="DevOps & Testing Services | Chorn Planet"
                description="Chorn Planet offers expert DevOps and testing services to streamline your software development process. Ensure high performance and quality with our continuous integration, automated testing, and cloud-based solutions."
                url="https://chornplanet.com/en/technical-expertise/cloud-devops/"
            />
        </div>
    )
}
