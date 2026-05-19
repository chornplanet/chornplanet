import "@/styles/pages/about.scss"
import Image from "next/image"
import React from "react";
import BottomImageLeft from "@/components/About/BottomImage/BottomImageLeft";
import {AboutContentMedia} from "@/lib/model/IAbout";

export default function AboutLeft({media}: { media: AboutContentMedia }) {
    return (
        <div className="col-lg-4 about-chorn-premium-media-col">
            <div className="about-image-warp contact-image about-image-wrapper">
                <Image
                    src={media.mainImage.image750}
                    alt={media.mainImage.title}
                    fill
                    sizes="(min-width: 1024px) 1200px, 750px"
                    className="about-cover-image"
                />
            </div>
            <div className="x-bar-animation"/>

            <div className="single-footer-widget about-bottom-image">
                <BottomImageLeft/>
            </div>
        </div>
    )
}
