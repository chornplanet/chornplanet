"use client"

import {INavbar} from "@/lib/model/INavbar";
import React, {useCallback, useEffect} from "react";
import {useMobileMenuVisible} from "@/provider/hooks/hookStateApp";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {IsActiveNavbar} from "@/lib/utils";
import clsx from "clsx";
import {useDispatch} from "react-redux";
import {setMobileMenuVisible} from "@/provider/redux/slice/SliceApp";

export default function DesktopNavbarContainer({lang, navbar}: { lang: string, navbar: INavbar[] }) {
    const mobileMenuVisible = useMobileMenuVisible()
    const pathname = usePathname()
    const dispatch = useDispatch();

    const classOne = mobileMenuVisible
        ? "collapse navbar-collapse"
        : "collapse navbar-collapse show";
    const closeMobileMenu = useCallback(() => {
        dispatch(setMobileMenuVisible(true));
    }, [dispatch]);
    const handleNavItemClick = useCallback(() => {
        window.setTimeout(closeMobileMenu, 0);
    }, [closeMobileMenu]);

    useEffect(() => {
        closeMobileMenu();
    }, [closeMobileMenu, pathname]);

    return (
        <div className={classOne} id="navbarSupportedContent">
            <div className="x-nav-premium-container">
                <div className="nav-line1-container">
                    {navbar.map(
                        (navbar: INavbar, index) => {
                            const isActiveNavbar = IsActiveNavbar(pathname, navbar)
                            return (
                                <Link
                                    key={index}
                                    href={"/" + lang + navbar.link}
                                    onClick={handleNavItemClick}
                                >
                                    <div key={index} className={clsx("nav-line1-item", {
                                        "active": isActiveNavbar
                                    })}>
                                        {navbar.label}
                                    </div>
                                </Link>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
}
