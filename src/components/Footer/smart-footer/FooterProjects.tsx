import React from "react";
import {IFooter, IFooterDetail} from "@/lib/model/IFooter";
import Link from "next/link";

function normalizeProjectLink(link: string): string {
    return link.endsWith("/") && link !== "/" ? link.slice(0, -1) : link;
}

function getProjectHighlightClass(item: IFooterDetail): string | undefined {
    const link = normalizeProjectLink(item.link);

    if (link === "/ai-luxury" || link === "/luxury") {
        return "footer-featured-link footer-featured-link--luxury";
    }

    if (link === "/smart-food-ai" || link === "/smart-food") {
        return "footer-featured-link footer-featured-link--smart-food";
    }

    if (link.toLowerCase().includes("tiktok.com/@chornplanet")) {
        return "footer-featured-link footer-featured-link--tiktok";
    }

    return undefined;
}

export default function FooterProjects({lang, footer}: { lang: string, footer: IFooter }) {
    return (
        <div className="footer-right-column footer-right-column--projects">
            <div className="single-footer-widget pl-5">
                <h3 className='pb-2'>{footer.project.title}</h3>
                <div className="footer-bar footer-bar-bottom-addition"/>
                <ul className="quick-links ul-footer">
                    {footer.project.items
                        .filter((item: IFooterDetail) => item.link !== undefined)
                        .map((item: IFooterDetail, index: number) => {
                            const highlightClassName = getProjectHighlightClass(item);

                            if (item.link.startsWith("http")) {
                                return (<li key={index} className={highlightClassName}>
                                    <Link href={item.link} target={'_blank'}>
                                        {item.label}
                                    </Link>
                                </li>)
                            }

                            return (
                                <li key={index} className={highlightClassName}>
                                    <Link href={`/${lang}` + item.link}>
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
