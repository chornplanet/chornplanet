import { Metadata } from "next";
import { metadataLink } from "@/metadata/metadataLink/metadataLink";
import { MetaLinks } from "@/metadata/metadataLink/MetaLinks";

type AiLuxuryMetadataContent = {
  title: string;
  description: string;
  openGraphTitle: string;
};

const AI_LUXURY_METADATA: Record<"en", AiLuxuryMetadataContent> = {
  en: {
    title:
      "AI Luxury Platform for Real Estate, Hospitality & Lifestyle Ventures Service wording inside page: AI Luxury Development",
    description:
      "Chorn Planet AI Luxury creates AI-native platform readiness for premium real estate, hospitality, tourism, mixed-use destinations, and luxury lifestyle ventures.",
    openGraphTitle:
      "AI Luxury Platform for Real Estate, Hospitality & Lifestyle Ventures",
  },
};

function loadMetadataContent(): AiLuxuryMetadataContent {
  return AI_LUXURY_METADATA.en;
}

function createMetadata(
  lang: string,
  content: AiLuxuryMetadataContent,
): Metadata {
  const links = metadataLink(lang, MetaLinks.aiLuxury);

  return {
    title: content.title,
    description: content.description,
    alternates: links.alternates,
    authors: [
      {
        name: "Chorn Planet",
      },
    ],
    openGraph: {
      title: content.openGraphTitle,
      description: content.description,
      images: links.openGraph.images,
      url: links.alternates.canonical,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: links.twitter.images,
    },
  };
}

export async function getMetadataAiLuxury(lang = "en"): Promise<Metadata> {
  const content = loadMetadataContent();
  return createMetadata(lang, content);
}
