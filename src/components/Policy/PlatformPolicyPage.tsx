"use client";

import PolicyPage from "@/components/Policy/PolicyPage";
import type { PlatformPolicyContent } from "@/lib/platform-content/policyContent";
import { usePlatformPolicyContent } from "@/lib/platform-content/usePlatformPolicyContent";

type PolicyKey = "privacyPolicy" | "termOfService" | "workplacePolicy";

export default function PlatformPolicyPage({
  lang,
  content,
  policyKey,
  eyebrow,
  accent,
}: {
  lang: string;
  content: PlatformPolicyContent;
  policyKey: PolicyKey;
  eyebrow: string;
  accent: string;
}) {
  const { data: cachedContent } = usePlatformPolicyContent(lang, content);
  const policyContent = cachedContent ?? content;

  return (
    <PolicyPage
      policy={policyContent[policyKey]}
      eyebrow={eyebrow}
      accent={accent}
    />
  );
}
