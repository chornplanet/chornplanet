"use client";

import AiCompanionsPage from "@/components/AiCompanions/AiCompanionsPage";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import PageBanner from "@/components/Common/PageBanner";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import { SchemaMarkupServicePage } from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import CloudInfraPageMain from "@/components/Services/cloud-infrastructure-systems-architecture/CloudInfraPageMain";
import WebDevelopmentPageMain from "@/components/Services/WebDevelopment/WebDevelopmentPageMain";
import Web3PageMain from "@/components/Services/web3-blockchain-development/Web3PageMain";
import type { PlatformTechnicalExpertiseContent } from "@/lib/platform-content/technicalExpertiseContent";
import { getTechnicalExpertiseRouteBySlug } from "@/lib/platform-content/technicalExpertiseRoutes";
import { usePlatformTechnicalExpertiseContent } from "@/lib/platform-content/usePlatformTechnicalExpertiseContent";
import type { ReactNode } from "react";

export default function PlatformTechnicalExpertisePage({
  lang,
  slug,
  content,
}: {
  lang: string;
  slug: string;
  content: PlatformTechnicalExpertiseContent;
}) {
  const { data: cachedContent } = usePlatformTechnicalExpertiseContent(
    lang,
    content,
  );
  const pageContent = cachedContent ?? content;
  const route = getTechnicalExpertiseRouteBySlug(slug);

  if (!route) {
    return null;
  }

  const technical = pageContent.technical;
  const aiCompanions = pageContent.aiCompanions;

  let page: ReactNode = null;

  switch (route.pageKey) {
    case "aiSolutions":
      page = (
        <>
          <AiSolutionsMain
            lang={lang}
            service={aiCompanions.service}
            llmSlides={aiCompanions.media.llmSlides}
          />
          <AiCompanionsPage lang={lang} demo={aiCompanions.demo} />
        </>
      );
      break;
    case "cloudInfrastructure":
      page = (
        <>
          <CloudInfraPageMain
            lang={lang}
            cloud={technical.cloud}
            cloudSolution={technical.cloudSolution}
          />
          <HomeFeatureMain lang={lang} feature={technical.feature} />
        </>
      );
      break;
    case "mobileDevelopment":
      page = (
        <>
          <PageBanner pageTitle={technical.mobileDevelopment.pageTitle} />
          <HomeFeatureMain lang={lang} feature={technical.feature} />
        </>
      );
      break;
    case "webDevelopment":
      page = (
        <div className="technology-page-shell">
          <WebDevelopmentPageMain lang={lang} content={technical} />
        </div>
      );
      break;
    case "web3":
      page = (
        <>
          <Web3PageMain lang={lang} web3={technical.web3} />
          <HomeFeatureMain lang={lang} feature={technical.feature} />
        </>
      );
      break;
  }

  return (
    <div>
      {page}
      {route.schema ? (
        <SchemaMarkupServicePage
          name={route.schema.name}
          description={route.schema.description}
          url={route.schema.url}
        />
      ) : null}
    </div>
  );
}
