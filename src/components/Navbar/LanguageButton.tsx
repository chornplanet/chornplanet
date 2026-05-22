"use client"

import {Globe} from "lucide-react";
import React from "react";
import {ILanguageOption} from "@/lib/model/ILanguage";
import {LanguageOptionRecord} from "@/lib/constants/languageOptions";

export default function LanguageButton(
    {lang, languageOptions}: { lang: string, languageOptions: ILanguageOption[] }
) {
    const selectedLanguageOption =
        languageOptions.find((translate) => translate.language === "en") ??
        LanguageOptionRecord.en;

    return (
        <div className="navbar-langs">
            <button
                className="language-button"
                type="button"
                aria-label="Current language"
            >
                <Globe size={16} color="white" style={{marginRight: "5px"}}/>
                {selectedLanguageOption.label}
            </button>
        </div>
    )
}
