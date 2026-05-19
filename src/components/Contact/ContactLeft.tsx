import "@/styles/pages/about.scss"
import React from "react";
import BottomImageLeft from "@/components/Contact/BottomImage/BottomImageLeft";

export default function ContactLeft() {
    return (
        <div className="col-lg-4 contact-col-left">

            <div className="about-image-warp contact-map-wrapper">
                <iframe
                    title="Chorn Planet location map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.9175985239553!2d99.05691257580237!3d18.84633135914133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42b952d661374a4f%3A0x924779e8f9fe3248!2sCHORN!5e0!3m2!1sen!2sth!4v1764398851752!5m2!1sen!2sth"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className="x-bar-animation"/>

            <div className="single-footer-widget about-bottom-image">
                <BottomImageLeft/>
            </div>
        </div>
    )
}
