"use client";

import { useQuery } from "@tanstack/react-query";
import type { PlatformCloudDevopsContent } from "@/lib/platform-content/cloudDevopsContent";

const ONE_DAY = 1000 * 60 * 60 * 24;

async function fetchPlatformCloudDevopsContent(
  locale: string,
): Promise<PlatformCloudDevopsContent> {
  const response = await fetch(
    `/api/platform-cloud-devops?locale=${encodeURIComponent(locale)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load Cloud DevOps content");
  }

  return response.json() as Promise<PlatformCloudDevopsContent>;
}

export function usePlatformCloudDevopsContent(
  locale: string,
  initialData: PlatformCloudDevopsContent,
) {
  return useQuery({
    queryKey: ["platform-cloud-devops", locale],
    queryFn: () => fetchPlatformCloudDevopsContent(locale),
    initialData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
