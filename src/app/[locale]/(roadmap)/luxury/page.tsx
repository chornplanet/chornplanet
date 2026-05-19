import type {Metadata} from "next";
import {headers} from "next/headers";
import AiLuxuryLandingPage from "@/components/AiLuxury/AiLuxuryLandingPage";
import {getPlatformMetadata} from "@/lib/platform-content/platformContent";

export async function generateMetadata(): Promise<Metadata> {
    const headersList = await headers();
    const lang = headersList.get("x-locale") || "en";
    return getPlatformMetadata(lang, "luxury");
}

export default async function Page() {
    return <AiLuxuryLandingPage/>;
}
