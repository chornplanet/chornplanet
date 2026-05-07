import {INavbar} from "@/lib/model/INavbar";
import {NavbarGroups} from "@/lib/constants/navbarGroups"

export function sanitizeUUID(text: string): string {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

export function IsActiveNavbar(pathname: string, navbar: INavbar): boolean {
    const normalizedPathname = pathname.endsWith("/") ? pathname : `${pathname}/`;
    const normalizedActiveLinks = navbar.activeLinks?.map((link) => link.endsWith("/") ? link : `${link}/`);

    if (normalizedActiveLinks?.length) {
        return normalizedActiveLinks.some((link) => normalizedPathname.endsWith(link));
    }

    const pathnames = pathname.split("/");
    const firstPathname = pathnames[2] ?? "";

    const matchedGroup = NavbarGroups.find(
        (item) => item.firstPathname === firstPathname
    )?.group ?? "Home";

    return navbar.group === matchedGroup;
}

export function publishTime() {
    const currentDate = new Date()
    return currentDate.toISOString()
}
