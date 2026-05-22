import React from "react";
import {IFooter, IFooterDetail} from "@/lib/model/IFooter";
import Link from "next/link";

const footerTechnology: Record<string, string> = {
    en: "AI Platform Development",
    th: "การพัฒนาแพลตฟอร์ม AI",
    zh: "AI 平台开发",
    ja: "AIプラットフォーム開発",
    ko: "AI 플랫폼 개발",
    fr: "Développement de plateformes IA",
    de: "Entwicklung von KI-Plattformen",
    es: "Desarrollo de plataformas de IA",
    it: "Sviluppo di piattaforme AI",
    vi: "Phát triển nền tảng AI",
};

const hiddenTechnologyLinks = new Set([
    "/technical-expertise/ai-solutions",
    "/ai-companions/fah",
]);

function normalizeFooterPath(path: string): string {
    return path.endsWith("/") ? path.slice(0, -1) : path;
}

function shouldShowTechnologyItem(item: IFooterDetail): boolean {
    return item.link !== undefined && !hiddenTechnologyLinks.has(normalizeFooterPath(item.link));
}

function getTechnologyItemLabel(item: IFooterDetail, lang: string): string {
    if (
        normalizeFooterPath(item.link) === "/technology" ||
        normalizeFooterPath(item.link) === "/technical-expertise/web-development"
    ) {
        return footerTechnology[lang] ?? footerTechnology.en;
    }

    return item.label;
}

export default function FooterTechnology({lang, footer}: { lang: string, footer: IFooter }) {
    return (
        <div className="footer-right-column">
            <div className="single-footer-widget pl-5">
                <h3 className='pb-2'>{footer.technology.title}</h3>
                <div className="footer-bar footer-bar-bottom-addition"/>
                <ul className="quick-links ul-footer">
                    {footer.technology.items
                        .filter(shouldShowTechnologyItem)
                        .map((item: IFooterDetail, index: number) => {
                            const isExternalLink = item.link.startsWith("http");

                            return (
                                <li key={index}>
                                    <Link
                                        href={isExternalLink ? item.link : '/' + lang + item.link}
                                        target={isExternalLink ? '_blank' : undefined}
                                        rel={isExternalLink ? 'noopener noreferrer' : undefined}
                                    >
                                        {getTechnologyItemLabel(item, lang)}
                                    </Link>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    )
}
