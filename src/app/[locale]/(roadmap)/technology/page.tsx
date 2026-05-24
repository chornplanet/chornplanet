import React from "react";
import { Metadata } from "next";
import { headers } from "next/headers";
import { SchemaMarkupServicePage } from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import WebDevelopmentPageMain from "@/components/Services/WebDevelopment/WebDevelopmentPageMain";
import { MetadataWebDevelopment } from "@/metadata/main/MetadataWebDevelopment";
import { getTechnicalExpertiseContentForPublicPage } from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const lang = headersList.get("x-locale") || "en";
  return MetadataWebDevelopment[lang];
}

export default async function Page() {
  const headersList = await headers();
  const lang = headersList.get("x-locale") || "en";
  const content = await getTechnicalExpertiseContentForPublicPage(lang);

  return (
    <div className="technology-page-shell">
      <WebDevelopmentPageMain lang={lang} content={content} />

      <SchemaMarkupServicePage
        name="Technology Platform Development | Chorn Planet"
        description="Explore Chorn Planet's technology platform capabilities, including AI platforms, system layers, web development, cloud operations, and digital product delivery."
        url="https://chornplanet.com/en/technology/"
      />
    </div>
  );
}
