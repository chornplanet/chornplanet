import type {Metadata} from "next";
import {headers} from "next/headers";
import PlatformOutfitLandingPage from "@/components/Platform/PlatformOutfitLandingPage";
import {getPlatformOutfitContent, getPlatformOutfitMetadata} from "@/lib/platform-content/styleContent";

export async function generateMetadata(): Promise<Metadata> {
    const headersList = await headers();
    const lang = headersList.get("x-locale") || "en";
    return getPlatformOutfitMetadata(lang);
}

export default async function Page() {
    const headersList = await headers();
    const lang = headersList.get("x-locale") || "en";

    return <PlatformOutfitLandingPage lang={lang} content={getPlatformOutfitContent(lang)}/>;
}
