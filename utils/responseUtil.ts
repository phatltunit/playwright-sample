import { Page, expect } from "@playwright/test";

export async function testResponse(page: Page, url: string) {
  const repsonse = await page.waitForResponse(url);
  expect(repsonse.status()).toBe(200);
  return repsonse;
}
