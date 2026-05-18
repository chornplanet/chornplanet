import React from "react";
import Image from "next/image";
import {ICloudStack} from "@/lib/model/ICloud";
import {ICloud} from "@/lib/model/ICloud";

export default function CloudExperience(
    {lang, isHome = false, cloud}:
    { lang: string, isHome?: boolean, cloud: ICloud }
) {

    const classes = isHome ? "fun-facts-area pb-70 pt-5" : "fun-facts-area pb-70"
    const content = cloud;

    return (
        <div className={`${classes}`}>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    {content.stacks.map((item: ICloudStack, index: any) => (
                        <div key={index} className="col-lg-3 col-md-6 col-6 cloud-icon-wrap">
                            <div className="single-fun-fact-box cloud-single">
                                <div className="icon">
                                    <Image
                                        className="hover-rotate"
                                        src={item.image}
                                        alt={item.title}
                                        width={75}
                                        height={75}
                                    />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
