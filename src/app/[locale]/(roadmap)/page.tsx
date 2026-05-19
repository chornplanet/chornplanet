import type {Metadata} from "next";
import {headers} from "next/headers";
import PlatformHomePage from "@/components/Platform/PlatformHomePage";
import {getPlatformContent, getPlatformMetadata} from "@/lib/platform-content/platformContent";

export async function generateMetadata(): Promise<Metadata> {
    const headersList = await headers();
    const lang = headersList.get("x-locale") || "en";
    return getPlatformMetadata(lang, "home");
}

export default async function Page() {
    const headersList = await headers();
    const lang = headersList.get("x-locale") || "en";
    const content = getPlatformContent(lang);

    return <PlatformHomePage lang={lang} content={content.home}/>;
}
