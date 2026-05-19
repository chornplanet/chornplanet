import React from "react";
import Link from "next/link";
import Image from "next/image";
import {ImageUrl} from "@/image/ImageUrl";
import LanguageButton from "@/components/Navbar/LanguageButton";
import HamburgerButton from "@/components/Navbar/HamburgerButton";
import DesktopNavbarContainer from "@/components/Navbar/DesktopNavbarContainer";
import {INavbar} from "@/lib/model/INavbar";
import {ILanguageOption} from "@/lib/model/ILanguage";

export default function NavbarContainer(
    {lang, navbar, languageOptions}: { lang: string, navbar: INavbar[], languageOptions: ILanguageOption[] }
) {
    return (
        <div id="navbar" className="navbar-area navbar-container">
            <div className="main-navbar">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/" className="navbar-brand add-navbar-logo">
                            <Image
                                src={ImageUrl.logo.rec.md.path}
                                alt={ImageUrl.logo.rec.md.title}
                                width={128}
                                height={128}
                            />
                        </Link>

                        <LanguageButton lang={lang} languageOptions={languageOptions}/>
                        <HamburgerButton/>
                        <DesktopNavbarContainer lang={lang} navbar={navbar}/>
                    </nav>
                </div>
            </div>
        </div>
    )
}
