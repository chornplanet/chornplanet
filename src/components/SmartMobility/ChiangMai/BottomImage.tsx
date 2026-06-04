import React from "react";
import Image from "next/image";
import Link from "next/link"
import {ISmartRoute, ISmartSection} from "@/lib/model/ISmartMobility";

export default function BottomImage(
    {lang, bottomCards}: { lang: string; bottomCards: Array<ISmartSection | ISmartRoute> }
) {
    return (
        <div className="vision-bottom-container">
            {bottomCards.map((card, index) => (
                <Link key={index} href={"/" + lang + card.link} className="vision-card">
                    <div className="vision-image-wrapper">
                        {card.media?.image_url && (
                            <Image
                                src={card.media.image_url}
                                alt={card.title}
                                className="vision-image"
                                width={800}
                                height={500}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        )}
                    </div>

                    <div className="vision-text-box">
                        <p>
                            <strong>{card.title}</strong>
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
