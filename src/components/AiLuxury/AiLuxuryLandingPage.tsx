import Image from "next/image";
import Link from "next/link";

type AiLuxuryImage = {
  src: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  support?: string;
};

type AiLuxuryCard = {
  title: string;
  text: string;
  image: AiLuxuryImage;
};

type AiLuxurySizedImage = AiLuxuryImage & {
  width: number;
  height: number;
  sizes: string;
};

type AiLuxurySizedCard = Omit<AiLuxuryCard, "image"> & {
  image: AiLuxurySizedImage;
};

type AiLuxuryAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

type AiLuxuryHeroContent = {
  actionsLabel: string;
  actions: AiLuxuryAction[];
  signalsLabel: string;
  signals: string[];
};

type AiLuxuryTextSection = {
  eyebrow: string;
  title: string;
  lead?: string;
  paragraphs?: string[];
};

type AiLuxurySignal = {
  title: string;
  text: string;
};

const heroImage: AiLuxurySizedImage = {
  src: "/images/ai-luxury/hero-ai-luxury-real-estate-platform.png",
  alt: "AI-native luxury platform concept for premium real estate and hospitality ventures",
  width: 1792,
  height: 1024,
  sizes: "100vw",
  eyebrow: "Chorn Planet AI Luxury",
  title: "AI Luxury Platform for Real Estate, Hospitality & Lifestyle Ventures",
  lead: "Chorn Planet turns premium places, services, and lifestyle brands into AI-native business ecosystems.",
  support:
    "Built for real estate companies, hospitality ventures, tourism destinations, mixed-use projects, and premium service businesses that need more than a website, campaign, or digital catalog.",
};

const heroContent: AiLuxuryHeroContent = {
  actionsLabel: "AI Luxury page actions",
  actions: [
    {
      label: "Explore AI Luxury Platform",
      href: "#platform-readiness",
      variant: "primary",
    },
    {
      label: "View Business Readiness",
      href: "#business-signal",
      variant: "secondary",
    },
  ],
  signalsLabel: "AI Luxury capability signals",
  signals: [
    "Premium real estate",
    "Hospitality ecosystems",
    "AI-native operations",
  ],
};

const readinessImage: AiLuxurySizedImage = {
  src: "/images/ai-luxury/ai-luxury-strategic-readiness.png",
  alt: "Luxury future city architecture platform shown on a premium display with planning and AI readiness visuals",
  width: 1792,
  height: 1024,
  sizes: "(max-width: 1399px) 100vw, 1320px",
};

const ventureImage: AiLuxurySizedImage = {
  src: "/images/ai-luxury/venture-ready-business-signal.png",
  alt: "Venture-ready AI luxury business platform signal for premium collaborators",
  width: 1792,
  height: 1024,
  sizes: "(max-width: 991px) 100vw, 58vw",
};

const readinessSection: AiLuxuryTextSection = {
  eyebrow: "Strategic readiness",
  title:
    "Not only luxury visuals. A platform direction for premium business operations.",
  paragraphs: [
    "AI Luxury is the intelligent connection between premium brand identity, destination experience, customer service, digital commerce, operational workflows, and AI-powered decision support.",
    "The goal is to make luxury business more intelligent, more experiential, and more scalable - while keeping the customer experience calm, refined, and human.",
  ],
};

const segmentsSection: AiLuxuryTextSection = {
  eyebrow: "Built for premium ecosystems",
  title: "Designed for high-value places, services, and ventures.",
};

const layersSection: AiLuxuryTextSection = {
  eyebrow: "Platform layers",
  title: "AI-native capability areas for premium business growth.",
  lead: "Each layer is designed to support real customer journeys, service teams, commerce flows, and long-term ecosystem expansion.",
};

const businessSignalSection: AiLuxuryTextSection = {
  eyebrow: "Business readiness signal",
  title:
    "A concrete signal that Chorn Planet can build and deliver AI-native luxury platforms.",
  lead: "This page positions AI Luxury as a premium business layer: useful for real estate companies, venture collaborators, destination owners, and hospitality operators who need a future-ready digital foundation.",
};

