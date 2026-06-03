import { DM_Sans } from "next/font/google";
import GoTop from "@/components/Layouts/GoTop";
import React from "react";
import AppProvider from "@/provider/AppProvider";
import { headers } from "next/headers";
import FooterMain from "@/components/Footer/FooterMain";
import NavbarContainer from "@/components/Navbar/NavbarContainer";
import CookieConsentChecking from "@/components/Consent/CookieConsentChecking";
import AosAnimation from "@/components/Layouts/AosAnimation";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getLayoutContentForPublicPage } from "@/lib/layout-content/layoutContent.service";

import "@/styles/base/app.scss";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chornplanet.com"),
};

export default async function LocaleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headersList = await headers();
  const lang = headersList.get("x-locale") || "en";
  const isCookieConsent = headersList.get("x-cookie-consent") !== "false";
  const layoutContent = await getLayoutContentForPublicPage(lang);

  return (
    <html lang={lang} data-scroll-behavior="smooth">
      <body className={dmSans.className} suppressHydrationWarning>
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
            <FooterMain lang={lang} footer={layoutContent.footer} />
          </AppProvider>
          <AosAnimation />
          <GoTop />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
