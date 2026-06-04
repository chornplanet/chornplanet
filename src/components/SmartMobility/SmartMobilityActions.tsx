import Link from "next/link";
import type { CSSProperties } from "react";
import {
  getSmartMobilityChiangMaiActions,
  isSmartMobilityChiangMaiSlug,
} from "./ChiangMai/ChiangMaiRoutes";

function getLocalizedHref(locale: string, href: string) {
  if (/^https?:\/\//.test(href)) {
    return href;
  }

  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

function normalizeHref(href: string) {
  return `/${href.replace(/^\/+|\/+$/g, "")}/`;
}

export default function SmartMobilityActions({
  locale,
  activeSlug,
  activeHref,
  activeLabel,
  style,
}: {
  locale: string;
  activeSlug?: string | null;
  activeHref?: string;
  activeLabel?: string;
  style?: CSSProperties;
}) {
  const currentSlug =
    activeSlug && isSmartMobilityChiangMaiSlug(activeSlug) ? activeSlug : null;
  const currentHref = activeHref ? normalizeHref(activeHref) : null;

  return (
    <div className="platform-mts-hero__actions" style={style}>
      {getSmartMobilityChiangMaiActions().map((action) => {
        const isActiveBySlug = Boolean(
          action.slug && action.slug === currentSlug,
        );
        const isActiveByHref = Boolean(
          currentHref && normalizeHref(action.href) === currentHref,
        );
        const isActive = isActiveBySlug || isActiveByHref;

        if (isActive) {
          return (
            <span
              key={action.href}
              className="platform-mts-hero__action platform-mts-hero__action--active"
              aria-current="page"
            >
              {activeLabel ?? action.label}
            </span>
          );
        }

        return (
          <Link
            key={action.href}
            className="platform-mts-hero__action"
            href={getLocalizedHref(locale, action.href)}
          >
            {action.label}
          </Link>
        );
      })}
    </div>
  );
}
