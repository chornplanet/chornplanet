"use client";

import { useQuery } from "@tanstack/react-query";
import type { PlatformTechnicalExpertiseContent } from "@/lib/platform-content/technicalExpertiseContent";

const ONE_DAY = 1000 * 60 * 60 * 24;

async function fetchPlatformTechnicalExpertiseContent(
  locale: string,
): Promise<PlatformTechnicalExpertiseContent> {
  const response = await fetch(
    `/api/platform-technical-expertise?locale=${encodeURIComponent(locale)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load Technical Expertise content");
  }

  return response.json() as Promise<PlatformTechnicalExpertiseContent>;
}

export function usePlatformTechnicalExpertiseContent(
  locale: string,
  initialData: PlatformTechnicalExpertiseContent,
) {
  return useQuery({
    queryKey: ["platform-technical-expertise", locale],
    queryFn: () => fetchPlatformTechnicalExpertiseContent(locale),
    initialData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
