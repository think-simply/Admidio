import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/registerLocators.json");
import dotenv from "dotenv";
dotenv.config();

export default class RegisterPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async visit() {
        await this.page.goto(`${process.env.WEB_URL}`);
    }
    // async login(username: string, password: string) {
    //     await this.usernameLocator.fill(username);
    //     await this.passwordLocator.fill(password);
    //     await this.loginButtonLocator.click();
    // }
}