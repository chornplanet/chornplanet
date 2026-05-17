"use client"

import {useDispatch} from "react-redux";
import {setCookieConsent} from "@/provider/redux/slice/SliceApp";

export default function ConsentCookieButton(
    {buttonText}: { buttonText: string }) {
    const dispatch = useDispatch();

    const handleAccept = () => {
        const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

        // Inject Google Tag Manager script
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
        script.async = true;
        document.body.appendChild(script);
        window.dataLayer = window.dataLayer || [];

        function gtag(p0: string, p1: any) {
            window.dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', GA_TRACKING_ID);

        const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000;
        const secureAttribute = window.location.protocol === "https:" ? "Secure" : "";
        document.cookie = [
            "cookie_consent=true",
            "Path=/",
            `Expires=${new Date(Date.now() + oneYearInMilliseconds).toUTCString()}`,
            "Max-Age=31536000",
            "SameSite=Lax",
            secureAttribute.trim(),
        ].filter(Boolean).join("; ");
        dispatch(setCookieConsent());
    };

    return (
        <button
            className="btn btn-success add-button"
            onClick={handleAccept}>
            {buttonText}
        </button>
    )
}
