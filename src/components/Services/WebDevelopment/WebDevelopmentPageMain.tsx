import React from "react";
import { DefaultShape } from "@/components/Shape/DefaultShape";
import WebDevelopmentLeft from "@/components/Services/WebDevelopment/WebDevelopmentLeft";
import WebDevelopmentRight from "@/components/Services/WebDevelopment/WebDevelopmentRight";
import WebDevelopmentBackEnd from "@/components/Services/WebDevelopment/WebDevelopmentBackEnd";
import WevDevelopmentFrontEnd from "@/components/Services/WebDevelopment/WevDevelopmentFrontEnd";
import WebDevelopmentDevOps from "@/components/Services/WebDevelopment/WebDevelopmentDevOps";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import Web3PageMain from "@/components/Services/web3-blockchain-development/Web3PageMain";
import CloudInfraPageMain from "@/components/Services/cloud-infrastructure-systems-architecture/CloudInfraPageMain";
import { TechnicalExpertiseContentPayload } from "@/core/domain/technical-expertise-content.entity";
import { IService } from "@/lib/model/IService";
import { IImageResponsiveUnit } from "@/image/model/IImageResponsiveUnit";

export default function WebDevelopmentPageMain({
  lang,
  content,
  aiSolutionService,
  aiSolutionSlides,
}: {
  lang: string;
  content: TechnicalExpertiseContentPayload;
  aiSolutionService: IService;
  aiSolutionSlides?: IImageResponsiveUnit[];
}) {
  const featureContent = content.feature;
  const pageTitle =
    featureContent.stacks[2]?.title ??
    featureContent.title ??
    "Web Development";

  return (
    <>
      <div className="services-area pb-70">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="row align-items-center align-items-center-custom">
              <h1>{pageTitle}</h1>
              <WebDevelopmentLeft
                lang={lang}
                frontEnd={content.frontEnd}
                fullStack={content.fullStack}
              />
              <WebDevelopmentRight lang={lang} />
            </div>
            <WevDevelopmentFrontEnd lang={lang} frontEnd={content.frontEnd} />
            <WebDevelopmentBackEnd lang={lang} fullStack={content.fullStack} />
          </div>
        </div>

        <div className="container pt-3">
          <WebDevelopmentDevOps lang={lang} devOps={content.devOps} />
        </div>

        <AiSolutionsMain
          lang={lang}
          service={aiSolutionService}
          llmSlides={aiSolutionSlides}
        />

        <CloudInfraPageMain
          lang={lang}
          cloud={content.cloud}
          cloudSolution={content.cloudSolution}
        />

        <Web3PageMain lang={lang} web3={content.web3} />
      </div>

      <DefaultShape />
    </>
  );
}
