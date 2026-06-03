"use client";

import { useQuery } from "@tanstack/react-query";
import type { PlatformHomeContent } from "@/lib/platform-content/homeContent";

const ONE_DAY = 1000 * 60 * 60 * 24;

async function fetchPlatformHomeContent(
  locale: string,
): Promise<PlatformHomeContent> {
  const response = await fetch(
    `/api/platform-home?locale=${encodeURIComponent(locale)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load platform home content");
  }

  return response.json() as Promise<PlatformHomeContent>;
}

export function usePlatformHomeContent(
  locale: string,
  initialData: PlatformHomeContent,
) {
  return useQuery({
    queryKey: ["platform-home", locale],
    queryFn: () => fetchPlatformHomeContent(locale),
    initialData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
