import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import PlatformContentCard, {
  getLocalizedHref,
} from "@/components/Platform/PlatformContentCard";
import type {
  PlatformHomeContent,
  PlatformSection,
} from "@/lib/platform-content/homeContent";
import {
  getPlatformOutfitLocalizedText,
  getPlatformOutfitSets,
} from "@/lib/platform-content/styleContent";

function PlatformHomeSection({
  lang,
  section,
}: {
  lang: string;
  section: PlatformSection;
}) {
  return (
    <section
      className={`platform-section platform-section--${section.layout}`}
      id={section.id}
    >
      <div className="platform-section__header">
        <span>{section.eyebrow}</span>
        <h2>{section.title}</h2>
        <p>{section.description}</p>
      </div>
      <div className="platform-card-grid">
        {section.cards.map((card) => (
          <PlatformContentCard
            key={`${section.id}-${card.title}`}
            lang={lang}
            card={card}
          />
        ))}
      </div>
    </section>
  );
}

function PlatformHomeOutfitSection({
  lang,
  section,
}: {
  lang: string;
  section?: PlatformSection;
}) {
  const outfitSets = getPlatformOutfitSets(lang).slice(0, 9);

  return (
    <section className="platform-shell platform-outfit-detail-related">
      <div className="platform-section__header">
        <span>{section?.eyebrow ?? "Graceful Style"}</span>
        <h2>{section?.title ?? "Explore outfit directions."}</h2>
        <p>
          {section?.description ??
            "Move through the full Chorn Planet Style set and open each look directly from the homepage."}
        </p>
      </div>
      <div className="platform-outfit-detail-related__grid">
        {outfitSets.map((outfitSet) => (
          <article key={outfitSet.id} className="platform-outfit-card">
            <Link
              className="platform-outfit-card__link"
              href={`/${lang}/style/${outfitSet.id}/`}
            >
              <div className="platform-outfit-card__media">
                <Image
                  src={outfitSet.image.src}
                  alt={outfitSet.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 31vw"
                  style={{ objectFit: "cover", objectPosition: "50% 18%" }}
                />
              </div>
              <div className="platform-outfit-card__body">
                <span>{outfitSet.audience}</span>
                <h3>{getPlatformOutfitLocalizedText(outfitSet.title, lang)}</h3>
                <p>
                  {getPlatformOutfitLocalizedText(
                    outfitSet.visualSummary,
                    lang,
                  )}
                </p>
                <div className="platform-outfit-card__meta">
                  <strong>View Style</strong>
                  <small>
                    {outfitSet.zoneDisplay[0] ?? outfitSet.zoneCandidates[0]}
                  </small>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function PlatformHomePage({
  lang,
  content,
  afterHero,
}: {
  lang: string;
  content: PlatformHomeContent;
  afterHero?: ReactNode;
}) {
  const outfitSection = content.sections.find(
    (section) => section.layout === "grid",
  );
  const platformSections = content.sections.filter(
    (section) => section.layout !== "grid",
  );

  return (
    <main className="platform-page platform-home">
      <section className="platform-hero">
        <div className="platform-hero__media">
          <Image
            src={content.hero.image}
            alt={content.hero.imageAlt}
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="platform-hero__overlay" />
        <div className="platform-shell platform-hero__content">
          <div className="platform-hero__actions">
            {content.hero.actions.map((action) => (
              <Link
                key={action.href}
                href={getLocalizedHref(lang, action.href)}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {afterHero ? (
        <div className="platform-shell platform-home__after-hero">
          {afterHero}
        </div>
      ) : null}

      <div className="platform-shell">
        {platformSections.map((section) => (
          <PlatformHomeSection key={section.id} lang={lang} section={section} />
        ))}
      </div>

      <PlatformHomeOutfitSection lang={lang} section={outfitSection} />
    </main>
  );
}
