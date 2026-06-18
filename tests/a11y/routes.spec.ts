import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

const routesToTest = [
  "/",
  "/articles/",
  "/articles/from-skeptic-to-convert/",
  "/articles/deep-dive-testing-genai/",
  "/products/echo-delta/",
];

for (const route of routesToTest) {
  test(`has no detectable WCAG issues on ${route}`, async ({ page }) => {
    await page.goto(route);

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
}
