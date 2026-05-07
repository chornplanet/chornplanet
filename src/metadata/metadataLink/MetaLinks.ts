import {IMetaLinks} from "./model/IMetaLinks";
import {MetadataImageVersion} from "@/metadata/version/MetadataImageVersion";
import {MetaLinkFrontend} from "@/metadata/metadataLink/MetaLinkFrontend";
import {MetaLinkBackend} from "@/metadata/metadataLink/MetaLinkBackend";
import {MetaLinkDevOps} from "@/metadata/metadataLink/MetaLinkDevOps";

export const MetaLinks: IMetaLinks = {
    _404: {
        canonical: "/404/",
        image: {
            url: "/images-opengraph/banner/banner-logo.png" + MetadataImageVersion,
            alt: "Open graph image for web3 and blockchain development"
        }
    },
    about: {
        canonical: "/about-chorn/",
        image: {
            url: "/images-opengraph/about/about-og-image.jpg" + MetadataImageVersion,
            alt: "Open graph image for about"
        }
    },
    contact: {
        canonical: "/contact/",
        image: {
            url: "/images-opengraph/contact/contact-og-image.png" + MetadataImageVersion,
            alt: "Open graph image for contact"
        }
    },
    aiAom: {
        canonical: "/ai-companions/aom/",
        image: {
            url: "/images-opengraph/ai/ai-og-aom.jpg" + MetadataImageVersion,
            alt: "Open graph image for AI-Aom - LINE Chat AI Integration",
        }
    },
    aiCompanion: {
        canonical: "/ai-companions/",
        image: {
            url: "/images-opengraph/ai/ai-companions-og-image.jpg" + MetadataImageVersion,
            alt: "Open graph image for AI companions",
        }
    },
    aiFah: {
        canonical: "/ai-companions/fah/",
        image: {
            url: "/images-opengraph/ai/ai-og-fah.jpg" + MetadataImageVersion,
            alt: "Open graph image for AI-Fah - LINE Chat AI Integration",
        }
    },
    aiPloy: {
        canonical: "/ai-companions/ploy/",
        image: {
            url: "/images-opengraph/ai/ai-og-ploy.jpg" + MetadataImageVersion,
            alt: "Open graph image for AI-Ploy - LINE Chat AI Integration",
        }
    },
    smartFoodAi: {
        canonical: "/smart-food-ai/",
        image: {
            url: "/images-opengraph/smart-food/process1-chat-ordering.png" + MetadataImageVersion,
            alt: "Open graph image for Smart Food AI production platform",
        }
    },
    cloudSolutions: {
        canonical: "/technical-expertise/cloud-infrastructure-systems-architecture/",
        image: {
            url: "/images-opengraph/banner/banner-logo.png" + MetadataImageVersion,
            alt: "Open graph image for cloud solutions"
        }
    },
    gallery: {
        canonical: "/gallery/",
        image: {
            url: "/images-opengraph/gallery/gallery-og-image.jpg" + MetadataImageVersion,
            alt: "Open graph image for gallery",
        }
    },
    home: {
        canonical: "/",
        image: {
            url: "/images-opengraph/smart-city/hero-section/city-shaped-by-people-move.png"+ MetadataImageVersion,
            alt: "Open graph image for home flexible workplace"
        }
    },
    llmAi: {
        canonical: "/technical-expertise/ai-solutions/",
        image: {
            url: "/images-opengraph/banner/chorn-banner.jpg" + MetadataImageVersion,
            alt: "Open graph image for LLM/AI integration",
        }
    },
    webDevelopment: {
        canonical: "/technical-expertise/web-development/",
        image: {
            url: "/images-opengraph/frontend/frontend-development-services.png" + MetadataImageVersion,
            alt: "Open graph image for web development"
        }
    },
    web3: {
        canonical: "/technical-expertise/web3-blockchain-smart-contract-development/",
        image: {
            url: "/images-opengraph/banner/banner-logo.png" + MetadataImageVersion,
            alt: "Open graph image for web3 and blockchain development"
        }
    },
    privacyPolicy: {
        canonical: "/privacy-policy/",
        image: {
            url: "/images-opengraph/banner/banner-logo.png" + MetadataImageVersion,
            alt: "Open graph image for web3 and blockchain development"
        }
    },
    termOfServices: {
        canonical: "/terms-of-service/",
        image: {
            url: "/images-opengraph/banner/banner-logo.png" + MetadataImageVersion,
            alt: "Open graph image for web3 and blockchain development"
        }
    },
    workplacePolicy: {
        canonical: "/workplace-policy/",
        image: {
            url: "/images-opengraph/banner/banner-logo.png" + MetadataImageVersion,
            alt: "Open graph image for web3 and blockchain development"
        }
    },
    servicePackages: {
        canonical: "/service-packages/",
        image: {
            url: "/images-opengraph/og-service-package.png" + MetadataImageVersion,
            alt: "Open graph image for service packages."
        }
    },
    frontend: MetaLinkFrontend,
    backend: MetaLinkBackend,
    devops: MetaLinkDevOps
}
