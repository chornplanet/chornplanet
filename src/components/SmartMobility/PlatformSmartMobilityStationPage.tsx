"use client";

import Image from "next/image";
import Link from "next/link";
import type {
  MtsStation,
  SmartMobilityMtsDetailContent,
  SmartMobilityStationDetailContent,
} from "@/lib/platform-content/smartMobilityContent";
import { usePlatformSmartMobilityMTSContent } from "@/lib/platform-content/usePlatformSmartMobilityMTSContent";

function getLocalizedHref(locale: string, href: string) {
  if (/^https?:\/\//.test(href)) {
    return href;
  }

  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

function getActiveMtsGatewaySlug(slug: string) {
  if (slug.startsWith("mts-valley")) {
    return "mts-valley-2-lavender-valley";
  }

  if (slug.startsWith("mts-coastal")) {
    return "mts-coastal-1-beach-gateway";
  }

  return null;
}

function isActionForGateway(actionHref: string, gatewaySlug: string | null) {
  return Boolean(gatewaySlug && actionHref.includes(`/mts/${gatewaySlug}/`));
}

function RelatedMtsStationCard({
  locale,
  station,
  detail,
}: {
  locale: string;
  station: MtsStation;
  detail: SmartMobilityMtsDetailContent;
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
            <strong>{detail.relatedCardCta}</strong>
            <small>{station.mts_line}</small>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function PlatformSmartMobilityStationPage({
  locale,
  slug,
  content,
}: {
  locale: string;
  slug: string;
  content: SmartMobilityStationDetailContent;
}) {
  const { data: cachedContent } = usePlatformSmartMobilityMTSContent(
    locale,
    slug,
    content,
  );
  const stationContent = cachedContent ?? content;
  const { detail, station, relatedStations } = stationContent;
  const activeGatewaySlug = getActiveMtsGatewaySlug(slug);

  return (
    <main className="platform-page platform-mts-page platform-mts-detail-page">
      <section className="platform-outfit-detail-hero platform-mts-hero">
        <div className="platform-outfit-detail-hero__copy">
          <Link
            className="platform-outfit-detail-hero__back"
            href={`/${locale}/smart-mobility/`}
          >
            {detail.backLinkLabel}
          </Link>
          <span className="platform-eyebrow">{station.mts_station}</span>
          <div className="platform-mts-station-summary">
            <strong>{station.name}</strong>
            <p>{station.story}</p>
          </div>

          <div
            className="platform-outfit-detail-tags"
            aria-label={detail.stationTagsAriaLabel}
          >
            <span>{station.zone}</span>
            <span>{station.mts_line}</span>
            <span>{station.world_map}</span>
            <span>{station.mts_network}</span>
          </div>

          <div className="platform-mts-hero__actions">
            {detail.actions.map((action) => {
              const isActiveGateway = isActionForGateway(
                action.href,
                activeGatewaySlug,
              );
              const label = isActiveGateway
                ? detail.backLinkLabel
                : action.label;

              if (isActiveGateway) {
                return (
                  <span
                    key={action.href}
                    className="platform-mts-hero__action platform-mts-hero__action--active"
                    aria-current="page"
                  >
                    {station.name}
                  </span>
                );
              }

              return (
                <Link
                  key={action.href}
                  className="platform-mts-hero__action"
                  href={getLocalizedHref(locale, action.href)}
                >
                  {label}
                </Link>
              );
            })}
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
          <span>{detail.related.eyebrow}</span>
          <h2>{detail.related.title}</h2>
          <p>{detail.related.description}</p>
        </div>
        <div className="platform-outfit-detail-related__grid">
          {relatedStations.map((relatedStation) => (
            <RelatedMtsStationCard
              key={relatedStation.slug}
              locale={locale}
              station={relatedStation}
              detail={detail}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
