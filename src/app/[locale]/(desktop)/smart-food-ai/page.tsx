import React from "react";
import {Metadata} from "next";
import {headers} from "next/headers";
import SmartFoodAiLandingPage from "@/components/SmartFoodAi/SmartFoodAiLandingPage";
import {getMetadataSmartFoodAi} from "@/metadata/main/MetadataSmartFoodAi";
import {getSmartFoodAiContentForPublicPage} from "@/lib/smart-food-ai-content/smartFoodAiContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return getMetadataSmartFoodAi(lang);
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const content = await getSmartFoodAiContentForPublicPage(lang);

    return <SmartFoodAiLandingPage content={content}/>;
}
