import React from "react";
import ServicesDetailsVue from "@/components/Services/frontend-development/vue/ServicesDetailsVue";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataVue} from "@/metadata/main/frontend/MetadataVue";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataVue[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const {frontEnd, fullStack, devOps} = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div>
            <ServicesDetailsVue
                lang={lang}
                stack={frontEnd.vue}
                frontEnd={frontEnd}
                fullStack={fullStack}
                devOps={devOps}
            />
            <SchemaMarkupServicePage
                name="Vue.js Development Services | Chorn Planet"
                description="Chorn Planet specializes in Vue.js development to create interactive and scalable web applications."
                url="https://chornplanet.com/en/technical-expertise/front-end-developer/vue-developer/"
            />
        </div>
    )
}
