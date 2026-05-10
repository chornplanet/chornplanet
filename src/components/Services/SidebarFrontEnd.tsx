"use client";

import React from "react";
import {IFrontEnd} from "@/lib/model/IFrontEnd";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {IFullStackStack} from "@/lib/model/IFullStack";
import Image from "next/image";

export default function SidebarFrontEnd({lang, frontEnd}: { lang: string; frontEnd: IFrontEnd }) {
    const pathname = usePathname();

    return (
        <>
            <div className="services-details-information ml-10 border-top">
                <ul className="framework-list">
                    {frontEnd.stacks.map((item: IFullStackStack, index: number) => {
                        if (pathname.includes(item.link)) {
                            return (
                                <li key={index}>
                                    <Link href={'/' + lang + item.link} className="active">
                                        <Image src={item.image} alt={item.alt} width="35" height="35"/>
                                        <span className="px-3">{item.features[0].title}</span>
                                    </Link>
                                </li>
                            )
                        }

                        return (
                            <li key={index}>
                                <Link href={'/' + lang + item.link}>
                                    <Image src={item.image} alt={item.alt} width="35" height="35"/>
                                    <span className="px-3">
                                        {item.features[0].title}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
