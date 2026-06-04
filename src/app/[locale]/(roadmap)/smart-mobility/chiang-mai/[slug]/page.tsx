import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  generateSmartMobilityChiangMaiMetadata,
  isSmartMobilityChiangMaiSlug,
} from "@/components/SmartMobility/ChiangMai/ChiangMaiRoutes";
import { SmartMobilityChiangMaiPage } from "@/components/SmartMobility/ChiangMai/ChiangMaiPage";
import { getSmartMobilityChiangMaiContentForPublicPage } from "@/lib/smart-mobility-chiang-mai-content/smartMobilityChiangMaiContent.service";

export const dynamic = "force-dynamic";

type PageParams = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isSmartMobilityChiangMaiSlug(slug)) {
    return {
      title: "Smart Mobility Chiang Mai page not found",
    };
  }

  return generateSmartMobilityChiangMaiMetadata(slug, locale);
}

export default async function Page({ params }: PageParams) {
  const { locale, slug } = await params;

  if (!isSmartMobilityChiangMaiSlug(slug)) {
    notFound();
  }

  const content = await getSmartMobilityChiangMaiContentForPublicPage(
    locale,
    slug,
  ).catch(() => null);

  if (!content) {
    notFound();
  }

  return (
    <SmartMobilityChiangMaiPage locale={locale} slug={slug} content={content} />
  );
}
