import React from "react";
import {IPolicyContent} from "@/lib/model/IPolicy";
import type {Metadata} from "next";
import {headers} from "next/headers";
import {MetadataTermOfService} from "@/metadata/main/MetadataTermOfService";
import {getPolicyContentForPublicPage} from "@/lib/policy-content/policyContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataTermOfService[lang]
}

export default async function TermsOfService() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const {termOfService} = await getPolicyContentForPublicPage(lang);

    return (
        <div className="terms-of-service-area smart-container-top">
            <div className="container">
                <h1>{termOfService.title}</h1>
                <h2>{termOfService.subTitle}</h2>
                <p>{termOfService.description}</p>

                <div className="smart-privacy-container">
                    {termOfService.contents.map((item: IPolicyContent, index: number) => (
                        <div key={index} className="smart-privacy-item">
                            <h3>{item.title}</h3>
                            <div key={index} className="smart-privacy-bullet">
                                {item.description != undefined && (
                                    <p dangerouslySetInnerHTML={{__html: item.description}}/>
                                )}
                                {item.expand != undefined && (
                                    <p dangerouslySetInnerHTML={{__html: item.expand}}/>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
