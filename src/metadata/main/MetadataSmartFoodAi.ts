import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

const title = "Smart Food AI | ChornPlanet Production Platform";
const description = "Smart Food AI is a ChornPlanet production showcase for an AI-native food platform experience launched from local business in Chiang Mai.";

function createMetadata(lang: string): Metadata {
    const links = metadataLink(lang, MetaLinks.smartFoodAi);

    return {
        title,
        description,
        alternates: links.alternates,
        authors: [
            {
                name: "Chorn Planet"
            }
        ],
        openGraph: {
            title: "Smart Food AI - ChornPlanet Production Platform",
            description,
            images: links.openGraph.images,
            url: links.alternates.canonical,
            type: "website"
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: links.twitter.images,
        },
    };
}

export const MetadataSmartFoodAi: Record<string, Metadata> = {
    en: createMetadata("en"),
    th: createMetadata("th"),
    fr: createMetadata("fr"),
    ja: createMetadata("ja"),
    zh: createMetadata("zh"),
    de: createMetadata("de"),
    nl: createMetadata("nl"),
    da: createMetadata("da"),
    fi: createMetadata("fi"),
    ko: createMetadata("ko"),
};
