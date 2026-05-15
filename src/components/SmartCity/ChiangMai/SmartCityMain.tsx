import React from "react";
import Image from "next/image";
import Link from "next/link";
import SmartCityRight from "./SmartCityRight";
import SmartCityBottom from "./SmartCityBottom";
import {ISmartCityItem} from "@/lib/model/ISmartCity";
import {SmartCityChiangMaiBottomContent} from "@/lib/model/ISmartCityChiangMai";

const smartCityMainUi: Record<string, {
    eyebrow: string;
    imageLinkLabel: string;
    primaryAction: string;
    secondaryAction: string;
    tagsLabel: string;
    relatedLabel: string;
}> = {
    da: {
        eyebrow: "Fremhævet smart city-scenarie",
        imageLinkLabel: "Åbn det fremhævede smart city-scenarie",
        primaryAction: "Læs scenariet",
        secondaryAction: "Udforsk Smart City",
        tagsLabel: "Scenariesignaler",
        relatedLabel: "Relaterede Chiang Mai-scenarier",
    },
    de: {
        eyebrow: "Ausgewähltes Smart-City-Szenario",
        imageLinkLabel: "Ausgewähltes Smart-City-Szenario öffnen",
        primaryAction: "Szenario lesen",
        secondaryAction: "Smart City erkunden",
        tagsLabel: "Szenariosignale",
        relatedLabel: "Verwandte Chiang-Mai-Szenarien",
    },
    en: {
        eyebrow: "Featured smart city scenario",
        imageLinkLabel: "Open featured smart city scenario",
        primaryAction: "Read the scenario",
        secondaryAction: "Explore Smart City",
        tagsLabel: "Scenario signals",
        relatedLabel: "Related Chiang Mai scenarios",
    },
    fi: {
        eyebrow: "Valittu älykaupunkiskenaario",
        imageLinkLabel: "Avaa valittu älykaupunkiskenaario",
        primaryAction: "Lue skenaario",
        secondaryAction: "Tutustu Smart Cityyn",
        tagsLabel: "Skenaarion signaalit",
        relatedLabel: "Liittyvät Chiang Main skenaariot",
    },
    fr: {
        eyebrow: "Scénario smart city sélectionné",
        imageLinkLabel: "Ouvrir le scénario smart city sélectionné",
        primaryAction: "Lire le scénario",
        secondaryAction: "Explorer Smart City",
        tagsLabel: "Signaux du scénario",
        relatedLabel: "Scénarios associés à Chiang Mai",
    },
    ja: {
        eyebrow: "注目のスマートシティシナリオ",
        imageLinkLabel: "注目のスマートシティシナリオを開く",
        primaryAction: "シナリオを読む",
        secondaryAction: "Smart City を見る",
        tagsLabel: "シナリオのシグナル",
        relatedLabel: "関連するチェンマイのシナリオ",
    },
    ko: {
        eyebrow: "추천 스마트시티 시나리오",
        imageLinkLabel: "추천 스마트시티 시나리오 열기",
        primaryAction: "시나리오 읽기",
        secondaryAction: "Smart City 살펴보기",
        tagsLabel: "시나리오 신호",
        relatedLabel: "관련 치앙마이 시나리오",
    },
    nl: {
        eyebrow: "Uitgelicht smartcity-scenario",
        imageLinkLabel: "Open het uitgelichte smartcity-scenario",
        primaryAction: "Lees het scenario",
        secondaryAction: "Ontdek Smart City",
        tagsLabel: "Scenariosignalen",
        relatedLabel: "Gerelateerde Chiang Mai-scenario's",
    },
    th: {
        eyebrow: "ฉากทัศน์ Smart City ที่แนะนำ",
        imageLinkLabel: "เปิดฉากทัศน์ Smart City ที่แนะนำ",
        primaryAction: "อ่านฉากทัศน์",
        secondaryAction: "สำรวจ Smart City",
        tagsLabel: "สัญญาณของฉากทัศน์",
        relatedLabel: "ฉากทัศน์เชียงใหม่ที่เกี่ยวข้อง",
    },
    zh: {
        eyebrow: "精选智慧城市场景",
        imageLinkLabel: "打开精选智慧城市场景",
        primaryAction: "阅读场景",
        secondaryAction: "探索 Smart City",
        tagsLabel: "场景信号",
        relatedLabel: "相关清迈场景",
    },
};

function getSmartCityMainUi(lang: string) {
    return smartCityMainUi[lang] ?? smartCityMainUi.en;
}

export default function SmartCityMain(
    {lang, smartCityItem, relatedItems, bottomContent}: {
        lang: string,
        smartCityItem: ISmartCityItem,
        relatedItems?: ISmartCityItem[],
        bottomContent?: SmartCityChiangMaiBottomContent
    }
) {
    const ui = getSmartCityMainUi(lang);
    const href = `/${lang}${smartCityItem.link}`;
    const tags = smartCityItem.media.image_tags.filter(Boolean);
    const absoluteUrl = `https://www.chornplanet.com${href}`;
    const imageUrl = smartCityItem.media.image_url.startsWith('http')
        ? smartCityItem.media.image_url
        : `https://www.chornplanet.com${smartCityItem.media.image_url}`;
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: smartCityItem.title,
        name: smartCityItem.title,
        description: smartCityItem.description,
        image: imageUrl,
        url: absoluteUrl,
        mainEntityOfPage: absoluteUrl,
        keywords: tags.join(", "),
        about: smartCityItem.concept,
        isPartOf: {
            "@type": "WebSite",
            name: "Chorn Planet",
            url: "https://www.chornplanet.com",
        },
    };

    return (
        <section
            className="smart-city-main-feature smart-container-top"
            aria-labelledby="smart-city-main-feature-title"
        >
            <div className="smart-city-main-feature__header">
                <div className="smart-city-main-feature__copy">
                    <p className="smart-city-main-feature__eyebrow">{ui.eyebrow}</p>
                    <h2 id="smart-city-main-feature-title">{smartCityItem.title}</h2>
                    <p>{smartCityItem.description}</p>
                </div>

                <div className="smart-city-main-feature__actions">
                    <Link className="smart-city-main-feature__button" href={href}>
                        {ui.primaryAction}
                    </Link>
                    <Link className="smart-city-main-feature__text-link" href={`/${lang}/smart-city/`}>
                        {ui.secondaryAction}
                    </Link>
                </div>
            </div>

            <div className="smart-city-main-feature__layout">
                <article className="smart-city-main-feature__article">
                    <figure className="smart-city-main-feature__figure">
                        <Link
                            className="smart-city-main-feature__image-link"
                            href={href}
                            aria-label={ui.imageLinkLabel}
                        >
                            <Image
                                src={smartCityItem.media.image_url}
                                alt={smartCityItem.title}
                                width={1200}
                                height={720}
                                sizes="(max-width: 991px) 100vw, 68vw"
                            />
                        </Link>

                        {tags.length > 0 && (
                            <figcaption className="smart-city-main-feature__tags" aria-label={ui.tagsLabel}>
                                {tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </figcaption>
                        )}
                    </figure>

                    <SmartCityBottom
                        lang={lang}
                        smartCityItem={smartCityItem}
                        bottomContent={bottomContent}
                    />
                </article>

                {relatedItems && relatedItems.length > 0 && (
                    <aside className="smart-city-main-feature__related" aria-label={ui.relatedLabel}>
                        <SmartCityRight
                            lang={lang}
                            imageQty={4}
                            selectedSmartCityItem={smartCityItem}
                            relatedItems={relatedItems}
                        />
                    </aside>
                )}
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
        </section>
    );
}
