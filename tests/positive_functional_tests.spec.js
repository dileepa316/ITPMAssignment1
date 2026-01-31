import { test, expect } from '@playwright/test';

test('Pos_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mama office yanavaa.';
  const expectedSinhala = 'මම office යනවා.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'oyaata kohomadha?';
  const expectedSinhala = 'ඔයාට කොහොමද?';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'vahaama enna.';
  const expectedSinhala = 'වහාම එන්න.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mata phone ekak epaa.';
  const expectedSinhala = 'මට phone එකක් එපා.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'hari machan!.';
  const expectedSinhala = 'හරි මචන්!.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'RS. 5000 oonee.';
  const expectedSinhala = 'RS. 5000 ඕනේ.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'hari hari';
  const expectedSinhala = 'හරි හරි';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mama heta gaalla yanavaa.';
  const expectedSinhala = 'මම හෙට ගාල්ල යනවා.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mama gedhara yanavaa, namuth oyaa enne naehae.';
  const expectedSinhala = 'මම ගෙදර යනවා, නමුත් ඔයා එන්නෙ නැහැ.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'oyaa enavaanam mama balan innavaa.';
  const expectedSinhala = 'ඔයා එනවානම් මම බලන් ඉන්නවා.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0011', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'karuNaakaralaa mata udhavvak karanna puLuvandha?.';
  const expectedSinhala = 'කරුණාකරලා මට උදව්වක් කරන්න පුළුවන්ද?.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0012', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mata adha Zoom meetings ekak thiyenne 2.30pm eka. Mama office enna kalin preparation karanna oone. Mata presentation eka email karala thiyenavaa.';
  const expectedSinhala = 'මට අද Zoom meetings එකක් තියෙන්නෙ 2.30pm එක. මම office එන්න කලින් preparation කරන්න ඕනෙ. මට presentation එක email කරල තියෙනවා.';
  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0013', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'ela machan! Kohomadha? Mata beheth bonna amathaka vunaa.oyaata venuven mata help ekak karanna.';
  const expectedSinhala = 'එල මචන්! ඛොහොමද? මට බෙහෙත් බොන්න අමතක වුනා.ඔයාට වෙනුවෙන් මට help එකක් කරන්න.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0014', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'lamayi kandy school ekata yanavaa.siiyaa Colombo yanna hadhanne.nimaali office enna late vennee traffic nisaa.';
  const expectedSinhala = 'ලමයි kandy school එකට යනවා.සීයා Colombo යන්න හදන්නෙ.නිමාලි office එන්න late වෙන්නේ traffic නිසා.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0015', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mama gedhara yanavaa. Api passee kathaa karamu.';
  const expectedSinhala = 'මම ගෙදර යනවා. අපි පස්සේ කතා කරමු.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0016', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mata OTP eka oonee.NIC number eka fill karanna.SMS ekak evanna.PIN eka amathaka vunaa.';
  const expectedSinhala = 'මට OTP එක ඕනේ.NIC number එක fill කරන්න.SMS එකක් එවන්න.PIN එක අමතක වුනා.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0017', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mata iiyee office giyaa.meeting dhekak thiye 10.30 eka.api project eka ganeema kathaa karala.';
  const expectedSinhala = 'මට ඊයේ office ගියා.meeting දෙකක් තියෙ 10.30 එක.අපි project එක ගනේම කතා කරල.'; 
  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0018', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'api football oonee.';
  const expectedSinhala = 'අපි football ඕනේ.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0019', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

 const singlishInput =
' Mehi computer systems,software development,network management, data analysis wageema weda thanthra gana athi.mama IT degree ekak karana bava hithenavaa.';
const expectedSinhala =
'. මෙහි computer systems, software development, network management, data analysis වගේම වැඩ තන්ත්‍ර ගණ ඇති.මම IT degree එකක් කරන බව හිතෙනවා.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0020', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mata eeka karanna oonee.';
  const expectedSinhala = 'මට ඒක කරන්න ඕනේ.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0021', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'Suba udhaeesanak! Api heta sathiyen kathaa karanna yamu.mata katha karanna puluvandha kiyala hithenavaa.karuNakaralaa mata replay ekak dhenna.';
  const expectedSinhala = 'සුබ උදෑසනක්! අපි හෙට සතියෙන් කතා කරන්න යමු.මට කත කරන්න පුලුවන්ද කියල හිතෙනවා.කරුණකරලා මට replay එකක් දෙන්න.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0022', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mata computer ekee wifi connect vennee naee.network settings check karala balanna puluvandha?.';
  const expectedSinhala = 'මට computer එකේ wifi connect වෙන්නේ නෑ.network settings check කරල බලන්න පුලුවන්ද?.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0023', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mata tomato kg 1.5,potato kg 3 ,carrot kg 0.5,chicken kg 1.5 oonee.';
  const expectedSinhala = 'මට tomato kg 1.5,potato kg 3 ,carrot kg 0.5,chicken kg 1.5 ඕනේ.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0024', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'appatasiri mama hariyata karala naee. Mata baya hithenavaa.namuth mama heta yali karannam.ehenam mama yannam.';
  const expectedSinhala = 'අප්පටසිරි මම හරියට කරල නෑ. මට බය හිතෙනවා.නමුත් මම හෙට යලි කරන්නම්.එහෙනම් මම යන්නම්.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});