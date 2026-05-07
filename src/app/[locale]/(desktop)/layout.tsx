// src/app/[locale]/(desktop)/layout.tsx

// Tailwind first (important for avoiding overrides)
// import "@/styles/tailwind.scss";

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

// SCSS Fundamental
import "@/styles/globals.scss"
import "@/styles/bootstrap.min.css";
import "@/styles/animate.css";
import "@/styles/boxicons.min.css";
import "@/styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/swiper-bundle.css";
import {SpeedInsights} from "@vercel/speed-insights/next"
import {getLayoutContentForPublicPage} from "@/lib/layout-content/layoutContent.service";

// SCSS Custom
import "@/styles/style.scss";
import "@/styles/responsive.scss";
import "@/styles/addition.scss";
import "@/styles/x-navbar.scss";
import "@/styles/x-navbar-premium.scss";
import "@/styles/x-navbar-language.scss";
import "@/styles/x-color-style.scss";
import "@/styles/x-icon.scss";

// SCSS Smart mobility
import "@/styles/smart-bottom.scss";
import "@/styles/smart-right.scss";
import "@/styles/home-slide-full.scss";
import "@/styles/smart-privacy.scss";
import "@/styles/smart-hero-section.scss"
import "@/styles/human-daily-flow.sass.scss"
import "@/styles/local-to-global.scss"
import "@/styles/system-explainers.scss"
import "@/styles/mobility-focus.scss"
import "@/styles/city-systems.scss"
import "@/styles/global-patterns.scss"
import "@/styles/urban-signals.scss"
import "@/styles/editorial-positioning.scss"
import "@/styles/smart-city-slug.scss"
import "@/styles/smart-city-main.scss"
import "@/styles/smart-food-ai.scss"
import "@/styles/footer.scss"

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
