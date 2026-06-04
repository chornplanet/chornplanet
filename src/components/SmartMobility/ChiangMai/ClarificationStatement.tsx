import React from "react";
import {ISmartSection} from "@/lib/model/ISmartMobility";

export default function ClarificationStatement(
    {safeStatement}: { lang: string; safeStatement?: ISmartSection['safeStatement'] }
) {
    return (
        <div className="smart-mobility-premium__statement">
            <strong>
                {
                    safeStatement &&
                    safeStatement.title
                }
            </strong>
            <p>
                {
                    safeStatement &&
                    safeStatement.description
                }
            </p>
        </div>
    )
}
