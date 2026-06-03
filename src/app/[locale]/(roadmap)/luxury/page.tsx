import type {Metadata} from "next";
import {headers} from "next/headers";
import AiLuxuryLandingPage from "@/components/AiLuxury/AiLuxuryLandingPage";
import {getPlatformMetadata} from "@/lib/platform-content/homeContent";
import {getAiLuxuryContent} from "@/lib/platform-content/luxuryContent";

export async function generateMetadata(): Promise<Metadata> {
    const headersList = await headers();
    const lang = headersList.get("x-locale") || "en";
    return getPlatformMetadata(lang, "luxury");
}

export default async function Page() {
    const headersList = await headers();
    const lang = headersList.get("x-locale") || "en";
    const content = getAiLuxuryContent(lang);

    return <AiLuxuryLandingPage lang={lang} content={content}/>;
}
