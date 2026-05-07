import React from "react";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import Web3PageMain from "@/components/Services/web3-blockchain-development/Web3PageMain";
import CloudExperience from "@/components/Common/CloudExperience";
import {headers} from "next/headers";
import {MetadataWeb3} from "@/metadata/main/MetadataWeb3";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import {getTechnicalExpertiseContentForPublicPage} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataWeb3[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const content = await getTechnicalExpertiseContentForPublicPage(lang);

    return (
        <div className="smart-container-top">
            <Web3PageMain lang={lang} web3={content.web3}/>
            <CloudExperience lang={lang} cloud={content.cloud}/>
            <HomeFeatureMain lang={lang} feature={content.feature}/>
            <SchemaMarkupServicePage
                name="Web3 Blockchain Smart Contract Development | Chorn Planet | Custom Blockchain Solutions"
                description="Discover Chorn Planet’s expertise in Web3 blockchain and smart contract development. Chorn Planet build decentralized applications (DApps) using Solidity, Ethereum, Polygon, and integrate with technologies like Hardhat, Ganache, and MetaMask."
                url="https://chornplanet.com/en/technical-expertise/web3-blockchain-smart-contract-development/"
            />
        </div>
    );
}
