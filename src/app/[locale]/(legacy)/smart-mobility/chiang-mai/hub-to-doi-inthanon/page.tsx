import {Metadata} from "next";
import {
    generateSmartMobilityChiangMaiMetadata,
    SmartMobilityChiangMaiPage,
} from "../smartMobilityChiangMaiPage";

const slug = 'hub-to-doi-inthanon';

export async function generateMetadata(
    {params}: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
    const {locale} = await params;
    return generateSmartMobilityChiangMaiMetadata(slug, locale);
}

export default async function Page(
    {params}: { params: Promise<{ locale: string }> }
) {
    const {locale} = await params;
    return <SmartMobilityChiangMaiPage locale={locale} slug={slug}/>;
}
