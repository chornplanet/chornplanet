import React from "react";
import {IFrontEndStack} from "@/lib/model/IFrontEnd";
import Image from "next/image";
import Link from "next/link";
import {IFullStack} from "@/lib/model/IFullStack";

export default function WebDevelopmentBackEnd({lang, fullStack}: { lang: string, fullStack: IFullStack }) {
    const fullstack = fullStack
    const displayItems = [
        fullstack.stacks[3],
        fullstack.stacks[0],
        fullstack.stacks[2]
    ].filter(Boolean)

    return (
        <div className="services-area bg-fafafa pt-100 pb-70 addition-ptb-0">
            <div className="row">
                {displayItems.map((item: IFrontEndStack, index: number) => (
                    <div key={index} className="col-lg-4 col-md-6">
                        <Link href={'/' + lang + item.link}>
                            <div className="home-frontend-box">
                                <div className="icon">
                                    {
                                        item.image &&
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={150}
                                            height={150}
                                        />
                                    }
                                </div>

                                <h3> {item.title} </h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
