import { Page, Locator, expect } from "@playwright/test";
const locator = require("../selectors/groupAndRoleSelector.json");
import { getUniqueNumber, getDate } from "../../helper/utils";
const axios = require('axios');
export default class GroupAndRolePage {
    readonly page: Page;
    readonly createRole: Locator;
    readonly name: Locator;
    readonly saveButton: Locator;
    readonly titleRole: Locator;
    readonly editButton: Locator;
    readonly categoryGRpage: Locator;
    readonly description: Locator;
    readonly deleteIcon: Locator;
    readonly confirmYes: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createRole = page.locator(locator.createRole);
        this.name = page.locator(locator.name);
        this.saveButton = page.locator(locator.saveButton);
        this.titleRole = page.locator(locator.titleRole);
        this.editButton = page.locator(locator.editButton);
        this.categoryGRpage = page.locator(locator.categoryGRpage);
        this.description = page.locator(locator.description);
        this.deleteIcon = page.locator(locator.deleteIcon);
        this.confirmYes = page.locator(locator.confirmYes)
    }
    async addRole() {
        await this.createRole.click()
        const id = getUniqueNumber();
        const role = `role_${id}`;
        await this.name.fill(role)
        await this.saveButton.click()
    }
    async afterAddRole() {
        await expect(this.categoryGRpage).toBeVisible();
    }

    async updateRole() {
        await this.editButton.click()
        const id = getUniqueNumber();
        const role = `role_${id}`;
        await this.description.fill(role)
        await this.saveButton.click()
    }
    async afterUpdateRole() {
        const date = getDate();
        const id = getUniqueNumber();
        const updatedRole = await this.description.innerText();
        expect(updatedRole).toBe(`${date} event_${id}`);
    }
    async removeRole() {
        await this.deleteIcon.click();
        await this.confirmYes.click();
    }
    async afterRemoveRole() {
        try {
            const response = await axios.get('https://buianthai.infinityfreeapp.com/adm_program/modules/groups-roles/groups_roles_function.php?');
            expect(response.status).toBe(200);
        } catch (error) {
            console.error('Error:', error);
        }
    }
}