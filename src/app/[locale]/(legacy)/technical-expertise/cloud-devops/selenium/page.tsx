import React from "react";
import ServicesDetailsSelenium from "@/components/Services/cloud-devops/selenium/ServicesDetailsSelenium";
import {Metadata} from "next";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataSelenium} from "@/metadata/main/devops/MetadataSelenium";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataSelenium[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const technicalContent = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div>
            <ServicesDetailsSelenium
                lang={lang}
                stack={technicalContent.devOps.selenium}
                frontEnd={technicalContent.frontEnd}
                fullStack={technicalContent.fullStack}
                devOps={technicalContent.devOps}
            />
            <SchemaMarkupServicePage
                name="Selenium Testing Services | Chorn Planet"
                description="Chorn Planet offers comprehensive Selenium testing services to ensure the quality and performance of your applications through automated testing."
                url="https://chornplanet.com/en/technical-expertise/cloud-devops/selenium/"
            />
        </div>
    )
}
