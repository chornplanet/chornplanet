import { expect, test, type Page } from "@playwright/test";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config({ path: ".env.production" });
dotenv.config({ path: ".env.local" });
dotenv.config();

const locales = ["da", "de", "en", "fi", "fr", "ja", "ko", "nl", "th", "zh"] as const;

type Locale = (typeof locales)[number];

type LanguageOption = {
  language: Locale;
  label: string;
};

type HomePageContent = {
  heroSection: {
    headline: string;
    paragraph: string;
    softTexts: Array<{ title: string; description: string }>;
  };
  humanDailyFlow: { headline: string; paragraph: string };
  localToGlobal: { headline: string; paragraph: string };
  systemExplainers: { headline: string; paragraph: string };
  mobilityFocus: { headline: string; paragraph: string };
  citySystems: { headline: string; paragraph: string };
  globalPatterns: { headline: string; paragraph: string };
  urbanSignals: { headline: string; paragraph: string };
  editorialPositioning: { headline: string; paragraphs: string[] };
  smartCityTags: string[];
};

type LayoutContent = {
  languageOptions: LanguageOption[];
};

const mongoUri = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DATABASE;
const homepageCollectionName = process.env.MONGODB_COLLECTION_HOMEPAGE_CONTENT ?? "homepage_content";
const layoutCollectionName = process.env.MONGODB_COLLECTION_LAYOUT_CONTENT ?? "layout_content";

if (!mongoUri) {
  throw new Error("MONGODB_URI is required for Playwright locale tests.");
}

if (!databaseName) {
  throw new Error("MONGODB_DATABASE is required for Playwright locale tests.");
}

const mongoClient = new MongoClient(mongoUri);
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3100";

const heroSectionUiExpected: Record<Locale, { eyebrow: string; primaryAction: string; secondaryAction: string }> = {
  da: {
    eyebrow: "Chorn Planet-systemer",
    primaryAction: "Læs historien",
    secondaryAction: "Se Smart Food AI",
  },
  de: {
    eyebrow: "Chorn Planet Systeme",
    primaryAction: "Geschichte lesen",
    secondaryAction: "Smart Food AI ansehen",
  },
  en: {
    eyebrow: "Chorn Planet systems",
    primaryAction: "Read the story",
    secondaryAction: "View Smart Food AI",
  },
  fi: {
    eyebrow: "Chorn Planet -järjestelmät",
    primaryAction: "Lue tarina",
    secondaryAction: "Katso Smart Food AI",
  },
  fr: {
    eyebrow: "Systèmes Chorn Planet",
    primaryAction: "Lire l'histoire",
    secondaryAction: "Voir Smart Food AI",
  },
  ja: {
    eyebrow: "Chorn Planet のシステム",
    primaryAction: "ストーリーを読む",
    secondaryAction: "Smart Food AI を見る",
  },
  ko: {
    eyebrow: "Chorn Planet 시스템",
    primaryAction: "스토리 읽기",
    secondaryAction: "Smart Food AI 보기",
  },
  nl: {
    eyebrow: "Chorn Planet-systemen",
    primaryAction: "Lees het verhaal",
    secondaryAction: "Bekijk Smart Food AI",
  },
  th: {
    eyebrow: "ระบบของ Chorn Planet",
    primaryAction: "อ่านเรื่องราว",
    secondaryAction: "ดู Smart Food AI",
  },
  zh: {
    eyebrow: "Chorn Planet 系统",
    primaryAction: "阅读故事",
    secondaryAction: "查看 Smart Food AI",
  },
};

const highlightSmartFoodExpected: Record<
  Locale,
  { eyebrow: string; title: string; text: string; primaryAction: string; secondaryAction: string }
