import type { AiCompanionsContentPayload } from "@/core/domain/ai-companions-content.entity";
import type { GalleryContentPayload } from "@/core/domain/gallery-content.entity";
import type { TechnicalExpertiseContentPayload } from "@/core/domain/technical-expertise-content.entity";
import { getAiCompanionsContentForPublicPage } from "@/lib/ai-companions-content/aiCompanionsContent.service";
import { getGalleryContentForPublicPage } from "@/lib/gallery-content/galleryContent.service";
import { getTechnicalExpertiseContentForPublicPage } from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export type PlatformGalleryContent = {
  gallery: GalleryContentPayload;
  technical: TechnicalExpertiseContentPayload;
  aiCompanions: AiCompanionsContentPayload;
};

export async function getPlatformGalleryContent(
  locale: string,
): Promise<PlatformGalleryContent> {
  const [gallery, technical, aiCompanions] = await Promise.all([
    getGalleryContentForPublicPage(locale),
    getTechnicalExpertiseContentForPublicPage(locale),
    getAiCompanionsContentForPublicPage(locale),
  ]);

  return {
    gallery,
    technical,
    aiCompanions,
  };
}
