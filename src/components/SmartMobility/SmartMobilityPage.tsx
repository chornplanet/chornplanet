"use client";

import Image from "next/image";
import Link from "next/link";
import type {
  MtsStation,
  SmartMobilityLandingContent,
} from "@/lib/platform-content/smartMobilityContent";
import { usePlatformSmartMobilityContent } from "@/lib/platform-content/usePlatformSmartMobilityContent";
import SmartMobilityActions from "./SmartMobilityActions";

function MtsStationCard({
  locale,
  station,
}: {
  locale: string;
  station: MtsStation;
}) {
  return (
    <article className="platform-outfit-card platform-mts-card">
      <Link
        className="platform-outfit-card__link"
        href={`/${locale}/smart-mobility/mts/${station.slug}/`}
      >
        <div className="platform-outfit-card__media">
          <Image
            src={station.image.src}
            alt={station.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 31vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="platform-outfit-card__body">
          <span>{station.mts_station}</span>
          <h3>{station.name}</h3>
          <p>{station.story}</p>
          <div className="platform-outfit-card__meta">
            <strong>View Station</strong>
            <small>{station.mts_line}</small>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function SmartMobilityPage({
  locale,
  content,
}: {
  locale: string;
  content: SmartMobilityLandingContent;
}) {
  const { data: cachedContent } = usePlatformSmartMobilityContent(
    locale,
    content,
  );
  const smartMobilityContent = cachedContent ?? content;
  const heroStation = smartMobilityContent.heroStation;

  return (
    <main className="platform-page platform-mts-page">
      <section className="platform-mts-full-hero">
        <div className="platform-mts-full-hero__media">
          <Image
            className="platform-mts-full-hero__image"
            src={heroStation.image.src}
            alt={heroStation.image.alt}
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="platform-mts-full-hero__content">
          <small>CHORN PLANET - {heroStation.name}</small>
        </div>
      </section>

      <section className="platform-shell platform-mts-action-nav">
        <SmartMobilityActions
          locale={locale}
          activeHref="/smart-mobility/"
          style={{ marginBottom: 18 }}
        />
      </section>

      {smartMobilityContent.lines.map((line) => (
        <section
          key={line.id}
          id={`${line.id}-line`}
          className="platform-shell platform-outfit-detail-related platform-mts-line"
        >
          <div className="platform-section__header">
            <span>{line.eyebrow}</span>
            <h2>{line.title}</h2>
            <p>{line.description}</p>
          </div>
          <div className="platform-outfit-detail-related__grid">
            {line.stations.map((station) => (
              <MtsStationCard
                key={station.slug}
                locale={locale}
                station={station}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
