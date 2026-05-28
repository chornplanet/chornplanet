import React from "react";
import FooterMain from "@/components/Footer/FooterMain";
import ServicesDetailsSoapUI from "@/components/Services/cloud-devops/soapui/ServicesDetailsSoapUI";
import {Metadata} from "next";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataSoapUI} from "@/metadata/main/devops/MetadataSoapui";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataSoapUI[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const technicalContent = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div>
            <ServicesDetailsSoapUI
                lang={lang}
                stack={technicalContent.devOps.soapui}
                frontEnd={technicalContent.frontEnd}
                fullStack={technicalContent.fullStack}
                devOps={technicalContent.devOps}
            />
            <FooterMain lang={lang}/>
            <SchemaMarkupServicePage
                name="SoapUI Testing Services | Chorn Planet"
                description="Chorn Planet provides expert SoapUI testing services to ensure your web services and APIs are thoroughly tested and reliable."
                url="https://chornplanet.com/en/technical-expertise/cloud-devops/soapui/"
            />
        </div>
    )
}
