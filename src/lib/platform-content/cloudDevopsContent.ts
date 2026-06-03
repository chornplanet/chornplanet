import type { TechnicalExpertiseContentPayload } from "@/core/domain/technical-expertise-content.entity";
import { getTechnicalExpertiseContentForPublicPage } from "@/lib/technical-expertise-content/technicalExpertiseContent.service";
import {
  getCloudDevopsRoutes,
  type CloudDevopsRouteConfig,
} from "@/lib/platform-content/cloudDevopsRoutes";

export type PlatformCloudDevopsContent = TechnicalExpertiseContentPayload & {
  cloudDevopsRoutes: CloudDevopsRouteConfig[];
};

export async function getPlatformCloudDevopsContent(
  locale: string,
): Promise<PlatformCloudDevopsContent> {
  const content = await getTechnicalExpertiseContentForPublicPage(locale);

  return {
    ...content,
    cloudDevopsRoutes: getCloudDevopsRoutes(),
  };
}
