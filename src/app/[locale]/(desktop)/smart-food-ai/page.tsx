import React from "react";
import {Metadata} from "next";
import {headers} from "next/headers";
import SmartFoodAiLandingPage from "@/components/SmartFoodAi/SmartFoodAiLandingPage";
import {MetadataSmartFoodAi} from "@/metadata/main/MetadataSmartFoodAi";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataSmartFoodAi[lang] ?? MetadataSmartFoodAi.en;
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return <SmartFoodAiLandingPage lang={lang}/>;
}
