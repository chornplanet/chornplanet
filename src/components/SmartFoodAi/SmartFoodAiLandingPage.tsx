import Image from "next/image";
import Link from "next/link";
import React from "react";
import {ImageUrl} from "@/image/ImageUrl";

const workflowSteps = [
    {
        title: "Customer asks naturally",
        text: "A guest can describe a craving, a meal occasion, or a simple food preference in natural language.",
    },
    {
        title: "Food intent is understood",
        text: "The platform turns the conversation into practical menu and service direction.",
    },
    {
        title: "Menu options are matched",
        text: "Relevant dishes, service choices, and next-step options are prepared for the customer experience.",
    },
    {
        title: "Order-ready summary is prepared",
        text: "The result is shaped into a clear summary that an operation team can continue from.",
    },
    {
        title: "Service flow continues",
        text: "Pickup, delivery, or in-store service can be coordinated as the platform grows.",
    },
];

const platformFeatures = [
    "Natural food conversation",
    "Menu discovery and matching",
    "Favorite meal memory direction",
    "Order-ready summaries",
    "Local business operation support",
    "Future LINE OA and website ordering direction",
    "Multi-channel platform readiness",
    "Content-to-commerce growth potential",
];

const businessValues = [
    {
        title: "Investor-ready proof",
        text: "A visible platform story that shows ChornPlanet can move from concept to production-minded execution.",
    },
    {
        title: "Local launch credibility",
        text: "The story starts from real business context in Chiang Mai, with practical service operations in mind.",
    },
    {
        title: "Recruitment signal",
        text: "A clear technology product surface for builders, HR audiences, and future platform collaborators.",
    },
    {
        title: "Product expansion path",
        text: "A foundation for future SaaS, ordering, commerce, analytics, and Smart Food ecosystem features.",
    },
];

const futureDirections = [
    "Website order flow",
    "LINE OA connection",
    "MenuMatch backend cooperation",
    "Smart Food commerce layer",
    "Analytics-assisted growth",
    "ChornPlanet media and luxury ecosystem integration",
];

