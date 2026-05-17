import React from "react";
import SmartMobilityClarificationStatement from "../Common/SmartMobilityClarificationStatement";
import {ISmartSection} from "@/lib/model/ISmartMobility";

export default function VisionChiangMaiBottom(
    {lang, safeStatement}: {
        lang: string;
        safeStatement?: ISmartSection['safeStatement'];
    }
) {
    return (
        <>
            <div className={`portfolio-details-desc portfolio-details-desc-custom`}>
                {/*<SmartMobilityBottomImage lang={lang}/>*/}
                <SmartMobilityClarificationStatement lang={lang} safeStatement={safeStatement}/>
            </div>
        </>
    )
}
