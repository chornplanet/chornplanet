import React from "react";
import Link from "next/link";
import SystemCapability from "@/components/Services/WebDevelopment/SystemCapability";
import WebDevelopmentBackEnd from "@/components/Services/WebDevelopment/WebDevelopmentBackEnd";
import WevDevelopmentFrontEnd from "@/components/Services/WebDevelopment/WevDevelopmentFrontEnd";
import WebDevelopmentDevOps from "@/components/Services/WebDevelopment/WebDevelopmentDevOps";
import { TechnicalExpertiseContentPayload } from "@/core/domain/technical-expertise-content.entity";
import aiPlatformDevelopment from "./aiPlatformDevelopment.json";
import CloudExperience from "@/components/Common/CloudExperience";
import { truncateText } from "@/lib/truncateText";
import type { IFeatureStack } from "@/lib/model/IFeature";

type AiPlatformDevelopmentLocale = keyof typeof aiPlatformDevelopment;

function getAiPlatformDevelopmentContent(lang: string) {
  const normalizedLang = lang === "zh" ? "zh_cn" : lang;
  return (
    aiPlatformDevelopment[normalizedLang as AiPlatformDevelopmentLocale] ??
    aiPlatformDevelopment.en
  );
}

export default function WebDevelopmentPageMain({
  lang,
  content,
}: {
  lang: string;
  content: TechnicalExpertiseContentPayload;
}) {
  const featureContent = content.feature;
  const langx = getAiPlatformDevelopmentContent(lang);
  const localTitle = langx.title;

  return (
    <main className="technology-premium-page">
      <section className="policy-page__hero technology-document-hero">
        <div className="platform-shell policy-page__hero-inner">
          <div className="technology-document-hero__heading">
            <span className="platform-eyebrow">{featureContent.span}</span>
            <h1>{localTitle}</h1>
            <h2>
              Technical documentation for Chorn Planet&apos;s AI-native platform
            </h2>
          </div>
          <div className="policy-page__hero-copy">
            <p>
              This technology page acts as a planning document for Chorn
              Planet&apos;s future technical ecosystem, connecting AI platform
              development, technical expertise pages, cloud operations, web
              systems, and system capability layers into one practical roadmap
              for delivery and long-term architecture.
            </p>
          </div>
          <aside
            className="policy-page__summary"
            aria-label={`${localTitle} summary`}
          >
            <span>Planning Document</span>
            <strong>4</strong>
            <small>system layers</small>
          </aside>
        </div>
      </section>

      <section
        className="technology-system-capability"
        aria-label="Technology system capability layers"
      >
        <div className="technology-premium-container">
          <h1>System Capability</h1>
          <SystemCapability lang={lang} />
        </div>
      </section>

      <section className="technology-premium-module technology-premium-module--stacks technology-premium-container">
        <h1 className="technology-premium-module__title">
          Technology Delivery Stack
        </h1>
        <WevDevelopmentFrontEnd lang={lang} frontEnd={content.frontEnd} />
        <WebDevelopmentBackEnd lang={lang} fullStack={content.fullStack} />
        <WebDevelopmentDevOps lang={lang} devOps={content.devOps} />
      </section>

      <section className="technology-premium-module technology-premium-module--feature">
        <div className="technology-premium-container">
          <h1 className="technology-premium-module__title">
            Platform Delivery Model
          </h1>
          <div className="technology-feature-grid">
            {content.feature.stacks.map(
              (stack: IFeatureStack, index: number) => (
                <div key={index} className="home-feature-container">
                  <Link href={`/${lang}${stack.link}`}>
                    <div className="custom-single-features-box feature-box">
                      <div className="icon feature-box-icon">
                        <i className={`${stack.icon} feature-icon hover-rotate`} />
                        <span className="feature-box-title">
                          {stack.title}
                        </span>
                      </div>
                      <p className="feature-box-description">
                        {truncateText(stack.description, 110)}
                      </p>
                    </div>
                  </Link>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
