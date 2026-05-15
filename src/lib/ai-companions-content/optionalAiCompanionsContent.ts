import {AiCompanionsContentPayload} from "@/core/domain/ai-companions-content.entity";
import {getFallbackAiCompanionsContent} from "@/lib/static-content/publicContentFallbacks";

export async function loadOptionalAiCompanionsContent(
    locale: string,
    context: string
): Promise<AiCompanionsContentPayload | null> {
    try {
        return getFallbackAiCompanionsContent(locale, {log: false});
    } catch (error) {
        console.error(`[smart-mobility] Optional AI companions content failed for ${context} locale="${locale}"`, error);
        return null;
    }
}
