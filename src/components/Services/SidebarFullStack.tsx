"use client";

import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {IFullStackStack} from "@/lib/model/IFullStack";
import Image from "next/image";
import {IFullStack} from "@/lib/model/IFullStack";

export default function SidebarFullStack({lang, fullStack}: { lang: string; fullStack: IFullStack }) {
    const pathname = usePathname();

    return (
        <>
            <div className="services-details-information ml-10 border-top">
                <ul className="framework-list">
                    {fullStack.stacks.map((item: IFullStackStack, index: number) => {
                        if (pathname.includes(item.link)) {
                            return (
                                <li key={index}>
                                    <Link href={'/' + lang + item.link} className="active">
                                        <Image src={item.image} alt={item.alt} width="50" height="50"/>
                                        <span className="px-3">{item.features[0].title}</span>
                                    </Link>
                                </li>
                            )
                        }

                        return (
                            <li key={index}>
                                <Link href={'/' + lang + item.link}>
                                    <Image src={item.image} alt={item.alt} width="50" height="50"/>
                                    <span className="px-3">{item.features[0].title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
