import React from "react";
import Image from "next/image";
import VisionChiangMaiBottom from "../Bottom/VisionChiangMaiBottom";
import SmartMobilityChiangMaiRight from "../Common/SmartMobilityChiangMaiRight";
import SmartCityBottomImage from "@/components/SmartCity/ChiangMai/SmartCityBottomImage";
import {SmartMobilityChiangMaiContentPayload} from "@/lib/model/ISmartMobilityChiangMai";
import {ISmartSection} from "@/lib/model/ISmartMobility";

export default function VisionChiangMaiMain(
    {lang, content}: { lang: string; content: SmartMobilityChiangMaiContentPayload }
) {
    const vision = content.primaryContent as ISmartSection

    return (
        <div className="portfolio-details-area smart-container-top">
            <div className="container">
                <div className="smart-mobility-premium__header">
                    <div className="smart-mobility-premium__heading">
                        <p className="smart-mobility-premium__eyebrow">Smart Mobility Chiang Mai</p>
                        <h1>{vision.title}</h1>
                    </div>
                    <p>{vision.description}</p>
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="portfolio-details-image neo-image-container">
                            {
                                vision.media?.image_url &&
                                <Image
                                    src={vision.media.image_url}
                                    alt="portfolio"
                                    width={1000}
                                    height={600}
                                />
                            }
                        </div>

                        <div className={"neo-tag"}>
                            {
                                vision.media?.image_tags &&
                                vision.media.image_tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))
                            }
                        </div>

                        <VisionChiangMaiBottom
                            lang={lang}
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
