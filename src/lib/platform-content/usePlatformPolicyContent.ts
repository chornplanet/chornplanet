"use client";

import { useQuery } from "@tanstack/react-query";
import type { PlatformPolicyContent } from "@/lib/platform-content/policyContent";

const ONE_DAY = 1000 * 60 * 60 * 24;

async function fetchPlatformPolicyContent(
  locale: string,
): Promise<PlatformPolicyContent> {
  const response = await fetch(
    `/api/platform-policy?locale=${encodeURIComponent(locale)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load Policy content");
  }

  return response.json() as Promise<PlatformPolicyContent>;
}

export function usePlatformPolicyContent(
  locale: string,
  initialData: PlatformPolicyContent,
) {
  return useQuery({
    queryKey: ["platform-policy", locale],
    queryFn: () => fetchPlatformPolicyContent(locale),
    initialData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
