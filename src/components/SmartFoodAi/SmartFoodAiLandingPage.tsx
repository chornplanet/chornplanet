import Image from "next/image";
import daContent from "./da.json";
import deContent from "./de.json";
import enContent from "./en.json";
import fiContent from "./fi.json";
import frContent from "./fr.json";
import jaContent from "./ja.json";
import koContent from "./ko.json";
import nlContent from "./nl.json";
import thContent from "./th.json";
import zhContent from "./zh.json";

type SmartFoodAiImage = {
  src: string;
  alt: string;
};

type SmartFoodAiAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

type SmartFoodAiWorkflowStep = {
  title: string;
  text: string;
  image: SmartFoodAiImage;
};

type SmartFoodAiProofCard = {
  index: string;
  title: string;
  text: string;
};

type SmartFoodAiValueCard = {
  title: string;
  text: string;
};

type SmartFoodAiSectionHeading = {
  eyebrow: string;
  title: string;
  text?: string;
};

type SmartFoodAiContent = {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    support: string;
    actionsLabel: string;
    actions: SmartFoodAiAction[];
    visual: SmartFoodAiImage & {
      ariaLabel: string;
    };
  };
  proof: {
    heading: SmartFoodAiSectionHeading;
    paragraphs: string[];
    image: SmartFoodAiImage;
    cards: SmartFoodAiProofCard[];
  };
  workflow: {
    id: string;
    heading: SmartFoodAiSectionHeading;
    steps: SmartFoodAiWorkflowStep[];
  };
  features: {
    heading: SmartFoodAiSectionHeading;
    items: string[];
  };
  value: {
    id: string;
    heading: SmartFoodAiSectionHeading;
    cards: SmartFoodAiValueCard[];
  };
  futureDirections: string[];
};

const smartFoodAiContent: Record<string, SmartFoodAiContent> = {
  da: daContent as SmartFoodAiContent,
  de: deContent as SmartFoodAiContent,
  en: enContent as SmartFoodAiContent,
  fi: fiContent as SmartFoodAiContent,
  fr: frContent as SmartFoodAiContent,
  ja: jaContent as SmartFoodAiContent,
  ko: koContent as SmartFoodAiContent,
  nl: nlContent as SmartFoodAiContent,
  th: thContent as SmartFoodAiContent,
  zh: zhContent as SmartFoodAiContent,
};

function getSmartFoodAiContent(lang: string): SmartFoodAiContent {
  return smartFoodAiContent[lang] ?? smartFoodAiContent.en;
}

export default function SmartFoodAiLandingPage({ lang }: { lang: string }) {
  const content = getSmartFoodAiContent(lang);

  return (
    <main className="smart-food-ai-page">
      <section className="smart-food-ai-hero">
        <div className="container">
          <div className="smart-food-ai-hero__grid">
            <div className="smart-food-ai-hero__content">
              <p className="smart-food-ai-eyebrow">{content.hero.eyebrow}</p>
              <h1>{content.hero.title}</h1>
              <p className="smart-food-ai-hero__lead">{content.hero.lead}</p>
              <p className="smart-food-ai-hero__support">
                {content.hero.support}
              </p>
              <div
                className="smart-food-ai-actions"
                aria-label={content.hero.actionsLabel}
              >
                {content.hero.actions.map((action) => (
                  <a
                    key={action.href}
                    href={action.href}
                    className={`smart-food-ai-button smart-food-ai-button--${action.variant}`}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>

            <div
              className="smart-food-ai-hero__visual"
              aria-label={content.hero.visual.ariaLabel}
            >
              <Image
                src={content.hero.visual.src}
                alt={content.hero.visual.alt}
                width={1200}
                height={800}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="smart-food-ai-proof">
        <div className="container">
          <div className="smart-food-ai-section-heading--center">
            <p className="smart-food-ai-eyebrow">
              {content.proof.heading.eyebrow}
            </p>
            <h2>{content.proof.heading.title}</h2>
          </div>

          <div className="smart-food-ai-section-heading smart-food-ai-section-heading--split">
            <div className="smart-food-ai-section-heading__left">
              {content.proof.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="smart-food-ai-section-heading__right">
              <Image
                src={content.proof.image.src}
                alt={content.proof.image.alt}
                width={900}
                height={760}
                sizes="(max-width: 991px) 100vw, 42vw"
              />
            </div>
          </div>
          <div className="smart-food-ai-proof__grid">
            {content.proof.cards.map((card) => (
              <article key={card.index}>
                <span>{card.index}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id={content.workflow.id} className="smart-food-ai-workflow">
        <div className="container">
          <div className="smart-food-ai-section-heading smart-food-ai-section-heading--center">
            <p className="smart-food-ai-eyebrow">
              {content.workflow.heading.eyebrow}
            </p>
            <h2>{content.workflow.heading.title}</h2>
          </div>
          <div className="smart-food-ai-workflow__list">
            {content.workflow.steps.map((step, index) => (
              <article
                key={step.title}
                className="smart-food-ai-workflow__item"
              >
                <div className="smart-food-ai-workflow__image">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
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
              {content.features.heading.eyebrow}
            </p>
            <h2>{content.features.heading.title}</h2>
          </div>
          <div className="smart-food-ai-card-grid">
            {content.features.items.map((feature) => (
              <article key={feature} className="smart-food-ai-feature-card">
                <span aria-hidden="true" />
                <h3>{feature}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id={content.value.id} className="smart-food-ai-value">
        <div className="container">
          <div className="smart-food-ai-value__grid">
            <div className="smart-food-ai-section-heading">
              <p className="smart-food-ai-eyebrow">
                {content.value.heading.eyebrow}
              </p>
              <h2>{content.value.heading.title}</h2>
              {content.value.heading.text && <p>{content.value.heading.text}</p>}
            </div>
            <div className="smart-food-ai-value__cards">
              {content.value.cards.map((item) => (
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
