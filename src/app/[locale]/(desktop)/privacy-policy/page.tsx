import React from "react";
import {IPolicyContent} from "@/lib/model/IPolicy";
import type {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataPrivacyPolicy} from "@/metadata/main/MetadataPrivacyPolicy";
import {getPolicyContentForPublicPage} from "@/lib/policy-content/policyContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataPrivacyPolicy[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const {privacyPolicy} = await getPolicyContentForPublicPage(lang);

    return (
        <div className="terms-of-service-area smart-container-top">
            <div className="container">
                <h1>{privacyPolicy.title}</h1>
                <h2>{privacyPolicy.subTitle}</h2>
                <p>{privacyPolicy.description}</p>

                <div className="smart-privacy-container">
                    {privacyPolicy.contents.map((content: IPolicyContent, index: number) => (
                        <div key={index} className="smart-privacy-item">
                            <h3>{content.title}</h3>
                            {content.details && content.details.map((detail, index: number) => (
                                <div key={index} className="smart-privacy-bullet">
                                    <p className="title" dangerouslySetInnerHTML={{__html: detail.title}}/>
                                    <p dangerouslySetInnerHTML={{__html: detail.description}}/>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
