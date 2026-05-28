import React from "react";
import Web3ModuleLeft from "@/components/Services/web3-blockchain-development/Web3ModuleLeft";
import Web3ModuleRight from "@/components/Services/web3-blockchain-development/Web3ModuleRight";
import {IWeb3} from "@/lib/model/IWeb3";

const Web3PageMain: React.FC<{ lang: string, web3: IWeb3 }> = ({lang, web3}) => {
    const content = web3;

    return (
        <>
            <div className="services-area pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <h1>{content.services.title}</h1>
                        <div className="row align-items-center align-items-center-custom">
                            <Web3ModuleLeft lang={lang} web3={content}/>
                            <Web3ModuleRight lang={lang}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Web3PageMain;
