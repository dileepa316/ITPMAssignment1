import { test, expect } from '@playwright/test';

test('Neg_UI_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  const clearButton = page.getByRole('button', { name: 'Clear' }).filter({ hasText: 'Clear' });
  

  await inputArea.fill('mama gedhara yanavaa.');
  

  await clearButton.click();
  
  await expect(inputArea).toBeEmpty();

});

test('Neg_UI_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  
  
  const longText = 'a'.repeat(1001);
  
  await inputArea.fill(longText);
  
  
  await page.waitForTimeout(1000);
  
 
  await expect(page).toHaveURL('https://www.swifttranslator.com/');
  
 
  await expect(inputArea).toBeVisible();
  

});