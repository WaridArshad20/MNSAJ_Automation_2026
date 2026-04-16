const { test, expect } = require('../../fixtures/baseTest');
const data = require('../../data/testData.json');

test.setTimeout(100000);

test.describe('Login Functionality', () => {
    
    test.beforeEach(async ({ poManager }) => {
        const loginPage = poManager.getLoginPage();
        await poManager.getPage().context().clearCookies();
        await loginPage.goto();
    });

    // Valid Login
    test('Should login successfully with valid credentials @smoke @regression', async ({ poManager }) => {
        const loginPage = poManager.getLoginPage();

        await loginPage.login(data.validUser.email, data.validUser.password);
        // Validation        
        await expect(poManager.getPage().getByRole('link', { name: 'nav.account' })).toBeVisible();
        await expect(poManager.getPage()).not.toHaveURL(/.*login/);
    });

    // Invalid Email
    test('Should show error message with invalid email @regression', async ({ poManager }) => {
        const loginPage = poManager.getLoginPage();

        await loginPage.login(data.invalidUser.email, data.validUser.password);

        // Validation: Error message visibility check
        await expect(loginPage.invalidEmailError).toBeVisible();
    });

    // Invalid Password
    test('Should show error message with valid email and invalid password @regression', async ({ poManager }) => {
        const loginPage = poManager.getLoginPage();

        await loginPage.login(data.validUser.email, data.invalidUser.password);

        // Validation: Error message visibility check
        await expect(loginPage.invalidPasswordError).toBeVisible();
    });

    // Empty Fields
    test('Should show error messages with empty email and empty password @regression', async ({ poManager }) => {
        const loginPage = poManager.getLoginPage();

        // Leave fields empty and click login button
        await loginPage.loginBtn.click();

        // Validation: Error messages visibility check
        await expect(loginPage.emailEmptyError).toBeVisible();
        await expect(loginPage.passwordEmptyError).toBeVisible();
    });

});