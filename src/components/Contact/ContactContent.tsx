"use client";

import React from "react";
import ContactLeft from "@/components/Contact/ContactLeft";
import ContactRight from "@/components/Contact/ContactRight";
import {ContactGalleryBottom} from "@/components/Contact/ContactGalleryBottom";
import type { PlatformContactContent } from "@/lib/platform-content/contactContent";
import { usePlatformContactContent } from "@/lib/platform-content/usePlatformContactContent";

export default function ContactContent({
    lang,
    content,
}: {
    lang: string;
    content: PlatformContactContent;
}) {
    const {data: cachedContent} = usePlatformContactContent(lang, content);
    const contactContent = cachedContent ?? content;
    const contactInfo = contactContent.contact.contactInfo;
    const title = contactInfo?.title || "Business Inquiries & Collaborations";

    return (
        <>
            <div className="about-area contact-premium-area pb-70">
                <div className="container">
                    <div className="premium-page-heading contact-premium-heading">
                        <h1>{title}</h1>
                    </div>
                    <div className="row contact-premium-grid">
                        <ContactLeft/>
                        <ContactRight
                            contact={contactContent.contact}
                            socialLinks={contactContent.socialLinks}
                        />
                    </div>
                </div>

                <ContactGalleryBottom/>
            </div>
        </>
    );
}
