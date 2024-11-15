import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/documentAndFileSelector.json");

export default class DocumentAndFilePage {
    readonly page: Page;
    readonly incorrectAccount : Locator;

    constructor(page: Page) {
        this.page = page;
        this.incorrectAccount = page.locator(locator.incorrectAccount);
    }
    async ErrorMessage() {
        await expect(this.incorrectAccount).toBeVisible({ timeout: 5000 });
      }
    
}