import React from "react";
import FullStackModuleBottom from "@/components/Services/fullstack-development/FullStackModuleBottom";
import FullStackModuleLeft from "@/components/Services/fullstack-development/FullStackModuleLeft";
import FullStackModuleRight from "@/components/Services/fullstack-development/FullStackModuleRight";
import {IFullStack} from "@/lib/model/IFullStack";

const FullStackPageMain: React.FC<{ lang: string, fullStack: IFullStack }> = ({lang, fullStack}) => {
    const content = fullStack;

    return (
        <>
            <div className="services-area pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <h1>{content.services.title}</h1>
                        <div className="row align-items-center align-items-center-custom">
                            <FullStackModuleLeft lang={lang} fullStack={content}/>
                            <FullStackModuleRight lang={lang}/>
                        </div>
                        <FullStackModuleBottom lang={lang} fullStack={content}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FullStackPageMain;
