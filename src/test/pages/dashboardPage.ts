import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/dashboardSelector.json");
import dotenv from 'dotenv';
dotenv.config();

export default class DashboardPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly RegistrationLink: Locator;
    readonly ForgotPassLink : Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator(locator.username);
        this.password = page.locator(locator.password);
        this.loginButton = page.locator(locator.loginButton);
        this.RegistrationLink = page.locator(locator.RegistrationLink);
        this.ForgotPassLink = page.locator(locator.ForgotPassLink);
        
    }
    async visit() {
        // await this.page.setDefaultTimeout(30000);
           await this.page.goto(`${process.env.WEB_URL}`); 

    }
    async gotoRegister() {
        await this.RegistrationLink.click();
    }
    async gotoForgotPass() {
        await this.ForgotPassLink.click();
    }
    // async login(username: string, password: string) {
    //     await this.username.fill(username);
    //     await this.password.fill(password);
    //     await this.loginButton.click();
    // }
    // async validateErrorMessage(message: string) {
    //     await expect(this.page.getByText(message)).toBeVisible({ timeout: 5000 });
    //   }
}