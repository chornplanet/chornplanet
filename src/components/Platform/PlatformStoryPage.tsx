import Image from "next/image";
import Link from "next/link";
import type { PlatformStoryContent } from "@/lib/platform-content/homeContent";

export default function PlatformStoryPage({
  lang,
  content,
}: {
  lang: string;
  content: PlatformStoryContent;
}) {
  const getLocalizedHref = (href: string) => {
    if (href.startsWith("http")) {
      return href;
    }

    const normalizedHref = href.startsWith("/") ? href : `/${href}`;
    return `/${lang}${normalizedHref}`;
  };

  return (
    <main className="platform-page platform-story-page">
      <section className="platform-channel-hero platform-channel-hero--story">
        <div className="platform-channel-hero__copy">
          <span className="platform-eyebrow">{content.eyebrow}</span>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </div>
        <div className="platform-channel-hero__media">
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            priority
            sizes="(max-width: 992px) 100vw, 44vw"
          />
        </div>
      </section>

      <section className="platform-shell platform-story-blocks">
        {content.blocks.map((block) => (
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
