import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test("mobile drawer state has no detectable WCAG issues", async ({ page, browserName }) => {
  test.skip(browserName !== "chromium", "Menu interaction test is executed on chromium only.");

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await page.getByRole("button", { name: "Open menu" }).click();

  const menu = page.locator("#mobile-nav-drawer");
  await expect(menu).toBeVisible();

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
