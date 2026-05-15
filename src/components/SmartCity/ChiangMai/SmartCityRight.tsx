import React from "react";
import Link from "next/link";
import Image from "next/image";

import {ISmartCityItem} from "@/lib/model/ISmartCity";

export default function SmartCityRight(
    {
        lang,
        imageQty = 4,
        selectedSmartCityItem,
        relatedItems
    }:
    {
        lang: string,
        imageQty: number,
        selectedSmartCityItem: ISmartCityItem,
        relatedItems?: ISmartCityItem[]
    }
) {
    const items: ISmartCityItem[] = relatedItems ?? [];

    if (items.length === 0) {
        return null;
    }

    const filteredArray: ISmartCityItem[] = items.slice(0, imageQty)

    return (
        <div className="col-lg-4 col-md-12">
            <div className="smart-right-container">
                <ul className="smart-right-list">
                    {
                        filteredArray.map((item: ISmartCityItem, index) =>
                            <li key={index} className="smart-right-item">
                                <Link href={'/' + lang + item.link}>
                                    <div className="smart-right-image-wrapper">
                                        {
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
