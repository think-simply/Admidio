import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/messageSelector.json");
import { getUniqueNumber, getDate } from "../../helper/utils";
const axios = require('axios');

export default class MessagePage {
    readonly page: Page;
   
    constructor(page: Page) {
        this.page = page;
       
    }
    async addEvent() {
        await this.createEvent.click();
        const id = getUniqueNumber();
        const title = `event_${id}`;
        await this.title.fill(title);
        await this.saveButton.click();
    }
    

}