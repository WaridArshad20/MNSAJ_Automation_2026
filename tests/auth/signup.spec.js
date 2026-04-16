const {test, expect} = require('../../fixtures/baseTest');
const { Helpers } = require('../../utils/helpers'); 
const data = require('../../data/testData.json');

test.setTimeout(100000);

test.describe('Signup Functionality', () => {

    test.beforeEach(async ({ poManager }) => {
        const signupPage = poManager.getSignupPage();
        const homePage = poManager.getHomePage();
        await poManager.getPage().context().clearCookies();
        await signupPage.goto();
        await homePage.changeLanguageToEnglish();
        await signupPage.newUserTab.click();
    });

    test('Signup with Valid credentials', async ({poManager}) => {
        const signupPage = poManager.getSignupPage();

        // Generating Dynamic Email and Phone
        const dynamicEmail = Helpers.generateRandomEmail(data.newValidUser.email);
        const dynamicPhone = Helpers.generateRandomPhone();

       const userData = {
            ...data.newValidUser,
            email: dynamicEmail,
            phone: dynamicPhone
        };

        await signupPage.signup(userData);

    } )
    

});