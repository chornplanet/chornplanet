import React from "react";
import WebDevelopmentLeft from "@/components/Services/WebDevelopment/WebDevelopmentLeft";
import WebDevelopmentRight from "@/components/Services/WebDevelopment/WebDevelopmentRight";
import WebDevelopmentBackEnd from "@/components/Services/WebDevelopment/WebDevelopmentBackEnd";
import WevDevelopmentFrontEnd from "@/components/Services/WebDevelopment/WevDevelopmentFrontEnd";
import WebDevelopmentDevOps from "@/components/Services/WebDevelopment/WebDevelopmentDevOps";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import Web3PageMain from "@/components/Services/web3-blockchain-development/Web3PageMain";
import CloudInfraPageMain from "@/components/Services/cloud-infrastructure-systems-architecture/CloudInfraPageMain";
import {TechnicalExpertiseContentPayload} from "@/core/domain/technical-expertise-content.entity";
import {IService} from "@/lib/model/IService";
import {IImageResponsiveUnit} from "@/image/model/IImageResponsiveUnit";

export default function WebDevelopmentPageMain({
    lang,
    content,
    aiSolutionService,
    aiSolutionSlides,
}: {
    lang: string;
    content: TechnicalExpertiseContentPayload;
    aiSolutionService: IService;
    aiSolutionSlides?: IImageResponsiveUnit[];
}) {
    const featureContent = content.feature;
    const pageTitle =
        featureContent.stacks[2]?.title ??
        featureContent.title ??
        "Web Development";
    const heroLead =
        content.frontEnd.services.descriptions[0] ??
        content.fullStack.services.descriptions[0] ??
        featureContent.subTitle;
    const capabilityHighlights = [
        content.frontEnd.services.items[0]?.title ?? content.frontEnd.title,
        content.fullStack.services.items[0]?.title ?? content.fullStack.title,
        content.devOps.services.items[0]?.title ?? content.devOps.title,
    ];
    const platformMetrics = [
        {
            value: content.frontEnd.stacks.length,
            label: content.frontEnd.title,
        },
        {
            value: content.fullStack.stacks.length,
            label: content.fullStack.title,
        },
        {
            value: content.devOps.stacks.length,
            label: content.devOps.title,
        },
    ];

    return (
        <main className="technology-premium-page">
            <section className="technology-hero">
                <div className="technology-premium-container">
                    <div className="technology-hero__grid">
                        <div className="technology-hero__content">
                            <p className="technology-eyebrow">{featureContent.span}</p>
                            <h1>{pageTitle}</h1>
                            <p className="technology-hero__lead">{heroLead}</p>
                            <div className="technology-hero__actions" aria-label="Technology capabilities">
                                {capabilityHighlights.map((item) => (
                                    <span key={item}>{item}</span>
                                ))}
                            </div>
                        </div>
                        <div className="technology-hero__media" aria-label="Technology delivery visual system">
                            <WebDevelopmentRight lang={lang}/>
                        </div>
                    </div>

                    <div className="technology-hero__metrics" aria-label="Technology stack summary">
                        {platformMetrics.map((item) => (
                            <div key={item.label} className="technology-hero__metric">
                                <strong>{item.value}</strong>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="technology-premium-module technology-premium-module--foundation">
                <div className="technology-premium-container">
                    <div className="technology-section-heading">
                        <p className="technology-eyebrow">{content.frontEnd.span}</p>
                        <h2>{content.frontEnd.services.title}</h2>
                    </div>
                    <div className="technology-foundation-copy">
                        <WebDevelopmentLeft
                            lang={lang}
                            frontEnd={content.frontEnd}
                            fullStack={content.fullStack}
                        />
                    </div>
                </div>
            </section>

            <section className="technology-premium-module technology-premium-module--stacks">
                <div className="technology-premium-container">
                    <div className="technology-section-heading">
                        <p className="technology-eyebrow">{content.frontEnd.span}</p>
                        <h2>{content.frontEnd.title}</h2>
                    </div>
                    <WevDevelopmentFrontEnd lang={lang} frontEnd={content.frontEnd}/>
                </div>
            </section>

            <section className="technology-premium-module technology-premium-module--stacks">
                <div className="technology-premium-container">
                    <div className="technology-section-heading">
                        <p className="technology-eyebrow">{content.fullStack.span}</p>
                        <h2>{content.fullStack.title}</h2>
                    </div>
                    <WebDevelopmentBackEnd lang={lang} fullStack={content.fullStack}/>
                </div>
            </section>

            <section className="technology-premium-module technology-premium-module--stacks">
                <div className="technology-premium-container">
                    <div className="technology-section-heading">
                        <p className="technology-eyebrow">{content.devOps.span}</p>
                        <h2>{content.devOps.title}</h2>
                    </div>
                    <WebDevelopmentDevOps lang={lang} devOps={content.devOps}/>
                </div>
            </section>

            <section className="technology-premium-module technology-premium-module--ai">
                <AiSolutionsMain
                    lang={lang}
                    service={aiSolutionService}
                    llmSlides={aiSolutionSlides}
                />
            </section>

            <section className="technology-premium-module technology-premium-module--cloud">
                <CloudInfraPageMain
                    lang={lang}
                    cloud={content.cloud}
                    cloudSolution={content.cloudSolution}
                />
            </section>

            <section className="technology-premium-module technology-premium-module--web3">
                <Web3PageMain lang={lang} web3={content.web3}/>
            </section>
        </main>
    );
}
