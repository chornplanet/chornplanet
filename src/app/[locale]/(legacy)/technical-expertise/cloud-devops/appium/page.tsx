import React from "react";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsAppium from "@/components/Services/cloud-devops/appium/ServicesDetailsAppium";
import {Metadata} from "next";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataAppium} from "@/metadata/main/devops/MetadataAppium";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataAppium[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const technicalContent = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div className="smart-container-top">
            <ServicesDetailsAppium
                lang={lang}
                stack={technicalContent.devOps.appium}
                frontEnd={technicalContent.frontEnd}
                fullStack={technicalContent.fullStack}
                devOps={technicalContent.devOps}
            />
            <CloudExperience lang={lang} cloud={technicalContent.cloud}/>
            <SchemaMarkupServicePage
                name="Appium Testing Services | Chorn Planet"
                description="Chorn Planet offers Appium testing services for automated mobile app testing across multiple platforms to ensure high-quality performance."
                url="https://chornplanet.com/en/technical-expertise/cloud-devops/appium/"
            />
        </div>
    );
}
