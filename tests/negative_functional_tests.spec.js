import { test, expect } from '@playwright/test';

// =====================
// Negative Test Cases
// =====================

test('Neg_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'MaMa YaNaVaA';
  const expectedSinhala = 'Case-sensitive conversion fails.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.fill(singlishInput);

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Neg_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mama yan';
  const expectedSinhala = 'Incomplete or nonsensical output.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.fill(singlishInput);

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Neg_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mama zoome meeting ekakata yanavaa';
  const expectedSinhala = '"Zoome" incorrectly transliterated.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.fill(singlishInput);

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Neg_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = '???mama??? Yanavaa???!!!';
  const expectedSinhala = 'Punctuation disrupts conversion.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.fill(singlishInput);

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Neg_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mamagedharayanavaavitaaraamahansamanduththakmahaviharaayanavaa';
  const expectedSinhala = 'System may crash or output gibberish.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.fill(singlishInput);

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Neg_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'MaMa GeDhArA YaNaVaA';
  const expectedSinhala = 'Inconsistent conversion or errors.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.fill(singlishInput);

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Neg_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'aBaCaDEaFaGaHaJaKaLaMaNaBaVaCaXaZaOaPaQaRaSaUaVaWaXaYaZaBaCaDaBaCaDEaFaGaHaJaKaLaMaNaBaVaCaXaZaOaPaQaRaSaUaVaWaXaYaZaBaCaDaBaCaDEaFaGaHaJaKaLaMaNaBaVaCaXaZaOaPaQaRaSaUaVaWaXaYaZaBaCaD';
  const expectedSinhala = 'Inconsistent conversion or errors.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.fill(singlishInput);

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

// --- New negative test cases ---

test('Neg_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = '1234567890';
  const expectedSinhala = 'Numeric input remains unchanged or fails transliteration.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.fill(singlishInput);

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Neg_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = '!@#$%^&*()_+';
  const expectedSinhala = 'Special characters disrupt conversion.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.fill(singlishInput);

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Neg_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'loremipsumdolorsitametconsecteturadipiscingelit';
  const expectedSinhala = 'Non-Sinhala gibberish input fails transliteration.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.fill(singlishInput);

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});
