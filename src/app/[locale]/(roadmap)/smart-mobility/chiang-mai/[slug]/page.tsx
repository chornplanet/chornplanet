import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  generateSmartMobilityChiangMaiMetadata,
  getSmartMobilityChiangMaiSlugs,
  isSmartMobilityChiangMaiSlug,
} from "@/components/SmartMobility/ChiangMai/smartMobilityChiangMaiRoutes";
import { SmartMobilityChiangMaiPage } from "@/components/SmartMobility/ChiangMai/smartMobilityChiangMaiPage";
import { getSmartMobilityChiangMaiContentForPublicPage } from "@/lib/smart-mobility-chiang-mai-content/smartMobilityChiangMaiContent.service";

type PageParams = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getSmartMobilityChiangMaiSlugs().map((slug) => ({ slug }));
}

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
    <SmartMobilityChiangMaiPage
      locale={locale}
      slug={slug}
      content={content}
    />
  );
}
