import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/dashboardSelector.json");
import dotenv from 'dotenv';
dotenv.config();

export default class DashboardPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly signinButton: Locator;
    readonly registrationLink: Locator;
    readonly forgotPassLink: Locator;
    readonly loginSuccess: Locator;
    readonly announceMenu: Locator;
    readonly eventMenu: Locator;
    readonly messageMenu : Locator;
    readonly groupAndRoleMenu : Locator;
    readonly contactMenu : Locator;
    readonly documentAndFileMenu: Locator;
    readonly webLinkMenu : Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator(locator.username);
        this.password = page.locator(locator.password);
        this.signinButton = page.locator(locator.signinButton);
        this.registrationLink = page.locator(locator.registrationLink);
        this.forgotPassLink = page.locator(locator.forgotPassLink);
        this.loginSuccess = page.locator(locator.loginSuccess);
        this.announceMenu = page.locator(locator.announceMenu);
        this.eventMenu = page.locator(locator.eventMenu);
        this.messageMenu = page.locator(locator.messageMenu);
        this.groupAndRoleMenu = page.locator(locator.groupAndRoleMenu);
        this.contactMenu = page.locator(locator.contactMenu);
        this.documentAndFileMenu = page.locator(locator.documentAndFileMenu);
        this.webLinkMenu = page.locator(locator.webLinkMenu);

    }
    async visit() {
        await this.page.goto(`${process.env.WEB_URL}`);

    }
    async gotoRegister() {
        await this.registrationLink.click();
    }
    async gotoForgotPass() {
        await this.forgotPassLink.click();
    }
    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signinButton.click();
    }
    async messageLogin() {
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
        await this.groupAndRoleMenu.click();
    }
    async clickonContact() {
        await this.contactMenu.click();
    }
    async clickonDocumentAndFile() {
        await this.documentAndFileMenu.click();
    }
    async clickonWebLink() {
        await this.webLinkMenu.click();
    }
    

}