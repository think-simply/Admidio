import { Page, Locator, expect } from "@playwright/test";
import axios from "axios";
const locator = require("../selectors/webLinkSelector.json");

export default class WebLinkPage {
    readonly page: Page;
    readonly webCategory: Locator;
    readonly createWebCategoryButton: Locator;
    readonly nameCategory: Locator;
    readonly saveButton: Locator;
    readonly createdCategory: Locator;
    readonly createWebLink: Locator;
    readonly linkName: Locator;
    readonly linkAddress: Locator;
    readonly categoryDropdown: Locator;
    readonly createdWebLink: Locator;
    readonly editWebLink: Locator;
    readonly updatedWebLink : Locator;
    readonly deleteWebLinkButton: Locator;
    readonly confirmDelete: Locator;
    readonly editCategoryButton: Locator;
    readonly editedCategory: Locator;
    readonly deleteCategoryButton: Locator;
    readonly updateCategoryButton: Locator;
    readonly updatedCategory: Locator;

    constructor(page: Page) {
        this.page = page;
        this.webCategory = page.locator(locator.webCategory);
        this.createWebCategoryButton = page.locator(locator.createWebCategoryButton);
        this.nameCategory = page.locator(locator.nameCategory);
        this.saveButton = page.locator(locator.saveButton);
        this.createdCategory = page.locator(locator.createdCategory);
        this.createWebLink = page.locator(locator.createWebLink);
        this.linkName = page.locator(locator.linkName);
        this.linkAddress = page.locator(locator.linkAddress);
        this.categoryDropdown = page.locator(locator.categoryDropdown);
        this.createdWebLink = page.locator(locator.createdWebLink);
        this.editWebLink = page.locator(locator.editWebLink);
        this.updatedWebLink = page.locator(locator.updatedWebLink);
        this.deleteWebLinkButton = page.locator(locator.deleteWebLinkButton);
        this.confirmDelete = page.locator(locator.confirmDelete);
        this.editCategoryButton = page.locator(locator.editCategoryButton);
        this.editedCategory = page.locator(locator.editedCategory);
        this.deleteCategoryButton = page.locator(locator.deleteCategoryButton);
        this.updateCategoryButton = page.locator(locator.updateCategoryButton);
        this.updatedCategory = page.locator(locator.updatedCategory)
    }
    async createCategory() {
        await this.webCategory.click();
        await this.createWebCategoryButton.click();
        await this.nameCategory.fill("createwebCategory");
        await this.saveButton.click();
      }
      async afterCreateCategory() {
        await expect(this.createdCategory).toBeVisible({ timeout: 5000 });
       
      }
      async addWebLink() {
        
        await this.createWebLink.click();
        await this.linkName.fill("theu");
        await this.linkAddress.fill("https://kinhnghiemsuckhoe.com/");
        await this.categoryDropdown.selectOption({ label: 'createwebCategory' });
        await this.saveButton.click();
     
      }
      async afterAddWebLink() {
        await expect(this.createdWebLink).toBeVisible({ timeout: 5000 });
      }

      async updateWebLink() {
        
        await this.editWebLink.click();
        await this.linkName.fill("theu_edit");
        await this.linkAddress.fill("https://kinhnghiemsuckhoe.com/");
        await this.categoryDropdown.selectOption({ label: 'createwebCategory' });
        await this.saveButton.click();
     
      }
      async afterUpdateWebLink() {
        await expect(this.updatedWebLink).toBeVisible({ timeout: 5000 });
      }

      async deleteWebLink() {
        await this.deleteWebLinkButton.click();
        await this.confirmDelete.click();
     
      }
      async afterDeleteWebLink() {
        try {
          const response = await axios.get('https://buianthai.infinityfreeapp.com/adm_program/system/popup_message.php?');
          expect(response.status).toBe(200);
      } catch (error) {
          console.error('Error:', error);
      }
      }
      async updateCategory() {
        await this.webCategory.click();
        await this.updateCategoryButton.click();
        await this.nameCategory.fill("createwebCategory_edited");
        await this.saveButton.click();
     
      }
      async afterUpdateCategory() {
        await expect(this.updatedCategory).toBeVisible({ timeout: 5000 });
      }
    
      async deleteCategory() {
        await this.webCategory.click();
        await this.deleteCategoryButton.click();
        await this.confirmDelete.click();
     
      }
      async afterDeleteCategory() {
        try {
          const response = await axios.get('https://buianthai.infinityfreeapp.com/adm_program/system/popup_message.php?');
      } catch (error) {
          console.error('Error:', error);
      }
      }
    
}