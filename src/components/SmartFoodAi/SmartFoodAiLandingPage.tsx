import Image from "next/image";

type SmartFoodAiImage = {
  src: string;
  alt: string;
};

type SmartFoodAiAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

type SmartFoodAiWorkflowStep = {
  title: string;
  text: string;
  image: SmartFoodAiImage;
};

type SmartFoodAiProofCard = {
  index: string;
  title: string;
  text: string;
};

type SmartFoodAiValueCard = {
  title: string;
  text: string;
};

type SmartFoodAiSectionHeading = {
  eyebrow: string;
  title: string;
  text?: string;
};

type SmartFoodAiContent = {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    support: string;
    actionsLabel: string;
    actions: SmartFoodAiAction[];
    visual: SmartFoodAiImage & {
      ariaLabel: string;
    };
  };
  proof: {
    heading: SmartFoodAiSectionHeading;
    paragraphs: string[];
    image: SmartFoodAiImage;
    cards: SmartFoodAiProofCard[];
  };
  workflow: {
    id: string;
    heading: SmartFoodAiSectionHeading;
    steps: SmartFoodAiWorkflowStep[];
  };
  features: {
    heading: SmartFoodAiSectionHeading;
    items: string[];
  };
  value: {
    id: string;
    heading: SmartFoodAiSectionHeading;
    cards: SmartFoodAiValueCard[];
  };
  futureDirections: string[];
};

const smartFoodAiContent: Record<string, SmartFoodAiContent> = {
  en: {
    hero: {
      eyebrow: "Production showcase from Chiang Mai",
      title: "Smart Food",
      lead: "A real AI-native food platform experience, launched from local business in Chiang Mai.",
      support:
        "Chorn Planet turns conversational food discovery, menu guidance, and order-ready workflows into a premium production platform experience for real businesses.",
      actionsLabel: "Smart Food AI page sections",
      actions: [
        {
          label: "Explore Workflow",
          href: "#smart-food-ai-workflow",
          variant: "primary",
        },
        {
          label: "View Capability",
          href: "#smart-food-ai-value",
          variant: "secondary",
        },
      ],
      visual: {
        src: "/smart-food/smart-food-overview.png",
        alt: "Premium Smart Food AI platform visual for a Chiang Mai local business experience",
        ariaLabel: "Smart Food AI visual story",
      },
    },
    proof: {
      heading: {
        eyebrow: "Production proof",
        title: "From Chiang Mai local business to full platform capability",
      },
      paragraphs: [
        "Smart Food AI is designed to show practical customer-facing and operation-ready value. A restaurant, cafe, or food service team can move from customer chat ordering to menu guidance, payment confirmation, kitchen preparation, delivery coordination, and a service-ready summary.",
        "The Smart Food platform supports multiple payment channels, including cash payment, QR Code payment through banking apps, TrueMoney Wallet payment, and spending support for government co-payment programs such as Half-Half Plus.",
        "Beyond customer ordering, the platform is built as an end-to-end food operation system with kitchen workflow, delivery service, order management, payment processing, payment slip verification, accounting, and other internal platform systems designed to support a complete smart food business operation.",
      ],
      image: {
        src: "/smart-food/chat-ordering.png",
        alt: "Smart Food chat ordering experience preview",
      },
      cards: [
        {
          index: "01",
          title: "Local business context",
          text: "Built around real Chiang Mai service needs, not a generic concept screen.",
        },
        {
          index: "02",
          title: "Customer-facing direction",
          text: "Focused on food discovery, preference guidance, and a clear path to service.",
        },
        {
          index: "03",
          title: "Production-minded platform",
          text: "Presented as a platform layer that can later connect ordering, analytics, and commerce.",
        },
      ],
    },
    workflow: {
      id: "smart-food-ai-workflow",
      heading: {
        eyebrow: "End-to-end workflow",
        title: "How the experience works",
      },
      steps: [
        {
          title: "Chat Ordering",
          text: "Customers order naturally through chat by choosing a meal, asking questions, or confirming what they want in a simple conversation.",
          image: {
            src: "/smart-food/process1-chat-ordering.png",
            alt: "Customer chat ordering interface for Smart Food",
          },
        },
        {
          title: "Bill Processing",
          text: "The system confirms the order total, receives the payment slip, and verifies the bill before moving the order forward.",
          image: {
            src: "/smart-food/process2-bill-processing.png",
            alt: "Smart Food bill processing and payment verification",
          },
        },
        {
          title: "Cooking",
          text: "The kitchen team prepares the confirmed order with fresh ingredients, clear workflow, and consistent food quality.",
          image: {
            src: "/smart-food/process3-cooking.png",
            alt: "Kitchen team preparing a confirmed Smart Food order",
          },
        },
        {
          title: "Delivery",
          text: "The rider picks up the completed order and delivers it safely, quickly, and reliably to the customer.",
          image: {
            src: "/smart-food/process4-delivery.png",
            alt: "Smart Food delivery workflow with rider handoff",
          },
        },
        {
          title: "Receiving",
          text: "The customer receives the food with a smooth handover experience, completing the service journey with confidence and satisfaction.",
          image: {
            src: "/smart-food/process5-receiving.png",
            alt: "Customer receiving a completed Smart Food order",
          },
        },
      ],
    },
    features: {
      heading: {
        eyebrow: "Platform features",
        title: "Built for a real food service experience",
      },
      items: [
        "Natural food conversation",
        "Menu discovery and matching",
        "Favorite meal memory direction",
        "Order-ready summaries",
        "Local business operation support",
        "Future LINE OA and website ordering direction",
        "Multi-channel platform readiness",
        "Content-to-commerce growth potential",
      ],
    },
    value: {
      id: "smart-food-ai-value",
      heading: {
        eyebrow: "Business value",
        title: "Why this matters for Chorn Planet",
        text: "The showcase gives collaborators a concrete signal that Chorn Planet builds and delivers AI-native production platforms for real business workflows. Launched from a local food business in Chiang Mai, Chorn Planet serves Smart Food customers with AI technology and creates a practical path for growing real business operations.",
      },
      cards: [
        {
          title: "Investor-ready proof",
          text: "A visible platform story that shows Chorn Planet is moving from concept into real AI-native service delivery for business workflows.",
        },
        {
          title: "Local launch credibility",
          text: "The platform is launched from a real local food business in Chiang Mai and supports practical customer service operations.",
        },
        {
          title: "AI-powered service signal",
          text: "A concrete signal that Chorn Planet serves Smart Food customers through AI technology, not only as a concept but as an active business platform.",
        },
        {
          title: "Product expansion path",
          text: "A strong foundation for future SaaS, ordering, commerce, analytics, and Smart Food ecosystem features.",
        },
      ],
    },
    futureDirections: [
      "Website order flow",
      "LINE OA connection",
      "MenuMatch backend cooperation",
      "Smart Food commerce layer",
      "Analytics-assisted growth",
      "Chorn Planet media and luxury ecosystem integration",
    ],
  },
};