> = {
  da: {
    eyebrow: "Smart Food AI showcase",
    title: "AI-chatbestilling",
    text: "Kunder kan bestille via chat ved at vælge et måltid, stille spørgsmål eller bekræfte deres bestilling i en enkel samtale.",
    primaryAction: "Udforsk Smart Food AI",
    secondaryAction: "Se hele workflowet",
  },
  de: {
    eyebrow: "Smart Food AI Showcase",
    title: "KI-Chat-Bestellung",
    text: "Kunden können per Chat bestellen, indem sie ein Gericht auswählen, Fragen stellen oder ihre Bestellung in einem einfachen Gespräch bestätigen.",
    primaryAction: "Smart Food AI entdecken",
    secondaryAction: "Gesamten Workflow ansehen",
  },
  en: {
    eyebrow: "Smart Food AI showcase",
    title: "AI Chat Ordering",
    text: "Customers can order through chat by selecting a meal, asking questions, or confirming their order in a simple conversation.",
    primaryAction: "Explore Smart Food AI",
    secondaryAction: "See the full workflow",
  },
  fi: {
    eyebrow: "Smart Food AI -esittely",
    title: "AI-chat-tilaaminen",
    text: "Asiakkaat voivat tilata chatin kautta valitsemalla aterian, esittämällä kysymyksiä tai vahvistamalla tilauksensa yksinkertaisessa keskustelussa.",
    primaryAction: "Tutustu Smart Food AI:hin",
    secondaryAction: "Katso koko työnkulku",
  },
  fr: {
    eyebrow: "Vitrine Smart Food AI",
    title: "Commande par chat IA",
    text: "Les clients peuvent commander par chat en choisissant un repas, en posant des questions ou en confirmant leur commande dans une conversation simple.",
    primaryAction: "Explorer Smart Food AI",
    secondaryAction: "Voir tout le flux de travail",
  },
  ja: {
    eyebrow: "Smart Food AI ショーケース",
    title: "AIチャット注文",
    text: "顧客はチャットを通じて、食事を選択したり、質問したり、簡単な会話の中で注文を確認したりできます。",
    primaryAction: "Smart Food AI を見る",
    secondaryAction: "ワークフロー全体を見る",
  },
  ko: {
    eyebrow: "Smart Food AI 쇼케이스",
    title: "AI 채팅 주문",
    text: "고객은 채팅을 통해 메뉴를 선택하고, 질문을 하거나, 간단한 대화 안에서 주문을 확인할 수 있습니다.",
    primaryAction: "Smart Food AI 살펴보기",
    secondaryAction: "전체 워크플로 보기",
  },
  nl: {
    eyebrow: "Smart Food AI showcase",
    title: "AI-chatbestelling",
    text: "Klanten kunnen via chat bestellen door een maaltijd te kiezen, vragen te stellen of hun bestelling in een eenvoudig gesprek te bevestigen.",
    primaryAction: "Ontdek Smart Food AI",
    secondaryAction: "Bekijk de volledige workflow",
  },
  th: {
    eyebrow: "โชว์เคส Smart Food AI",
    title: "การสั่งอาหารผ่านแชต AI",
    text: "ลูกค้าสามารถสั่งอาหารผ่านแชตได้ โดยเลือกเมนู สอบถามข้อมูล หรือยืนยันคำสั่งซื้อผ่านบทสนทนาที่เข้าใจง่าย",
    primaryAction: "สำรวจ Smart Food AI",
    secondaryAction: "ดูเวิร์กโฟลว์ทั้งหมด",
  },
  zh: {
    eyebrow: "Smart Food AI 展示",
    title: "AI 聊天点餐",
    text: "客户可以通过聊天选择餐品、提出问题，或在简单对话中确认订单。",
    primaryAction: "探索 Smart Food AI",
    secondaryAction: "查看完整流程",
  },
};

const localToGlobalUiExpected: Record<Locale, { footerLink: string }> = {
  da: { footerLink: "Se hvordan lokalt liv bliver et globalt signal" },
  de: { footerLink: "Sehen, wie lokales Leben zu einem globalen Signal wird" },
  en: { footerLink: "See how local life becomes a global signal" },
  fi: { footerLink: "Katso, miten paikallinen elämä muuttuu globaaliksi signaaliksi" },
  fr: { footerLink: "Voir comment la vie locale devient un signal mondial" },
  ja: { footerLink: "地域の暮らしが世界的なシグナルになる流れを見る" },
  ko: { footerLink: "지역의 삶이 글로벌 신호가 되는 방식 보기" },
  nl: { footerLink: "Bekijk hoe lokaal leven een wereldwijd signaal wordt" },
  th: { footerLink: "ดูว่าชีวิตท้องถิ่นกลายเป็นสัญญาณระดับโลกได้อย่างไร" },
  zh: { footerLink: "查看本地生活如何成为全球信号" },
};

async function getLayoutContent(locale: Locale): Promise<LayoutContent> {
  const content = await mongoClient
    .db(databaseName)
    .collection<LayoutContent>(layoutCollectionName)
    .findOne({ locale }, { projection: { languageOptions: 1 } });

  expect(content, `layout content should exist for ${locale}`).toBeTruthy();
  return content!;
}

async function getHomePageContent(locale: Locale): Promise<HomePageContent> {
  const content = await mongoClient
    .db(databaseName)
    .collection<HomePageContent>(homepageCollectionName)
    .findOne({ locale });

  expect(content, `homepage content should exist for ${locale}`).toBeTruthy();
  return content!;
}

function firstSentence(text: string): string {
  return text.split(".")[0].trim();
}

async function acceptCookiesIfVisible(page: Page) {
  const acceptCookies = page.getByRole("button", { name: "Accept Cookies" });

  if (await acceptCookies.isVisible().catch(() => false)) {
    await acceptCookies.click();
  }
}

async function setCookieConsent(page: Page) {
  await page.context().addCookies([
    {
      name: "cookie_consent",
      value: "true",
      url: baseURL,
    },
  ]);
}

