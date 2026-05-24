import Image from "next/image";
import Link from "next/link";
import type { PlatformCard } from "@/lib/platform-content/homeContent";

function getLocalizedHref(lang: string, href: string): string {
  if (href.startsWith("http")) {
    return href;
  }

  const normalizedHref = href.startsWith("/") ? href : `/${href}`;
  return `/${lang}${normalizedHref}`;
}

export default function PlatformContentCard({
  lang,
  card,
}: {
  lang: string;
  card: PlatformCard;
}) {
  return (
    <article className="platform-card">
      <Link
        href={getLocalizedHref(lang, card.href)}
        className="platform-card__media"
        aria-label={card.title}
      >
        <Image
          src={card.image}
          alt={card.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <div className="platform-card__body">
        <span className="platform-card__category">{card.category}</span>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <div className="platform-card__tags" aria-label={`${card.title} tags`}>
          {card.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <Link
          href={getLocalizedHref(lang, card.href)}
          className="platform-card__cta"
        >
          {card.cta}
        </Link>
      </div>
    </article>
  );
}

export { getLocalizedHref };
