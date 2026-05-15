import React from "react";
import SmartMobilityClarificationStatement from "../Common/SmartMobilityClarificationStatement";
import {ISmartSection} from "@/lib/model/ISmartMobility";

export default function UrbanHubSansaiDoiSaketBottom(
    {lang, urbanHub, safeStatement}: {
        lang: string;
        urbanHub: ISmartSection;
        safeStatement?: ISmartSection['safeStatement'];
    }
) {
    return (
        <>
            <div className={`portfolio-details-desc portfolio-details-desc-custom`}>
                <div className={'unique-features-container'}>
                    <h3>{urbanHub.title}</h3>
                </div>

                <p>{urbanHub.description}</p>

                <ul className="feature-list">
                    {
                        urbanHub.items &&
                        urbanHub.items.map((item, index: number) => (
                            <li key={index} className="feature-item">
                                <div className="feature-icon-container">
                                    <div className="feature-icon">
                                        <i className="flaticon-check"></i>
                                    </div>
                                    <div className="feature-title">
                                        {item.title}
                                    </div>
                                </div>
                                <div className="feature-content">
                                    {item.description}
                                    {
                                        item.contents &&
                                        <ul className="feature-list">
                                            {item.contents.map((content, contentIndex: number) => (
                                                <li key={contentIndex} className="feature-item">
                                                    {content.title} - {content.description}
                                                </li>
                                            ))}
                                        </ul>
                                    }
                                </div>
                            </li>
                        ))
                    }
                </ul>

                <SmartMobilityClarificationStatement lang={lang} safeStatement={safeStatement}/>
            </div>
        </>
    )
}
