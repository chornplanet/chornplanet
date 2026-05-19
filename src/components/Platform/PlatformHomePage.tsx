import Image from "next/image";
import Link from "next/link";
import PlatformContentCard, {getLocalizedHref} from "@/components/Platform/PlatformContentCard";
import type {PlatformHomeContent, PlatformSection} from "@/lib/platform-content/platformContent";

function PlatformHomeSection({lang, section}: { lang: string; section: PlatformSection }) {
    return (
        <section className={`platform-section platform-section--${section.layout}`} id={section.id}>
            <div className="platform-section__header">
                <span>{section.eyebrow}</span>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
            </div>
            <div className="platform-card-grid">
                {section.cards.map((card) => (
                    <PlatformContentCard key={`${section.id}-${card.title}`} lang={lang} card={card}/>
                ))}
            </div>
        </section>
    );
}

export default function PlatformHomePage({lang, content}: { lang: string; content: PlatformHomeContent }) {
    return (
        <main className="platform-page platform-home">
            <section className="platform-hero">
                <div className="platform-hero__media">
                    <Image
                        src={content.hero.image}
                        alt={content.hero.imageAlt}
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="platform-hero__overlay"/>
                <div className="platform-shell platform-hero__content">
                    <span className="platform-eyebrow">{content.hero.eyebrow}</span>
                    <h1>{content.hero.title}</h1>
                    <p>{content.hero.subtitle}</p>
                    <div className="platform-hero__actions">
                        {content.hero.actions.map((action) => (
                            <Link key={action.href} href={getLocalizedHref(lang, action.href)}>
                                {action.label}
                            </Link>
                        ))}
                    </div>
                    <div className="platform-hero__signals">
                        {content.hero.signals.map((signal) => (
                            <span key={signal}>{signal}</span>
                        ))}
                    </div>
                </div>
            </section>

            <div className="platform-shell">
                {content.sections.map((section) => (
                    <PlatformHomeSection key={section.id} lang={lang} section={section}/>
                ))}
            </div>
        </main>
    );
}