const premiumSegments: AiLuxurySizedCard[] = [
  {
    title: "Real Estate & Mixed-use Projects",
    text: "Create intelligent destination platforms for residential, commercial, tourism, and lifestyle developments that need a stronger digital ecosystem layer.",
    image: {
      src: "/images/ai-luxury/segment-real-estate-mixed-use.png",
      alt: "Premium mixed-use real estate destination with AI platform readiness",
      width: 1200,
      height: 900,
      sizes: "(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw",
    },
  },
  {
    title: "Hospitality & Resort Experience",
    text: "Connect guest journeys, service workflows, content, booking, commerce, and AI-assisted operations into one premium service experience.",
    image: {
      src: "/images/ai-luxury/segment-hospitality-resort.png",
      alt: "Luxury resort hospitality experience supported by AI-native service workflows",
      width: 1200,
      height: 900,
      sizes: "(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw",
    },
  },
  {
    title: "Tourism & Destination Branding",
    text: "Build digital destination layers that make premium places easier to discover, experience, operate, and scale across media and customer touchpoints.",
    image: {
      src: "/images/ai-luxury/segment-tourism-destination.png",
      alt: "Premium tourism destination platform with AI storytelling and service readiness",
      width: 1200,
      height: 900,
      sizes: "(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw",
    },
  },
  {
    title: "Luxury Lifestyle Commerce",
    text: "Turn premium products, services, stories, and demand signals into a more intelligent commerce experience for lifestyle ventures.",
    image: {
      src: "/images/ai-luxury/segment-luxury-commerce.png",
      alt: "Luxury lifestyle commerce layer connected to AI-native customer experience",
      width: 1200,
      height: 900,
      sizes: "(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw",
    },
  },
];

const platformLayers: AiLuxurySizedCard[] = [
  {
    title: "AI Brand Storytelling",
    text: "Create premium content systems for projects, destinations, products, campaigns, and customer-facing brand experiences.",
    image: {
      src: "/images/ai-luxury/layer-brand-storytelling.png",
      alt: "AI brand storytelling layer for luxury real estate and hospitality platforms",
      width: 1200,
      height: 750,
      sizes: "(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw",
    },
  },
  {
    title: "Customer Journey Intelligence",
    text: "Design AI-assisted journeys from discovery to inquiry, booking, ordering, visiting, purchasing, and returning.",
    image: {
      src: "/images/ai-luxury/layer-customer-journey.png",
      alt: "Customer journey intelligence for premium destination and luxury service experiences",
      width: 1200,
      height: 750,
      sizes: "(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw",
    },
  },
  {
    title: "Service Workflow Platform",
    text: "Support practical business operations such as inquiries, reservations, concierge service, ordering, fulfillment, and service follow-up.",
    image: {
      src: "/images/ai-luxury/layer-service-workflow.png",
      alt: "AI-native service workflow platform for hospitality and premium business operations",
      width: 1200,
      height: 750,
      sizes: "(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw",
    },
  },
  {
    title: "Luxury Commerce Intelligence",
    text: "Connect premium products, services, media, and customer demand into a scalable commerce foundation.",
    image: {
      src: "/images/ai-luxury/layer-commerce-intelligence.png",
      alt: "Luxury commerce intelligence layer connecting premium products and customer demand",
      width: 1200,
      height: 750,
      sizes: "(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw",
    },
  },
  {
    title: "Venture-Ready Foundation",
    text: "Create a platform base that can expand into SaaS, destination systems, hospitality tools, analytics, and smart city experiences.",
    image: {
      src: "/images/ai-luxury/layer-venture-readiness.png",
      alt: "Venture-ready AI luxury platform foundation for future business expansion",
      width: 1200,
      height: 750,
      sizes: "(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw",
    },
  },
];

const businessSignals: AiLuxurySignal[] = [
  {
    title: "Premium platform capability",
    text: "Chorn Planet shows the ability to move beyond visual concepts into AI-native business platform development.",
  },
  {
    title: "Real-world service mindset",
    text: "The direction is grounded in practical business workflows, customer journeys, and service operations.",
  },
  {
    title: "Luxury ecosystem thinking",
    text: "Place, story, service, commerce, and technology can operate as one scalable premium ecosystem.",
  },
  {
    title: "Expansion-ready foundation",
    text: "The AI Luxury layer can grow into destination platforms, hospitality systems, commerce, analytics, and smart city experiences.",
  },
];

