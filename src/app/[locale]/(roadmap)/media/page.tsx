import type {Metadata} from "next";
import {headers} from "next/headers";
import PlatformLandingPage from "@/components/Platform/PlatformLandingPage";
import {getPlatformChannelContent, getPlatformMetadata} from "@/lib/platform-content/platformContent";

export async function generateMetadata(): Promise<Metadata> {
    const headersList = await headers();
    const lang = headersList.get("x-locale") || "en";
    return getPlatformMetadata(lang, "media");
}

export default async function Page() {
    const headersList = await headers();
    const lang = headersList.get("x-locale") || "en";

    return <PlatformLandingPage lang={lang} content={getPlatformChannelContent(lang, "media")}/>;
}
