import {INavbar} from "@/lib/model/INavbar";
import {NavbarGroups} from "@/lib/constants/navbarGroups"

export function sanitizeUUID(text: string): string {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

export function IsActiveNavbar(pathname: string, navbar: INavbar): boolean {
    const normalizePath = (path: string): string => {
        if (!path || path === '/') {
            return '/';
        }

        const withoutQuery = path.split('?')[0].split('#')[0];
        const withLeadingSlash = withoutQuery.startsWith('/') ? withoutQuery : `/${withoutQuery}`;
        const withoutTrailingSlash = withLeadingSlash.length > 1 && withLeadingSlash.endsWith('/')
            ? withLeadingSlash.slice(0, -1)
            : withLeadingSlash;

        return withoutTrailingSlash;
    };
    const stripLocale = (path: string): string => {
        const normalizedPath = normalizePath(path);
        const segments = normalizedPath.split('/').filter(Boolean);
        const localePattern = /^[a-z]{2}(?:-[a-z]{2})?$/i;

        if (segments.length > 0 && localePattern.test(segments[0])) {
            const strippedPath = `/${segments.slice(1).join('/')}`;
            return strippedPath === '/' ? '/' : normalizePath(strippedPath);
        }

        return normalizedPath;
    };

    const normalizedPathname = stripLocale(pathname);
    const normalizedNavbarLink = normalizePath(navbar.link);
    const normalizedActiveLinks = navbar.activeLinks?.map(normalizePath) ?? [];
    const activeCandidates = [normalizedNavbarLink, ...normalizedActiveLinks];

    if (activeCandidates.includes('/')) {
        return normalizedPathname === '/';
    }

    if (activeCandidates.some((link) => normalizedPathname === link || normalizedPathname.startsWith(`${link}/`))) {
        return true;
    }

    const firstPathname = normalizedPathname.split("/").filter(Boolean)[0] ?? "";

    const matchedGroup = NavbarGroups.find(
        (item) => item.firstPathname === firstPathname
    )?.group;

    return navbar.group === matchedGroup;
}

export function publishTime() {
    const currentDate = new Date()
    return currentDate.toISOString()
}
