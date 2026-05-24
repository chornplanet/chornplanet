// src/app/[locale]/(desktop)/layout.tsx

// Tailwind first (important for avoiding overrides)
// import "@/styles/base/tailwind.scss";

// React and components
import {DM_Sans} from "next/font/google";
import GoTop from "@/components/Layouts/GoTop";
import React from "react";
import AppProvider from "@/provider/AppProvider";
import {headers} from "next/headers";
import FooterMain from "@/components/Footer/FooterMain";
import NavbarContainer from "@/components/Navbar/NavbarContainer";
import CookieConsentChecking from "@/components/Consent/CookieConsentChecking";
import AosAnimation from "@/components/Layouts/AosAnimation";
import {Metadata} from "next";

// Styles: base and vendor
import "@/styles/base/globals.scss"
import "@/styles/vendor/bootstrap.min.css";
import "@/styles/vendor/animate.css";
import "@/styles/vendor/boxicons.min.css";
import "@/styles/vendor/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/swiper-bundle.css";
import {SpeedInsights} from "@vercel/speed-insights/next"
import {getLayoutContentForPublicPage} from "@/lib/layout-content/layoutContent.service";

// Styles: legacy template, utilities, and navigation
import "@/styles/legacy/style.scss";
import "@/styles/legacy/responsive.scss";
import "@/styles/utilities/additional.scss";
import "@/styles/navigation/navbar.scss";
import "@/styles/navigation/navbar-premium.scss";
import "@/styles/navigation/navbar-language.scss";
import "@/styles/utilities/additional-color.scss";
import "@/styles/utilities/additional-icon.scss";

// Styles: feature, platform, page, and layout surfaces
import "@/styles/smart-city/smart-bottom.scss";
import "@/styles/smart-city/smart-right.scss";
import "@/styles/home/home-slide-full.scss";
import "@/styles/smart-city/smart-privacy.scss";
import "@/styles/home/smart-hero-section.scss"
import "@/styles/home/human-daily-flow.sass.scss"
import "@/styles/home/local-to-global.scss"
import "@/styles/home/system-explainers.scss"
import "@/styles/home/mobility-focus.scss"
import "@/styles/home/city-systems.scss"
import "@/styles/home/global-patterns.scss"
import "@/styles/home/urban-signals.scss"
import "@/styles/home/editorial-positioning.scss"
import "@/styles/smart-city/smart-city-slug.scss"
import "@/styles/smart-city/smart-mobility-premium.scss"
import "@/styles/smart-city/smart-city-main.scss"
import "@/styles/platform/platform.scss"
import "@/styles/platform/smart-food.scss"
import "@/styles/platform/luxury.scss"
import "@/styles/pages/technology-page.scss"
import "@/styles/layout/footer.scss"

// Start
const dm_sans = DM_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
    metadataBase: new URL("https://chornplanet.com"),
}

export default async function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    const headers15 = await headers();
    const lang: string = headers15.get('x-locale') || 'en';
    const isCookieConsent: boolean = headers15.get('x-cookie-consent') != 'false';
    const layoutContent = await getLayoutContentForPublicPage(lang);

    return (
        <html lang={lang} data-scroll-behavior="smooth">
        <body className={dm_sans.className} suppressHydrationWarning>
        <div className="main-container">
            <AppProvider language={lang}>
                <CookieConsentChecking
                    lang={lang}
                    isCookieConsent={isCookieConsent}
                    consent={layoutContent.consent}
                />
                <NavbarContainer
                    lang={lang}
                    navbar={layoutContent.navbar}
                    languageOptions={layoutContent.languageOptions}
                />
                {children}
                <div>
                    <FooterMain lang={lang} footer={layoutContent.footer}/>
                </div>
            </AppProvider>
            <AosAnimation/>
            <GoTop/>
            <SpeedInsights/>
        </div>
        </body>
        </html>
    );
}
