"use client";

import Image from "next/image";
import Link from "next/link";
import type {AiLuxuryContent} from "@/lib/platform-content/luxuryContent";
import {usePlatformLuxuryContent} from "@/lib/platform-content/usePlatformLuxuryContent";

export default function AiLuxuryLandingPage({
  lang,
  content,
}: {
  lang: string;
  content: AiLuxuryContent;
}) {
  const {data: cachedContent} = usePlatformLuxuryContent(lang, content);
  const {
    heroImage,
    heroContent,
    readinessImage,
    ventureImage,
    readinessSection,
    segmentsSection,
    layersSection,
    businessSignalSection,
    premiumSegments,
    platformLayers,
    businessSignals,
  } = cachedContent ?? content;

  return (
    <main className="ai-luxury-page">
      <section className="ai-luxury-hero">
        <div className="container">
          <div className="ai-luxury-hero__grid">
            <div
              className="ai-luxury-hero__visual"
              aria-label="AI Luxury hero visual"
            >
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                sizes={heroImage.sizes}
                priority
              />
            </div>
            <div className="ai-luxury-hero__content">
              <p className="ai-luxury-eyebrow">{heroImage.eyebrow}</p>
              <div
                className="ai-luxury-actions"
                aria-label={heroContent.actionsLabel}
              >
                {heroContent.actions.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className={`ai-luxury-button ai-luxury-button--${action.variant}`}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
              <div
                className="ai-luxury-hero__signals"
                aria-label={heroContent.signalsLabel}
              >
                {heroContent.signals.map((signal) => (
                  <span key={signal}>{signal}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-luxury-hero-copy">
        <div className="container">
          <div className="ai-luxury-hero-copy__grid">
            <div className="ai-luxury-hero-copy__heading">
              <p className="ai-luxury-eyebrow">{heroImage.eyebrow}</p>
              <h1>{heroImage.title}</h1>
            </div>
            <div className="ai-luxury-hero-copy__body">
              <p className="ai-luxury-hero-copy__lead">{heroImage.lead}</p>
              <p>{heroImage.support}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="platform-readiness" className="ai-luxury-readiness">
        <div className="container">
          <div className="ai-luxury-readiness__image">
            <Image
              src={readinessImage.src}
              alt={readinessImage.alt}
              width={readinessImage.width}
              height={readinessImage.height}
              sizes={readinessImage.sizes}
            />
          </div>
          <div className="ai-luxury-readiness__content">
            <div className="ai-luxury-readiness__heading">
              <p className="ai-luxury-eyebrow">{readinessSection.eyebrow}</p>
              <h2>{readinessSection.title}</h2>
            </div>
            <div className="ai-luxury-readiness__body">
              {readinessSection.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ai-luxury-segments">
        <div className="container">
          <div className="ai-luxury-section-heading ai-luxury-section-heading--center">
            <p className="ai-luxury-eyebrow">{segmentsSection.eyebrow}</p>
            <h2>{segmentsSection.title}</h2>
          </div>
          <div className="ai-luxury-segments__grid">
            {premiumSegments.map((segment) => (
              <article key={segment.title} className="ai-luxury-image-card">
                <div className="ai-luxury-image-card__image">
                  <Image
                    src={segment.image.src}
                    alt={segment.image.alt}
                    fill
                    sizes={segment.image.sizes}
                  />
                </div>
                <div className="ai-luxury-image-card__content">
                  <h3>{segment.title}</h3>
                  <p>{segment.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-luxury-layers">
        <div className="container">
          <div className="ai-luxury-section-heading">
            <p className="ai-luxury-eyebrow">{layersSection.eyebrow}</p>
            <h2>{layersSection.title}</h2>
            <p>{layersSection.lead}</p>
          </div>
          <div className="ai-luxury-layers__grid">
            {platformLayers.map((layer, index) => (
              <article key={layer.title} className="ai-luxury-layer-card">
                <div className="ai-luxury-layer-card__index">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="ai-luxury-layer-card__image">
                  <Image
                    src={layer.image.src}
                    alt={layer.image.alt}
                    fill
                    sizes={layer.image.sizes}
                  />
                </div>
                <div className="ai-luxury-layer-card__content">
                  <h3>{layer.title}</h3>
                  <p>{layer.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="business-signal" className="ai-luxury-signal">
        <div className="container">
          <div className="ai-luxury-signal__heading">
            <p className="ai-luxury-eyebrow">{businessSignalSection.eyebrow}</p>
            <h2>{businessSignalSection.title}</h2>
          </div>
          <div className="ai-luxury-signal__grid">
            <div className="ai-luxury-signal__image">
              <Image
                src={ventureImage.src}
                alt={ventureImage.alt}
                width={ventureImage.width}
                height={ventureImage.height}
                sizes={ventureImage.sizes}
              />
            </div>
            <div className="ai-luxury-signal__content">
              <p>{businessSignalSection.lead}</p>
              <div className="ai-luxury-signal__cards">
                {businessSignals.map((signal) => (
                  <article key={signal.title}>
                    <h3>{signal.title}</h3>
                    <p>{signal.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
