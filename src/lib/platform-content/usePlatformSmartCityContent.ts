"use client";

import { useQuery } from "@tanstack/react-query";
import type { PlatformSmartCityContent } from "@/lib/platform-content/smartCityContent";

const ONE_DAY = 1000 * 60 * 60 * 24;

async function fetchPlatformSmartCityContent(
  locale: string,
): Promise<PlatformSmartCityContent> {
  const response = await fetch(
    `/api/platform-smart-city?locale=${encodeURIComponent(locale)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load Smart City content");
  }

  return response.json() as Promise<PlatformSmartCityContent>;
}

export function usePlatformSmartCityContent(
  locale: string,
  initialData: PlatformSmartCityContent,
) {
  return useQuery({
    queryKey: ["platform-smart-city", locale],
    queryFn: () => fetchPlatformSmartCityContent(locale),
    initialData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
