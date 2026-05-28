import React from "react";
import ServicesDetailsJava from "@/components/Services/fullstack-development/java/ServicesDetailsJava";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataJava} from "@/metadata/main/backend/MetadataJava";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataJava[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const {frontEnd, fullStack, devOps, cloud} = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div className="smart-container-top">
            <ServicesDetailsJava
                lang={lang}
                stack={fullStack.java}
                frontEnd={frontEnd}
                fullStack={fullStack}
                devOps={devOps}
            />
            <CloudExperience lang={lang} cloud={cloud}/>
            <SchemaMarkupServicePage
                name="Java Spring Boot Full Stack Development | Chorn Planet"
                description="Chorn Planet offers Java Spring Boot full stack development services to build robust and scalable enterprise applications."
                url="https://chornplanet.com/en/technical-expertise/full-stack-developer/java-spring-boot-developer/"
            />
        </div>
    )
}
