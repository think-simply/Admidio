import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/webLinkSelector.json");

export default class WebLinkPage {
    readonly page: Page;
    readonly createFolderButton: Locator;
    readonly folderName: Locator;
    readonly createFolderB: Locator;
    readonly createdFolder: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createFolderButton = page.locator(locator.createFolderButton);
        this.folderName = page.locator(locator.folderName);
        this.createFolderB = page.locator(locator.createFolderB);
        this.createdFolder = page.locator(locator.createdFolder)
    }
    async createFolder() {
        await this.createFolderButton.click();
        await this.folderName.fill("new folder");
        await this.createFolderB.click();
      }
      async afterCreateFolder() {
        await expect(this.createdFolder).toBeVisible({ timeout: 5000 });
      }
    
}