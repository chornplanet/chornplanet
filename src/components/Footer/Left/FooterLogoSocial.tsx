import React from "react";
import Link from "next/link";
import Image from "next/image";
import {IFooter, IFooterDetail} from "@/lib/model/IFooter";
import {ImageUrl} from "@/image/ImageUrl";

export default function FooterLogoSocial({lang, footer}: { lang: string, footer: IFooter }) {
    return (
        <div className="footer-logo-social-container">
            <div className="single-footer-widget logo-social">
                <Link href={'/' + lang}>
                    <Image
                        src={ImageUrl.logo.md.path}
                        alt={ImageUrl.logo.md.title}
                        width={128}
                        height={128}
                    />
                </Link>

                <p className="footer-description">
                    {footer.description}
                </p>

                <ul className="social">
                    {footer.social.items.map((item: IFooterDetail, index: number) => (
                        <li key={index}>
                            <a
                                href={item.link}
                                className={item.iconClass}
                                target="_blank"
                                aria-label={item.ariaLabel}
                            >
                                <i className={item.icon}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
