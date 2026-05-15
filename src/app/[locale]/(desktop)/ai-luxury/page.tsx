import React from "react";
import { Metadata } from "next";
import AiLuxuryLandingPage from "@/components/AiLuxury/AiLuxuryLandingPage";
import { getMetadataAiLuxury } from "@/metadata/main/MetadataAiLuxury";

export async function generateMetadata(): Promise<Metadata> {
  return getMetadataAiLuxury();
}

export default async function Page() {
  return <AiLuxuryLandingPage />;
}
