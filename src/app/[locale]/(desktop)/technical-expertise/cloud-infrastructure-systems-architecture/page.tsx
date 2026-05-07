import React from "react";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import CloudExperience from "@/components/Common/CloudExperience";
import CloudInfraPageMain
    from "@/components/Services/cloud-infrastructure-systems-architecture/CloudInfraPageMain";
import {headers} from "next/headers";
import {MetadataCloudSolution} from "@/metadata/main/MetadataCloudSolution";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataCloudSolution[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const content = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div className="smart-container-top">
            <CloudInfraPageMain lang={lang} cloud={content.cloud} cloudSolution={content.cloudSolution}/>
            <CloudExperience lang={lang} cloud={content.cloud}/>
            <HomeFeatureMain lang={lang} feature={content.feature}/>
            <SchemaMarkupServicePage
                name="Cloud Solution Architecture & Systems Analysis | Chorn Planet | AWS, Azure, GCP, DigitalOcean"
                description="Chorn Planet delivers expert cloud solution architecture and system analysis services. We optimize cloud infrastructures across AWS, Azure, GCP, and DigitalOcean, ensuring performance, scalability, and cost-efficiency."
                url="https://chornplanet.com/en/technical-expertise/cloud-solution-architecture-systems-analysis/"
            />
        </div>
    )
}
