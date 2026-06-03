import type { AiCompanionsContentPayload } from "@/core/domain/ai-companions-content.entity";
import type { TechnicalExpertiseContentPayload } from "@/core/domain/technical-expertise-content.entity";
import { getAiCompanionsContentForPublicPage } from "@/lib/ai-companions-content/aiCompanionsContent.service";
import { getTechnicalExpertiseContentForPublicPage } from "@/lib/technical-expertise-content/technicalExpertiseContent.service";
import {
  getTechnicalExpertiseRoutes,
  type TechnicalExpertiseRouteConfig,
} from "@/lib/platform-content/technicalExpertiseRoutes";

export type PlatformTechnicalExpertiseContent = {
  technical: TechnicalExpertiseContentPayload;
  aiCompanions: AiCompanionsContentPayload;
  routes: TechnicalExpertiseRouteConfig[];
};

export async function getPlatformTechnicalExpertiseContent(
  locale: string,
): Promise<PlatformTechnicalExpertiseContent> {
  const [technical, aiCompanions] = await Promise.all([
    getTechnicalExpertiseContentForPublicPage(locale),
    getAiCompanionsContentForPublicPage(locale),
  ]);

  return {
    technical,
    aiCompanions,
    routes: getTechnicalExpertiseRoutes(),
  };
}
