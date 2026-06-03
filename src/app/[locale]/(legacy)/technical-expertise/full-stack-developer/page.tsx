import { SchemaMarkupServicePage } from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import PlatformFullStackPage from "@/components/Services/fullstack-development/PlatformFullStackPage";
import { getPlatformFullstackContent } from "@/lib/platform-content/fullstackContent";
import { MetadataBackEndMain } from "@/metadata/main/backend/MetadataBackEndMain";
import type { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataBackEndMain[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const content = await getPlatformFullstackContent(lang);

    return (
        <div>
            <PlatformFullStackPage lang={lang} content={content}/>
            <SchemaMarkupServicePage
                name="Back-End & API Development Services | Chorn Planet"
                description="Chorn Planet offers expert Back-End & API Development services utilizing modern technologies like Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP. Build scalable and robust web applications with our custom software solutions."
                url="https://chornplanet.com/en/technical-expertise/full-stack-developer/"
            />
        </div>
    );
}
