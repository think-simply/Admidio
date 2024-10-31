import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/registerLocators.json");
import { getUniqueNumber } from "../../helper/utils";
import dotenv from "dotenv";
dotenv.config();

export default class RegisterPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly confirmpassword: Locator;
    readonly surname: Locator;
    readonly firstname: Locator;
    readonly email: Locator;
    readonly sendButton: Locator;
    readonly message : Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator(locator.username);
        this.password = page.locator(locator.password);
        this.confirmpassword = page.locator(locator.confirmpassword);
        this.surname = page.locator(locator.surname);
        this.firstname = page.locator(locator.firstname);
        this.email = page.locator(locator.email);
        this.sendButton = page.locator(locator.sendButton);
        this.message = page.locator(locator.message);
    }

    async registAccount(userNamev: string, passwordv: string, confirmPassv: string, surnamev: string, firstnamev: string, emailv: string) {
        // const id = getUniqueNumber();
        // const usernamev = `id`;
        // const emailv = `${id}@yopmail.com`;

        await this.username.fill(userNamev);
        await this.password.fill(passwordv);
        await this.confirmpassword.fill(confirmPassv);
        await this.surname.fill(surnamev);
        await this.firstname.fill(firstnamev);
        await this.email.fill(emailv);
        await this.sendButton.click()

    }
    async registMess(){
        await expect(this.sendButton).toBeVisible();
    }
}