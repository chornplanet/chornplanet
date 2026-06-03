"use client";

import {useQuery} from "@tanstack/react-query";
import type {ISmartFoodAiContent} from "@/lib/model/ISmartFoodAiContent";

const ONE_DAY = 1000 * 60 * 60 * 24;

async function fetchPlatformSmartFoodContent(locale: string): Promise<ISmartFoodAiContent> {
  const response = await fetch(`/api/platform-smart-food?locale=${encodeURIComponent(locale)}`);

  if (!response.ok) {
    throw new Error("Failed to load Smart Food content");
  }

  return response.json() as Promise<ISmartFoodAiContent>;
}

export function usePlatformSmartFoodContent(locale: string, initialData: ISmartFoodAiContent) {
  return useQuery({
    queryKey: ["platform-smart-food", locale],
    queryFn: () => fetchPlatformSmartFoodContent(locale),
    initialData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
