import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = ["/", "/work", "/about", "/contact"];

for (const route of routes) {
  test(`${route} has no accessibility violations`, async ({ page }) => {
    await page.goto(route);

    const results = await new AxeBuilder({ page }).analyze();

    const criticalViolations = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    if (criticalViolations.length > 0) {
      console.log("Violations found:", criticalViolations);
    }

    expect(criticalViolations).toEqual([]);
  });
}

test("skip-to-main link is focusable", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");

  const skipLink = page.locator('a[href="#main-content"]');
  await expect(skipLink).toBeFocused();
});

test("main content has correct id", async ({ page }) => {
  await page.goto("/");

  const main = page.locator("main#main-content");
  await expect(main).toHaveCount(1);
});

test("nav has aria-label", async ({ page }) => {
  await page.goto("/");

  const nav = page.locator("nav[aria-label='Main navigation']");
  await expect(nav).toHaveCount(1);
});