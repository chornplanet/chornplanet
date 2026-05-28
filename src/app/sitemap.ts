import type {MetadataRoute} from "next";
import {LOCALES} from "@/lib/SiteUrlLocales";
import {getLocalizedSitemapEntries} from "@/lib/sitemap/sitemapRoutes";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return getLocalizedSitemapEntries(LOCALES);
}
