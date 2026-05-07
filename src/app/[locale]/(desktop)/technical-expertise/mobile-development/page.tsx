import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import {headers} from "next/headers";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const {feature, mobileDevelopment} = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div className="smart-container-top">
            <PageBanner pageTitle={mobileDevelopment.pageTitle}/>
            <HomeFeatureMain lang={lang} feature={feature}/>
        </div>
    );
};
