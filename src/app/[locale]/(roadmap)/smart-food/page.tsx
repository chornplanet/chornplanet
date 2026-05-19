import type {Metadata} from "next";
import {headers} from "next/headers";
import SmartFoodAiLandingPage from "@/components/SmartFoodAi/SmartFoodAiLandingPage";
import {getPlatformMetadata} from "@/lib/platform-content/platformContent";
import {getSmartFoodAiContentForPublicPage} from "@/lib/smart-food-ai-content/smartFoodAiContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headersList = await headers();
    const lang = headersList.get("x-locale") || "en";
    return getPlatformMetadata(lang, "smart-food");
}

export default async function Page() {
    const headersList = await headers();
    const lang = headersList.get("x-locale") || "en";
    const content = await getSmartFoodAiContentForPublicPage(lang);

    return <SmartFoodAiLandingPage content={content}/>;
}
