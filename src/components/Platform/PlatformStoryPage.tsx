"use client";

import Link from "next/link";
import type { PlatformStoryContent } from "@/lib/platform-content/homeContent";
import { usePlatformAboutContent } from "@/lib/platform-content/usePlatformAboutContent";

export default function PlatformStoryPage({
  lang,
  content,
}: {
  lang: string;
  content: PlatformStoryContent;
}) {
  const { data: cachedContent } = usePlatformAboutContent(lang, content);
  const aboutContent = cachedContent ?? content;

  const getLocalizedHref = (href: string) => {
    if (href.startsWith("http")) {
      return href;
    }

    const normalizedHref = href.startsWith("/") ? href : `/${href}`;
    return `/${lang}${normalizedHref}`;
  };

  return (
    <main className="platform-page platform-story-page">
      <section className="policy-page__hero technology-document-hero">
        <div className="platform-shell policy-page__hero-inner">
          <div className="technology-document-hero__heading">
            <span className="platform-eyebrow">{aboutContent.eyebrow}</span>
            <h1>{aboutContent.title}</h1>
            <h2>Chorn Planet&apos;s future civilization platform</h2>
          </div>
          <div className="policy-page__hero-copy">
            <p>{aboutContent.description}</p>
          </div>
          <aside
            className="policy-page__summary"
            aria-label={`${aboutContent.title} summary`}
          >
            <span>{aboutContent.eyebrow}</span>
            <strong>{aboutContent.blocks.length}</strong>
            <small>platform layers</small>
          </aside>
        </div>
      </section>

      <section className="platform-shell platform-story-blocks">
        {aboutContent.blocks.map((block) => (
          <article key={block.title} className="platform-story-block">
            <div className="platform-story-block__content">
              <h2>{block.title}</h2>
              <p>{block.body}</p>
            </div>

            {block.tags?.length ? (
              <div
                className="platform-story-block__tags"
                aria-label={`${block.title} tags`}
              >
                {block.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            ) : null}

            {block.link ? (
              <Link
                href={getLocalizedHref(block.link)}
                className="platform-story-block__link"
              >
                Explore {block.title}
              </Link>
            ) : null}
          </article>
        ))}
      </section>
    </main>
  );
}
