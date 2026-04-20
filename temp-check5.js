const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  try {
    await page.goto('https://mnsaj.byklabs.com/login', { waitUntil: 'load', timeout: 60000 });
    const initial = await page.locator('body').innerText();
    console.log('INITIAL_LOGIN_TEXT=' + initial.slice(0, 600).replace(/\n/g, ' | '));
    const englishBtn = page.getByText('English');
    console.log('englishCount=' + await englishBtn.count());
    await englishBtn.click();
    console.log('CLICKED_ENGLISH');
    await page.waitForTimeout(3000);
    const after = await page.locator('body').innerText();
    console.log('AFTER_LOGIN_TEXT=' + after.slice(0, 600).replace(/\n/g, ' | '));
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
