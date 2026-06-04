import React from "react";
import ClarificationStatement
    from "@/components/SmartMobility/ChiangMai/ClarificationStatement";
import BottomImage from "../../SmartMobility/ChiangMai/BottomImage";
import {ISmartCityItem} from "@/lib/model/ISmartCity";
import {SmartCityChiangMaiBottomContent} from "@/lib/model/ISmartCityChiangMai";

export default function SmartCityBottom(
    {lang, smartCityItem, bottomContent}: {
        lang: string,
        smartCityItem: ISmartCityItem,
        bottomContent?: SmartCityChiangMaiBottomContent
    }
) {

    return (
        <>
            <div className={`portfolio-details-desc portfolio-details-desc-custom`}>
                <div className={'unique-features-container'}>
                    <h3>{smartCityItem.title}</h3>
                </div>
                <p>{smartCityItem.description}</p>

                <ul className="feature-list">
                    {smartCityItem.features.map((feature, index: number) => (
                        <li key={index} className="feature-item">
                            <div className="feature-icon-container">
                                <div className="feature-icon">
                                    <i className="flaticon-check"></i>
                                </div>
                                <div className="feature-title">
                                    {feature.title}
                                </div>
                            </div>
                            <div className="feature-content">
                                {feature.description}
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="smart-city-clarification-statement">
                    <ClarificationStatement
                        lang={lang}
                        safeStatement={bottomContent?.safeStatement}
                    />
                </div>

                {bottomContent?.bottomCards && (
                    <BottomImage
                        lang={lang}
                        bottomCards={bottomContent.bottomCards}
                    />
                )}
            </div>
        </>
    )
}
