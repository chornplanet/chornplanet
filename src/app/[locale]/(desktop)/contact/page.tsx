import type {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import ContactContent from "@/components/Contact/ContactContent";
import React from "react";
import {MetadataContact} from "@/metadata/main/MetadataContact";
import {getContactContentForPublicPage} from "@/lib/contact-content/contactContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataContact[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const contactContent = await getContactContentForPublicPage(lang);

    return (
        <div className="smart-container-top">
            <ContactContent contact={contactContent.contact} socialLinks={contactContent.socialLinks}/>
            <SchemaMarkupServicePage
                name="Contact | Chorn Planet - Software Development, AI Integration, Web3, and Blockchain"
                description="Discover Chorn Planet's innovative custom software development solutions and how we empower industries with cutting-edge technology."
                url="https://chornplanet.com/en/contact/"
            />
        </div>
    );
}
