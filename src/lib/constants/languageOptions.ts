import {ILanguageOption, ILanguageOptions} from "@/lib/model/ILanguage";

export const LanguageOptionDefinition: ILanguageOptions = {
    th: {
        language: "th",
        label: "ภาษาไทย",
        locale: "th-TH",
    },
    en: {
        language: "en",
        label: "English",
        locale: "en-US",
    },
    fr: {
        language: "fr",
        label: "Français",
        locale: "fr-FR",
    },
    ja: {
        language: "ja",
        label: "日本語",
        locale: "ja-JP",
    },
    zh: {
        language: "zh",
        label: "中文",
        locale: "zh-CN",
    },
    de: {
        language: "de",
        label: "Deutsch",
        locale: "de-DE",
    },
    nl: {
        language: "nl",
        label: "Nederlands",
        locale: "nl-NL",
    },
    da: {
        language: "da",
        label: "Dansk",
        locale: "da-DK",
    },
    fi: {
        language: "fi",
        label: "Suomi",
        locale: "fi-FI",
    },
    ko: {
        language: "ko",
        label: "한국어",
        locale: "ko-KR",
    },
};

export const LanguageCode = {
    en: LanguageOptionDefinition.en.language,
    th: LanguageOptionDefinition.th.language,
    fr: LanguageOptionDefinition.fr.language,
    ja: LanguageOptionDefinition.ja.language,
    zh: LanguageOptionDefinition.zh.language,
    de: LanguageOptionDefinition.de.language,
    nl: LanguageOptionDefinition.nl.language,
    da: LanguageOptionDefinition.da.language,
    fi: LanguageOptionDefinition.fi.language,
    ko: LanguageOptionDefinition.ko.language,
};

export const LanguageOptionRecord: Record<string, ILanguageOption> = {
    en: LanguageOptionDefinition.en,
    th: LanguageOptionDefinition.th,
    fr: LanguageOptionDefinition.fr,
    ja: LanguageOptionDefinition.ja,
    zh: LanguageOptionDefinition.zh,
    de: LanguageOptionDefinition.de,
    nl: LanguageOptionDefinition.nl,
    da: LanguageOptionDefinition.da,
    fi: LanguageOptionDefinition.fi,
    ko: LanguageOptionDefinition.ko,
};

export const LanguageOptionList: ILanguageOption[] = [
    LanguageOptionDefinition.en,
];
