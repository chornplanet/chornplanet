"use client"

import {setLanguageOption, toggleLanguageMenuVisible} from "@/provider/redux/slice/SliceApp";
import {Globe} from "lucide-react";
import React from "react";
import {useDispatch} from "react-redux";
import {useLanguageMenuVisible, useLanguageOption} from "@/provider/hooks/hookStateApp";
import {ILanguageOption} from "@/lib/model/ILanguage";
import {useRouter} from "next/navigation";
import {LanguageOptionRecord} from "@/lib/constants/languageOptions";

export default function LanguageButton(
    {lang, languageOptions}: { lang: string, languageOptions: ILanguageOption[] }
) {
    const dispatch = useDispatch();
    const languageOption = useLanguageOption()
    const languageMenuVisible = useLanguageMenuVisible()
    const router = useRouter()
    const selectedLanguageOption =
        languageOptions.find((translate) => translate.language === lang) ??
        languageOptions.find((translate) => translate.language === languageOption?.language) ??
        LanguageOptionRecord[lang] ??
        languageOption;

    const changeLanguage = (languageOption: ILanguageOption) => {
        const normalizedLanguageOption = LanguageOptionRecord[languageOption.language];

        if (!normalizedLanguageOption) {
            return;
        }

        dispatch(setLanguageOption(normalizedLanguageOption));
        dispatch(toggleLanguageMenuVisible());

        const pathSegments = window.location.pathname.split("/");
        const currentPath = pathSegments.slice(2).join("/") || "";
        const search = window.location.search;
        const hash = window.location.hash;

        router.push(`/${normalizedLanguageOption.language}/${currentPath}${search}${hash}`);
    }

    return (
        <div className="navbar-langs">
            <button
                onClick={() =>
                    dispatch(toggleLanguageMenuVisible())}
                className="language-button"
                type="button"
                aria-label="Select language"
            >
                <Globe size={16} color="white" style={{marginRight: "5px"}}/>
                {selectedLanguageOption.label}
            </button>
            {
                languageMenuVisible &&
                <ul className="dropdown-langs">
                    {languageOptions.map((translate) =>
                        <li key={translate.language}
                            className={translate.language == lang ? 'dropdown-active' : ''}
                            onClick={() => changeLanguage(translate)}
                        >
                            {translate.label}
                        </li>)}
                </ul>
            }
        </div>
    )
}
