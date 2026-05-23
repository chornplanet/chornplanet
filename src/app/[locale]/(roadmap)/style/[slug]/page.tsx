import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import {
  getPlatformOutfitDetailMetadata,
  getPlatformOutfitLocalizedText,
  getPlatformOutfitSetById,
  getPlatformOutfitSets,
} from "@/lib/platform-content/styleContent";

type PageParams = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, slug } = await params;

  return getPlatformOutfitDetailMetadata({ locale, slug });
}

export default async function Page({ params }: PageParams) {
  const { locale, slug } = await params;
  const outfitSet = getPlatformOutfitSetById(slug, locale);

  if (!outfitSet) {
    notFound();
  }

  const title = getPlatformOutfitLocalizedText(outfitSet.title, locale);
  const story = getPlatformOutfitLocalizedText(outfitSet.story, locale);
  const summary = getPlatformOutfitLocalizedText(
    outfitSet.visualSummary,
    locale,
  );
  const relatedOutfits = getPlatformOutfitSets(locale).filter(
    (relatedOutfitSet) => relatedOutfitSet.id !== outfitSet.id,
  );

  return (
    <main className="platform-page platform-outfit-detail-page">
      <section className="platform-outfit-detail-hero">
        <div className="platform-outfit-detail-hero__copy">
          <Link
            className="platform-outfit-detail-hero__back"
            href={`/${locale}/style/`}
          >
            Style Collection
          </Link>
          <span className="platform-eyebrow">{outfitSet.audience}</span>
          <h1>{title}</h1>
          <p>{story}</p>
          <div className="platform-outfit-detail-tags" aria-label="Outfit tags">
            {outfitSet.tags.slice(0, 5).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a
            className="platform-outfit-detail-cta"
            href={outfitSet.tiktok_url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="platform-outfit-detail-cta__icons" aria-hidden="true">
              <ShoppingBag
                className="platform-outfit-detail-cta__shopping-icon"
                size={18}
                strokeWidth={2.4}
              />
              <FaTiktok className="platform-outfit-detail-cta__tiktok-icon" />
            </span>
            <span>Explore and Buy on TikTok</span>
          </a>
        </div>
        <div className="platform-outfit-detail-hero__media">
          <Image
            src={outfitSet.image.src}
            alt={outfitSet.image.alt}
            fill
            priority
            sizes="(max-width: 991px) 100vw, 48vw"
            style={{ objectFit: "cover", objectPosition: "50% 18%" }}
          />
        </div>
      </section>

      <section className="platform-shell platform-outfit-detail-story">
        <div className="platform-section__header">
          <span>Outfit Story</span>
          <h2>{summary}</h2>
          <p>
            From the first full-body still to the vertical detail scenes, the
            look holds one recognizable mood: destination styling, product
            clarity and a soft premium tone made for short-form discovery.
          </p>
        </div>
      </section>

      <section className="platform-shell platform-outfit-detail-gallery">
        {outfitSet.images.map((detailImage, index) => (
          <figure key={detailImage.image.src}>
            <Image
              src={detailImage.image.src}
              alt={detailImage.image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 24vw"
              style={{ objectFit: "cover", objectPosition: "50% 18%" }}
            />
            <figcaption>{String(index + 1).padStart(2, "0")}</figcaption>
          </figure>
        ))}
      </section>

      <section className="platform-shell platform-outfit-detail-related">
        <div className="platform-section__header">
          <span>More Style Stories</span>
          <h2>Explore other outfit directions.</h2>
          <p>
            Move through the full Chorn Planet Style set and open another look
            directly from the detail page.
          </p>
        </div>
        <div className="platform-outfit-detail-related__grid">
          {relatedOutfits.map((relatedOutfitSet) => (
            <article
              key={relatedOutfitSet.id}
              className="platform-outfit-card"
            >
              <Link
                className="platform-outfit-card__link"
                href={`/${locale}/style/${relatedOutfitSet.id}/`}
              >
                <div className="platform-outfit-card__media">
                  <Image
                    src={relatedOutfitSet.image.src}
                    alt={relatedOutfitSet.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 31vw"
                    style={{ objectFit: "cover", objectPosition: "50% 18%" }}
                  />
                </div>
                <div className="platform-outfit-card__body">
                  <span>{relatedOutfitSet.audience}</span>
                  <h3>
                    {getPlatformOutfitLocalizedText(
                      relatedOutfitSet.title,
                      locale,
                    )}
                  </h3>
                  <p>
                    {getPlatformOutfitLocalizedText(
                      relatedOutfitSet.visualSummary,
                      locale,
                    )}
                  </p>
                  <div className="platform-outfit-card__meta">
                    <strong>View Style</strong>
                    <small>
                      {relatedOutfitSet.zoneDisplay[0] ??
                        relatedOutfitSet.zoneCandidates[0]}
                    </small>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