function getSmartFoodAiContent(lang: string): SmartFoodAiContent {
  return smartFoodAiContent[lang] ?? smartFoodAiContent.en;
}

export default function SmartFoodAiLandingPage({ lang }: { lang: string }) {
  const content = getSmartFoodAiContent(lang);

  return (
    <main className="smart-food-ai-page">
      <section className="smart-food-ai-hero">
        <div className="container">
          <div className="smart-food-ai-hero__grid">
            <div className="smart-food-ai-hero__content">
              <p className="smart-food-ai-eyebrow">{content.hero.eyebrow}</p>
              <h1>{content.hero.title}</h1>
              <p className="smart-food-ai-hero__lead">{content.hero.lead}</p>
              <p className="smart-food-ai-hero__support">
                {content.hero.support}
              </p>
              <div
                className="smart-food-ai-actions"
                aria-label={content.hero.actionsLabel}
              >
                {content.hero.actions.map((action) => (
                  <a
                    key={action.href}
                    href={action.href}
                    className={`smart-food-ai-button smart-food-ai-button--${action.variant}`}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>

            <div
              className="smart-food-ai-hero__visual"
              aria-label={content.hero.visual.ariaLabel}
            >
              <Image
                src={content.hero.visual.src}
                alt={content.hero.visual.alt}
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
            <p className="smart-food-ai-eyebrow">
              {content.proof.heading.eyebrow}
            </p>
            <h2>{content.proof.heading.title}</h2>
          </div>

          <div className="smart-food-ai-section-heading smart-food-ai-section-heading--split">
            <div className="smart-food-ai-section-heading__left">
              {content.proof.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="smart-food-ai-section-heading__right">
              <Image
                src={content.proof.image.src}
                alt={content.proof.image.alt}
                width={900}
                height={760}
                sizes="(max-width: 991px) 100vw, 42vw"
              />
            </div>
          </div>
          <div className="smart-food-ai-proof__grid">
            {content.proof.cards.map((card) => (
              <article key={card.index}>
                <span>{card.index}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id={content.workflow.id} className="smart-food-ai-workflow">
        <div className="container">
          <div className="smart-food-ai-section-heading smart-food-ai-section-heading--center">
            <p className="smart-food-ai-eyebrow">
              {content.workflow.heading.eyebrow}
            </p>
            <h2>{content.workflow.heading.title}</h2>
          </div>
          <div className="smart-food-ai-workflow__list">
            {content.workflow.steps.map((step, index) => (
              <article
                key={step.title}
                className="smart-food-ai-workflow__item"
              >
                <div className="smart-food-ai-workflow__image">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
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
            <p className="smart-food-ai-eyebrow">
              {content.features.heading.eyebrow}
            </p>
            <h2>{content.features.heading.title}</h2>
          </div>
          <div className="smart-food-ai-card-grid">
            {content.features.items.map((feature) => (
              <article key={feature} className="smart-food-ai-feature-card">
                <span aria-hidden="true" />
                <h3>{feature}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id={content.value.id} className="smart-food-ai-value">
        <div className="container">
          <div className="smart-food-ai-value__grid">
            <div className="smart-food-ai-section-heading">
              <p className="smart-food-ai-eyebrow">
                {content.value.heading.eyebrow}
              </p>
              <h2>{content.value.heading.title}</h2>
              {content.value.heading.text && <p>{content.value.heading.text}</p>}
            </div>
            <div className="smart-food-ai-value__cards">
              {content.value.cards.map((item) => (
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
