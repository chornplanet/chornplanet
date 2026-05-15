import Image from "next/image"
import Link from "next/link"
import {ILocalToGlobal} from "@/lib/model/ISmartCityMedia";

const localToGlobalUi: Record<string, { footerLink: string }> = {
    en: {footerLink: "See how local life becomes a global signal"},
    th: {footerLink: "ดูว่าชีวิตท้องถิ่นกลายเป็นสัญญาณระดับโลกได้อย่างไร"},
    da: {footerLink: "Se hvordan lokalt liv bliver et globalt signal"},
    de: {footerLink: "Sehen, wie lokales Leben zu einem globalen Signal wird"},
    fi: {footerLink: "Katso, miten paikallinen elämä muuttuu globaaliksi signaaliksi"},
    fr: {footerLink: "Voir comment la vie locale devient un signal mondial"},
    ja: {footerLink: "地域の暮らしが世界的なシグナルになる流れを見る"},
    ko: {footerLink: "지역의 삶이 글로벌 신호가 되는 방식 보기"},
    nl: {footerLink: "Bekijk hoe lokaal leven een wereldwijd signaal wordt"},
    zh: {footerLink: "查看本地生活如何成为全球信号"},
};

function getLocalToGlobalUi(lang: string) {
    return localToGlobalUi[lang] ?? localToGlobalUi.en;
}

export default function LocalToGlobal({lang, data}: { lang: string; data: ILocalToGlobal }) {
    const {headline, paragraph, items, landingUrl} = data
    const ui = getLocalToGlobalUi(lang);

    return (
        <section className="local-to-global">
            <div className="local-to-global__intro">
                <h2>{headline}</h2>
                <p>{paragraph}</p>
            </div>

            <div className="local-to-global__grid">
                {items.map((item, index) => (
                    <div key={index} className="local-to-global__item">
                        <div className="local-to-global__image">
                            <Image
                                src={item.image.url}
                                alt={item.image.alt}
                                fill
                                sizes="(max-width: 900px) 100vw, 50vw"
                            />
                        </div>

                        <div className="local-to-global__content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="local-to-global__footer">
                <Link href={`/${lang}` + landingUrl}>{ui.footerLink}</Link>
            </div>
        </section>
    )
}
