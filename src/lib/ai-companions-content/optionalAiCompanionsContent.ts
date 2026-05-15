import {AiCompanionsContentPayload} from "@/core/domain/ai-companions-content.entity";
import {getAiCompanionsContentForPublicPage} from "@/lib/ai-companions-content/aiCompanionsContent.service";

export async function loadOptionalAiCompanionsContent(
    locale: string,
    context: string
): Promise<AiCompanionsContentPayload | null> {
    try {
        return await getAiCompanionsContentForPublicPage(locale);
    } catch (error) {
        console.error(`[smart-mobility] Optional AI companions content failed for ${context} locale="${locale}"`, error);
        return null;
    }
}
