import { expect } from "@playwright/test";
import { base as test } from "./base/base";
import { BASE_URL } from "../env";

test("Test run ad bonus show message run report success", async ({ page }) => {
  await page.getByRole("link", { name: " COMPENSATION SETUP " }).click();
  await page.getByRole("link", { name: " Compensation Setup " }).click();
  await page.getByRole("link", { name: " C&B Setup" }).click();
  await page.locator("#select2-agentType-container").click();
  await page.getByRole("treeitem", { name: "AD - Area Manager" }).click();
  await page.getByText("×AD - Area Manager").click();
  await page.getByRole("treeitem", { name: "FM - Financial Manager" }).click();
  await page.getByRole("link", { name: " Scheme Management" }).click();
  await page.getByRole("link", { name: "" }).first().click();
  await page.locator("#linkList").click();
  await expect(page.locator("h1")).toContainText("Scheme Management");
});

test("The user should not see the login button", async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.locator('button:has-text("Login")')).not.toBeVisible();
});
