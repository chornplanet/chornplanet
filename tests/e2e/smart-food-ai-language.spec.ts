import {expect, test, type Page} from "@playwright/test";

const languageOptions = [
  {language: "en", label: "English"},
  {language: "th", label: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22"},
  {language: "fr", label: "Fran\u00E7ais"},
  {language: "ja", label: "\u65E5\u672C\u8A9E"},
  {language: "zh", label: "\u4E2D\u6587"},
  {language: "de", label: "Deutsch"},
  {language: "nl", label: "Nederlands"},
  {language: "da", label: "Dansk"},
  {language: "fi", label: "Suomi"},
  {language: "ko", label: "\uD55C\uAD6D\uC5B4"},
] as const;

const thaiLanguageLabel = languageOptions.find((option) => option.language === "th")!.label;

async function openLanguageMenu(page: Page) {
  const languageButton = page.getByRole("button", {name: "Select language"});

  await expect(languageButton).toBeVisible();
  await languageButton.click({noWaitAfter: true});

  const menuItems = page.locator(".dropdown-langs li");
  await expect(menuItems).toHaveCount(languageOptions.length);

  for (const option of languageOptions) {
    await expect(menuItems.filter({hasText: option.label}).first()).toBeVisible();
  }

  return menuItems;
}

async function expectThaiSmartFoodAiPage(page: Page) {
  await expect(page).toHaveURL(/\/th\/smart-food-ai\/?$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "th");
  await expect(page.locator(".smart-food-ai-hero")).toContainText(/[\u0E00-\u0E7F]/);
  await expect(page.locator(".smart-food-ai-hero")).not.toContainText("AI-native food service platform");
  await expect(page.getByText("This Page Couldn't Load")).toHaveCount(0);
}

test.describe("Smart Food AI language switching", () => {
  test("shows the canonical full language list in order", async ({page}) => {
    await page.goto("/en/smart-food-ai/", {waitUntil: "domcontentloaded"});

    const menuItems = await openLanguageMenu(page);
    await expect(menuItems).toHaveText(languageOptions.map((option) => option.label));
  });

  test("switches desktop Smart Food AI content from English to Thai", async ({page}) => {
    await page.setViewportSize({width: 1366, height: 768});
    await page.goto("/en/smart-food-ai/", {waitUntil: "domcontentloaded"});

    const menuItems = await openLanguageMenu(page);
    await menuItems.filter({hasText: thaiLanguageLabel}).first().click();

    await expectThaiSmartFoodAiPage(page);
  });

  test("shows all language labels and loads Thai content on mobile", async ({page}) => {
    await page.setViewportSize({width: 390, height: 844});
    await page.goto("/en/smart-food-ai/", {waitUntil: "domcontentloaded"});

    const menuItems = await openLanguageMenu(page);
    await menuItems.filter({hasText: thaiLanguageLabel}).first().click();

    await expectThaiSmartFoodAiPage(page);
  });
});