test.describe("home locale switching", () => {
  test.beforeAll(async () => {
    await mongoClient.connect();
  });

  test.afterAll(async () => {
    await mongoClient.close();
  });

  for (const locale of locales) {
    test(`renders localized home sections after selecting ${locale}`, async ({ page }) => {
      const englishLayout = await getLayoutContent("en");
      const targetLanguage = englishLayout.languageOptions.find((option) => option.language === locale);
      expect(targetLanguage, `language option for ${locale}`).toBeTruthy();

      await setCookieConsent(page);
      await page.goto("/en/", { waitUntil: "domcontentloaded" });
      await page.waitForLoadState("networkidle");
      await acceptCookiesIfVisible(page);

      const languageButton = page.getByRole("button", { name: "Select language" });
      await expect(languageButton).toBeVisible();
      await languageButton.click({ noWaitAfter: true });
      await expect(page.locator(".dropdown-langs")).toBeVisible();
      await page.locator(".dropdown-langs li").filter({ hasText: targetLanguage!.label }).first().click();

      await expect(page).toHaveURL(new RegExp(`/${locale}/?$`));
      await expect(page.locator("html")).toHaveAttribute("lang", locale);

      const content = await getHomePageContent(locale);
      const heroUi = heroSectionUiExpected[locale];
      const smartFood = highlightSmartFoodExpected[locale];
      const localToGlobalUi = localToGlobalUiExpected[locale];

      await expect(page.locator(".smart-hero__eyebrow")).toHaveText(heroUi.eyebrow);
      await expect(page.locator(".smart-hero__headline")).toHaveText(content.heroSection.headline);
      await expect(page.locator(".smart-hero__paragraph")).toContainText(firstSentence(content.heroSection.paragraph));
      await expect(page.locator(".smart-hero__cta-primary")).toHaveText(heroUi.primaryAction);
      await expect(page.locator(".smart-hero__cta-secondary")).toHaveText(heroUi.secondaryAction);

      for (const item of content.heroSection.softTexts) {
        await expect(page.locator(".smart-hero__soft-text").filter({ hasText: item.title })).toContainText(
          firstSentence(item.description),
        );
      }

      await expect(page.locator(".highlight-smart-food__eyebrow")).toHaveText(smartFood.eyebrow);
      await expect(page.locator("#highlight-smart-food-title")).toHaveText(smartFood.title);
      await expect(page.locator(".highlight-smart-food__content")).toContainText(smartFood.text);
      await expect(page.locator(".highlight-smart-food__button")).toHaveText(smartFood.primaryAction);
      await expect(page.locator(".highlight-smart-food__text-link")).toHaveText(smartFood.secondaryAction);

      await expect(page.locator(".human-daily-flow__intro h2")).toHaveText(content.humanDailyFlow.headline);
      await expect(page.locator(".human-daily-flow__intro")).toContainText(firstSentence(content.humanDailyFlow.paragraph));

      await expect(page.locator(".local-to-global__intro h2")).toHaveText(content.localToGlobal.headline);
      await expect(page.locator(".local-to-global__intro")).toContainText(firstSentence(content.localToGlobal.paragraph));
      await expect(page.locator(".local-to-global__footer a")).toHaveText(localToGlobalUi.footerLink);

      await expect(page.locator(".system-explainers__intro h2")).toHaveText(content.systemExplainers.headline);
      await expect(page.locator(".system-explainers__intro")).toContainText(
        firstSentence(content.systemExplainers.paragraph),
      );

      await expect(page.locator(".mobility-focus__intro h2")).toHaveText(content.mobilityFocus.headline);
      await expect(page.locator(".mobility-focus__intro")).toContainText(firstSentence(content.mobilityFocus.paragraph));

      await expect(page.locator(".city-systems__intro h2")).toHaveText(content.citySystems.headline);
      await expect(page.locator(".city-systems__intro")).toContainText(firstSentence(content.citySystems.paragraph));

      await expect(page.locator(".global-patterns__intro h2")).toHaveText(content.globalPatterns.headline);
      await expect(page.locator(".global-patterns__intro")).toContainText(firstSentence(content.globalPatterns.paragraph));

      await expect(page.locator(".urban-signals__intro h2")).toHaveText(content.urbanSignals.headline);
      await expect(page.locator(".urban-signals__intro")).toContainText(firstSentence(content.urbanSignals.paragraph));

      await expect(page.locator(".editorial-positioning__intro h2")).toHaveText(
        content.editorialPositioning.headline,
      );
      for (const paragraph of content.editorialPositioning.paragraphs) {
        await expect(page.locator(".editorial-positioning__intro")).toContainText(firstSentence(paragraph));
      }

      await expect(page.locator(".neo-tag-smart-city")).toContainText(content.smartCityTags[0]);
    });
  }
});
