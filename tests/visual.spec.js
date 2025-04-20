import { test, expect } from "@playwright/test";

const urls = ["https://www.nextiva.com/"];

const urlMap = new Map();

test.describe.parallel("visual comparison tests", () => {
  for (const url of urls) {
    const pathname =
      new URL(url).pathname.replace(/\/$/, "").replace(/\//g, "_") || "home";
    const fileName = `${pathname}.png`;
    const testTitle = `compare: ${url}`;
    urlMap.set(testTitle, url);

    test(testTitle, async ({ page }) => {
      await page.goto(url, { waitUntil: "networkidle" });
      await page.waitForTimeout(2000);

      await expect(page).toHaveScreenshot(fileName, {
        fullPage: true,
        timeout: 60000,
        stylePath: "./test_utils/screenshot.css",
        maxDiffPixelRatio: 0.02,
        maxDiffPixels: 200,
        threshold: 0.2,
      });
    });
  }

  test.afterEach(({}, testInfo) => {
    const url = urlMap.get(testInfo.title);
    const status = testInfo.status === "passed" ? "✅ PASS" : "❌ FAIL";
    console.log(`${status}: ${url}`);
  });
});
