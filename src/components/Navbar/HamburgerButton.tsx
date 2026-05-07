"use client"

import {toggleMobileMenuVisible} from "@/provider/redux/slice/SliceApp";
import React from "react";
import {useDispatch} from "react-redux";
import {useMobileMenuVisible} from "@/provider/hooks/hookStateApp";

export default function HamburgerButton() {
    const dispatch = useDispatch();
    const mobileMenuVisible = useMobileMenuVisible()

    const classTwo = mobileMenuVisible
        ? "navbar-toggler navbar-toggler-right collapsed"
        : "navbar-toggler navbar-toggler-right";

    return (
        <button
            onClick={() =>
                dispatch(toggleMobileMenuVisible())}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!mobileMenuVisible}
            aria-label="Toggle navigation"
        >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
        </button>
    )
}
