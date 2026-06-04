"use client";

import { useQuery } from "@tanstack/react-query";
import type { SmartMobilityStationDetailContent } from "@/lib/platform-content/smartMobilityContent";

const ONE_DAY = 1000 * 60 * 60 * 24;

async function fetchPlatformSmartMobilityMTSContent(
  locale: string,
  slug: string,
): Promise<SmartMobilityStationDetailContent> {
  const searchParams = new URLSearchParams({ locale, slug });
  const response = await fetch(
    `/api/platform-smart-mobility-station?${searchParams.toString()}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load MTS station content");
  }

  return response.json() as Promise<SmartMobilityStationDetailContent>;
}

export function usePlatformSmartMobilityMTSContent(
  locale: string,
  slug: string,
  initialData: SmartMobilityStationDetailContent,
) {
  return useQuery({
    queryKey: ["platform-smart-mobility-mts", locale, slug],
    queryFn: () => fetchPlatformSmartMobilityMTSContent(locale, slug),
    initialData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
