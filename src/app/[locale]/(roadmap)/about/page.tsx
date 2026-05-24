import type {Metadata} from "next";
import {headers} from "next/headers";
import PlatformStoryPage from "@/components/Platform/PlatformStoryPage";
import {getPlatformContent, getPlatformMetadata} from "@/lib/platform-content/homeContent";

export async function generateMetadata(): Promise<Metadata> {
    const headersList = await headers();
    const lang = headersList.get("x-locale") || "en";
    return getPlatformMetadata(lang, "about");
}

export default async function Page() {
    const headersList = await headers();
    const lang = headersList.get("x-locale") || "en";
    const content = getPlatformContent(lang);

    return <PlatformStoryPage lang={lang} content={content.about}/>;
}
