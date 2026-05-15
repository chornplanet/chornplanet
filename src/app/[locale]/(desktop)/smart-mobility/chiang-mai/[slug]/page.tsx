import React from "react";
import {Metadata} from "next";
import {headers} from "next/headers";
import {notFound} from "next/navigation";
import {MetaHubChiangMaiAirport} from "@/metadata/smart-mobility/chiang-mai/MetaHubChiangMaiAirport";
import {MetaHubDoiInthanon} from "@/metadata/smart-mobility/chiang-mai/MetaHubDoiInthanon";
import {MetaHubDoiSuthep} from "@/metadata/smart-mobility/chiang-mai/MetaHubDoiSuthep";
import {MetaUrbanHubSansaiDoiSaket} from "@/metadata/smart-mobility/chiang-mai/MetaUrbanHubSansaiDoiSaket";
import {MetaVertiportDesign} from "@/metadata/smart-mobility/chiang-mai/MetaVertiportDesign";
import {MetaVisionMobilityChiangMai} from "@/metadata/smart-mobility/chiang-mai/MetaVisionMobilityChiangMai";
import {SmartMobilityChiangMaiContentPayload} from "@/lib/model/ISmartMobilityChiangMai";

const SMART_MOBILITY_CHIANG_MAI_ROUTE_METADATA = {
    'hub-to-chiang-mai-airport': MetaHubChiangMaiAirport,
    'hub-to-doi-inthanon': MetaHubDoiInthanon,
    'hub-to-doi-suthep': MetaHubDoiSuthep,
    'urban-hub-san-sai-doi-saket': MetaUrbanHubSansaiDoiSaket,
    'vertiport-design': MetaVertiportDesign,
    'vision-smart-mobility-northern-gateway': MetaVisionMobilityChiangMai,
} as const;

type SmartMobilityChiangMaiSlug = keyof typeof SMART_MOBILITY_CHIANG_MAI_ROUTE_METADATA;

function isSmartMobilityChiangMaiSlug(slug: string): slug is SmartMobilityChiangMaiSlug {
    return slug in SMART_MOBILITY_CHIANG_MAI_ROUTE_METADATA;
}

export function generateStaticParams() {
    return Object.keys(SMART_MOBILITY_CHIANG_MAI_ROUTE_METADATA).map((slug) => ({slug}));
}

async function renderPrimaryContent(
    slug: SmartMobilityChiangMaiSlug,
    lang: string,
    content: SmartMobilityChiangMaiContentPayload
) {
    switch (slug) {
        case 'hub-to-chiang-mai-airport': {
            const {default: HubToChiangMaiAirportMain} = await import(
                "@/components/SmartMobility/ChiangMai/Main/HubToChiangMaiAirportMain"
            );
            return <HubToChiangMaiAirportMain lang={lang} content={content}/>;
        }
        case 'hub-to-doi-inthanon': {
            const {default: HubToDoiInthanonMain} = await import(
                "@/components/SmartMobility/ChiangMai/Main/HubToDoiInthanonMain"
            );
            return <HubToDoiInthanonMain lang={lang} content={content}/>;
        }
        case 'hub-to-doi-suthep': {
            const {default: HubToDoiSuthepMain} = await import(
                "@/components/SmartMobility/ChiangMai/Main/HubToDoiSuthepMain"
            );
            return <HubToDoiSuthepMain lang={lang} content={content}/>;
        }
        case 'urban-hub-san-sai-doi-saket': {
            const {default: UrbanHubSansaiDoiSaketMain} = await import(
                "@/components/SmartMobility/ChiangMai/Main/UrbanHubSansaiDoiSaketMain"
            );
            return <UrbanHubSansaiDoiSaketMain lang={lang} content={content}/>;
        }
        case 'vertiport-design': {
            const {default: VertiportDesignMain} = await import(
                "@/components/SmartMobility/ChiangMai/Main/VertiportDesignMain"
            );
            return <VertiportDesignMain lang={lang} content={content}/>;
        }
        case 'vision-smart-mobility-northern-gateway': {
            const {default: VisionChiangMaiMain} = await import(
                "@/components/SmartMobility/ChiangMai/Main/VisionChiangMaiMain"
            );
            return <VisionChiangMaiMain lang={lang} content={content}/>;
        }
    }
}

export async function generateMetadata(
    {params}: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const {slug} = await params;
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    if (!isSmartMobilityChiangMaiSlug(slug)) {
        return {};
    }

    const metadata = SMART_MOBILITY_CHIANG_MAI_ROUTE_METADATA[slug];
    return metadata[lang] ?? metadata.en;
}

export default async function Page(
    {params}: { params: Promise<{ slug: string }> }
) {
    const {slug} = await params;

    if (!isSmartMobilityChiangMaiSlug(slug)) {
        notFound();
    }

    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    const [
        {getSmartMobilityChiangMaiContentForPublicPage},
        {loadOptionalAiCompanionsContent},
    ] = await Promise.all([
        import("@/lib/smart-mobility-chiang-mai-content/smartMobilityChiangMaiContent.service"),
        import("@/lib/ai-companions-content/optionalAiCompanionsContent"),
    ]);
    const [content, aiContent] = await Promise.all([
        getSmartMobilityChiangMaiContentForPublicPage(lang, slug),
        loadOptionalAiCompanionsContent(lang, slug),
    ]);
    const primaryContent = await renderPrimaryContent(slug, lang, content);

    return (
        <>
            {primaryContent}
            {
                aiContent &&
                <SupplementalAiSections lang={lang} aiContent={aiContent}/>
            }
        </>
    );
}

async function SupplementalAiSections(
    {lang, aiContent}: {
        lang: string;
        aiContent: Awaited<ReturnType<typeof import("@/lib/ai-companions-content/optionalAiCompanionsContent")["loadOptionalAiCompanionsContent"]>>;
    }
) {
    if (!aiContent) {
        return null;
    }

    const [
        {default: AiSolutionsMain},
        {default: HomeFeatureMain},
    ] = await Promise.all([
        import("@/components/AiSolutions/AiSolutionsMain"),
        import("@/components/Features/HomeFeatureMain"),
    ]);

    return (
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
    );
}
