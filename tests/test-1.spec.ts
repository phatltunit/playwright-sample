import {expect } from '@playwright/test';
import { base as test } from './base/base';
import { testResponse } from '../utils/responseUtil';


test('Test bonus show report', async ({ page }) => {
  await page.getByRole('link', { name: 'BONUS SCHEME 2025' }).click();
  await page.getByRole('link', { name: 'Daily 2025' }).click();
  await page.getByRole('link', { name: 'Quarterly Active Personal' }).click();

  // test the search function
  await page.locator('#btnSearch').click();
  // waiting for the response and check the status to ensure the search function is working.
  await testResponse(page, '**/ajaxList');

  // searching for the data does not exist in the database
  await page.getByRole('textbox', { name: 'Search key' }).click();
  await page.getByRole('textbox', { name: 'Search key' }).fill('A1329');
  await page.locator('#btnSearch').click();
  await testResponse(page, '**/ajaxList');
  // the table should show the message "No data available in table"q
  await expect(page.locator('td')).toContainText('No data available in table');
});

test('Test run ad bonus show message run report fail', async ({ page }) => {
await page.getByRole('link', { name: 'BONUS SCHEME 2024' }).click();
await page.getByRole('link', { name: 'AD Bonus' }).click();
await page.getByRole('link', { name: 'Run Report AD Bonus' }).click();
await page.locator('#period').selectOption('20161231');
await page.locator('#btnRun').click();
await expect.soft(page.locator('#tableList')).not.toContainText('Run Report AD Fails');
});

