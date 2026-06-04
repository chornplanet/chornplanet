"use client";

import { useQuery } from "@tanstack/react-query";
import type { SmartMobilityChiangMaiContentPayload } from "@/lib/model/ISmartMobilityChiangMai";

const ONE_DAY = 1000 * 60 * 60 * 24;

async function fetchPlatformSmartMobilityChiangMaiContent(
  locale: string,
  slug: string,
): Promise<SmartMobilityChiangMaiContentPayload> {
  const searchParams = new URLSearchParams({ locale, slug });
  const response = await fetch(
    `/api/smart-mobility-chiang-mai-content?${searchParams.toString()}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load Smart Mobility Chiang Mai content");
  }

  return response.json() as Promise<SmartMobilityChiangMaiContentPayload>;
}

export function usePlatformSmartMobilityChiangMaiContent(
  locale: string,
  slug: string,
  initialData: SmartMobilityChiangMaiContentPayload,
) {
  return useQuery({
    queryKey: ["platform-smart-mobility-chiang-mai", locale, slug],
    queryFn: () => fetchPlatformSmartMobilityChiangMaiContent(locale, slug),
    initialData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
