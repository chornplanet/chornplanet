import { SchemaMarkupServicePage } from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import PlatformCloudDevOpsPage from "@/components/Services/cloud-devops/PlatformCloudDevOpsPage";
import { getPlatformCloudDevopsContent } from "@/lib/platform-content/cloudDevopsContent";
import { MetadataDevOpsMain } from "@/metadata/main/devops/MetadataDevOpsMain";
import type { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataDevOpsMain[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const content = await getPlatformCloudDevopsContent(lang);

    return (
        <div>
            <PlatformCloudDevOpsPage lang={lang} content={content}/>
            <SchemaMarkupServicePage
                name="DevOps & Testing Services | Chorn Planet"
                description="Chorn Planet offers expert DevOps and testing services to streamline your software development process. Ensure high performance and quality with our continuous integration, automated testing, and cloud-based solutions."
                url="https://chornplanet.com/en/technical-expertise/cloud-devops/"
            />
        </div>
    )
}
