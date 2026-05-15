import React from "react";
import Link from "next/link";
import Image from "next/image";
import {ISmartImage} from "@/lib/model/ISmartMobility";

export default function SmartMobilityChiangMaiRight(
    {lang, rightItems}: {
        lang: string,
        rightItems: ISmartImage[]
    }
) {
    return (
        <div className="col-lg-4 col-md-12">
            <div className="smart-right-container">
                <ul className="smart-right-list">
                    {
                        rightItems.map((item: ISmartImage, index) =>
                            <li key={index} className="smart-right-item">
                                <Link href={'/' + lang + item.link}>
                                    <div className="smart-right-image-wrapper">
                                        {
                                            item.media?.image_url &&
                                            <Image
                                                src={item.media.image_url}
                                                alt={item.title}
                                                width={650}
                                                height={500}
                                            />
                                        }

                                        <div className="smart-right-caption">
                                            <strong>
                                                {
                                                    item.title.length > 35 ?
                                                        item.title.slice(0, 35) + "..." : item.title
                                                }</strong>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}
