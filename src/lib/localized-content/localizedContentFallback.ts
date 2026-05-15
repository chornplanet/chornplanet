type LocalizedContentFallbackOptions<T> = {
    locale: string;
    fallbackLocale?: string;
    context: string;
    load: (locale: string) => Promise<T>;
    fallback?: () => T | Promise<T>;
    loadTimeoutMs?: number;
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
        loadTimeoutMs = 8_000,
    }: LocalizedContentFallbackOptions<T>
): Promise<T> {
    const loadWithTimeout = async (resolvedLocale: string) => {
        let timeout: ReturnType<typeof setTimeout> | undefined;

        try {
            return await Promise.race([
                load(resolvedLocale),
                new Promise<never>((_, reject) => {
                    timeout = setTimeout(
                        () => reject(new Error(
                            `[localized-content] ${context} timed out after ${loadTimeoutMs}ms for locale="${resolvedLocale}"`
                        )),
                        loadTimeoutMs
                    );
                }),
            ]);
        } finally {
            if (timeout) {
                clearTimeout(timeout);
            }
        }
    };

    try {
        return await loadWithTimeout(locale);
    } catch (localeError) {
        logLocalizedContentError(context, locale, localeError);
    }

    if (locale !== fallbackLocale) {
        try {
            return await loadWithTimeout(fallbackLocale);
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
