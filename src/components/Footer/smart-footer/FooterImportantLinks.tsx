import React from "react";
import {IFooter, IFooterDetail} from "@/lib/model/IFooter";
import Link from "next/link";

const HIDDEN_IMPORTANT_LINK_LABELS = new Set(['AI Integration', 'Technical Expertise']);

export default function FooterImportantLinks({lang, footer}: { lang: string, footer: IFooter }) {
    return (
        <div className="footer-right-column">
            <div className="single-footer-widget pl-5">
                <h3 className='pb-2'>{footer.important.title}</h3>
                <div className="footer-bar footer-bar-bottom-addition"/>
                <ul className="quick-links ul-footer">
                    {footer.important.items
                        .filter((item: IFooterDetail) => item.link !== undefined)
                        .filter((item: IFooterDetail) => !HIDDEN_IMPORTANT_LINK_LABELS.has(item.label))
                        .map((item: IFooterDetail, index: number) => (
                            <li key={index}>
                                <Link href={'/' + lang + item.link}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}
