// src/components/Home/HumanDailyFlow.tsx

import Image from "next/image"
import Link from "next/link"
import {IHumanDailyFlow} from "@/lib/model/ISmartCityMedia";

const humanDailyFlowUi: Record<string, {
    cardAction: string;
    flowListLabel: string;
}> = {
    da: {
        cardAction: "Læs flowet",
        flowListLabel: "Daglige byflows",
    },
    de: {
        cardAction: "Flow lesen",
        flowListLabel: "Tägliche Stadtflows",
    },
    en: {
        cardAction: "Read the flow",
        flowListLabel: "Daily urban flows",
    },
    fi: {
        cardAction: "Lue virtaus",
        flowListLabel: "Päivittäiset kaupunkivirrat",
    },
    fr: {
        cardAction: "Lire le flux",
        flowListLabel: "Flux urbains quotidiens",
    },
    ja: {
        cardAction: "流れを読む",
        flowListLabel: "日常の都市フロー",
    },
    ko: {
        cardAction: "흐름 읽기",
        flowListLabel: "일상 도시 흐름",
    },
    nl: {
        cardAction: "Lees de flow",
        flowListLabel: "Dagelijkse stedelijke flows",
    },
    th: {
        cardAction: "อ่านลำดับการไหล",
        flowListLabel: "รูปแบบการไหลของเมืองในแต่ละวัน",
    },
    zh: {
        cardAction: "阅读流动",
        flowListLabel: "日常城市流动",
    },
};

function getHumanDailyFlowUi(lang: string) {
    return humanDailyFlowUi[lang] ?? humanDailyFlowUi.en;
}

function getLocalizedHref(lang: string, landingUrl: string) {
    const normalizedLandingUrl = landingUrl.endsWith("/") ? landingUrl : `${landingUrl}/`;
    return `/${lang}${normalizedLandingUrl}`;
}

export default function HumanDailyFlow({lang, data}: { lang: string; data: IHumanDailyFlow }) {
    const {headline, paragraph, morningFlow, middayFlow, eveningFlow} = data

    const flows = [morningFlow, middayFlow, eveningFlow]
    const ui = getHumanDailyFlowUi(lang);
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: headline,
        description: paragraph,
        itemListElement: flows.map((flow, index) => {
            const href = getLocalizedHref(lang, flow.landingUrl);

            return {
                "@type": "ListItem",
                position: index + 1,
                name: flow.title,
                description: flow.paragraph,
                url: `https://www.chornplanet.com${href}`,
                image: flow.image.url.startsWith("http")
                    ? flow.image.url
                    : `https://www.chornplanet.com${flow.image.url}`,
            };
        }),
    };

    return (
        <section className="human-daily-flow" aria-labelledby="human-daily-flow-title">
            <div className="human-daily-flow__intro">
                <h2 id="human-daily-flow-title">{headline}</h2>
                <p>{paragraph}</p>
            </div>

            <div className="human-daily-flow__grid" aria-label={ui.flowListLabel}>
                {flows.map((flow) => (
                    <article
                        key={flow.category}
                        className="human-daily-flow__item"
                    >
                        <Link
                            href={getLocalizedHref(lang, flow.landingUrl)}
                            className="human-daily-flow__link"
                            aria-label={`${ui.cardAction}: ${flow.title}`}
                        >
                            <div className="human-daily-flow__image">
                                <Image
                                    src={flow.image.url}
                                    alt={flow.image.alt}
                                    fill
                                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                                />
                            </div>

                            <div className="human-daily-flow__content">
                                <h3>{flow.title}</h3>
                                <p>{flow.paragraph}</p>
                                <span>{ui.cardAction}</span>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
        </section>
    )
}
