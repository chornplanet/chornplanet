// src/redux/SliceApp.ts
import {createSlice} from '@reduxjs/toolkit';
import {fallbackStateApp} from "@/provider/redux/state/StateApp";
import {LanguageOptionRecord} from "@/lib/constants/languageOptions";

export const sliceApp = createSlice({
    name: 'app',
    initialState: fallbackStateApp, // this will be overridden if preloadedState is passed
    reducers: {
        setLanguageOption: (state, action: { payload: { language: string } }) => {
            const languageOption = LanguageOptionRecord[action.payload.language] ?? LanguageOptionRecord.en;
            state.languageOption = languageOption;
            state.language = languageOption.language;
        },
        toggleMobileMenuVisible: (state) => {
            state.mobileMenuVisible = !state.mobileMenuVisible;
        },
        toggleLanguageMenuVisible: (state) => {
            state.languageMenuVisible = !state.languageMenuVisible;
        },
        saveNavbarGroup: (state, action: { payload: { navbarGroup: string } }) => {
            state.navbarGroup = action.payload.navbarGroup
        },
        saveNavbarLink: (state, action: { payload: { navbarLink: string } }) => {
            state.navbarLink = action.payload.navbarLink
        },
        setCookieConsent: (state) => {
            state.isCookieConsent = true;
        }
    },
});

export const {
    setLanguageOption,
    toggleMobileMenuVisible,
    toggleLanguageMenuVisible,
    setCookieConsent,
} = sliceApp.actions;

export default sliceApp.reducer;
