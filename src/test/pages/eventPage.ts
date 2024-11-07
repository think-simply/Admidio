import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/eventSelector.json");
import { getUniqueNumber, getDate } from "../../helper/utils"

export default class EventPage {
    readonly page: Page;
    readonly createEvent : Locator;
    readonly title : Locator;
    readonly saveButton: Locator;
    readonly lastElement : Locator;
    readonly actionIcon: Locator;
    readonly optionCopy: Locator;
    readonly optionUpdate: Locator;
    readonly optionDelete: Locator;
    readonly confirmYes: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createEvent = page.locator(locator.createEvent);
        this.title = page.locator(locator.title);
        this.saveButton = page.locator(locator.saveButton);
        this.lastElement = page.locator(locator.lastElement);
        this.actionIcon = page.locator(locator.actionIcon);
        this.optionCopy = page.locator(locator.optionCopy);
        this.optionUpdate = page.locator(locator.optionUpdate);
        this.optionDelete = page.locator(locator.optionDelete);
        this.confirmYes = page.locator(locator.confirmYes);
    }
    async addEvent() {
        await this.createEvent.click();
        const id = getUniqueNumber();
        const title = `event_${id}`;
        await this.title.fill(title);
        await this.saveButton.click();
      }
      async afterAddEvent() {
        const date = getDate();
        const id = getUniqueNumber();
        const updatedCate = await this.lastElement.innerText();
        expect(updatedCate).toBe(`${date} event_${id}`);

    }
    async copyEvent() {
        await this.actionIcon.click();
        await this.optionCopy.click();
        const id = getUniqueNumber();
        const title = `event_${id}`;
        await this.title.fill(title);
        await this.saveButton.click();
      }
      async deleteEvent() {
        await this.actionIcon.click();
        await this.optionCopy.click();
        const id = getUniqueNumber();
        const title = `event_${id}`;
        await this.title.fill(title);
        await this.saveButton.click();
      }
    
}