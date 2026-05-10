import "@/styles/about.scss"

import React from "react";
import {
    FaEnvelope,
    FaMapMarkedAlt,
    FaPhone,
    FaPlaneDeparture,
    FaShoppingBag,
    FaUniversity
} from "react-icons/fa";
import {IContact, IContactSocialLink} from "@/lib/model/IContact";

export default function ContactRight({
    contact,
    socialLinks,
}: {
    contact: IContact;
    socialLinks: IContactSocialLink[];
}) {
    const roles = contact.contactInfo?.roles || [];
    const safeSocialLinks = socialLinks || [];

    return (
        <div className="col-lg-8 contact-col-right">
            <div className="about-content about-contact">
                <div className="roles">
                    {roles.map((item, index) => {
                        return (
                            <div key={index} className="role">
                                <h3>{item.title}<span>{item.span}</span></h3>
                                <>
                                    {
                                        item.email &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon">
                                                    <FaEnvelope/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.email}
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.officePhone &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon">
                                                    <FaPhone/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.officePhone}
                                            </div>
                                        </div>
                                    }

                                    {
                                        contact.location &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon">
                                                    <FaMapMarkedAlt/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                <a target={"_blank"} href={contact.location.link}>
                                                    {contact.location.label}
                                                </a>
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.nearbyShopping &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon nearby">
                                                    <FaShoppingBag/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.nearbyShopping}
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.nearbyUniversity1 &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon nearby">
                                                    <FaUniversity/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.nearbyUniversity1}
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.nearbyUniversity2 &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon nearby">
                                                    <FaUniversity/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.nearbyUniversity2}
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.nearbyAirport &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon nearby">
                                                    <FaPlaneDeparture/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.nearbyAirport}
                                            </div>
                                        </div>
                                    }
                                </>
                            </div>
                        )
                    })}
                </div>

                <div className="contact-social-container">
                    <h3>Social & GitHub</h3>

                    {safeSocialLinks.map((item) => (
                        <div key={item.href} className="contact-social-item">
                            <div className="about-icon-symbol">
                                <a href={item.href}
                                   className={item.linkClassName}
                                   target="_blank"
                                   aria-label={item.label}
                                >
                                    <i className={`${item.iconClassName} hover-rotate`}/>
                                </a>
                            </div>
                            <div className="linkedin-text">
                                <a href={item.href}
                                   target="_blank"
                                >
                                    {item.displayText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
