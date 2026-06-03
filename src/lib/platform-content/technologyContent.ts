import type { TechnicalExpertiseContentPayload } from "@/core/domain/technical-expertise-content.entity";
import { getTechnicalExpertiseContentForPublicPage } from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export type PlatformTechnologyContent = TechnicalExpertiseContentPayload;

export async function getPlatformTechnologyContent(
  locale: string,
): Promise<PlatformTechnologyContent> {
  return getTechnicalExpertiseContentForPublicPage(locale);
}
