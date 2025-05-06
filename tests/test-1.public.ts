import {expect, test } from '@playwright/test';
import { BASE_URL } from '../env';


// if the user does not login, the page should show the login button
test('The user should see the Login button', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('button:has-text("Login")')).toBeVisible();
});