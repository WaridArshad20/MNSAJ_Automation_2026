const { LoginPage } = require('./LoginPage');
const { SignupPage } = require('./SignupPage');
const { HomePage } = require('./HomePage');

class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.signupPage = new SignupPage(this.page);
        this.homePage = new HomePage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getSignupPage() {
        return this.signupPage;
    }

    getHomePage() {
        return this.homePage;
    }

    getPage() {
        return this.page;
    }
}

module.exports = { POManager };