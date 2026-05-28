import React from "react";
import {IDevOpsStack} from "@/lib/model/IDevOps";
import {IFrontEnd} from "@/lib/model/IFrontEnd";
import {IFullStack} from "@/lib/model/IFullStack";
import {IDevOps} from "@/lib/model/IDevOps";
import ServiceFaqKubernetes from "./ServiceFaqKubernetes";
import Image from "next/image";
import {ImageUrl} from "@/image/ImageUrl";
import SidebarFullStack from "@/components/Services/SidebarFullStack";
import SidebarFrontEnd from "@/components/Services/SidebarFrontEnd";
import SidebarDevOps from "@/components/Services/SidebarDevOps";
import TechnicalExpertiseHero from "@/components/Services/TechnicalExpertiseHero";

export default function ServicesDetailsKubernetes({lang, stack, frontEnd, fullStack, devOps}: { lang: string; stack: IDevOpsStack; frontEnd: IFrontEnd; fullStack: IFullStack; devOps: IDevOps }) {
    const content = stack;
    return (
        <>
            <TechnicalExpertiseHero features={content.features}/>
            <div className="services-details-area pb-50 container">
                    <div className="services-details-layout">
                        <div className="services-details-desc">
                                <div className="services-details-features">
                                    <div className="row align-items-center">
                                        <Image
                                            src={ImageUrl.devops.frameworks.kube.image1200}
                                            alt="image"
                                            width={500}
                                            height={500}
                                        />

                                        <div className="col-lg-6">
                                            <ul className="feature-list">
                                                {content.features[1].list.map((item: string, index: number) => (
                                                    <li key={index} className="feature-item">
                                                        <div className="feature-icon-container">
                                                            <div className="feature-icon">
                                                                <i className="flaticon-check"></i>
                                                            </div>
                                                            <div className="feature-title">
                                                                {item}
                                                            </div>
                                                        </div>
                                                        <div className="feature-content"/>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-result">
                                    <h3>{content.features[2].title}</h3>
                                    <p>{content.features[2].description}</p>
                                </div>
                                <ServiceFaqKubernetes stack={content}/>
                        </div>

                        <div className="services-details-sidebar">
                            <SidebarFrontEnd lang={lang} frontEnd={frontEnd}/>
                            <SidebarFullStack lang={lang} fullStack={fullStack}/>
                            <SidebarDevOps lang={lang} devOps={devOps}/>
                        </div>
                    </div>
            </div>
        </>
    )
}
