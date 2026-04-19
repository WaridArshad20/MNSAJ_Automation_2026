// global-setup.js

const { chromium } = require('@playwright/test');
const data = require('./data/testData.json');

async function globalSetup() {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // go to login page
    await page.goto('https://mnsaj.byklabs.com/login');

    // Email aur password
    await page.locator('#email').fill(data.validUser.email);
    await page.locator('#email').blur();
    await page.waitForTimeout(500);
    await page.locator('#password').fill(data.validUser.password);

    // Login button click karo
    await page.getByRole('button', { name: 'تسجيل الدخول' }).click();
    await page.waitForTimeout(3000);

    // ✅ Session file mein save karo
    await page.context().storageState({ path: '.auth/user.json' });

    console.log('✅ Session saved!');
    await browser.close();
}

module.exports = globalSetup;