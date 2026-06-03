import PlatformGalleryPage from "@/components/Gallery/PlatformGalleryPage";
import { getPlatformGalleryContent } from "@/lib/platform-content/galleryContent";
import { MetadataGallery } from "@/metadata/main/MetadataGallery";
import type { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataGallery[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const content = await getPlatformGalleryContent(lang);

    return <PlatformGalleryPage lang={lang} content={content}/>;
}
