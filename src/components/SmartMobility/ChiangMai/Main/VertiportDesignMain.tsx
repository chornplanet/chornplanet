import React from "react";
import Image from "next/image";
import VertiportDesignBottom from "../Bottom/VertiportDesignBottom";
import SmartMobilityChiangMaiRight from "../Common/SmartMobilityChiangMaiRight";
import SmartCityBottomImage from "@/components/SmartCity/ChiangMai/SmartCityBottomImage";
import {SmartMobilityChiangMaiContentPayload} from "@/lib/model/ISmartMobilityChiangMai";
import {IVertiport} from "@/lib/model/ISmartMobility";

export default function VertiportDesignMain(
    {lang, content}: { lang: string; content: SmartMobilityChiangMaiContentPayload }
) {
    const vertiportDesign = content.primaryContent as IVertiport

    return (
        <div className="portfolio-details-area smart-container-top">
            <div className="container">
                <div className="smart-mobility-premium__header">
                    <div className="smart-mobility-premium__heading">
                        <p className="smart-mobility-premium__eyebrow">Smart Mobility Chiang Mai</p>
                        <h1>{vertiportDesign.title}</h1>
                    </div>
                    <p>{vertiportDesign.description}</p>
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="portfolio-details-image neo-image-container">
                            {
                                vertiportDesign.media?.image_url &&
                                <Image
                                    src={vertiportDesign.media.image_url}
                                    alt="portfolio"
                                    width={1000}
                                    height={600}
                                />
                            }
                        </div>

                        <div className={"neo-tag"}>
                            {
                                vertiportDesign.media?.image_tags &&
                                vertiportDesign.media.image_tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))
                            }
                        </div>

                        <VertiportDesignBottom
                            lang={lang}
                            vertiportDesign={vertiportDesign}
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
