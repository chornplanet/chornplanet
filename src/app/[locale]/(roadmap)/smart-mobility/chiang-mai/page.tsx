import type { Metadata } from "next";
import {
  generateSmartMobilityChiangMaiMetadata,
  SMART_MOBILITY_CHIANG_MAI_DEFAULT_SLUG,
} from "@/components/SmartMobility/ChiangMai/smartMobilityChiangMaiRoutes";
import { SmartMobilityChiangMaiPage } from "@/components/SmartMobility/ChiangMai/smartMobilityChiangMaiPage";
import { getSmartMobilityChiangMaiContentForPublicPage } from "@/lib/smart-mobility-chiang-mai-content/smartMobilityChiangMaiContent.service";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSmartMobilityChiangMaiMetadata(
    SMART_MOBILITY_CHIANG_MAI_DEFAULT_SLUG,
    locale,
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = await getSmartMobilityChiangMaiContentForPublicPage(
    locale,
    SMART_MOBILITY_CHIANG_MAI_DEFAULT_SLUG,
  );

  return (
    <SmartMobilityChiangMaiPage
      locale={locale}
      slug={SMART_MOBILITY_CHIANG_MAI_DEFAULT_SLUG}
      content={content}
    />
  );
}
