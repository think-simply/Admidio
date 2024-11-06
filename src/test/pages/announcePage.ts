import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/annouceSelector.json");

export default class AnnoucePage {
    readonly page: Page;
    readonly addEntry: Locator;
    readonly titlebox: Locator;
    readonly category: Locator;
    readonly iFrametextbox: Locator;
    readonly saveButton: Locator;
    readonly newAnnounce: Locator;
    readonly actionIcon : Locator;
    readonly optionCopy : Locator;
    readonly optionUpdate : Locator;

    constructor(page: Page) {
        this.page = page;
        this.addEntry = page.locator(locator.addEntry);
        this.titlebox = page.locator(locator.titlebox);
        this.category = page.locator(locator.category);
        this.iFrametextbox = page.locator(locator.iFrametextbox);
        this.saveButton = page.locator(locator.saveButton);
        this.newAnnounce = page.locator(locator.newAnnounce);
        this.actionIcon = page.locator(locator.actionIcon);
        this.optionCopy = page.locator(locator.optionCopy);
        this.optionUpdate = page.locator(locator.optionUpdate)
    }
    async addAnnouce(title: string, text: string) {
        await this.addEntry.click();
        await this.page.waitForSelector(locator.titlebox, { timeout: 10000 });
        await this.titlebox.fill(title);
        await this.category.selectOption({ label: 'Important' });
        await this.iFrametextbox.contentFrame().locator('html').click();
        await this.iFrametextbox.contentFrame().locator('body').fill(text);
        await this.saveButton.click();

    }
    async newAnnouce(title: string) {
        const newPostTitle = await this.newAnnounce.innerText();
        expect(newPostTitle).toBe(title);
    }
    async copyAnnouce(title: string, text: string){
        await this.actionIcon.click();
        await this.optionCopy.click();
        await this.titlebox.fill(title);
        await this.category.selectOption({ label: 'Important' });
        await this.iFrametextbox.contentFrame().locator('html').click();
        await this.iFrametextbox.contentFrame().locator('body').fill(text);
        await this.saveButton.click();
    }
    async updateAnnouce(title: string, text: string){
        await this.actionIcon.click();
        await this.optionUpdate.click();
        await this.titlebox.fill(title);
        await this.category.selectOption({ label: 'Important' });
        await this.iFrametextbox.contentFrame().locator('html').click();
        await this.iFrametextbox.contentFrame().locator('body').fill(text);
        await this.saveButton.click();
    }
}