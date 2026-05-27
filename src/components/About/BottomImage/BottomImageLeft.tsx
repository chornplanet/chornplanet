import React from "react";
import Image from "next/image";
import Link from "next/link";
import {ImageUrl} from "@/image/ImageUrl";

export default function BottomImageLeft() {
    return (
        <div className="social-left">
            <div className="left-row">
                <div className="about-icon-symbol">
                    <Link href="/"
                          className="chorn"
                    >
                        <Image
                            src={ImageUrl.logo.rec.sm.path}
                            alt={ImageUrl.logo.rec.sm.title}
                            width={30}
                            height={30}
                            style={{ width: 'auto', height: 'auto' }}
                        />
                    </Link>
                </div>
                <div className="chorn-text">
                    <Link href="/">
                        www.chornplanet.com
                    </Link>
                </div>
            </div>
        </div>
    )
}