export default function AiLuxuryLandingPage() {
  return (
    <main className="ai-luxury-page">
      <section className="ai-luxury-hero">
        <div className="container">
          <div className="ai-luxury-hero__grid">
            <div
              className="ai-luxury-hero__visual"
              aria-label="AI Luxury hero visual"
            >
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                sizes={heroImage.sizes}
                priority
              />
            </div>
            <div className="ai-luxury-hero__content">
              <p className="ai-luxury-eyebrow">{heroImage.eyebrow}</p>
              <div
                className="ai-luxury-actions"
                aria-label={heroContent.actionsLabel}
              >
                {heroContent.actions.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className={`ai-luxury-button ai-luxury-button--${action.variant}`}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
              <div
                className="ai-luxury-hero__signals"
                aria-label={heroContent.signalsLabel}
              >
                {heroContent.signals.map((signal) => (
                  <span key={signal}>{signal}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-luxury-hero-copy">
        <div className="container">
          <div className="ai-luxury-hero-copy__grid">
            <div className="ai-luxury-hero-copy__heading">
              <p className="ai-luxury-eyebrow">{heroImage.eyebrow}</p>
              <h1>{heroImage.title}</h1>
            </div>
            <div className="ai-luxury-hero-copy__body">
              <p className="ai-luxury-hero-copy__lead">{heroImage.lead}</p>
              <p>{heroImage.support}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="platform-readiness" className="ai-luxury-readiness">
        <div className="container">
          <div className="ai-luxury-readiness__image">
            <Image
              src={readinessImage.src}
              alt={readinessImage.alt}
              width={readinessImage.width}
              height={readinessImage.height}
              sizes={readinessImage.sizes}
            />
          </div>
          <div className="ai-luxury-readiness__content">
            <div className="ai-luxury-readiness__heading">
              <p className="ai-luxury-eyebrow">{readinessSection.eyebrow}</p>
              <h2>{readinessSection.title}</h2>
            </div>
            <div className="ai-luxury-readiness__body">
              {readinessSection.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ai-luxury-segments">
        <div className="container">
          <div className="ai-luxury-section-heading ai-luxury-section-heading--center">
            <p className="ai-luxury-eyebrow">{segmentsSection.eyebrow}</p>
            <h2>{segmentsSection.title}</h2>
          </div>
          <div className="ai-luxury-segments__grid">
            {premiumSegments.map((segment) => (
              <article key={segment.title} className="ai-luxury-image-card">
                <div className="ai-luxury-image-card__image">
                  <Image
                    src={segment.image.src}
                    alt={segment.image.alt}
                    fill
                    sizes={segment.image.sizes}
                  />
                </div>
                <div className="ai-luxury-image-card__content">
                  <h3>{segment.title}</h3>
                  <p>{segment.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-luxury-layers">
        <div className="container">
          <div className="ai-luxury-section-heading">
            <p className="ai-luxury-eyebrow">{layersSection.eyebrow}</p>
            <h2>{layersSection.title}</h2>
            <p>{layersSection.lead}</p>
          </div>
          <div className="ai-luxury-layers__grid">
            {platformLayers.map((layer, index) => (
              <article key={layer.title} className="ai-luxury-layer-card">
                <div className="ai-luxury-layer-card__index">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="ai-luxury-layer-card__image">
                  <Image
                    src={layer.image.src}
                    alt={layer.image.alt}
                    fill
                    sizes={layer.image.sizes}
                  />
                </div>
                <div className="ai-luxury-layer-card__content">
                  <h3>{layer.title}</h3>
                  <p>{layer.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="business-signal" className="ai-luxury-signal">
        <div className="container">
          <div className="ai-luxury-signal__heading">
            <p className="ai-luxury-eyebrow">{businessSignalSection.eyebrow}</p>
            <h2>{businessSignalSection.title}</h2>
          </div>
          <div className="ai-luxury-signal__grid">
            <div className="ai-luxury-signal__image">
              <Image
                src={ventureImage.src}
                alt={ventureImage.alt}
                width={ventureImage.width}
                height={ventureImage.height}
                sizes={ventureImage.sizes}
              />
            </div>
            <div className="ai-luxury-signal__content">
              <p>{businessSignalSection.lead}</p>
              <div className="ai-luxury-signal__cards">
                {businessSignals.map((signal) => (
                  <article key={signal.title}>
                    <h3>{signal.title}</h3>
                    <p>{signal.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
