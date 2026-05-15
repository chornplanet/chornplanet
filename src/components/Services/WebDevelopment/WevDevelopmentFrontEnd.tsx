import React from "react";
import {IFrontEndStack} from "@/lib/model/IFrontEnd";
import Link from "next/link";
import Image from "next/image";
import {IFrontEnd} from "@/lib/model/IFrontEnd";

export default function WevDevelopmentFrontEnd({lang, frontEnd}: { lang: string, frontEnd: IFrontEnd }) {
    const content = frontEnd;

    return (
        <div className="services-area bg-fafafa pt-100 pb-70 addition-ptb-0">
            <div className="row">
                {content.stacks.slice(0, 3).map((item: IFrontEndStack, index: number) => (
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
