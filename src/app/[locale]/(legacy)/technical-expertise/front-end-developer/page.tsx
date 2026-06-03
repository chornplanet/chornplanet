import React from "react";
import { Metadata } from "next";
import { SchemaMarkupServicePage } from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import { headers } from "next/headers";
import { MetadataFrontEndMain } from "@/metadata/main/frontend/MetadataFrontEndMain";
import PlatformFrontEndPage from "@/components/Services/frontend-development/PlatformFrontEndPage";
import { getPlatformFrontendContent } from "@/lib/platform-content/frontendContent";

export async function generateMetadata(): Promise<Metadata> {
  const headers15 = await headers();
  const lang = headers15.get("x-locale") || "en";
  return MetadataFrontEndMain[lang];
}

export default async function Page() {
  const headers15 = await headers();
  const lang = headers15.get("x-locale") || "en";
  const content = await getPlatformFrontendContent(lang);

  return (
    <div>
      <PlatformFrontEndPage lang={lang} content={content} />
      <SchemaMarkupServicePage
        name="Frontend Development Services | Chorn Planet"
        description="Chorn Planet provides expert frontend development services, specializing in modern frameworks like Next.js, React, Angular, Vue, HTML5, and CSS3. Build responsive and scalable websites with cutting-edge technologies."
        url="https://chornplanet.com/en/technical-expertise/front-end-developer/"
      />
    </div>
  );
}
