type LocalizedContentFallbackOptions<T> = {
    locale: string;
    fallbackLocale?: string;
    context: string;
    load: (locale: string) => Promise<T>;
    fallback?: () => T | Promise<T>;
};

function logLocalizedContentError(context: string, locale: string, error: unknown) {
    console.error(`[localized-content] ${context} failed for locale="${locale}"`, error);
}

export async function loadLocalizedContentWithFallback<T>(
    {
        locale,
        fallbackLocale = 'en',
        context,
        load,
        fallback,
    }: LocalizedContentFallbackOptions<T>
): Promise<T> {
    try {
        return await load(locale);
    } catch (localeError) {
        logLocalizedContentError(context, locale, localeError);
    }

    if (locale !== fallbackLocale) {
        try {
            return await load(fallbackLocale);
        } catch (fallbackError) {
            logLocalizedContentError(`${context} English fallback`, fallbackLocale, fallbackError);
        }
    }

    if (fallback) {
        return fallback();
    }

    throw new Error(
        `[localized-content] ${context} failed for locale="${locale}" and fallback="${fallbackLocale}"`
    );
}
