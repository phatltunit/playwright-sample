import {expect } from '@playwright/test';
import { base as test } from './base/base';





test('Test run ad bonus show message run report success', async ({ page }) => {
  await page.getByRole('link', { name: ' COMPENSATION SETUP ' }).click();
  await page.getByRole('link', { name: ' Compensation Setup ' }).click();
  await page.getByRole('link', { name: ' C&B Setup' }).click();
  await page.locator('#select2-agentType-container').click();
  await page.getByRole('treeitem', { name: 'AD - Area Manager' }).click();
  await page.getByText('×AD - Area Manager').click();
  await page.getByRole('treeitem', { name: 'FM - Financial Manager' }).click();
  await page.getByRole('link', { name: ' Scheme Management' }).click();
  await page.getByRole('link', { name: '' }).first().click();
  await page.locator('#linkList').click();
  await expect(page.locator('h1')).toContainText('Scheme Management');
  });
  
  
  test('Test with authenticated', async ({ page }) => {
  
  
  });