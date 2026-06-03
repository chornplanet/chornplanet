import type { PolicyContentPayload } from "@/core/domain/policy-content.entity";
import { getPolicyContentForPublicPage } from "@/lib/policy-content/policyContent.service";

export type PlatformPolicyContent = PolicyContentPayload;

export async function getPlatformPolicyContent(
  locale: string,
): Promise<PlatformPolicyContent> {
  return getPolicyContentForPublicPage(locale);
}
