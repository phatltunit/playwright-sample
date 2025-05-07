import { test } from "@playwright/test";
import { testResponse } from "../utils/responseUtil";
import { BASE_URL } from "../env";
import { bonusUrl } from "../utils/bonus-urls";





bonusUrl.forEach((url) => {
    test(`Test ${url} show report`, async ({ page }) => {
        await page.goto(`${BASE_URL}/bonus-report/${url}/list`);
        await page.locator("#btnSearch").click();
        await testResponse(page, "**/ajaxList");
    });
});
