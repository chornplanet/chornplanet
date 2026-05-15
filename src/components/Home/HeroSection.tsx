import Image from "next/image"
import Link from "next/link"
import {IHeroSection} from "@/lib/model/ISmartCityMedia";

const heroSectionUi: Record<string, {
    eyebrow: string;
    primaryAction: string;
    secondaryAction: string;
}> = {
    en: {
        eyebrow: "Chorn Planet systems",
        primaryAction: "Read the story",
        secondaryAction: "View Smart Food AI",
    },
    th: {
        eyebrow: "ระบบของ Chorn Planet",
        primaryAction: "อ่านเรื่องราว",
        secondaryAction: "ดู Smart Food AI",
    },
    da: {
        eyebrow: "Chorn Planet-systemer",
        primaryAction: "Læs historien",
        secondaryAction: "Se Smart Food AI",
    },
    de: {
        eyebrow: "Chorn Planet Systeme",
        primaryAction: "Geschichte lesen",
        secondaryAction: "Smart Food AI ansehen",
    },
    fi: {
        eyebrow: "Chorn Planet -järjestelmät",
        primaryAction: "Lue tarina",
        secondaryAction: "Katso Smart Food AI",
    },
    fr: {
        eyebrow: "Systèmes Chorn Planet",
        primaryAction: "Lire l'histoire",
        secondaryAction: "Voir Smart Food AI",
    },
    ja: {
        eyebrow: "Chorn Planet のシステム",
        primaryAction: "ストーリーを読む",
        secondaryAction: "Smart Food AI を見る",
    },
    ko: {
        eyebrow: "Chorn Planet 시스템",
        primaryAction: "스토리 읽기",
        secondaryAction: "Smart Food AI 보기",
    },
    nl: {
        eyebrow: "Chorn Planet-systemen",
        primaryAction: "Lees het verhaal",
        secondaryAction: "Bekijk Smart Food AI",
    },
    zh: {
        eyebrow: "Chorn Planet 系统",
        primaryAction: "阅读故事",
        secondaryAction: "查看 Smart Food AI",
    },
};

function getHeroSectionUi(lang: string) {
    return heroSectionUi[lang] ?? heroSectionUi.en;
}

export default function HeroSection({lang, data}: { lang: string; data: IHeroSection }) {
    const {headline, paragraph, softTexts, image, landingUrl} = data
    const ui = getHeroSectionUi(lang);

    return (
        <section className="smart-hero">
            <div className="smart-hero__body">
                <div className="smart-hero__content">
                    <p className="smart-hero__eyebrow">{ui.eyebrow}</p>
                    <h1 className="smart-hero__headline">
                        {headline}
                    </h1>
                    <p className="smart-hero__paragraph">
                        {paragraph}
                    </p>

                    {softTexts?.length > 0 && (
                        <div className="smart-hero__soft-texts">
                            {softTexts.map((item, index) => (
                                <div key={index} className="smart-hero__soft-text">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="smart-hero__cta">
                        <Link className="smart-hero__cta-primary" href={`/${lang}` + landingUrl}>
                            {ui.primaryAction}
                        </Link>
                        <Link className="smart-hero__cta-secondary" href="#smart-food-ai-highlight">
                            {ui.secondaryAction}
                        </Link>
                    </div>
                </div>

                <div className="smart-hero__visual">
                    <div className="smart-hero__image">
                        <Image
                            src={image.url}
                            alt={image.alt}
                            fill
                            priority
                            sizes="(max-width: 900px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
