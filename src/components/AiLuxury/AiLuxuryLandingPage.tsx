import Image from "next/image";

type AiLuxuryImage = {
  src: string;
  alt: string;
};

type AiLuxuryCard = {
  title: string;
  text: string;
  image: AiLuxuryImage;
};

const heroImage: AiLuxuryImage = {
  src: "/images/ai-luxury/hero-ai-luxury-real-estate-platform.webp",
  alt: "AI-native luxury platform concept for premium real estate and hospitality ventures",
};

const readinessImage: AiLuxuryImage = {
  src: "/images/ai-luxury/ai-luxury-strategic-readiness.webp",
  alt: "Strategic AI readiness layer connecting luxury brand, place, service, commerce, and operations",
};

const ventureImage: AiLuxuryImage = {
  src: "/images/ai-luxury/venture-ready-business-signal.webp",
  alt: "Venture-ready AI luxury business platform signal for premium collaborators",
};

const premiumSegments: AiLuxuryCard[] = [
  {
    title: "Real Estate & Mixed-use Projects",
    text: "Create intelligent destination platforms for residential, commercial, tourism, and lifestyle developments that need a stronger digital ecosystem layer.",
    image: {
      src: "/images/ai-luxury/segment-real-estate-mixed-use.webp",
      alt: "Premium mixed-use real estate destination with AI platform readiness",
    },
  },
  {
    title: "Hospitality & Resort Experience",
    text: "Connect guest journeys, service workflows, content, booking, commerce, and AI-assisted operations into one premium service experience.",
    image: {
      src: "/images/ai-luxury/segment-hospitality-resort.webp",
      alt: "Luxury resort hospitality experience supported by AI-native service workflows",
    },
  },
  {
    title: "Tourism & Destination Branding",
    text: "Build digital destination layers that make premium places easier to discover, experience, operate, and scale across media and customer touchpoints.",
    image: {
      src: "/images/ai-luxury/segment-tourism-destination.webp",
      alt: "Premium tourism destination platform with AI storytelling and service readiness",
    },
  },
  {
    title: "Luxury Lifestyle Commerce",
    text: "Turn premium products, services, stories, and demand signals into a more intelligent commerce experience for lifestyle ventures.",
    image: {
      src: "/images/ai-luxury/segment-luxury-commerce.webp",
      alt: "Luxury lifestyle commerce layer connected to AI-native customer experience",
    },
  },
];

const platformLayers: AiLuxuryCard[] = [
  {
    title: "AI Brand Storytelling",
    text: "Create premium content systems for projects, destinations, products, campaigns, and customer-facing brand experiences.",
    image: {
      src: "/images/ai-luxury/layer-brand-storytelling.webp",
      alt: "AI brand storytelling layer for luxury real estate and hospitality platforms",
    },
  },
  {
    title: "Customer Journey Intelligence",
    text: "Design AI-assisted journeys from discovery to inquiry, booking, ordering, visiting, purchasing, and returning.",
    image: {
      src: "/images/ai-luxury/layer-customer-journey.webp",
      alt: "Customer journey intelligence for premium destination and luxury service experiences",
    },
  },
  {
    title: "Service Workflow Platform",
    text: "Support practical business operations such as inquiries, reservations, concierge service, ordering, fulfillment, and service follow-up.",
    image: {
      src: "/images/ai-luxury/layer-service-workflow.webp",
      alt: "AI-native service workflow platform for hospitality and premium business operations",
    },
  },
  {
    title: "Luxury Commerce Intelligence",
    text: "Connect premium products, services, media, and customer demand into a scalable commerce foundation.",
    image: {
      src: "/images/ai-luxury/layer-commerce-intelligence.webp",
      alt: "Luxury commerce intelligence layer connecting premium products and customer demand",
    },
  },
  {
    title: "Venture-Ready Foundation",
    text: "Create a platform base that can expand into SaaS, destination systems, hospitality tools, analytics, and smart city experiences.",
    image: {
      src: "/images/ai-luxury/layer-venture-readiness.webp",
      alt: "Venture-ready AI luxury platform foundation for future business expansion",
    },
  },
];

