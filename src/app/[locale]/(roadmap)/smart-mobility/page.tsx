import type { Metadata } from "next";
import PlatformSmartMobilityPage from "@/components/SmartMobility/PlatformSmartMobilityPage";
import {
  getSmartMobilityLandingContent,
  getSmartMobilityMetadata,
} from "@/lib/platform-content/smartMobilityContent";

type PageParams = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;

  return getSmartMobilityMetadata(locale);
}

export default async function Page({ params }: PageParams) {
  const { locale } = await params;
  const content = getSmartMobilityLandingContent(locale);

  return <PlatformSmartMobilityPage locale={locale} content={content} />;
}
