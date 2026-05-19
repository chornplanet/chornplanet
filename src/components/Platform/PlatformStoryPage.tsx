import Image from "next/image";
import type {PlatformStoryContent} from "@/lib/platform-content/platformContent";

export default function PlatformStoryPage({content}: { content: PlatformStoryContent }) {
    return (
        <main className="platform-page platform-story-page">
            <section className="platform-channel-hero platform-channel-hero--story">
                <div className="platform-channel-hero__copy">
                    <span className="platform-eyebrow">{content.eyebrow}</span>
                    <h1>{content.title}</h1>
                    <p>{content.description}</p>
                </div>
                <div className="platform-channel-hero__media">
                    <Image src={content.image} alt={content.imageAlt} fill priority sizes="(max-width: 992px) 100vw, 44vw"/>
                </div>
            </section>

            <section className="platform-shell platform-story-blocks">
                {content.blocks.map((block) => (
                    <article key={block.title} className="platform-story-block">
                        <h2>{block.title}</h2>
                        <p>{block.body}</p>
                    </article>
                ))}
            </section>
        </main>
    );
}
