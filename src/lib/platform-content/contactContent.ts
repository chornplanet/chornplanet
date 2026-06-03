import type { ContactContentPayload } from "@/core/domain/contact-content.entity";
import { getContactContentForPublicPage } from "@/lib/contact-content/contactContent.service";
import type { IContactSocialLink } from "@/lib/model/IContact";

export type PlatformContactContent = ContactContentPayload;

const GITHUB_HREF = "https://github.com/chornplanet";
const GITHUB_DISPLAY = "github.com/chornplanet";
const LINKEDIN_HREF = "https://www.linkedin.com/company/chornplanet/";
const LINKEDIN_DISPLAY = "linkedin.com/@chornplanet";
const hiddenSocialLabels = new Set(["youtube", "facebook"]);

function normalizeContactUrl(value: string): string {
  return value.toLowerCase().replace(/\/$/, "");
}

function normalizeSocialLink(link: IContactSocialLink): IContactSocialLink {
  const label = link.label.toLowerCase();
  const href = normalizeContactUrl(link.href);

  if (label === "github" || href.includes("github.com/chorndigital")) {
    return {
      ...link,
      href: GITHUB_HREF,
      displayText: GITHUB_DISPLAY,
    };
  }

  if (
    label === "linkedin" ||
    href.includes("linkedin.com/in/khachornchit") ||
    href.includes("linkedin.com/company/chornplanet")
  ) {
    return {
      ...link,
      href: LINKEDIN_HREF,
      displayText: LINKEDIN_DISPLAY,
    };
  }

  return link;
}

function normalizePlatformContactContent(
  content: ContactContentPayload,
): PlatformContactContent {
  return {
    ...content,
    contact: {
      ...content.contact,
      github: {
        ...content.contact.github,
        link: GITHUB_HREF,
        linkText: GITHUB_DISPLAY,
      },
      linkedin: {
        ...content.contact.linkedin,
        link: LINKEDIN_HREF,
        linkText: LINKEDIN_DISPLAY,
      },
    },
    socialLinks: content.socialLinks
      .filter((link) => !hiddenSocialLabels.has(link.label.toLowerCase()))
      .filter((link) => {
        const href = normalizeContactUrl(link.href);
        return !href.includes("youtube.com") && !href.includes("facebook.com");
      })
      .map(normalizeSocialLink),
  };
}

export async function getPlatformContactContent(
  locale: string,
): Promise<PlatformContactContent> {
  const content = await getContactContentForPublicPage(locale);

  return normalizePlatformContactContent(content);
}
