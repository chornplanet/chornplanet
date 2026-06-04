import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PlatformSmartMobilityStationPage from "@/components/SmartMobility/PlatformSmartMobilityStationPage";
import {
  getSmartMobilityStationDetailContent,
  getSmartMobilityStationMetadata,
} from "@/lib/platform-content/smartMobilityContent";

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

  return getSmartMobilityStationMetadata({ locale, slug });
}

export default async function Page({ params }: PageParams) {
  const { locale, slug } = await params;
  const content = getSmartMobilityStationDetailContent(slug);

  if (!content) {
    notFound();
  }

  return (
    <PlatformSmartMobilityStationPage
      locale={locale}
      slug={slug}
      content={content}
    />
  );
}
