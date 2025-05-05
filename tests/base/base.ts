import { test } from '@playwright/test';

import { MAIN_PAGE_URL } from '../../env';

export const base = test.extend({
    page: async ({ page }, use) => {
        await page.goto(MAIN_PAGE_URL);
        await use(page);
    },
    });