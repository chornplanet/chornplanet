import {Metadata} from "next";
import {headers} from "next/headers";
import {redirect} from "next/navigation";
import {MetaVisionMobilityChiangMai} from "@/metadata/smart-mobility/chiang-mai/MetaVisionMobilityChiangMai";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return MetaVisionMobilityChiangMai[lang] ?? MetaVisionMobilityChiangMai.en;
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    redirect(`/${lang}/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway/`);
}
