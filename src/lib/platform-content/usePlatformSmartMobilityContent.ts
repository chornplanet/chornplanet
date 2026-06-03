"use client";

import { useQuery } from "@tanstack/react-query";
import type { SmartMobilityLandingContent } from "@/lib/platform-content/smartMobilityContent";

const ONE_DAY = 1000 * 60 * 60 * 24;

async function fetchPlatformSmartMobilityContent(
  locale: string,
): Promise<SmartMobilityLandingContent> {
  const response = await fetch(
    `/api/platform-smart-mobility?locale=${encodeURIComponent(locale)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load Smart Mobility content");
  }

  return response.json() as Promise<SmartMobilityLandingContent>;
}

export function usePlatformSmartMobilityContent(
  locale: string,
  initialData: SmartMobilityLandingContent,
) {
  return useQuery({
    queryKey: ["platform-smart-mobility", locale],
    queryFn: () => fetchPlatformSmartMobilityContent(locale),
    initialData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
