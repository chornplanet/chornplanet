import React from "react";
import Link from "next/link";
import WebDevelopmentRight from "@/components/Services/WebDevelopment/WebDevelopmentRight";
import WebDevelopmentBackEnd from "@/components/Services/WebDevelopment/WebDevelopmentBackEnd";
import WevDevelopmentFrontEnd from "@/components/Services/WebDevelopment/WevDevelopmentFrontEnd";
import WebDevelopmentDevOps from "@/components/Services/WebDevelopment/WebDevelopmentDevOps";
import { TechnicalExpertiseContentPayload } from "@/core/domain/technical-expertise-content.entity";
import aiPlatformDevelopment from "./aiPlatformDevelopment.json";

type AiPlatformDevelopmentLocale = keyof typeof aiPlatformDevelopment;
const capabilityHighlightLinks: Record<string, string> = {
  "AI Luxury Platform": "/ai-luxury",
  "AI Smart Food": "/smart-food-ai",
};
const capabilityHighlightClasses: Record<string, string> = {
  "AI Luxury Platform": "technology-hero__action--luxury",
  "AI Smart Food": "technology-hero__action--food",
};

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
  const localDescription = langx.description;
  const capabilityHighlights = [
    "AI Luxury Platform",
    "AI Smart Food",
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
            <h1>{localTitle}</h1>
          </div>
          <div className="technology-hero__grid">
            <div className="technology-hero__content">
              <p className="technology-hero__lead">{localDescription}</p>
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
            {capabilityHighlights.map((item) => {
              const className = capabilityHighlightClasses[item];
              const href = capabilityHighlightLinks[item];

              return href ? (
                <Link className={className} href={`/${lang}${href}`} key={item}>
                  {item}
                </Link>
              ) : (
                <span className={className} key={item}>
                  {item}
                </span>
              );
            })}
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
