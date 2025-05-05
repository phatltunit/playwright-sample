import {expect } from '@playwright/test';
import { base as test } from './base/base';



test('Test bonus show report', async ({ page }) => {
  await page.getByRole('link', { name: 'BONUS SCHEME 2025' }).click();
  await page.getByRole('link', { name: 'Daily 2025' }).click();
  await page.getByRole('link', { name: 'Quarterly Active Personal' }).click();
  await page.locator('#btnSearch').click();
  await page.getByRole('textbox', { name: 'Search key' }).click();
  await page.getByRole('textbox', { name: 'Search key' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Search key' }).fill('A1329');
  await page.locator('#btnSearch').click();
  await page.getByRole('cell', { name: 'No data available in table' }).click();
  await expect(page.locator('td')).toContainText('No data available in table');
  await page.close();
});

test('Test run ad bonus show message run report fail', async ({ page }) => {
await page.getByRole('link', { name: 'BONUS SCHEME 2024' }).click();
await page.getByRole('link', { name: 'AD Bonus' }).click();
await page.getByRole('link', { name: 'Run Report AD Bonus' }).click();
await page.locator('#period').selectOption('20161231');
await page.locator('#btnRun').click();
await expect.soft(page.locator('#tableList')).not.toContainText('Run Report AD Fails');
});

