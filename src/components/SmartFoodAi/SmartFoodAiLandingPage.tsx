"use client";

import Image from "next/image";
import Link from "next/link";
import { ISmartFoodAiContent } from "@/lib/model/ISmartFoodAiContent";
import {usePlatformSmartFoodContent} from "@/lib/platform-content/usePlatformSmartFoodContent";

export default function SmartFoodAiLandingPage({
  lang,
  content,
}: {
  lang: string;
  content: ISmartFoodAiContent;
}) {
  const {data: cachedContent} = usePlatformSmartFoodContent(lang, content);
  const smartFoodContent = cachedContent ?? content;

  return (
    <main className="smart-food-ai-page">
      <section className="smart-food-ai-hero">
        <div className="container">
          <div className="smart-food-ai-hero__grid">
            <div className="smart-food-ai-hero__content">
              <p className="smart-food-ai-eyebrow">{smartFoodContent.hero.eyebrow}</p>
              <h1>{smartFoodContent.hero.title}</h1>
              <p className="smart-food-ai-hero__lead">{smartFoodContent.hero.lead}</p>
              <p className="smart-food-ai-hero__support">
                {smartFoodContent.hero.support}
              </p>
              <div
                className="smart-food-ai-actions"
                aria-label={smartFoodContent.hero.actionsLabel}
              >
                {smartFoodContent.hero.actions.map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    className={`smart-food-ai-button smart-food-ai-button--${action.variant}`}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            </div>

            <div
              className="smart-food-ai-hero__visual"
              aria-label={smartFoodContent.hero.visual.ariaLabel}
            >
              <Image
                src={smartFoodContent.hero.visual.src}
                alt={smartFoodContent.hero.visual.alt}
                width={1200}
                height={800}
                priority
                sizes="(max-width: 991px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="smart-food-ai-proof">
        <div className="container">
          <div className="smart-food-ai-section-heading--center">
            <p className="smart-food-ai-eyebrow">
              {smartFoodContent.proof.heading.eyebrow}
            </p>
            <h2>{smartFoodContent.proof.heading.title}</h2>
          </div>

          <div className="smart-food-ai-section-heading smart-food-ai-section-heading--split">
            <div className="smart-food-ai-section-heading__left">
              {smartFoodContent.proof.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="smart-food-ai-section-heading__right">
              <Image
                src={smartFoodContent.proof.image.src}
                alt={smartFoodContent.proof.image.alt}
                width={900}
                height={760}
                sizes="(max-width: 991px) 100vw, 42vw"
              />
            </div>
          </div>
          <div className="smart-food-ai-proof__grid">
            {smartFoodContent.proof.cards.map((card) => (
              <article key={card.index}>
                <span>{card.index}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id={smartFoodContent.workflow.id} className="smart-food-ai-workflow">
        <div className="container">
          <div className="smart-food-ai-section-heading smart-food-ai-section-heading--center">
            <p className="smart-food-ai-eyebrow">
              {smartFoodContent.workflow.heading.eyebrow}
            </p>
            <h2>{smartFoodContent.workflow.heading.title}</h2>
          </div>
          <div className="smart-food-ai-workflow__list">
            {smartFoodContent.workflow.steps.map((step, index) => (
              <article
                key={step.title}
                className="smart-food-ai-workflow__item"
              >
                <div className="smart-food-ai-workflow__image">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    width={760}
                    height={1200}
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                  />
                </div>
                <div className="smart-food-ai-workflow__content">
                  <div className="smart-food-ai-workflow__index">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="smart-food-ai-features">
        <div className="container">
          <div className="smart-food-ai-section-heading">
            <p className="smart-food-ai-eyebrow">
              {smartFoodContent.features.heading.eyebrow}
            </p>
            <h2>{smartFoodContent.features.heading.title}</h2>
          </div>
          <div className="smart-food-ai-card-grid">
            {smartFoodContent.features.items.map((feature) => (
              <article key={feature} className="smart-food-ai-feature-card">
                <span aria-hidden="true" />
                <h3>{feature}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id={smartFoodContent.value.id} className="smart-food-ai-value">
        <div className="container">
          <div className="smart-food-ai-value__grid">
            <div className="smart-food-ai-section-heading">
              <p className="smart-food-ai-eyebrow">
                {smartFoodContent.value.heading.eyebrow}
              </p>
              <h2>{smartFoodContent.value.heading.title}</h2>
              {smartFoodContent.value.heading.text && (
                <p>{smartFoodContent.value.heading.text}</p>
              )}
            </div>
            <div className="smart-food-ai-value__cards">
              {smartFoodContent.value.cards.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
