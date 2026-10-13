import { expect, test } from "@playwright/test";

test("home page loads", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: "Mikael Boutin" })).toBeVisible();
});

test("the call to action leads to the contact links", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Get in touch" }).click();
  await expect(page.getByRole("link", { name: /Email/ })).toBeInViewport();
});
