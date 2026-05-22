import React from "react";
import type {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataPrivacyPolicy} from "@/metadata/main/MetadataPrivacyPolicy";
import {getPolicyContentForPublicPage} from "@/lib/policy-content/policyContent.service";
import PolicyPage from "@/components/Policy/PolicyPage";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataPrivacyPolicy[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const {privacyPolicy} = await getPolicyContentForPublicPage(lang);

    return <PolicyPage policy={privacyPolicy} eyebrow="Privacy Policy" accent="privacy"/>;
}
