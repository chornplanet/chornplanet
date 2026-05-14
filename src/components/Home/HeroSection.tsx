import Image from "next/image"
import {IHeroSection} from "@/lib/model/ISmartCityMedia";

export default function HeroSection({lang, data}: { lang: string; data: IHeroSection }) {
    const {headline, paragraph, softTexts, image, landingUrl} = data

    return (
        <section className="smart-hero">
            <div className="smart-hero__body">
                <div className="smart-hero__content">
                    <p className="smart-hero__eyebrow">Chorn Planet systems</p>
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
                        <a className="smart-hero__cta-primary" href={`/${lang}` + landingUrl}>
                            Read the story
                        </a>
                        <a className="smart-hero__cta-secondary" href="#smart-food-ai-highlight">
                            View Smart Food AI
                        </a>
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
