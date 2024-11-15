import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/contactSelector.json");
const axios = require('axios');
export default class GroupAndRolePage {
    readonly page: Page;
    readonly createRole: Locator;
   


    constructor(page: Page) {
        this.page = page;
        this.createRole = page.locator(locator.createRole);
      
    }
    async addContact() {
        await this.createRole.click()
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            // dialog.accept(["value1", "value2"]); // truyền đa mảng vào dialog
            this.page.once('dialog', dialog => dialog.accept("new list config 1")),
            this.page.once('dialog', dialog => dialog.accept("second value"))
            dialog.dismiss().catch(() => { });
        });
    }
    async afterAddContact() {
       
       
    }
   
}