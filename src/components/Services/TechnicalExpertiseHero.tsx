import React from "react";

type TechnicalExpertiseHeroFeature = {
    title: string;
    description: string;
};

export default function TechnicalExpertiseHero(
    {features}: { features: TechnicalExpertiseHeroFeature[] }
) {
    const primaryFeature = features[0];
    const secondaryFeature = features[1];
    const summaryLabel = primaryFeature?.title ?? 'Technical expertise';

    return (
        <section className="policy-page__hero technology-document-hero">
            <div className="platform-shell policy-page__hero-inner">
                <div className="technology-document-hero__heading">
                    <span className="platform-eyebrow">Enterprise Software Development</span>
                    <h1>{summaryLabel}</h1>
                    {secondaryFeature?.title && <h2>{secondaryFeature.title}</h2>}
                </div>
                <div className="policy-page__hero-copy">
                    {primaryFeature?.description && <p>{primaryFeature.description}</p>}
                    {secondaryFeature?.description && <p>{secondaryFeature.description}</p>}
                </div>
                <aside className="policy-page__summary" aria-label={`${summaryLabel} summary`}>
                    <span>Technical Capability</span>
                    <strong>{features.length}</strong>
                    <small>content layers</small>
                </aside>
            </div>
        </section>
    );
}
