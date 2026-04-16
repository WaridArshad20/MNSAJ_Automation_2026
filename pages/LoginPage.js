class LoginPage {
  constructor(page) {
    this.page = page;
    // Locators
    this.emailInput = page.locator("#email");
    this.passwordInput = page.locator("#password");
    this.loginBtn = page.getByRole('button', {name: 'تسجيل الدخول'});
    this.successToast = page.getByText('تم تسجيل الدخول بنجاح');
    this.invalidEmailError = page.getByText('يجب أن يكون حقل البريد الإلكتروني عنوان بريد إلكتروني صالحًا');
    this.invalidPasswordError = page.getByText('كلمة المرور غير صحيحة');
    this.emailEmptyError = page.getByText('الرجاء إدخال البريد الالكتروني');
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
