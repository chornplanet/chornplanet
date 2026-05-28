import GalleryPageMain from "@/components/Gallery/GalleryPageMain";
import GalleryModuleBottom from "@/components/Gallery/GalleryModuleBottom";
import {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataGallery} from "@/metadata/main/MetadataGallery";
import AiAomLandingPage from "@/components/AiCompanions/Main/AiAomLandingPage";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import React from "react";
import CloudExperience from "@/components/Common/CloudExperience";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import {getGalleryContentForPublicPage} from "@/lib/gallery-content/galleryContent.service";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";
import {getAiCompanionsContentForPublicPage} from "@/lib/ai-companions-content/aiCompanionsContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataGallery[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const galleryContent = await getGalleryContentForPublicPage(lang);
    const technicalContent = await getTechnicalExpertiseContentForPublicPage(lang);
    const aiCompanionsContent = await getAiCompanionsContentForPublicPage(lang);

    return (
        <div className="smart-container-top">
            <GalleryPageMain global={galleryContent.gallery.global}/>
            <GalleryModuleBottom slides={galleryContent.media.bottomSlides}/>
            <CloudExperience lang={lang} cloud={technicalContent.cloud}/>
            <AiAomLandingPage lang={lang} aom={aiCompanionsContent.aiCompanions.aom}/>
            <HomeFeatureMain
                lang={lang}
                feature={technicalContent.feature}
                isTopSpace={true}
                isHideTopTitle={true}
            />
        </div>
    );
}