const businessSignals = [
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
            <div className="ai-luxury-hero__content">
              <p className="ai-luxury-eyebrow">Chorn Planet AI Luxury</p>
              <h1>AI Luxury Platform for Real Estate, Hospitality & Lifestyle Ventures</h1>
              <p className="ai-luxury-hero__lead">
                Chorn Planet turns premium places, services, and lifestyle brands into AI-native business ecosystems.
              </p>
              <p className="ai-luxury-hero__support">
                Built for real estate companies, hospitality ventures, tourism destinations, mixed-use projects, and premium service businesses that need more than a website, campaign, or digital catalog.
              </p>
              <div className="ai-luxury-actions" aria-label="AI Luxury page actions">
                <a href="#platform-readiness" className="ai-luxury-button ai-luxury-button--primary">
                  Explore AI Luxury Platform
                </a>
                <a href="#business-signal" className="ai-luxury-button ai-luxury-button--secondary">
                  View Business Readiness
                </a>
              </div>
            </div>
            <div className="ai-luxury-hero__visual" aria-label="AI Luxury hero visual placeholder">
              <Image src={heroImage.src} alt={heroImage.alt} width={1200} height={820} priority />
            </div>
          </div>
        </div>
      </section>

      <section id="platform-readiness" className="ai-luxury-readiness">
        <div className="container">
          <div className="ai-luxury-section-heading ai-luxury-section-heading--split">
            <div>
              <p className="ai-luxury-eyebrow">Strategic readiness</p>
              <h2>Not only luxury visuals. A platform direction for premium business operations.</h2>
              <p>
                AI Luxury is the intelligent connection between premium brand identity, destination experience, customer service, digital commerce, operational workflows, and AI-powered decision support.
              </p>
              <p>
                The goal is to make luxury business more intelligent, more experiential, and more scalable — while keeping the customer experience calm, refined, and human.
              </p>
            </div>
            <div className="ai-luxury-readiness__image">
              <Image src={readinessImage.src} alt={readinessImage.alt} width={980} height={760} />
            </div>
          </div>
        </div>
      </section>

      <section className="ai-luxury-segments">
        <div className="container">
          <div className="ai-luxury-section-heading ai-luxury-section-heading--center">
            <p className="ai-luxury-eyebrow">Built for premium ecosystems</p>
            <h2>Designed for high-value places, services, and ventures.</h2>
          </div>
          <div className="ai-luxury-segments__grid">
            {premiumSegments.map((segment) => (
              <article key={segment.title} className="ai-luxury-image-card">
                <div className="ai-luxury-image-card__image">
                  <Image src={segment.image.src} alt={segment.image.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw" />
                </div>
                <div className="ai-luxury-image-card__content">
                  <h3>{segment.title}</h3>
                  <p>{segment.text}</p>
                  <span>{segment.image.src}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-luxury-layers">
        <div className="container">
          <div className="ai-luxury-section-heading">
            <p className="ai-luxury-eyebrow">Platform layers</p>
            <h2>AI-native capability areas for premium business growth.</h2>
            <p>
              Each layer is designed to support real customer journeys, service teams, commerce flows, and long-term ecosystem expansion.
            </p>
          </div>
          <div className="ai-luxury-layers__grid">
            {platformLayers.map((layer, index) => (
              <article key={layer.title} className="ai-luxury-layer-card">
                <div className="ai-luxury-layer-card__index">{String(index + 1).padStart(2, "0")}</div>
                <div className="ai-luxury-layer-card__image">
                  <Image src={layer.image.src} alt={layer.image.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw" />
                </div>
                <div className="ai-luxury-layer-card__content">
                  <h3>{layer.title}</h3>
                  <p>{layer.text}</p>
                  <span>{layer.image.src}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="business-signal" className="ai-luxury-signal">
        <div className="container">
          <div className="ai-luxury-signal__grid">
            <div className="ai-luxury-signal__image">
              <Image src={ventureImage.src} alt={ventureImage.alt} width={960} height={760} />
            </div>
            <div className="ai-luxury-signal__content">
              <p className="ai-luxury-eyebrow">Business readiness signal</p>
              <h2>A concrete signal that Chorn Planet can build and deliver AI-native luxury platforms.</h2>
              <p>
                This page positions AI Luxury as a premium business layer: useful for real estate companies, venture collaborators, destination owners, and hospitality operators who need a future-ready digital foundation.
              </p>
              <div className="ai-luxury-signal__cards">
                {businessSignals.map((signal) => (
                  <article key={signal.title}>
                    <h3>{signal.title}</h3>
                    <p>{signal.text}</p>
                  </article>
                ))}
              </div>
              <div className="ai-luxury-signal__asset-path">
                Future image source: <span>{ventureImage.src}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
