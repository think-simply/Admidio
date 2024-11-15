import { Page, Locator, expect, Dialog } from "@playwright/test";
import path from "path";
const locator = require("../selectors/contactSelector.json");
const axios = require('axios');
export default class ContactPage {
    readonly page: Page;
    readonly createContact: Locator;
    readonly username: Locator;
    readonly saveButton: Locator;
    readonly nextButton: Locator;
    readonly surname: Locator;
    readonly surnameDialog: Locator;
    readonly firstnameDialog: Locator;
    readonly removeIcon: Locator;
    readonly confirmDelete: Locator;
    readonly updateIcon: Locator;
    readonly firstName: Locator;
    readonly updatedFirstName: Locator;
    readonly importContactButton: Locator;
    readonly assignRoleDropdown: Locator;
    readonly assignFieldButton: Locator;
    readonly verifyMessage: Locator;
    readonly importButton: Locator;
    readonly editProfileFieldButton: Locator;
    readonly createProfileFieldButton: Locator;
    readonly name: Locator;
    readonly category: Locator;
    readonly dataType: Locator;
    readonly requireInput: Locator;
    readonly createdfield: Locator;
    readonly updateProfileFile: Locator;
    readonly deleteProfileFile: Locator;
    readonly updatedField: Locator;
    readonly confirmYes: Locator;
    readonly profileFieldEditCategory: Locator;
    readonly createCategoryButton: Locator;
    readonly fieldCategoryName: Locator;
    readonly createdFieldCategory: Locator;
    readonly updateProfileFieldCategoryIcon : Locator;
    readonly deleteProfileFieldCategoryIcon : Locator;
    readonly updatedProfileFieldCatogory: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createContact = page.locator(locator.createContact);
        this.username = page.locator(locator.username);
        this.saveButton = page.locator(locator.saveButton);
        this.nextButton = page.locator(locator.nextButton);
        this.surname = page.locator(locator.surname);
        this.surnameDialog = page.locator(locator.surnameDialog);
        this.firstnameDialog = page.locator(locator.firstnameDialog);
        this.removeIcon = page.locator(locator.removeIcon);
        this.confirmDelete = page.locator(locator.confirmDelete);
        this.updateIcon = page.locator(locator.updateIcon);
        this.firstName = page.locator(locator.firstName);
        this.updatedFirstName = page.locator(locator.updatedFirstName);
        this.importContactButton = page.locator(locator.importContactButton);
        this.assignRoleDropdown = page.locator(locator.assignRoleDropdown);
        this.assignFieldButton = page.locator(locator.assignFieldButton);
        this.verifyMessage = page.locator(locator.verifyMessage);
        this.importButton = page.locator(locator.importButton);
        this.editProfileFieldButton = page.locator(locator.editProfileFieldButton);
        this.createProfileFieldButton = page.locator(locator.createProfileFieldButton);
        this.name = page.locator(locator.name);
        this.category = page.locator(locator.category);
        this.dataType = page.locator(locator.dataType);
        this.requireInput = page.locator(locator.requireInput);
        this.createdfield = page.locator(locator.createdfield);
        this.updateProfileFile = page.locator(locator.updateProfileFile);
        this.deleteProfileFile = page.locator(locator.deleteProfileFile);
        this.updatedField = page.locator(locator.updatedField);
        this.confirmYes = page.locator(locator.confirmYes);
        this.profileFieldEditCategory = page.locator(locator.profileFieldEditCategory);
        this.createCategoryButton = page.locator(locator.createCategoryButton);
        this.fieldCategoryName = page.locator(locator.fieldCategoryName);
        this.createdFieldCategory = page.locator(locator.createdFieldCategory);
        this.updateProfileFieldCategoryIcon = page.locator(locator.updateProfileFieldCategoryIcon);
        this.deleteProfileFieldCategoryIcon = page.locator(locator.deleteProfileFieldCategoryIcon);
        this.updatedProfileFieldCatogory = page.locator(locator.updatedProfileFieldCatogory);

    }
    async addContact() {
        await this.createContact.click()
    }
    async saveAction() {
        await this.page.waitForSelector('#btn_save', { state: 'visible' });
        await this.saveButton.click();
        await this.nextButton.click();
    }
    async afterAddContact() {
        await expect(this.surname.isVisible());

    }
    async handleMultipleInputs(inputs: string[]) {
        let currentInputIndex = 0;

        this.page.on('dialog', async (dialog) => {
            if (currentInputIndex < inputs.length) {
                await dialog.accept(inputs[currentInputIndex]);
                currentInputIndex++;
            } else {
                await dialog.dismiss();
            }
        });
    }

    async showDialogs() {
        await Promise.resolve().then(async () => {
            const inputs = ['new', 'contact'];
            await this.handleMultipleInputs(inputs);

            // Trigger your dialogs here
            await this.page.evaluate(() => {
                const firstname = prompt('Enter first name:');
                const lastname = prompt('Enter last name:');

                console.log(`Entered: ${firstname} ${lastname}`);
            });
        });
    }

    async deleteContact() {
        await this.removeIcon.click();
        await this.confirmDelete.click();
    }

    async afterDeleteContact() {
        try {
            const response = await axios.get('https://buianthai.infinityfreeapp.com/adm_program/modules/contacts/contacts_function.php?');
            expect(response.status).toBe(200);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    async updateContact() {
        await this.updateIcon.click();
        await this.firstName.fill("use2");
        await this.saveButton.click();
    }
    async afterUpdateContact() {
        await this.updatedFirstName.isVisible();

    }

    async importContact() {
        await this.importContactButton.click();
        // Select one file
        const fileInput = await this.page.locator('input[type="file"]');
        await fileInput.setInputFiles('src/files/myfile.xlsx');
        await this.assignRoleDropdown.selectOption({ label: 'Member' });
        await this.assignFieldButton.click();
        await this.importButton.click();

    }
    async afterimportContact() {
        //will update see the record here when update the right format
        await this.verifyMessage.isVisible();

    }
    async addProfileField() {
        await this.editProfileFieldButton.click();
        await this.createProfileFieldButton.click();
        await this.name.fill("newProfileField");
        await this.category.selectOption({ index: 1 });
        await this.dataType.selectOption({ index: 1 });
        await this.requireInput.selectOption({ index: 1 });
        await this.saveButton.click();

    }
    async afterAddProfileField() {
        await this.createdfield.isVisible();

    }
    async updateProfileField() {
        await this.editProfileFieldButton.click();
        await this.updateProfileFile.click();
        await this.dataType.selectOption({ label: 'Date' });
        await this.saveButton.click();

    }
    async afterUpdateProfileField() {
        await this.updatedField.isVisible();

    }
    async deleteProfileField() {
        await this.editProfileFieldButton.click();
        await this.deleteProfileFile.click();
        await this.confirmYes.click()
    }
    async afterDeleteProfileField() {
        await this.createdfield.isHidden();

    }
    async createProfileFieldCategory() {
        await this.editProfileFieldButton.click();
        await this.profileFieldEditCategory.click();
        await this.createCategoryButton.click();
        await this.fieldCategoryName.fill("newProfileFieldCategory");
        await this.saveButton.click();
    }
    async afterCreateProfileFieldCategory() {
        await this.createdFieldCategory.isVisible();

    }
    async updateProfileFieldCategory() {
        await this.editProfileFieldButton.click();
        await this.profileFieldEditCategory.click();
        await this.updateProfileFieldCategoryIcon.click();
        await this.fieldCategoryName.fill("newProfileFieldCategory1");
        await this.saveButton.click();
    }
    async afterUpdateProfileFieldCategory() {
        await this.updatedProfileFieldCatogory.isVisible();
    }
    async deleteProfileFieldCategory() {
        await this.editProfileFieldButton.click();
        await this.profileFieldEditCategory.click();
        await this.deleteProfileFieldCategoryIcon.click();
   
    }
    async afterDeleteProfileFieldCategory() {
        await this.updatedProfileFieldCatogory.isHidden();

    }

    
}
