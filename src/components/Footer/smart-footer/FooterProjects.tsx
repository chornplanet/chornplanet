import React from "react";
import {IFooter, IFooterDetail} from "@/lib/model/IFooter";
import Link from "next/link";

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

                            if (item.link.startsWith("http")) {
                                return (<li key={index} className={item.link === '/smart-food-ai/' ? 'footer-featured-link' : undefined}>
                                    <Link href={item.link} target={'_blank'}>
                                        {item.label}
                                    </Link>
                                </li>)
                            }

                            return (
                                <li key={index} className={item.link === '/smart-food-ai/' ? 'footer-featured-link' : undefined}>
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
