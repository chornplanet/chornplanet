import React from "react";
import Link from "next/link";
import {IFooter, IFooterDetail} from "@/lib/model/IFooter";

function findFooterPolicyLink(
    footer: IFooter,
    matchPath: string,
    fallbackLabel: string
): IFooterDetail {
    const normalizedMatchPath = matchPath.replace(/\/$/, "");
    const policyLink = footer.important.items.find((item) => {
        const normalizedLink = item.link.replace(/\/$/, "");
        return normalizedLink === normalizedMatchPath || item.label === fallbackLabel;
    });

    return policyLink ?? {
        label: fallbackLabel,
        link: matchPath,
    };
}

export default function Information({lang, footer}: { lang: string, footer: IFooter }) {
    const year = new Date().getFullYear()
    const termOfService = findFooterPolicyLink(footer, "/terms-of-service/", "Terms of Service")
    const privacyPolicy = findFooterPolicyLink(footer, "/privacy-policy/", "Privacy Policy")
    const workplacePolicy = findFooterPolicyLink(footer, "/workplace-policy/", "Workplace Policy")

    return (
        <div className="copyright-area">
            <div className="container">
                <div className="copyright-area-content copyright-area-content-x">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>
                                Copyright &copy; {year} by <Link href={'/' + lang}>Chorn Planet</Link>
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link
                                        href={'/' + lang + termOfService.link}>
                                        {termOfService.label}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/' + lang + privacyPolicy.link}>
                                        {privacyPolicy.label}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/' + lang + workplacePolicy.link}>
                                        {workplacePolicy.label}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
