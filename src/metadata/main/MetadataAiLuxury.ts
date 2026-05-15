import { Metadata } from "next";

const AI_LUXURY_TITLE = "AI Luxury Platform | Chorn Planet";
const AI_LUXURY_DESCRIPTION =
  "Chorn Planet AI Luxury creates AI-native platform readiness for premium real estate, hospitality, tourism, mixed-use destinations, and luxury lifestyle ventures.";

export function getMetadataAiLuxury(): Metadata {
  return {
    title: AI_LUXURY_TITLE,
    description: AI_LUXURY_DESCRIPTION,
    authors: [
      {
        name: "Chorn Planet",
      },
    ],
    openGraph: {
      title: "AI Luxury Platform for Real Estate, Hospitality & Lifestyle Ventures",
      description: AI_LUXURY_DESCRIPTION,
      url: "/ai-luxury/",
      type: "website",
      images: [
        {
          url: "/images/ai-luxury/hero-ai-luxury-real-estate-platform.webp",
          width: 1200,
          height: 630,
          alt: "Chorn Planet AI Luxury platform for premium real estate and hospitality ventures",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: AI_LUXURY_TITLE,
      description: AI_LUXURY_DESCRIPTION,
      images: ["/images/ai-luxury/hero-ai-luxury-real-estate-platform.webp"],
    },
  };
}
