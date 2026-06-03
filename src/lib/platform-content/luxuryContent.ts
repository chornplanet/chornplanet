import luxuryEnContent from "@/data/luxury/en.luxury.json";

export type AiLuxuryImage = {
  src: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  support?: string;
};

export type AiLuxurySizedImage = AiLuxuryImage & {
  width: number;
  height: number;
  sizes: string;
};

export type AiLuxuryAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type AiLuxuryHeroContent = {
  actionsLabel: string;
  actions: AiLuxuryAction[];
  signalsLabel: string;
  signals: string[];
};

export type AiLuxuryTextSection = {
  eyebrow: string;
  title: string;
  lead?: string;
  paragraphs?: string[];
};

export type AiLuxurySizedCard = {
  title: string;
  text: string;
  image: AiLuxurySizedImage;
};

export type AiLuxurySignal = {
  title: string;
  text: string;
};

export type AiLuxuryContent = {
  heroImage: AiLuxurySizedImage;
  heroContent: AiLuxuryHeroContent;
  readinessImage: AiLuxurySizedImage;
  ventureImage: AiLuxurySizedImage;
  readinessSection: AiLuxuryTextSection;
  segmentsSection: AiLuxuryTextSection;
  layersSection: AiLuxuryTextSection;
  businessSignalSection: AiLuxuryTextSection;
  premiumSegments: AiLuxurySizedCard[];
  platformLayers: AiLuxurySizedCard[];
  businessSignals: AiLuxurySignal[];
};

const contentByLocale: Record<string, AiLuxuryContent> = {
  en: luxuryEnContent as AiLuxuryContent,
};

export function getAiLuxuryContent(locale: string): AiLuxuryContent {
  return contentByLocale[locale] ?? contentByLocale.en;
}
