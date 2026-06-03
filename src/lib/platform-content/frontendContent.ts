import type { TechnicalExpertiseContentPayload } from "@/core/domain/technical-expertise-content.entity";
import { getTechnicalExpertiseContentForPublicPage } from "@/lib/technical-expertise-content/technicalExpertiseContent.service";
import { getFrontendRoutes, type FrontendRouteConfig } from "@/lib/platform-content/frontendRoutes";

export type PlatformFrontendContent = TechnicalExpertiseContentPayload & {
  frontendRoutes: FrontendRouteConfig[];
};

export async function getPlatformFrontendContent(
  locale: string,
): Promise<PlatformFrontendContent> {
  const content = await getTechnicalExpertiseContentForPublicPage(locale);

  return {
    ...content,
    frontendRoutes: getFrontendRoutes(),
  };
}
