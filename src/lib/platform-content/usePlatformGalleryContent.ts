"use client";

import { useQuery } from "@tanstack/react-query";
import type { PlatformGalleryContent } from "@/lib/platform-content/galleryContent";

const ONE_DAY = 1000 * 60 * 60 * 24;

async function fetchPlatformGalleryContent(
  locale: string,
): Promise<PlatformGalleryContent> {
  const response = await fetch(
    `/api/platform-gallery?locale=${encodeURIComponent(locale)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load Gallery content");
  }

  return response.json() as Promise<PlatformGalleryContent>;
}

export function usePlatformGalleryContent(
  locale: string,
  initialData: PlatformGalleryContent,
) {
  return useQuery({
    queryKey: ["platform-gallery", locale],
    queryFn: () => fetchPlatformGalleryContent(locale),
    initialData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
