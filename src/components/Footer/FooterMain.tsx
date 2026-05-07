// src/components/Footer/FooterMain.tsx

import React from "react";
import FooterLogoSocial from "./Left/FooterLogoSocial";
import FooterImportantLinks from "@/components/Footer/smart-footer/FooterImportantLinks";
import CopyRight from "./FooterCopyRight";
import FooterProjects from "@/components/Footer/smart-footer/FooterProjects";
import FooterSmartCity from "@/components/Footer/smart-footer/FooterSmartCity";
import FooterConnect from "@/components/Footer/smart-footer/FooterConnect";
import FooterTechnology from "@/components/Footer/smart-footer/FooterTechnology";
import {IFooter} from "@/lib/model/IFooter";
import {getLayoutContentForPublicPage} from "@/lib/layout-content/layoutContent.service";

export default async function FooterMain({lang, footer}: { lang: string, footer?: IFooter }) {
    const resolvedFooter = footer ?? (await getLayoutContentForPublicPage(lang)).footer;

    return (
        <>
            <div className="footer-area footer-container">
                <div className="footer-left">
                    <FooterLogoSocial lang={lang} footer={resolvedFooter}/>
                </div>

                <div className="footer-right">
                    <FooterImportantLinks lang={lang} footer={resolvedFooter}/>
                    <FooterProjects lang={lang} footer={resolvedFooter}/>
                    <FooterSmartCity lang={lang} footer={resolvedFooter}/>
                    <FooterTechnology lang={lang} footer={resolvedFooter}/>
                    <FooterConnect lang={lang} footer={resolvedFooter}/>
                </div>
            </div>
            <CopyRight lang={lang} footer={resolvedFooter}/>
        </>
    )
}
