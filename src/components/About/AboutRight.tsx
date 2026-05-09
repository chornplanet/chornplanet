import "@/styles/about.scss"

import React from "react";
import {IAbout, IAboutContent} from "@/lib/model/IAbout";

export default function AboutRight({about}: { about: IAbout }) {
    return (
        <div className="col-lg-8 about-chorn-premium-copy-col">
            <div className="about-content">
                {about.description.map((item: IAboutContent, index: number) => (
                    <div key={index}>
                        {item.description != undefined && (
                            <p className="mt-0 mb-3"
                               dangerouslySetInnerHTML={{__html: item.description}}/>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
