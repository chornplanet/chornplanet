import React from "react";
import Image from "next/image";
import HubToDoiInthanonBottom from "../Bottom/HubToDoiInthanonBottom";
import SmartMobilityChiangMaiRight from "../Common/SmartMobilityChiangMaiRight";
import SmartCityBottomImage from "@/components/SmartCity/ChiangMai/SmartCityBottomImage";
import {SmartMobilityChiangMaiContentPayload} from "@/lib/model/ISmartMobilityChiangMai";
import {ISmartRoute} from "@/lib/model/ISmartMobility";

export default function HubToDoiInthanonMain(
    {lang, content}: { lang: string; content: SmartMobilityChiangMaiContentPayload }
) {
    const connectivityMatrix = content.connectivityMatrix!
    const route = content.primaryContent as ISmartRoute

    return (
        <div className="portfolio-details-area smart-container-top">
            <div className="container">
                <div className="smart-mobility-premium__header">
                    <div className="smart-mobility-premium__heading">
                        <p className="smart-mobility-premium__eyebrow">Smart Mobility Chiang Mai</p>
                        <h1>{route.title}</h1>
                    </div>
                    <p>{route.description}</p>
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="portfolio-details-image neo-image-container">
                            {
                                route.media?.image_url &&
                                <Image
                                    src={route.media.image_url}
                                    alt="portfolio"
                                    width={1000}
                                    height={600}
                                />
                            }
                        </div>

                        <div className={"neo-tag"}>
                            {
                                route.media?.image_tags &&
                                route.media.image_tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))
                            }
                        </div>

                        <HubToDoiInthanonBottom
                            lang={lang}
                            route={route}
                            connectivityMatrix={connectivityMatrix}
                            safeStatement={content.safeStatement}
                        />
                        <SmartCityBottomImage lang={lang} bottomCards={content.bottomCards}/>
                    </div>
                    <SmartMobilityChiangMaiRight
                        lang={lang}
                        rightItems={content.rightItems}
                    />
                </div>
            </div>
        </div>
    );
}
