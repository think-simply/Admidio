import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/registerLocators.json");
import dotenv from "dotenv";
dotenv.config();

export default class RegisterPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator(locator.username);
        this.password = page.locator(locator.password);
        this.loginButton = page.locator(locator.loginButton)
    }
    async visit() {
        await this.page.goto(`${process.env.WEB_URL}`);
    }
    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    async validateErrorMessage(message: string) {
        await expect(this.page.getByText(message)).toBeVisible({ timeout: 5000 });
      }
}