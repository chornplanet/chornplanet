"use client";

import { useQuery } from "@tanstack/react-query";
import type { PlatformStoryContent } from "@/lib/platform-content/storyContent";

const ONE_DAY = 1000 * 60 * 60 * 24;

async function fetchPlatformStoryContent(
  locale: string,
): Promise<PlatformStoryContent> {
  const response = await fetch(
    `/api/platform-story?locale=${encodeURIComponent(locale)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load platform story content");
  }

  return response.json() as Promise<PlatformStoryContent>;
}

export function usePlatformStoryContent(
  locale: string,
  initialData: PlatformStoryContent,
) {
  return useQuery({
    queryKey: ["platform-story", locale],
    queryFn: () => fetchPlatformStoryContent(locale),
    initialData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
