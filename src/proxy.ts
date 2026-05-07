// src/proxy.ts

import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';
import {LOCALES} from "@/lib/SiteUrlLocales";

const defaultLocale = 'en';

export function proxy(req: NextRequest) {
    const {pathname} = req.nextUrl;
    const cookie_consent: string = req.cookies.get("cookie_consent")?.value || 'false';

    // Skip requests
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/sitemap') ||
        pathname.startsWith('/images') ||
        pathname.startsWith('/images-ai') ||
        pathname.startsWith('/smart-city') ||
        pathname.startsWith('/smart-mobility') ||
        pathname.startsWith('/chorn-images') ||
        pathname.startsWith('/internal-images') ||
        pathname.startsWith('/contracts') ||
        pathname.startsWith('/fonts') ||
        pathname.startsWith('/api/sitemap') ||
        pathname.startsWith('/api/openai') ||
        pathname === '/googleaa85449beb5ca13c.html' ||
        pathname === '/favicon.ico' ||
        pathname === '/robots.txt'
    ) {
        return NextResponse.next();
    }

    // Extract the locale from the pathname
    const pathnameParts = pathname.split('/');
    const locale = pathnameParts[1];                    // en

    // Redirect root ("/") to the default locale ("/en")
    if (
        pathname === '/' ||
        !LOCALES.includes(locale)
    ) {
        const newPathName = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
        const url = new URL(newPathName, req.url);
        return NextResponse.redirect(url);
    }

    // Pass locale context to Server Components through request headers.
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-cookie-consent', cookie_consent);
    requestHeaders.set('x-locale', locale);
    requestHeaders.set('x-pathname', pathname);

    const res = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
    res.headers.set('x-cookie-consent', cookie_consent);
    res.headers.set('x-locale', locale);
    res.headers.set('x-pathname', pathname);
    return res
}

// Apply proxy to all paths
export const config = {
    matcher: [
        '/',
        '/(th|en|fr|ja|zh|de|nl|da|fi|ko)/:path*',
        '/api/:path*'
    ],
};
