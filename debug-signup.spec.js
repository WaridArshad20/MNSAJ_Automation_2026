const { test, expect } = require('@playwright/test');

test.describe('Debug Signup', () => {
    test('Debug signup navigation', async ({ page }) => {
        console.log('Starting navigation test');

        // Try to go to login page
        await page.goto("https://mnsaj.byklabs.com/login", { waitUntil: "domcontentloaded" });
        console.log('Navigated to login page');

        // Wait and check if page loaded
        await page.waitForTimeout(2000);
        console.log('Page loaded, checking for new user tab');

        // Try to find the new user element
        const newUserElement = page.locator('text=/New User|مستخدم جديد/');
        const isVisible = await newUserElement.isVisible();
        console.log('New user element visible:', isVisible);

        if (isVisible) {
            await newUserElement.click();
            console.log('Clicked new user tab');
            await page.waitForTimeout(2000);

            // Check if signup form is visible
            const firstNameInput = page.locator('#first_name');
            const isFormVisible = await firstNameInput.isVisible();
            console.log('Signup form visible:', isFormVisible);
        } else {
            console.log('New user tab not found');
        }
    });
});