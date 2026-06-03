import sofaCoupleStorySeed from "@/data/story/sofa-couple/en.sofa-couple.json";

export type PlatformStoryImageGenerationSize = {
  width: number;
  height: number;
  aspectRatio: string;
  positionKey: string;
};

export type PlatformStoryImage = {
  src: string;
  alt: string;
  aspectRatio?: string;
};

export type PlatformStoryCard = {
  title: string;
  description: string;
  image: PlatformStoryImage;
  imageGenerationSize: PlatformStoryImageGenerationSize;
};

export type PlatformSofaCoupleStory = {
  title: string;
  story: string;
  imageLandscape: PlatformStoryImage;
  imagePortrait: PlatformStoryImage;
  openGraphImage: {
    src: string;
    imageGenerationSize: PlatformStoryImageGenerationSize;
  };
  tiktok: string;
  images: PlatformStoryCard[];
};

export type PlatformStoryContent = {
  locale: string;
  sofaCoupleStory: PlatformSofaCoupleStory;
};

const DEFAULT_LOCALE = "en";
const sofaCoupleStory = sofaCoupleStorySeed as PlatformSofaCoupleStory;

export function resolvePlatformStoryLocale(locale?: string | null): string {
  return locale || DEFAULT_LOCALE;
}

export function getPlatformStoryContent(
  locale?: string | null,
): PlatformStoryContent {
  return {
    locale: resolvePlatformStoryLocale(locale),
    sofaCoupleStory,
  };
}
