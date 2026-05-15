import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

type SmartFoodAiMetadataContent = {
    title: string;
    description: string;
    openGraphTitle: string;
};

/**
 * Static metadata content bridge for Smart Food AI.
 *
 * Codex migration note:
 * - Treat this object as seed/fallback data for the MongoDB migration.
 * - Move these localized text values into the existing metadata/content collection pattern.
 * - Keep `metadataLink(lang, MetaLinks.smartFoodAi)` as the route/canonical source unless the metadata service already owns link generation.
 * - Runtime target: requested locale -> EN -> static fallback.
 */
const smartFoodAiMetadataContent: Record<string, SmartFoodAiMetadataContent> = {
    en: {
        title: "Smart Food AI | AI-Native Food Service Platform in Chiang Mai",
        description: "Smart Food AI is an AI-native food service platform by Chorn Planet, serving customers in Chiang Mai through chat ordering, payment workflow, kitchen operation, delivery coordination, and future commerce expansion.",
        openGraphTitle: "Smart Food AI - AI-Native Food Service Platform in Chiang Mai"
    },
    th: {
        title: "Smart Food AI | แพลตฟอร์มบริการอาหาร AI-Native ในเชียงใหม่",
        description: "Smart Food AI คือแพลตฟอร์มบริการอาหารแบบ AI-native โดย Chorn Planet ที่ให้บริการลูกค้าในเชียงใหม่ผ่านการสั่งอาหารผ่านแชต เวิร์กโฟลว์การชำระเงิน การดำเนินงานครัว การประสานงานจัดส่ง และแนวทางการขยายสู่การพาณิชย์ในอนาคต",
        openGraphTitle: "Smart Food AI - แพลตฟอร์มบริการอาหาร AI-Native ในเชียงใหม่"
    },
    da: {
        title: "Smart Food AI | AI-Native madserviceplatform i Chiang Mai",
        description: "Smart Food AI er en AI-native madserviceplatform fra Chorn Planet, der betjener kunder i Chiang Mai gennem chatbestilling, betalingsworkflow, køkkendrift, leveringskoordinering og fremtidig handelsudvidelse.",
        openGraphTitle: "Smart Food AI - AI-Native madserviceplatform i Chiang Mai"
    },
    de: {
        title: "Smart Food AI | AI-Native Food-Service-Plattform in Chiang Mai",
        description: "Smart Food AI ist eine AI-native Food-Service-Plattform von Chorn Planet, die Kunden in Chiang Mai durch Chat-Bestellung, Zahlungsworkflow, Küchenbetrieb, Lieferkoordination und zukünftige Commerce-Erweiterung bedient.",
        openGraphTitle: "Smart Food AI - AI-Native Food-Service-Plattform in Chiang Mai"
    },
    fi: {
        title: "Smart Food AI | AI-Native-ruokapalvelualusta Chiang Maissa",
        description: "Smart Food AI on Chorn Planetin AI-native-ruokapalvelualusta, joka palvelee asiakkaita Chiang Maissa chat-tilaamisen, maksutyönkulun, keittiötoiminnan, toimituksen koordinoinnin ja tulevan kaupankäynnin laajentamisen kautta.",
        openGraphTitle: "Smart Food AI - AI-Native-ruokapalvelualusta Chiang Maissa"
    },
    fr: {
        title: "Smart Food AI | Plateforme de service alimentaire AI-native à Chiang Mai",
        description: "Smart Food AI est une plateforme de service alimentaire AI-native de Chorn Planet, servant des clients à Chiang Mai par la commande via chat, le workflow de paiement, les opérations de cuisine, la coordination de livraison et l’expansion future du commerce.",
        openGraphTitle: "Smart Food AI - Plateforme de service alimentaire AI-native à Chiang Mai"
    },
    ja: {
        title: "Smart Food AI | チェンマイのAI-nativeフードサービスプラットフォーム",
        description: "Smart Food AIはChorn PlanetによるAI-nativeフードサービスプラットフォームであり、チェンマイの顧客に対して、チャット注文、支払いワークフロー、キッチン運用、配送調整、将来のコマース拡張を通じてサービスを提供します。",
        openGraphTitle: "Smart Food AI - チェンマイのAI-nativeフードサービスプラットフォーム"
    },
    ko: {
        title: "Smart Food AI | 치앙마이 AI-Native 음식 서비스 플랫폼",
        description: "Smart Food AI는 Chorn Planet의 AI-native 음식 서비스 플랫폼으로, 채팅 주문, 결제 워크플로, 주방 운영, 배송 조정, 향후 커머스 확장을 통해 치앙마이 고객에게 서비스를 제공합니다.",
        openGraphTitle: "Smart Food AI - 치앙마이 AI-Native 음식 서비스 플랫폼"
    },
    nl: {
        title: "Smart Food AI | AI-Native foodserviceplatform in Chiang Mai",
        description: "Smart Food AI is een AI-native foodserviceplatform van Chorn Planet dat klanten in Chiang Mai bedient via chatbestellingen, betalingsworkflow, keukenactiviteiten, bezorgcoördinatie en toekomstige commerce-uitbreiding.",
        openGraphTitle: "Smart Food AI - AI-Native foodserviceplatform in Chiang Mai"
    },
    zh: {
        title: "Smart Food AI | 清迈 AI-Native 食品服务平台",
        description: "Smart Food AI 是 Chorn Planet 的 AI-native 食品服务平台，通过聊天点餐、付款工作流、厨房运营、配送协调以及未来商务扩展，为清迈客户提供服务。",
        openGraphTitle: "Smart Food AI - 清迈 AI-Native 食品服务平台"
    }
};

function getMetadataContent(lang: string): SmartFoodAiMetadataContent {
    return smartFoodAiMetadataContent[lang] ?? smartFoodAiMetadataContent.en;
}

function createMetadata(lang: string): Metadata {
    const links = metadataLink(lang, MetaLinks.smartFoodAi);
    const content = getMetadataContent(lang);

    return {
        title: content.title,
        description: content.description,
        alternates: links.alternates,
        authors: [
            {
                name: "Chorn Planet"
            }
        ],
        openGraph: {
            title: content.openGraphTitle,
            description: content.description,
            images: links.openGraph.images,
            url: links.alternates.canonical,
            type: "website"
        },
        twitter: {
            card: "summary_large_image",
            title: content.title,
            description: content.description,
            images: links.twitter.images,
        },
    };
}

export const MetadataSmartFoodAi: Record<string, Metadata> = {
    en: createMetadata("en"),
    th: createMetadata("th"),
    da: createMetadata("da"),
    de: createMetadata("de"),
    fi: createMetadata("fi"),
    fr: createMetadata("fr"),
    ja: createMetadata("ja"),
    ko: createMetadata("ko"),
    nl: createMetadata("nl"),
    zh: createMetadata("zh"),
};
