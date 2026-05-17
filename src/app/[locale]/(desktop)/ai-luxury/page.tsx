import React from "react";
import { Metadata } from "next";
import { headers } from "next/headers";
import AiLuxuryLandingPage from "@/components/AiLuxury/AiLuxuryLandingPage";
import { getMetadataAiLuxury } from "@/metadata/main/MetadataAiLuxury";

export async function generateMetadata(): Promise<Metadata> {
  const headers15 = await headers();
  const lang = headers15.get("x-locale") || "en";
  return getMetadataAiLuxury(lang);
}

export default async function Page() {
  return <AiLuxuryLandingPage />;
}
