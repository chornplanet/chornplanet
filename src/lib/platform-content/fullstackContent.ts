import type { TechnicalExpertiseContentPayload } from "@/core/domain/technical-expertise-content.entity";
import { getTechnicalExpertiseContentForPublicPage } from "@/lib/technical-expertise-content/technicalExpertiseContent.service";
import {
  getFullstackRoutes,
  type FullstackRouteConfig,
} from "@/lib/platform-content/fullstackRoutes";

export type PlatformFullstackContent = TechnicalExpertiseContentPayload & {
  fullstackRoutes: FullstackRouteConfig[];
};

export async function getPlatformFullstackContent(
  locale: string,
): Promise<PlatformFullstackContent> {
  const content = await getTechnicalExpertiseContentForPublicPage(locale);

  return {
    ...content,
    fullstackRoutes: getFullstackRoutes(),
  };
}
