import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImageUrl } from "@/image/ImageUrl";

const workflowSteps = [
  {
    title: "Chat Ordering",
    text: "Customers order naturally through chat by choosing a meal, asking questions, or confirming what they want in a simple conversation.",
    image: "/smart-food/process1-chat-ordering.png",
    alt: "Customer chat ordering interface for Smart Food",
  },
  {
    title: "Bill Processing",
    text: "The system confirms the order total, receives the payment slip, and verifies the bill before moving the order forward.",
    image: "/smart-food/process2-bill-processing.png",
    alt: "Smart Food bill processing and payment verification",
  },
  {
    title: "Cooking",
    text: "The kitchen team prepares the confirmed order with fresh ingredients, clear workflow, and consistent food quality.",
    image: "/smart-food/process3-cooking.png",
    alt: "Kitchen team preparing a confirmed Smart Food order",
  },
  {
    title: "Delivery",
    text: "The rider picks up the completed order and delivers it safely, quickly, and reliably to the customer.",
    image: "/smart-food/process4-delivery.png",
    alt: "Smart Food delivery workflow with rider handoff",
  },
  {
    title: "Receiving",
    text: "The customer receives the food with a smooth handover experience, completing the service journey with confidence and satisfaction.",
    image: "/smart-food/process5-receiving.png",
    alt: "Customer receiving a completed Smart Food order",
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
    text: "A visible platform story that shows Chorn Planet can move from concept to production-minded execution.",
  },
  {
    title: "Local launch credibility",
    text: "The story starts from real business context in Chiang Mai, with practical service operations in mind.",
  },
  {
    title: "Recruitment signal",
    text: "A clear technology product surface for builders, Recruitment audiences, and future platform collaborators.",
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
  "Chorn Planet media and luxury ecosystem integration",
];

export default function SmartFoodAiLandingPage({ lang }: { lang: string }) {
  return (
    <main className="smart-food-ai-page">
      <section className="smart-food-ai-hero">
        <div className="container">
          <div className="smart-food-ai-hero__grid">
            <div className="smart-food-ai-hero__content">
              <p className="smart-food-ai-eyebrow">
                Production showcase from Chiang Mai
              </p>
              <h1>Smart Food</h1>
              <p className="smart-food-ai-hero__lead">
                A real AI-native food platform experience, launched from local
                business in Chiang Mai.
              </p>
              <p className="smart-food-ai-hero__support">
                Chorn Planet turns conversational food discovery, menu guidance,
                and order-ready workflows into a premium production platform
                experience for real businesses.
              </p>
              <div
                className="smart-food-ai-actions"
                aria-label="Smart Food AI page sections"
              >
                <a
                  href="#smart-food-ai-workflow"
                  className="smart-food-ai-button smart-food-ai-button--primary"
                >
                  Explore Workflow
                </a>
                <a
                  href="#smart-food-ai-value"
                  className="smart-food-ai-button smart-food-ai-button--secondary"
                >
                  View Capability
                </a>
              </div>
            </div>

            <div
              className="smart-food-ai-hero__visual"
              aria-label="Smart Food AI visual story"
            >
              <Image
                src="/smart-food/smart-food-overview.png"
                alt="Premium Smart Food AI platform visual for a Chiang Mai local business experience"
                width={1200}
                height={800}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="smart-food-ai-proof">
        <div className="container">
          <div className="smart-food-ai-section-heading--center">
            <p className="smart-food-ai-eyebrow">Production proof</p>
            <h2>From Chiang Mai local business to full platform capability</h2>
          </div>

          <div className="smart-food-ai-section-heading smart-food-ai-section-heading--split">
            <div className="smart-food-ai-section-heading__left">
              <p>
                Smart Food AI is designed to show practical customer-facing and
                operation-ready value. A restaurant, cafe, or food service team
                can move from customer chat ordering to menu guidance, payment
                confirmation, kitchen preparation, delivery coordination, and a
                service-ready summary.
              </p>
              <p>
                The Smart Food platform supports multiple payment channels,
                including cash payment, QR Code payment through banking apps,
                TrueMoney Wallet payment, and spending support for government
                co-payment programs such as Half-Half Plus.
              </p>
              <p>
                Beyond customer ordering, the platform is built as an end-to-end
                food operation system with kitchen workflow, delivery service,
                order management, payment processing, payment slip verification,
                accounting, and other internal platform systems designed to
                support a complete smart food business operation.
              </p>
            </div>
            <div className="smart-food-ai-section-heading__right">
              <Image
                src="/smart-food/chat-ordering.png"
                alt="Smart Food chat ordering experience preview"
                width={900}
                height={760}
                sizes="(max-width: 991px) 100vw, 42vw"
              />
            </div>
          </div>
          <div className="smart-food-ai-proof__grid">
            <article>
              <span>01</span>
              <h3>Local business context</h3>
              <p>
                Built around real Chiang Mai service needs, not a generic
                concept screen.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Customer-facing direction</h3>
              <p>
                Focused on food discovery, preference guidance, and a clear path
                to service.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Production-minded platform</h3>
              <p>
                Presented as a platform layer that can later connect ordering,
                analytics, and commerce.
              </p>
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
              <article
                key={step.title}
                className="smart-food-ai-workflow__item"
              >
                <div className="smart-food-ai-workflow__image">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                  />
                </div>
                <div className="smart-food-ai-workflow__content">
                  <div className="smart-food-ai-workflow__index">
                    {String(index + 1).padStart(2, "0")}
                  </div>
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
                <span aria-hidden="true" />
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
              <h2>Why this matters for Chorn Planet</h2>
              <p>
                The showcase gives investors, CEOs, Recruitment teams, and collaborators
                a concrete signal that Chorn Planet can deliver AI-native
                production platforms for real business workflows.
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

    </main>
  );
}
