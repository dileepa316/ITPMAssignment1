import { test, expect } from '@playwright/test';

test('Neg_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'thx bro';
  const expectedSinhala = 'Remains "thx bro" or partial conversion.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Neg_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'MaMa YaNaVaA';
  const expectedSinhala = 'case - sensitive conversion fails.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Neg_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mama yan';
  const expectedSinhala = 'Incomplete or nonsensical output.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Neg_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'CU 18r machan';
  const expectedSinhala = 'Remains unchanged';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Neg_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mama zoome meeting ekakata yanavaa';
  const expectedSinhala = '"Zoome" incorrectly transliterated';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Neg_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = '???mama??? Yanavaa???!!!';
  const expectedSinhala = 'Punctuation disrupts conversion.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Neg_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mamagedharayanavaavitaaraamahansamanduththakmahaviharaayanavaa';
  const expectedSinhala = 'System may crash or output gibberish';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Neg_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'thx thx thx thx thx';
  const expectedSinhala = 'shorthand remains unconverted.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Neg_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'MaMa GeDhArA YaNaVaA';
  const expectedSinhala = 'Inconsistent conversion or errors.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Neg_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'aBaCaDEaFaGaHaJaKaLaMaNaBaVaCaXaZaOaPaQaRaSaUaVaWaXaYaZaBaCaDaBaCaDEaFaGaHaJaKaLaMaNaBaVaCaXaZaOaPaQaRaSaUaVaWaXaYaZaBaCaDaBaCaDEaFaGaHaJaKaLaMaNaBaVaCaXaZaOaPaQaRaSaUaVaWaXaYaZaBaCaDaBaCaDEaFaGaHaJaKaLaMaNaBaVaCaXaZaOaPaQaRaSaUaVaWaXaYaZaBaCaD';
  const expectedSinhala = 'Inconsistent conversion or errors.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 50 }); // Using faster delay for long input

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});