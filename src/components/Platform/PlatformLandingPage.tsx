import Image from "next/image";
import PlatformContentCard from "@/components/Platform/PlatformContentCard";
import type {PlatformChannelContent} from "@/lib/platform-content/homeContent";

export default function PlatformLandingPage({lang, content}: { lang: string; content: PlatformChannelContent }) {
    return (
        <main className="platform-page platform-channel-page">
            <section className="platform-channel-hero">
                <div className="platform-channel-hero__copy">
                    <span className="platform-eyebrow">{content.eyebrow}</span>
                    <h1>{content.title}</h1>
                    <p>{content.description}</p>
                </div>
                <div className="platform-channel-hero__media">
                    <Image src={content.image.src} alt={content.image.alt} fill priority sizes="(max-width: 992px) 100vw, 44vw"/>
                </div>
            </section>

            <section className="platform-shell platform-section platform-section--grid">
                <div className="platform-card-grid">
                    {content.cards.map((card) => (
                        <PlatformContentCard key={card.title} lang={lang} card={card}/>
                    ))}
                </div>
            </section>
        </main>
    );
}
