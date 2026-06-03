"use client";

import { useQuery } from "@tanstack/react-query";
import type { PlatformFrontendContent } from "@/lib/platform-content/frontendContent";

const ONE_DAY = 1000 * 60 * 60 * 24;

async function fetchPlatformFrontendContent(
  locale: string,
): Promise<PlatformFrontendContent> {
  const response = await fetch(
    `/api/platform-frontend?locale=${encodeURIComponent(locale)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load Frontend content");
  }

  return response.json() as Promise<PlatformFrontendContent>;
}

export function usePlatformFrontendContent(
  locale: string,
  initialData: PlatformFrontendContent,
) {
  return useQuery({
    queryKey: ["platform-frontend", locale],
    queryFn: () => fetchPlatformFrontendContent(locale),
    initialData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
