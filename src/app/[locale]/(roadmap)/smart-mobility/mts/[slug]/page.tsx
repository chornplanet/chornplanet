import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getRelatedSmartMobilityStations,
  getSmartMobilityStationBySlug,
  getSmartMobilityStationMetadata,
} from "@/lib/platform-content/smartMobilityContent";

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

  return getSmartMobilityStationMetadata({ locale, slug });
}

export default async function Page({ params }: PageParams) {
  const { locale, slug } = await params;
  const station = getSmartMobilityStationBySlug(slug);

  if (!station) {
    notFound();
  }

  const relatedStations = getRelatedSmartMobilityStations(station.slug);

  return (
    <main className="platform-page platform-mts-page platform-mts-detail-page">
      <section className="platform-outfit-detail-hero platform-mts-hero">
        <div className="platform-outfit-detail-hero__copy">
          <Link
            className="platform-outfit-detail-hero__back"
            href={`/${locale}/smart-mobility/`}
          >
            MTS Network
          </Link>
          <span className="platform-eyebrow">{station.mts_station}</span>
          <div className="platform-mts-station-summary">
            <strong>{station.name}</strong>
            <p>{station.story}</p>
          </div>
          <div
            className="platform-outfit-detail-tags"
            aria-label="Station tags"
          >
            <span>{station.zone}</span>
            <span>{station.mts_line}</span>
            <span>{station.world_map}</span>
            <span>{station.mts_network}</span>
          </div>
          <div className="platform-mts-hero__actions">
            <Link href={`/${locale}/smart-mobility/`}>Circulatory System</Link>
            <Link href={`/${locale}/story/`}>Circulatory Story</Link>
          </div>
        </div>
        <div className="platform-outfit-detail-hero__media">
          <Image
            className="platform-mts-hero__image"
            src={station.image.src}
            alt={station.image.alt}
            fill
            priority
            sizes="(max-width: 991px) 100vw, 48vw"
          />
        </div>
      </section>

      <section className="platform-shell platform-outfit-detail-related">
        <div className="platform-section__header">
          <span>More MTS Stations</span>
          <h2>Continue through the mobility network.</h2>
          <p>
            Move across the Chorn Planet MTS station set and open another future
            civilization node directly from this page.
          </p>
        </div>
        <div className="platform-outfit-detail-related__grid">
          {relatedStations.map((relatedStation) => (
            <article
              key={relatedStation.slug}
              className="platform-outfit-card platform-mts-card"
            >
              <Link
                className="platform-outfit-card__link"
                href={`/${locale}/smart-mobility/mts/${relatedStation.slug}/`}
              >
                <div className="platform-outfit-card__media">
                  <Image
                    src={relatedStation.image.src}
                    alt={relatedStation.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 31vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="platform-outfit-card__body">
                  <span>{relatedStation.mts_station}</span>
                  <h3>{relatedStation.name}</h3>
                  <p>{relatedStation.story}</p>
                  <div className="platform-outfit-card__meta">
                    <strong>View Station</strong>
                    <small>{relatedStation.mts_line}</small>
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
