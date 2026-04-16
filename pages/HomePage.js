class HomePage {

    constructor(page){
        this.page = page;
        this.languageBtn = this.page.getByText('English');
        this.arabicLanguageBtn = this.page.getByText('عربى');
    }

    async changeLanguageToEnglish(){
        await this.languageBtn.click();
    }
}

module.exports = { HomePage };