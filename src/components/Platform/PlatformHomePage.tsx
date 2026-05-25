import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ShoppingBag } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
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
import sofaCoupleStory from "@/data/story/sofa-couple/en.sofa-couple.json";

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

export function PlatformHomeCircularSystemSection({
  lang,
  showStoryLink = true,
  showTiktokLink = false,
}: {
  lang: string;
  showStoryLink?: boolean;
  showTiktokLink?: boolean;
}) {
  return (
    <>
      <section className="platform-shell platform-outfit-detail-related platform-home-sofa-story platform-home-sofa-story--intro">
        <div className="platform-section__header platform-home-sofa-story__section1">
          <span>{"Circulatory System Story"}</span>
          <h2>{"Turn circulatory system into scenes and stories"}</h2>
          <p>
            A soft future-lifestyle story where MTS is more than transport: it
            carries a couple from the rhythm of the valley line back into the
            warmth of home, love, rest and everyday civilization.
          </p>
        </div>
      </section>

      <section className="platform-shell platform-outfit-detail-related platform-home-sofa-story platform-home-sofa-story--feature">
        <div
          className="platform-home-sofa-story__section2"
          aria-labelledby="platform-home-sofa-story-title"
        >
          <div className="platform-home-sofa-story__media">
            <Image
              src={sofaCoupleStory.image.src}
              alt={sofaCoupleStory.image.alt}
              fill
              sizes="(max-width: 991px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="platform-home-sofa-story__content">
            <div className="platform-home-sofa-story__copy">
              <span>Future Home Story</span>
              <h3 id="platform-home-sofa-story-title">
                {sofaCoupleStory.title}
              </h3>
              <p>{sofaCoupleStory.story}</p>
              <div className="platform-home-sofa-story__actions">
                {showStoryLink ? (
                  <Link
                    className="platform-home-sofa-story__link"
                    href={`/${lang}/story/`}
                  >
                    Open Story
                  </Link>
                ) : null}
                {showStoryLink ? (
                  <Link
                    className="platform-home-sofa-story__link platform-home-sofa-story__link--mobility"
                    href={`/${lang}/smart-mobility/`}
                  >
                    Circulatory System
                  </Link>
                ) : null}
                {showTiktokLink ? (
                  <a
                    className="platform-outfit-detail-cta platform-home-sofa-story__tiktok"
                    href={sofaCoupleStory.tiktok}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span
                      className="platform-outfit-detail-cta__icons"
                      aria-hidden="true"
                    >
                      <ShoppingBag
                        className="platform-outfit-detail-cta__shopping-icon"
                        size={18}
                        strokeWidth={2.4}
                      />
                      <FaTiktok className="platform-outfit-detail-cta__tiktok-icon" />
                    </span>
                    <span>Explore on TikTok</span>
                  </a>
                ) : null}
              </div>
            </div>
            <div className="platform-home-sofa-story__cards">
              {sofaCoupleStory.images.slice(0, 4).map((storyImage) => (
                <figure key={storyImage.image.src}>
                  <Image
                    src={storyImage.image.src}
                    alt={storyImage.image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 18vw"
                    style={{ objectFit: "cover" }}
                  />
                  <figcaption>{storyImage.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
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
    <section className="platform-shell platform-outfit-detail-related platform-home-sofa-story platform-home-sofa-story--outfits">
      <div className="platform-section__header platform-home-sofa-story__section1">
        <span>{section?.eyebrow ?? "Graceful Style"}</span>
        <h2>{section?.title ?? "Explore outfit directions."}</h2>
        <p>
          {section?.description ??
            "Move through the full Chorn Planet Style set and open each look directly from the homepage."}
        </p>
      </div>

      <div className="platform-outfit-detail-related__grid platform-home-sofa-story__section3">
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
                <h3>
                  {getPlatformOutfitLocalizedText(outfitSet.title, lang)}
                </h3>
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

      <PlatformHomeCircularSystemSection lang={lang} />
      <PlatformHomeOutfitSection lang={lang} section={outfitSection} />
    </main>
  );
}
