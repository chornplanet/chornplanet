import React from "react";
import AboutContent from "@/components/About/AboutContent";
import type {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataAbout} from "@/metadata/main/MetadataAbout";
import HomeBackEndContainer from "@/components/Common/HomeBackEnd/HomeBackEndContainer";
import HomeFrontEndContainer from "@/components/Common/HomeFrontEnd/HomeFrontEndContainer";
import CloudInfraPageMain from "@/components/Services/cloud-infrastructure-systems-architecture/CloudInfraPageMain";
import {getAboutContentForPublicPage} from "@/lib/about-content/aboutContent.service";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataAbout[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const aboutContent = await getAboutContentForPublicPage(lang);
    const technicalContent = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div className="smart-container-top">
            <AboutContent about={aboutContent.about} media={aboutContent.media}/>
            <CloudInfraPageMain
                lang={lang}
                cloud={technicalContent.cloud}
                cloudSolution={technicalContent.cloudSolution}
            />
            <HomeBackEndContainer
                lang={lang}
                fullStack={technicalContent.fullStack}
                isRemoveTopSpace={true}
            />
            <HomeFrontEndContainer lang={lang} frontEnd={technicalContent.frontEnd}/>

            <SchemaMarkupServicePage
                name="About Us | Chorn Planet - Custom Software Development Experts"
                description="Discover Chorn Planet's innovative custom software development solutions and how we empower industries with cutting-edge technology."
                url="https://chornplanet.com/en/about-chorn/"
            />
        </div>
    );
}
