import { test, expect } from '@playwright/test';

test('Pos_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mama office yanava.';
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

  const singlishInput = 'mata Whatsapp ekak awashya.';
  const expectedSinhala = 'මට WhatsApp එකක් අවශ්‍ය.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'ela machan!.';
  const expectedSinhala = 'එල මචන්!';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'RS. 5000 oonee.';
  const expectedSinhala = 'Rs. 5000 ඕනේ.';

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

  const singlishInput = 'mama heta kaluthara yanavaa.';
  const expectedSinhala = 'මම හෙට කළුතර යනවා.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mama gedhara yanavaa, namuth oyaa enne naehae.';
  const expectedSinhala = 'මම ගෙදර යනවා, නමුත් ඔයා එන්නේ නැහැ.';

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

  const singlishInput = 'karuNaakaralaa mata udhavvak karanna puLuvandha? Mama hariyata vada karanna yali karanna oonee.';
  const expectedSinhala = 'කරුණාකරලා මට උදව්වක් කරන්න පුළුවන්ද? මම හරියට වැඩ කරන්න යලි කරන්න ඕනේ.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0012', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mata adha Zoom meetings ekak thiyenne 2.30pm eka. Mama office enna kalin preparation karanna oone. Mata presentation eka email karala thiyenava.';
  const expectedSinhala = 'මට අද Zoom meeting එකක් තියෙන්නේ 2.30pm එක. මම office එන්න කලින් preparation කරන්න ඕනේ. මට presentation එක email කරලා තියෙනවා.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0013', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'ela machan! Kohomada? Mata beheth bonna amathaka vunaa.oyaata venuvoth mata help ekak karanna.';
  const expectedSinhala = 'එල මචන්! කොහොමද? මට බෙහෙත් බොන්න අමතක වුනා. ඔයාට වෙනුවෙත් මට help එකක් කරන්න.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0014', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'lamayi kandy school ekata yanavaa.siiyaa Colombo yanna hadhanne.nimaali office enna late vennee traffic nisaa.';
  const expectedSinhala = 'ලමයි Kandy school එකට යනවා. සීයා Colombo යන්න හදන්නේ. නිමාලි office එන්න late වෙන්නේ traffic නිසා.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0015', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mama gedhara yanavaa.oyaana? Api passee kathaa karamu.';
  const expectedSinhala = 'මම ගෙදර යනවා. ඔයාන? අපි පස්සේ කතා කරමු.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0016', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mata OTP ekak awashya.NIC number eka fill karanna.SMS ekak evanna.PIN eka amathaka vunaa.';
  const expectedSinhala = 'මට OTP එකක් අවශ්‍ය. NIC number එක fill කරන්න. SMS එකක් එවන්න. PIN එක අමතක වුනා.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0017', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mata iyee office giyaa.meeting dekak thiye 10.30 eka.api project eka ganeema kathaa karala.lunch ekata passe api presentation eka prepare karala.boss ta show karala.ohu hariyata vada kiyavaa.mama hariyata vada hithenavaa.heta api code tika finalize karanna yamu.documents tika email karanna.team eka ta share karanna.metting notes tika type karanna.';
  const expectedSinhala = 'මට ඊයේ office ගියා. meeting දෙකක් තියෙන්නේ 10.30 එක. අපි project එක ගැනීම කතා කරලා. lunch එකට පස්සේ අපි presentation එක prepare කරලා. boss ට show කරලා. ඔහු හරියට වැඩ කියවා. මම හරියට වැඩ හිතෙනවා. හෙට අපි code ටික finalize කරන්න යමු. documents ටික email කරන්න. team එක ට share කරන්න. meeting notes ටික type කරන්න.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0018', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'api football karanawa';
  const expectedSinhala = 'අපි football ක්‍රීඩා කරනවා.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0019', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'Information technology kiynne dhanapathi wedak karana gana visheshaya. Mehi computer systems,software development,network management, data analysis wageema weda thanthra gana athi.mama IT degree ekak karana bava hithenavaa.university gihilla subjects venava programming, cyberssecurity.api practical sessions venava laboratiry walata.projects karanna venava each semester.final year project ekak venava research karanna.';
  const expectedSinhala = 'Information Technology කියන්නේ ඩිජිටල් වැඩ කරන ගණ විශේෂය. මෙහි computer systems, software development, network management, data analysis වගේම වැඩ තන්ත්‍ර ගණ ඇති. මම IT degree එකක් කරන බව හිතෙනවා. university ගිහිල්ල subjects වෙනවා programming, databases, web development, cybersecurity. අපි practical sessions වෙනවා laboratory වලට. projects කරන්න වෙනවා each semester. final year project එකක් වෙනවා research කරන්න.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0020', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mata eeka karanna ba.';
  const expectedSinhala = 'මට ඒක කරන්න බැ.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0021', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'Suba udhaeesanak! Api heta sthiyen kathaa karanna yamu.mata katha karanna puluvanda kiyala hithenavaa.karuNakaralaa mata replay ekak denna.';
  const expectedSinhala = 'සුබ උදෑසනක්! අපි හෙට සතියෙන් කතා කරන්න යමු. මට කතා කරන්න පුළුවන්ද කියලා හිතෙනවා. කරුණාකරලා මට reply එකක් දෙන්න.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0022', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mata computer ekee wifi connect vennee naee.network settings check karala balanna puluvandha?restart karala balala thibunath naee vada.';
  const expectedSinhala = 'මට computer එකේ WiFi connect වෙන්නේ නැහැ. network settings check කරලා බලන්න පුළුවන්ද? restart කරලා බලලා තිබුනත් නැහැ වැඩ.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0023', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'mata tomato kg 1.5,potato kg 3 ,carrot kg 0.5,chicken kg 1.5 oonee.';
  const expectedSinhala = 'මට කැරි kg 2, ඉස්සොලු kg 1, තක්කාලි kg 1.5, අල kg 3, කැරට් kg 0.5, චිකන් kg 1.5 ඕනේ.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});

test('Pos_Fun_0024', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = 'appatasiri mama hariyata vada karala naee. Mata baya hithenavaa.namuth mama heta yali karannam.ehenam mama vadagaththam.';
  const expectedSinhala = 'අප්පටසිරි මම හරියට වැඩ කරලා නැහැ. මට බය හිතෙනවා. නමුත් මම හෙට යලි කරන්නම්. එහෙනම් මම වැඩගත්තම්.';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.pressSequentially(singlishInput, { delay: 100 });

  const outputArea = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(outputArea).toHaveText(expectedSinhala);
});