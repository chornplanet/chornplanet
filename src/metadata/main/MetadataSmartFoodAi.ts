import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";
import {ISmartFoodAiMetadataContent} from "@/lib/model/ISmartFoodAiContent";
import {normalizeSmartFoodAiContentLocale} from "@/core/domain/smart-food-ai-content.entity";
import {getSmartFoodAiMetadataContent} from "@/lib/smart-food-ai-content/smartFoodAiContent.service";
import {getSmartFoodAiStaticMetadataFallback} from "@/lib/smart-food-ai-content/smartFoodAiStaticFallback";

async function loadMetadataContent(lang: string): Promise<ISmartFoodAiMetadataContent> {
    const normalizedLocale = normalizeSmartFoodAiContentLocale(lang);

    try {
        return await getSmartFoodAiMetadataContent(normalizedLocale);
    } catch (localeError) {
        console.error(`[metadata] Smart Food AI metadata failed for locale="${normalizedLocale}"`, localeError);
    }

    if (normalizedLocale === 'th') {
        console.warn(`[metadata] Smart Food AI metadata using Thai static fallback for locale="${normalizedLocale}"`);
        return getSmartFoodAiStaticMetadataFallback(normalizedLocale);
    }

    if (normalizedLocale !== 'en') {
        try {
            return await getSmartFoodAiMetadataContent('en');
        } catch (fallbackError) {
            console.error('[metadata] Smart Food AI metadata English fallback failed', fallbackError);
        }
    }

    console.warn(`[metadata] Smart Food AI metadata using production-safe static fallback for locale="${normalizedLocale}"`);
    return getSmartFoodAiStaticMetadataFallback(normalizedLocale);
}

function createMetadata(lang: string, content: ISmartFoodAiMetadataContent): Metadata {
    const links = metadataLink(lang, MetaLinks.smartFoodAi);

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

export async function getMetadataSmartFoodAi(lang: string): Promise<Metadata> {
    const normalizedLocale = normalizeSmartFoodAiContentLocale(lang);
    const content = await loadMetadataContent(normalizedLocale);
    return createMetadata(normalizedLocale, content);
}
