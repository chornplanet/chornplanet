"use client";

import { useQuery } from "@tanstack/react-query";
import type { PlatformStoryContent } from "@/lib/platform-content/homeContent";

const ONE_DAY = 1000 * 60 * 60 * 24;

async function fetchPlatformAboutContent(
  locale: string,
): Promise<PlatformStoryContent> {
  const response = await fetch(
    `/api/platform-about?locale=${encodeURIComponent(locale)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load platform about content");
  }

  return response.json() as Promise<PlatformStoryContent>;
}

export function usePlatformAboutContent(
  locale: string,
  initialData: PlatformStoryContent,
) {
  return useQuery({
    queryKey: ["platform-about", locale],
    queryFn: () => fetchPlatformAboutContent(locale),
    initialData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
