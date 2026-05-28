import React from "react";
import FrontEndModuleBottom from "./FrontEndModuleBottom";
import FrontEndModuleLeft from "@/components/Services/frontend-development/FrontEndModuleLeft";
import FrontEndRightImages from "@/components/Services/frontend-development/FrontEndModuleRight";
import {IFrontEnd} from "@/lib/model/IFrontEnd";

const FrontEndPageMain: React.FC<{ lang: string, frontEnd: IFrontEnd }> = ({lang, frontEnd}) => {
    const content = frontEnd;

    return (
        <>
            <div className="services-area pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <h1>{content.services.title}</h1>
                        <div className="row align-items-center align-items-center-custom">
                            <FrontEndModuleLeft lang={lang} frontEnd={content}/>
                            <FrontEndRightImages lang={lang}/>
                        </div>
                        <FrontEndModuleBottom lang={lang} frontEnd={content}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FrontEndPageMain;
