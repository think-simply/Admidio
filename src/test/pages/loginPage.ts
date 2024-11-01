import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/forgotpassSelector.json");

export default class ForgotPassPage {
    readonly page: Page;
    readonly usernameOemail: Locator;
    readonly SendButton : Locator;
    readonly messForgot : Locator;
    


    constructor(page: Page) {
        this.page = page;
        this.usernameOemail = page.locator(locator.usernameOemail);
        this.SendButton = page.locator(locator.SendButton);
        this.messForgot = page.locator(locator.messForgot);
    }

    async forgotPass(email:string) {
        await this.usernameOemail.fill(email);
        await this.SendButton.click()

    }
    async forgotPassMess() {
        await expect(this.messForgot).toBeVisible();

    }
    
}