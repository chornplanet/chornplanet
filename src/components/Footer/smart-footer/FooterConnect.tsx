import React from "react";
import {IFooter, IFooterDetail} from "@/lib/model/IFooter";
import Link from "next/link";

function shouldShowConnectItem(item: IFooterDetail): boolean {
    const label = item.label.toLowerCase();
    const link = item.link.toLowerCase();

    return item.link !== undefined &&
        label !== "contact" &&
        link !== "/contact/" &&
        label !== "youtube" &&
        label !== "facebook" &&
        !link.includes("youtube.com") &&
        !link.includes("youtu.be") &&
        !link.includes("facebook.com");
}

export default function FooterConnect({lang, footer}: { lang: string, footer: IFooter }) {
    return (
        <div className="footer-right-column">
            <div className="single-footer-widget pl-5">
                <h3 className='pb-2'>{footer.connect.title}</h3>
                <div className="footer-bar footer-bar-bottom-addition"/>
                <ul className="quick-links ul-footer">
                    {footer.connect.items
                        .filter(shouldShowConnectItem)
                        .map((item: IFooterDetail, index: number) => {

                            if (item.link.startsWith("http")) {
                                return (<li key={index}>
                                    <Link href={item.link} target={'_blank'}>
                                        {item.label}
                                    </Link>
                                </li>)
                            }

                            return (
                                <li key={index}>
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
