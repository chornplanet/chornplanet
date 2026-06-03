"use client";

import { useQuery } from "@tanstack/react-query";
import type { PlatformContactContent } from "@/lib/platform-content/contactContent";

const ONE_DAY = 1000 * 60 * 60 * 24;

async function fetchPlatformContactContent(
  locale: string,
): Promise<PlatformContactContent> {
  const response = await fetch(
    `/api/platform-contact?locale=${encodeURIComponent(locale)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load Contact content");
  }

  return response.json() as Promise<PlatformContactContent>;
}

export function usePlatformContactContent(
  locale: string,
  initialData: PlatformContactContent,
) {
  return useQuery({
    queryKey: ["platform-contact", locale],
    queryFn: () => fetchPlatformContactContent(locale),
    initialData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
