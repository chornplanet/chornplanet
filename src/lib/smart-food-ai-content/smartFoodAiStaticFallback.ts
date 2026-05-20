import {
    normalizeSmartFoodAiContentLocale,
    SmartFoodAiContentPayload,
} from "@/core/domain/smart-food-ai-content.entity";
import {ISmartFoodAiMetadataContent} from "@/lib/model/ISmartFoodAiContent";

export const SMART_FOOD_AI_STATIC_METADATA_FALLBACK: ISmartFoodAiMetadataContent = {
    title: 'Smart Food AI | Chorn Planet',
    description:
        'Smart Food AI by ChornPlanet presents an AI-native food service workflow for menu discovery, ordering support, operations coordination, and local business growth.',
    openGraphTitle: 'Smart Food AI',
};

export function getSmartFoodAiStaticFallback(locale: string): SmartFoodAiContentPayload {
    const normalizedLocale = normalizeSmartFoodAiContentLocale(locale);
    const image = {src: '/fallback-content.svg', alt: 'Smart Food AI service workflow'};

    return {
        locale: normalizedLocale,
        metadata: SMART_FOOD_AI_STATIC_METADATA_FALLBACK,
        hero: {
            eyebrow: 'AI-native food service platform',
            title: 'Smart Food AI',
            lead:
                'Smart Food AI connects menu information, customer conversation, order coordination, and business operations into one practical AI-native service experience.',
            support:
                'Designed from real local-business workflow in Chiang Mai, the page presents ChornPlanet\'s capability to turn food-service operations into a clear, scalable digital platform.',
            actionsLabel: 'Smart Food AI actions',
            actions: [
                {label: 'Explore workflow', href: '#workflow', variant: 'primary'},
                {label: 'Business value', href: '#value', variant: 'secondary'},
            ],
            visual: {
                ...image,
                ariaLabel: 'Smart Food AI service experience visual',
            },
        },
        proof: {
            heading: {
                eyebrow: 'Production direction',
                title: 'Built for real food-service operations',
                text: 'When database content is temporarily unavailable, this production-safe fallback still presents the correct public product direction.',
            },
            paragraphs: [
                'Smart Food AI supports restaurant and food-service teams that need accurate menu communication, order readiness, payment confirmation, and operational follow-up.',
                'The platform direction focuses on practical customer experience first: helping people understand menus, choose items, confirm orders, and move smoothly toward fulfillment.',
            ],
            image,
            cards: [
                {
                    index: '01',
                    title: 'Customer conversation',
                    text: 'Support customers with menu discovery, item clarification, ordering guidance, and friendly service communication.',
                },
                {
                    index: '02',
                    title: 'Operational coordination',
                    text: 'Help connect customer requests with store operations, finance confirmation, and preparation flow.',
                },
                {
                    index: '03',
                    title: 'Platform readiness',
                    text: 'Show how ChornPlanet can transform a real business workflow into a premium AI-native product surface.',
                },
            ],
        },
        workflow: {
            id: 'workflow',
            heading: {
                eyebrow: 'Workflow',
                title: 'From customer request to service action',
                text: 'A simple end-to-end view of how Smart Food AI supports food-service operations.',
            },
            steps: [
                {
                    title: 'Understand the customer request',
                    text: 'Receive natural-language questions about menus, price, availability, ordering, and service details.',
                    image,
                },
                {
                    title: 'Respond with clear menu guidance',
                    text: 'Provide useful menu information and next-step guidance while keeping the customer experience friendly and simple.',
                    image,
                },
                {
                    title: 'Coordinate order readiness',
                    text: 'Support the handoff from customer confirmation to operational processing, payment review, and preparation flow.',
                    image,
                },
                {
                    title: 'Improve the service loop',
                    text: 'Use real workflow feedback to improve content accuracy, operational logic, and future platform capability.',
                    image,
                },
            ],
        },
        features: {
            heading: {
                eyebrow: 'Capabilities',
                title: 'Practical AI support for food-service growth',
            },
            items: [
                'Natural-language menu and ordering support',
                'Clear customer response flow for menu, price, and service questions',
                'Payment and order-status coordination support',
                'Operational handoff between customer service, finance, and preparation teams',
                'Content-ready structure for multilingual and database-backed publishing',
                'Premium ChornPlanet presentation for partners, investors, and future customers',
            ],
        },
        value: {
            id: 'value',
            heading: {
                eyebrow: 'Business value',
                title: 'A real AI-native product surface, not only a concept page',
                text: 'Smart Food AI helps ChornPlanet demonstrate practical platform capability through a workflow that local businesses can understand and use.',
            },
            cards: [
                {
                    title: 'Better customer clarity',
                    text: 'Customers receive clearer information about menu choices, prices, and ordering next steps.',
                },
                {
                    title: 'Better team coordination',
                    text: 'Teams can align customer service, finance confirmation, and order processing around a more structured workflow.',
                },
                {
                    title: 'Better platform positioning',
                    text: 'The page communicates ChornPlanet as an AI-native production platform with real commercial direction.',
                },
            ],
        },
        futureDirections: [
            'Connect the public page to complete localized MongoDB content when the content record is available.',
            'Continue improving Smart Food AI as a production-ready food-service platform surface.',
            'Preserve safe public wording without exposing internal technical architecture.',
        ],
    };
}
