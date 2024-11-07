import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/dashboardSelector.json");
import dotenv from 'dotenv';
dotenv.config();

export default class DashboardPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly signinButton: Locator;
    readonly RegistrationLink: Locator;
    readonly ForgotPassLink: Locator;
    readonly loginSuccess: Locator;
    readonly announceMenu: Locator;
    readonly eventMenu: Locator;
    readonly messageMenu : Locator;
    readonly groupAndRole : Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator(locator.username);
        this.password = page.locator(locator.password);
        this.signinButton = page.locator(locator.signinButton);
        this.RegistrationLink = page.locator(locator.RegistrationLink);
        this.ForgotPassLink = page.locator(locator.ForgotPassLink);
        this.loginSuccess = page.locator(locator.loginSuccess);
        this.announceMenu = page.locator(locator.announceMenu);
        this.eventMenu = page.locator(locator.eventMenu);
        this.messageMenu = page.locator(locator.messageMenu);
        this.groupAndRole = page.locator(locator.groupAndRole)

    }
    async visit() {
        await this.page.goto(`${process.env.WEB_URL}`);

    }
    async gotoRegister() {
        await this.RegistrationLink.click();
    }
    async gotoForgotPass() {
        await this.ForgotPassLink.click();
    }
    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signinButton.click();
    }
    async MessLogin() {
        await expect(this.loginSuccess).toBeVisible();
    }
    async clickonAnnouce() {
        await this.announceMenu.click();
    }
    async clickonEvent() {
        await this.eventMenu.click();
    }
    async clickonMessages() {
        await this.messageMenu.click();
    }
    async clickonGroupAndRole() {
        await this.groupAndRole.click();
    }

}