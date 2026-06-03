import type {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataPrivacyPolicy} from "@/metadata/main/MetadataPrivacyPolicy";
import {getPlatformPolicyContent} from "@/lib/platform-content/policyContent";
import PlatformPolicyPage from "@/components/Policy/PlatformPolicyPage";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataPrivacyPolicy[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const content = await getPlatformPolicyContent(lang);

    return <PlatformPolicyPage lang={lang} content={content} policyKey="privacyPolicy" eyebrow="Privacy Policy" accent="privacy"/>;
}
