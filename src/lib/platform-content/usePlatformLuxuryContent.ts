"use client";

import { useQuery } from "@tanstack/react-query";
import type { AiLuxuryContent } from "@/lib/platform-content/luxuryContent";

const ONE_DAY = 1000 * 60 * 60 * 24;

async function fetchPlatformLuxuryContent(
  locale: string,
): Promise<AiLuxuryContent> {
  const response = await fetch(
    `/api/platform-luxury?locale=${encodeURIComponent(locale)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load AI Luxury content");
  }

  return response.json() as Promise<AiLuxuryContent>;
}

export function usePlatformLuxuryContent(
  locale: string,
  initialData: AiLuxuryContent,
) {
  return useQuery({
    queryKey: ["platform-luxury", locale],
    queryFn: () => fetchPlatformLuxuryContent(locale),
    initialData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
