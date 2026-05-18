import React from "react";
import WebDevelopmentRight from "@/components/Services/WebDevelopment/WebDevelopmentRight";
import WebDevelopmentBackEnd from "@/components/Services/WebDevelopment/WebDevelopmentBackEnd";
import WevDevelopmentFrontEnd from "@/components/Services/WebDevelopment/WevDevelopmentFrontEnd";
import WebDevelopmentDevOps from "@/components/Services/WebDevelopment/WebDevelopmentDevOps";
import { TechnicalExpertiseContentPayload } from "@/core/domain/technical-expertise-content.entity";

const pageTitle = {
  en: "AI Platform and Application Development",
  th: "การพัฒนาแพลตฟอร์ม AI และแอปพลิเคชัน",
  zh: "AI 平台与应用程序开发",
  ja: "AIプラットフォームおよびアプリケーション開発",
  ko: "AI 플랫폼 및 애플리케이션 개발",
  fr: "Développement de plateformes IA et d’applications",
  de: "Entwicklung von KI-Plattformen und Anwendungen",
  es: "Desarrollo de plataformas de IA y aplicaciones",
  it: "Sviluppo di piattaforme AI e applicazioni",
  vi: "Phát triển nền tảng AI và ứng dụng",
};

export default function WebDevelopmentPageMain({
  lang,
  content,
}: {
  lang: string;
  content: TechnicalExpertiseContentPayload;
}) {
  const featureContent = content.feature;
  const localizedPageTitle =
    pageTitle[lang as keyof typeof pageTitle] ?? pageTitle.en;
  const heroLead =
    content.frontEnd.services.descriptions[0] ??
    content.fullStack.services.descriptions[0] ??
    featureContent.subTitle;
  const capabilityHighlights = [
    content.frontEnd.services.items[0]?.title ?? content.frontEnd.title,
    content.fullStack.services.items[0]?.title ?? content.fullStack.title,
    content.devOps.services.items[0]?.title ?? content.devOps.title,
  ];

  return (
    <main className="technology-premium-page">
      <section className="technology-hero">
        <div className="technology-premium-container">
          <div>
            <p className="technology-eyebrow">{featureContent.span}</p>
            <h1>{localizedPageTitle}</h1>
          </div>
          <div className="technology-hero__grid">
            <div className="technology-hero__content">
              <p className="technology-hero__lead">{heroLead}</p>
            </div>
            <div
              className="technology-hero__media"
              aria-label="Technology delivery visual system"
            >
              <WebDevelopmentRight lang={lang} />
            </div>
          </div>

          <div
            className="technology-hero__actions"
            aria-label="Technology capabilities"
          >
            {capabilityHighlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="technology-premium-module technology-premium-module--stacks">
        <div className="technology-premium-container">
          <WevDevelopmentFrontEnd lang={lang} frontEnd={content.frontEnd} />
        </div>
      </section>

      <section className="technology-premium-module technology-premium-module--stacks">
        <div className="technology-premium-container">
          <WebDevelopmentBackEnd lang={lang} fullStack={content.fullStack} />
        </div>
      </section>

      <section className="technology-premium-module technology-premium-module--stacks">
        <div className="technology-premium-container">
          <WebDevelopmentDevOps lang={lang} devOps={content.devOps} />
        </div>
      </section>
    </main>
  );
}
