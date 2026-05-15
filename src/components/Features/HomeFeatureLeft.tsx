import Image from "next/image";
import {ImageUrl} from "@/image/ImageUrl";
import React from "react";
import {IImageUnit} from "@/image/model/IImageUnit";

export default function HomeFeatureLeft({lang, featureImage}: { lang: string; featureImage?: IImageUnit }) {
    const image = featureImage?.path?.trim()
        ? featureImage
        : ImageUrl.feature.morningSky;

    return (
        <div className="col-lg-6">
            <div className="features-image-warp">
                <Image
                    src={image.path}
                    alt="image"
                    width={720}
                    height={620}
                />
                <div className="x-bar-animation" />
            </div>
        </div>
    )
}
