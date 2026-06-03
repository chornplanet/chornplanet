"use client";

import {useQuery} from "@tanstack/react-query";
import type {ResolvedPlatformOutfitContent} from "@/lib/platform-content/styleContent";

const ONE_DAY = 1000 * 60 * 60 * 24;

async function fetchPlatformStyleContent(locale: string): Promise<ResolvedPlatformOutfitContent> {
  const response = await fetch(`/api/platform-style?locale=${encodeURIComponent(locale)}`);

  if (!response.ok) {
    throw new Error("Failed to load Style content");
  }

  return response.json() as Promise<ResolvedPlatformOutfitContent>;
}

export function usePlatformStyleContent(
  locale: string,
  initialData: ResolvedPlatformOutfitContent,
) {
  return useQuery({
    queryKey: ["platform-style", locale],
    queryFn: () => fetchPlatformStyleContent(locale),
    initialData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