export default function SmartFoodAiLandingPage({lang}: { lang: string }) {
    return (
        <main className="smart-food-ai-page">
            <section className="smart-food-ai-hero">
                <div className="container">
                    <div className="smart-food-ai-hero__grid">
                        <div className="smart-food-ai-hero__content">
                            <p className="smart-food-ai-eyebrow">Production showcase from Chiang Mai</p>
                            <h1>Smart Food AI</h1>
                            <p className="smart-food-ai-hero__lead">
                                A real AI-native food platform experience, launched from local business in Chiang Mai.
                            </p>
                            <p className="smart-food-ai-hero__support">
                                ChornPlanet turns conversational food discovery, menu guidance, and order-ready
                                workflows into a premium production platform experience for real businesses.
                            </p>
                            <div className="smart-food-ai-actions" aria-label="Smart Food AI page sections">
                                <a href="#smart-food-ai-workflow" className="smart-food-ai-button smart-food-ai-button--primary">
                                    Explore Workflow
                                </a>
                                <a href="#smart-food-ai-value" className="smart-food-ai-button smart-food-ai-button--secondary">
                                    View Capability
                                </a>
                            </div>
                        </div>

                        <div className="smart-food-ai-hero__visual" aria-label="Smart Food AI visual story">
                            <Image
                                src={ImageUrl.banner.banner1.path}
                                alt="Premium Smart Food AI platform visual for a Chiang Mai local business experience"
                                width={1200}
                                height={800}
                                priority
                            />
                            <div className="smart-food-ai-hero__panel smart-food-ai-hero__panel--top">
                                <span>Live platform direction</span>
                                <strong>Local business ready</strong>
                            </div>
                            <div className="smart-food-ai-hero__panel smart-food-ai-hero__panel--bottom">
                                <span>Experience layer</span>
                                <strong>Conversation to service flow</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="smart-food-ai-proof">
                <div className="container">
                    <div className="smart-food-ai-section-heading">
                        <p className="smart-food-ai-eyebrow">Production proof</p>
                        <h2>From Chiang Mai local business to platform capability</h2>
                        <p>
                            Smart Food AI is designed to show practical customer-facing value: a restaurant, cafe, or
                            food service team can move from conversation to menu guidance and a service-ready summary.
                        </p>
                    </div>
                    <div className="smart-food-ai-proof__grid">
                        <article>
                            <span>01</span>
                            <h3>Local business context</h3>
                            <p>Built around real Chiang Mai service needs, not a generic concept screen.</p>
                        </article>
                        <article>
                            <span>02</span>
                            <h3>Customer-facing direction</h3>
                            <p>Focused on food discovery, preference guidance, and a clear path to service.</p>
                        </article>
                        <article>
                            <span>03</span>
                            <h3>Production-minded platform</h3>
                            <p>Presented as a platform layer that can later connect ordering, analytics, and commerce.</p>
                        </article>
                    </div>
                </div>
            </section>

            <section id="smart-food-ai-workflow" className="smart-food-ai-workflow">
                <div className="container">
                    <div className="smart-food-ai-section-heading smart-food-ai-section-heading--center">
                        <p className="smart-food-ai-eyebrow">End-to-end workflow</p>
                        <h2>How the experience works</h2>
                    </div>
                    <div className="smart-food-ai-workflow__list">
                        {workflowSteps.map((step, index) => (
                            <article key={step.title} className="smart-food-ai-workflow__item">
                                <div className="smart-food-ai-workflow__index">{String(index + 1).padStart(2, "0")}</div>
                                <div>
                                    <h3>{step.title}</h3>
                                    <p>{step.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="smart-food-ai-features">
                <div className="container">
                    <div className="smart-food-ai-section-heading">
                        <p className="smart-food-ai-eyebrow">Platform features</p>
                        <h2>Built for a real food service experience</h2>
                    </div>
                    <div className="smart-food-ai-card-grid">
                        {platformFeatures.map((feature) => (
                            <article key={feature} className="smart-food-ai-feature-card">
                                <span aria-hidden="true"/>
                                <h3>{feature}</h3>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="smart-food-ai-value" className="smart-food-ai-value">
                <div className="container">
                    <div className="smart-food-ai-value__grid">
                        <div className="smart-food-ai-section-heading">
                            <p className="smart-food-ai-eyebrow">Business value</p>
                            <h2>Why this matters for ChornPlanet</h2>
                            <p>
                                The showcase gives investors, CEOs, HR teams, and collaborators a concrete signal that
                                ChornPlanet can deliver AI-native production platforms for real business workflows.
                            </p>
                        </div>
                        <div className="smart-food-ai-value__cards">
                            {businessValues.map((item) => (
                                <article key={item.title}>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="smart-food-ai-visual-story">
                <div className="container">
                    <div className="smart-food-ai-visual-story__grid">
                        <div className="smart-food-ai-visual-story__image">
                            <Image
                                src={ImageUrl.home.slides[0].image1200}
                                alt="Premium Chiang Mai lifestyle scene representing Smart Food AI business readiness"
                                width={1200}
                                height={900}
                            />
                        </div>
                        <div className="smart-food-ai-visual-story__content">
                            <p className="smart-food-ai-eyebrow">Visual story</p>
                            <h2>Premium, local, and believable</h2>
                            <p>
                                Smart Food AI should feel like a refined restaurant and cafe platform, not a technical
                                demo. The page keeps the story human: local food discovery, service readiness, and a
                                polished product surface.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="smart-food-ai-future">
                <div className="container">
                    <div className="smart-food-ai-section-heading smart-food-ai-section-heading--center">
                        <p className="smart-food-ai-eyebrow">Future direction</p>
                        <h2>Ready for the next Smart Food platform phases</h2>
                    </div>
                    <div className="smart-food-ai-future__list">
                        {futureDirections.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                    <div className="smart-food-ai-cta">
                        <h2>ChornPlanet can build real AI-native production platforms.</h2>
                        <p>Smart Food AI is the first practical proof, launched from local business in Chiang Mai.</p>
                        <Link href={`/${lang}/contact/`} className="smart-food-ai-button smart-food-ai-button--primary">
                            Discuss Platform Collaboration
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
