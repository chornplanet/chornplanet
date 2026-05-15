import React from "react";
import {Metadata} from "next";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import HubToChiangMaiAirportMain
    from "@/components/SmartMobility/ChiangMai/Main/HubToChiangMaiAirportMain";
import HubToDoiInthanonMain from "@/components/SmartMobility/ChiangMai/Main/HubToDoiInthanonMain";
import HubToDoiSuthepMain from "@/components/SmartMobility/ChiangMai/Main/HubToDoiSuthepMain";
import UrbanHubSansaiDoiSaketMain
    from "@/components/SmartMobility/ChiangMai/Main/UrbanHubSansaiDoiSaketMain";
import VertiportDesignMain from "@/components/SmartMobility/ChiangMai/Main/VertiportDesignMain";
import VisionChiangMaiMain from "@/components/SmartMobility/ChiangMai/Main/VisionChiangMaiMain";
import {MetaHubChiangMaiAirport} from "@/metadata/smart-mobility/chiang-mai/MetaHubChiangMaiAirport";
import {MetaHubDoiInthanon} from "@/metadata/smart-mobility/chiang-mai/MetaHubDoiInthanon";
import {MetaHubDoiSuthep} from "@/metadata/smart-mobility/chiang-mai/MetaHubDoiSuthep";
import {MetaUrbanHubSansaiDoiSaket} from "@/metadata/smart-mobility/chiang-mai/MetaUrbanHubSansaiDoiSaket";
import {MetaVertiportDesign} from "@/metadata/smart-mobility/chiang-mai/MetaVertiportDesign";
import {MetaVisionMobilityChiangMai} from "@/metadata/smart-mobility/chiang-mai/MetaVisionMobilityChiangMai";
import {SmartMobilityChiangMaiContentPayload} from "@/lib/model/ISmartMobilityChiangMai";
import {getSmartMobilityChiangMaiContentForPublicPage} from "@/lib/smart-mobility-chiang-mai-content/smartMobilityChiangMaiContent.service";
import {loadOptionalAiCompanionsContent} from "@/lib/ai-companions-content/optionalAiCompanionsContent";

const SMART_MOBILITY_CHIANG_MAI_ROUTE_METADATA = {
    'hub-to-chiang-mai-airport': MetaHubChiangMaiAirport,
    'hub-to-doi-inthanon': MetaHubDoiInthanon,
    'hub-to-doi-suthep': MetaHubDoiSuthep,
    'urban-hub-san-sai-doi-saket': MetaUrbanHubSansaiDoiSaket,
    'vertiport-design': MetaVertiportDesign,
    'vision-smart-mobility-northern-gateway': MetaVisionMobilityChiangMai,
} as const;

export type SmartMobilityChiangMaiSlug = keyof typeof SMART_MOBILITY_CHIANG_MAI_ROUTE_METADATA;

export async function generateSmartMobilityChiangMaiMetadata(
    slug: SmartMobilityChiangMaiSlug,
    locale: string
): Promise<Metadata> {
    const metadata = SMART_MOBILITY_CHIANG_MAI_ROUTE_METADATA[slug];
    return metadata[locale] ?? metadata.en;
}

function renderPrimaryContent(
    slug: SmartMobilityChiangMaiSlug,
    lang: string,
    content: SmartMobilityChiangMaiContentPayload
) {
    switch (slug) {
        case 'hub-to-chiang-mai-airport':
            return <HubToChiangMaiAirportMain lang={lang} content={content}/>;
        case 'hub-to-doi-inthanon':
            return <HubToDoiInthanonMain lang={lang} content={content}/>;
        case 'hub-to-doi-suthep':
            return <HubToDoiSuthepMain lang={lang} content={content}/>;
        case 'urban-hub-san-sai-doi-saket':
            return <UrbanHubSansaiDoiSaketMain lang={lang} content={content}/>;
        case 'vertiport-design':
            return <VertiportDesignMain lang={lang} content={content}/>;
        case 'vision-smart-mobility-northern-gateway':
            return <VisionChiangMaiMain lang={lang} content={content}/>;
    }
}

export async function SmartMobilityChiangMaiPage(
    {locale, slug}: { locale: string; slug: SmartMobilityChiangMaiSlug }
) {
    const lang = locale || 'en';
    const [content, aiContent] = await Promise.all([
        getSmartMobilityChiangMaiContentForPublicPage(lang, slug),
        loadOptionalAiCompanionsContent(lang, slug),
    ]);

    return (
        <>
            {renderPrimaryContent(slug, lang, content)}
            {
                aiContent &&
                <>
                    <AiSolutionsMain
                        lang={lang}
                        service={aiContent.service}
                        llmSlides={aiContent.media.llmSlides}
                    />
                    <HomeFeatureMain
                        lang={lang}
                        feature={aiContent.feature}
                        featureImage={aiContent.media.featureImage}
                        isHideTopTitle={true}
                    />
                </>
            }
        </>
    );
}
