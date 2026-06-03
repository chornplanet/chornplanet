import type { HomePageContentPayload } from "@/core/domain/homepage-content.entity";
import { getHomePageContentForPublicPage } from "@/lib/homepage-content/homePageContent.service";

export type PlatformSmartCityContent = HomePageContentPayload;

export async function getPlatformSmartCityContent(
  locale: string,
): Promise<PlatformSmartCityContent> {
  return getHomePageContentForPublicPage(locale);
}
