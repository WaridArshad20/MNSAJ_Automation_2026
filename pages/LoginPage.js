class LoginPage {
  constructor(page) {
    this.page = page;
    // Locators
    this.emailInput = page.locator("#email");
    this.passwordInput = page.locator("#password");
    this.loginBtn = page.getByRole('button', {name: 'Login'});
    this.successToast = page.getByText('Logged in successfully');
    this.invalidEmailError = page.getByText('The email field must be a valid email address');
    this.invalidPasswordError = page.getByText('The password is incorrect');
    this.emailEmptyError = page.getByText('Email is required');
    this.passwordEmptyError = page.getByText('The password field is required.');
  }

  async goto() {
    await this.page.goto("login");
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.emailInput.blur();
    await this.page.waitForTimeout(500);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
    await this.page.waitForTimeout(3000);
  }
}

module.exports = { LoginPage };
