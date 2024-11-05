import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/annouceSelector.json");

export default class AnnoucePage {
    readonly page: Page;
    readonly addEntry: Locator;
    readonly title: Locator;
    readonly category: Locator;
    readonly text: Locator;
    readonly saveButton: Locator;
    readonly newAnnounce: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addEntry = page.locator(locator.addEntry);
        this.title = page.locator(locator.title);
        this.category = page.locator(locator.category);
        const frame = page.frame(locator.text);
        this.text = frame.locator(locator.text);
        this.saveButton = page.locator(locator.saveButton);
        this.newAnnounce = page.locator(locator.newAnnounce);
    }
    async addAnnouce(title:string) {
        await this.addEntry.click();
        await this.title.fill(title);
      //  await this.category.selectOption({ label: 'General' });
        // await this.text.fill(title);
        await this.saveButton.click();
       
        }
        async newAnnouce(title:string) {
            const newPostTitle = await this.newAnnounce.textContent();
            expect(newPostTitle).toBe(title);
           
            }
}