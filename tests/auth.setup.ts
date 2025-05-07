import {test as setup, expect} from '@playwright/test';
import path from 'path';
import * as generator from '../utils/generate-bonus-urls'
import { LOGIN_PAGE_URL, MAIN_PAGE_URL, TEST_USER, TEST_PASSWORD } from '../env';

const authFilePath = path.join(__dirname, '../playwright/.auth/user.json');

setup('auth', async ({page}) => {
    await page.goto(LOGIN_PAGE_URL);
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(TEST_USER);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(TEST_PASSWORD);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL(MAIN_PAGE_URL);

    await expect(page.locator('img.user-image')).toBeVisible();

    await page.context().storageState({ path: authFilePath }).then(() => {
        console.log('Auth file created at:', authFilePath);
    });

    
});

setup('generate-urls', async () => {
    const list = await generator.main();
    expect(list.length).toBeGreaterThan(0);
});