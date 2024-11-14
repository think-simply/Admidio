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

    readonly editCategory: Locator;
    readonly createCategory: Locator;
    readonly nameCate: Locator;
    readonly editIconCate: Locator;
    readonly deleteIconCate: Locator;
    readonly newCate: Locator;
    readonly firstTitle: Locator;
    readonly selectConfig: Locator;
    readonly firstRowCondition: Locator;
    readonly saveChangeButton: Locator;
    readonly configList: Locator;
    readonly getText: Locator;
    readonly deleteOption: Locator;


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

        this.editCategory = page.locator(locator.editCategory);
        this.createCategory = page.locator(locator.createCategory);
        this.nameCate = page.locator(locator.nameCate);
        this.editIconCate = page.locator(locator.editIconCate);
        this.deleteIconCate = page.locator(locator.deleteIconCate);
        this.newCate = page.locator(locator.newCate);
        this.firstTitle = page.locator(locator.firstTitle);
        this.selectConfig = page.locator(locator.selectConfig);
        this.configList = page.locator(locator.configList);
        this.saveChangeButton = page.locator(locator.saveChangeButton);
        this.firstRowCondition = page.locator(locator.firstRowCondition);
        this.getText = page.locator(locator.getText);
        this.deleteOption = page.locator(locator.deleteOption);
    }
    async addRole() {
        await this.createRole.click()
        await this.name.fill("new_role_only")
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

    async addCategory() {
        await this.editCategory.click();
        await this.createCategory.click();
        await this.nameCate.fill("new_category");
        await this.saveButton.click();
    }
    async afterAddCate() {
        // const id = getUniqueNumber();
        // const newCate = await this.newCate.innerText();
        // expect(newCate).toBe("new_category");
        await this.page.waitForSelector('text=new_category');
    }
    async updateCategory() {
        await this.editCategory.click();
        await this.editIconCate.click();
        const id = getUniqueNumber();
        const cate = `cate_${id}`;
        await this.nameCate.fill(cate);
        await this.saveButton.click();
    }
    async afterUpdateCate() {
        const id = getUniqueNumber();
        const updateCate = await this.firstTitle.innerText();
        expect(updateCate).toBe(`cate_${id}`);
    }

    async removeCategory() {
        await this.editCategory.click();
        await this.deleteIconCate.click();
        await this.confirmYes.click();

    }
    async afterRemoveCate() {
        try {
            const response = await axios.get('https://buianthai.infinityfreeapp.com/adm_program/modules/categories/categories_function.php?');
            expect(response.status).toBe(200);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    async addListConfig() {
        await this.configList.click();
        await this.firstRowCondition.fill("1234");
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.accept("new list config 1");
            dialog.dismiss().catch(() => { });
        });
        await this.saveButton.click();
    }

    async afterAddListConfig() {
        await this.selectConfig.waitFor({ state: 'visible' });
        const updateListConfig = await this.selectConfig.innerText();
        expect(updateListConfig).toContain("new list config 1");
    }

    async updateListConfig() {
        await this.configList.click();
        await this.selectConfig.selectOption({ index: 2 });
        await this.firstRowCondition.fill("1234");
        await this.saveChangeButton.click();
    }

    async aftterUpdateListConfig() {
        //textbox (input) là một thẻ tự đóng (self-closing tag), không có nội dung text bên trong
        const value = await this.getText.inputValue(); //await element.inputValue(); để get text hiện tại của ô input
        expect(value).toContain("1234");
    }
    async deleteListConfig() {
        await this.configList.click();
        await this.selectConfig.selectOption({ label: 'new list config 1' });
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.accept().catch(error => {
                console.error('Error accepting dialog:', error);
            });
          });
        await this.deleteOption.click();
    }

    async aftterDeleteListConfig() {
        await this.selectConfig.waitFor({ state: 'visible' });
        const updateListConfig = await this.selectConfig.innerText();
        expect(updateListConfig).not.toContain("new list config 1");
      
    }
}