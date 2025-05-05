import {expect, test } from '@playwright/test';
import { BASE_URL } from '../env';


test('Test without authenticated', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('button')).toContainText('Login');
});