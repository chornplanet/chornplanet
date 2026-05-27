import Image from "next/image";
import Link from "next/link";
import type {
  PlatformOutfitHeroImage,
  PlatformOutfitSet,
  ResolvedPlatformOutfitContent,
} from "@/lib/platform-content/styleContent";
import {
  getPlatformOutfitExampleImagePath,
  getPlatformOutfitLocalizedText,
} from "@/lib/platform-content/styleContent";

function getLocalizedAnchor(lang: string, id: string): string {
  return `/${lang}/style/#${id}`;
}

function getLocalizedOutfitHref(lang: string, id: string): string {
  return `/${lang}/style/${id}/`;
}

function HeroImage({
  image,
  priority = false,
}: {
  image: PlatformOutfitHeroImage;
  priority?: boolean;
}) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      priority={priority}
      sizes={image.sizes}
      style={{ objectFit: "cover", objectPosition: "50% 18%" }}
    />
  );
}

function OutfitImage({
  outfitSet,
  sizes,
}: {
  outfitSet: PlatformOutfitSet;
  sizes: string;
}) {
  return (
    <Image
      src={getPlatformOutfitExampleImagePath(outfitSet)}
      alt={
        outfitSet.image?.alt ?? getPlatformOutfitLocalizedText(outfitSet.title)
      }
      fill
      sizes={sizes}
      style={{ objectFit: "cover", objectPosition: "50% 18%" }}
    />
  );
}

export default function PlatformOutfitLandingPage({
  lang,
  content,
}: {
  lang: string;
  content: ResolvedPlatformOutfitContent;
}) {
  const [primaryHeroImage, secondaryHeroImage, tertiaryHeroImage] =
    content.hero.images;
  const featuredSection = content.layoutSections.find(
    (section) => section.id === "featured-outfit-sets",
  );
  const zoneSection = content.layoutSections.find(
    (section) => section.id === "zone-pairing",
  );

  return (
    <main className="platform-page platform-outfit-page">
      <section className="platform-outfit-hero">
        <div className="platform-outfit-hero__copy">
          <span className="platform-eyebrow">{content.hero.eyebrow}</span>
          <h1>{content.hero.title}</h1>
          <p>{content.hero.description}</p>
          <div className="platform-outfit-hero__actions">
            <Link href={getLocalizedAnchor(lang, "featured-outfit-sets")}>
              {content.hero.primaryCta}
            </Link>
            <Link href={getLocalizedAnchor(lang, "zone-pairing")}>
              {content.hero.secondaryCta}
            </Link>
          </div>
        </div>
        <div
          className="platform-outfit-hero__mosaic"
          aria-label={content.hero.imageStrategy}
        >
          {primaryHeroImage && (
            <figure className="platform-outfit-hero__tile platform-outfit-hero__tile--1">
              <HeroImage image={primaryHeroImage} priority />
            </figure>
          )}
          <div className="platform-outfit-hero__side">
            {secondaryHeroImage && (
              <figure className="platform-outfit-hero__tile platform-outfit-hero__tile--2">
                <HeroImage image={secondaryHeroImage} />
              </figure>
            )}
            {tertiaryHeroImage && (
              <figure className="platform-outfit-hero__tile platform-outfit-hero__tile--3">
                <HeroImage image={tertiaryHeroImage} />
              </figure>
            )}
          </div>
        </div>
      </section>

      <section className="platform-shell platform-outfit-intro">
        {content.layoutSections.slice(0, 3).map((section) => (
          <article key={section.id} className="platform-outfit-intro__item">
            <span>{section.label}</span>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </article>
        ))}
      </section>

      <section
        id="featured-outfit-sets"
        className="platform-shell platform-outfit-section"
      >
        <div className="platform-section__header">
          <span>{featuredSection?.label ?? "Featured Sets"}</span>
          <h2>{featuredSection?.title ?? "Starter outfit sets"}</h2>
          <p>{featuredSection?.description ?? content.hero.imageStrategy}</p>
        </div>
        <div className="platform-outfit-grid">
          {content.outfitSets.map((outfitSet) => (
            <article key={outfitSet.id} className="platform-outfit-card">
              <Link
                className="platform-outfit-card__link"
                href={getLocalizedOutfitHref(lang, outfitSet.id)}
              >
                <div className="platform-outfit-card__media">
                  <OutfitImage
                    outfitSet={outfitSet}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="platform-outfit-card__body">
                  <span>{outfitSet.audience}</span>
                  <h3>
                    {getPlatformOutfitLocalizedText(
                      outfitSet.title,
                      content.locale,
                    )}
                  </h3>
                  <p>
                    {getPlatformOutfitLocalizedText(
                      outfitSet.visualSummary,
                      content.locale,
                    )}
                  </p>
                  <div className="platform-outfit-card__meta">
                    <strong>
                      {outfitSet.subZoneRequired
                        ? "Sub-Zone required"
                        : "Zone-ready"}
                    </strong>
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

      <section className="platform-shell platform-outfit-section platform-outfit-section--audience">
        <div className="platform-section__header">
          <span>
            {content.layoutSections.find(
              (section) => section.id === "audience-groups",
            )?.label ?? "Audience"}
          </span>
          <h2>
            {content.layoutSections.find(
              (section) => section.id === "audience-groups",
            )?.title ?? "Audience groups"}
          </h2>
          <p>
            {
              content.layoutSections.find(
                (section) => section.id === "audience-groups",
              )?.description
            }
          </p>
        </div>
        <div className="platform-outfit-audience">
          {content.audienceGroups.map((group) => (
            <article key={group.id}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="zone-pairing"
        className="platform-shell platform-outfit-section platform-outfit-zone"
      >
        <div className="platform-section__header">
          <span>{zoneSection?.label ?? "Chorn DNA Zone Pairing"}</span>
          <h2>
            {zoneSection?.title ?? "Every look is prepared for zone resolution"}
          </h2>
          <p>{content.zonePairingNote}</p>
        </div>
        <div className="platform-outfit-zone__grid">
          {content.outfitSets.slice(0, 6).map((outfitSet) => {
            const zones = outfitSet.zoneDisplay.length
              ? outfitSet.zoneDisplay
              : outfitSet.zoneCandidates;

            return (
              <article key={outfitSet.id}>
                <h3>
                  {getPlatformOutfitLocalizedText(
                    outfitSet.title,
                    content.locale,
                  )}
                </h3>
                <div className="platform-outfit-zone__tags">
                  {zones.map((zone) => (
                    <span key={zone}>{zone}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
