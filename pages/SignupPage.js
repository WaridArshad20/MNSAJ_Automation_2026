class SignupPage {

    constructor(page){
        this.page = page;
        // Signup form locators
        this.newUserTab = this.page.getByText('New User');
        this.fNameInput = this.page.locator('#first_name');
        this.lNameInput = this.page.locator('#last_name');
        this.dobLocator = this.page.getByRole('textbox', { name: 'Date of Birth' });
        this.dobMonth = this.page.getByLabel('Month');
        this.dobYear = this.page.getByRole('spinbutton', { name: 'Year' });
        this.dobDate = this.page.getByLabel('August 20,');
        this.emailInput = this.page.locator('#email');
        this.passwordInput = this.page.locator('#password');
        this.phoneInput = this.page.locator('#phone');
        this.createAccBtn = this.page.getByRole('button', {name: 'Create an Account'});
        this.termsCheckBox = this.page.locator('.checkbox-box');
    }

    async goto() {
    await this.page.goto('/login');;
  }

  async dob(){
    await this.dobLocator.click();
    await this.dobMonth.selectOption('7');
    await this.dobYear.fill('1994');
    await this.dobDate.click();
  }

  async signup(userData){

    const { firstName, lastName, email, password, phone } = userData;

    await this.fNameInput.fill(firstName);
    await this.lNameInput.fill(lastName);
    await this.dob();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.phoneInput.fill(phone);
    await this.termsCheckBox.click();
    await this.createAccBtn.click();
  }

}

module.exports = { SignupPage }