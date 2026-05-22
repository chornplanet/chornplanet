import React from "react";
import type {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataTermOfService} from "@/metadata/main/MetadataTermOfService";
import {getPolicyContentForPublicPage} from "@/lib/policy-content/policyContent.service";
import PolicyPage from "@/components/Policy/PolicyPage";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataTermOfService[lang]
}

export default async function TermsOfService() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const {termOfService} = await getPolicyContentForPublicPage(lang);

    return <PolicyPage policy={termOfService} eyebrow="Terms of Service" accent="terms"/>;
}
