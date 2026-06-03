"use client";

import { useQuery } from "@tanstack/react-query";
import type { PlatformTechnologyContent } from "@/lib/platform-content/technologyContent";

const ONE_DAY = 1000 * 60 * 60 * 24;

async function fetchPlatformTechnologyContent(
  locale: string,
): Promise<PlatformTechnologyContent> {
  const response = await fetch(
    `/api/platform-technology?locale=${encodeURIComponent(locale)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load Technology content");
  }

  return response.json() as Promise<PlatformTechnologyContent>;
}

export function usePlatformTechnologyContent(
  locale: string,
  initialData: PlatformTechnologyContent,
) {
  return useQuery({
    queryKey: ["platform-technology", locale],
    queryFn: () => fetchPlatformTechnologyContent(locale),
    initialData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
