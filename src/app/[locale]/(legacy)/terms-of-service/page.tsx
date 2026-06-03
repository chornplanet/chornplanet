import type {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataTermOfService} from "@/metadata/main/MetadataTermOfService";
import {getPlatformPolicyContent} from "@/lib/platform-content/policyContent";
import PlatformPolicyPage from "@/components/Policy/PlatformPolicyPage";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataTermOfService[lang]
}

export default async function TermsOfService() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const content = await getPlatformPolicyContent(lang);

    return <PlatformPolicyPage lang={lang} content={content} policyKey="termOfService" eyebrow="Terms of Service" accent="terms"/>;
}
