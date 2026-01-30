import { test, expect } from '@playwright/test';

test('Pos_UI_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  
  const clearButton = page.getByRole('button', { name: 'Clear' }).first();

  await inputArea.fill('mama gedhara yanavaa.');
  
  
  await page.waitForTimeout(1000);
  

  await clearButton.click();
  
 
  await expect(inputArea).toBeEmpty();
  
  
  await expect(outputArea).toBeEmpty();

});