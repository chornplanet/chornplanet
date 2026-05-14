import FooterLogoSocial from "./Left/FooterLogoSocial";
import FooterImportantLinks from "@/components/Footer/smart-footer/FooterImportantLinks";
import CopyRight from "./FooterCopyRight";
import FooterProjects from "@/components/Footer/smart-footer/FooterProjects";
import FooterSmartCity from "@/components/Footer/smart-footer/FooterSmartCity";
import FooterConnect from "@/components/Footer/smart-footer/FooterConnect";
import FooterTechnology from "@/components/Footer/smart-footer/FooterTechnology";
import {IFooter} from "@/lib/model/IFooter";
import {getLayoutContentForPublicPage} from "@/lib/layout-content/layoutContent.service";

type FooterMainProps = {
    lang: string;
    footer?: IFooter;
};

async function resolveFooterContent(lang: string, footer?: IFooter): Promise<IFooter> {
    if (footer) {
        return footer;
    }

    const layoutContent = await getLayoutContentForPublicPage(lang);

    return layoutContent.footer;
}

export default async function FooterMain({lang, footer}: FooterMainProps) {
    const resolvedFooter = await resolveFooterContent(lang, footer);

    return (
        <footer className="site-footer" aria-label="Chorn Planet footer">
            <nav className="footer-area footer-container" aria-label="Footer navigation">
                <section className="footer-left" aria-label="Chorn Planet summary and social links">
                    <FooterLogoSocial lang={lang} footer={resolvedFooter}/>
                </section>

                <section className="footer-right" aria-label="Footer link groups">
                    <FooterImportantLinks lang={lang} footer={resolvedFooter}/>
                    <FooterProjects lang={lang} footer={resolvedFooter}/>
                    <FooterSmartCity lang={lang} footer={resolvedFooter}/>
                    <FooterTechnology lang={lang} footer={resolvedFooter}/>
                    <FooterConnect lang={lang} footer={resolvedFooter}/>
                </section>
            </nav>
            <CopyRight lang={lang} footer={resolvedFooter}/>
        </footer>
    )
}
