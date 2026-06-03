"use client";

import { useQuery } from "@tanstack/react-query";
import type { PlatformFullstackContent } from "@/lib/platform-content/fullstackContent";

const ONE_DAY = 1000 * 60 * 60 * 24;

async function fetchPlatformFullstackContent(
  locale: string,
): Promise<PlatformFullstackContent> {
  const response = await fetch(
    `/api/platform-fullstack?locale=${encodeURIComponent(locale)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load Fullstack content");
  }

  return response.json() as Promise<PlatformFullstackContent>;
}

export function usePlatformFullstackContent(
  locale: string,
  initialData: PlatformFullstackContent,
) {
  return useQuery({
    queryKey: ["platform-fullstack", locale],
    queryFn: () => fetchPlatformFullstackContent(locale),
    initialData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
