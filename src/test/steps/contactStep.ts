import { Given, When, Then } from "@cucumber/cucumber";
import ContactPage from "../pages/contactPage";
import { pageFixture } from "../../hooks/pageFixture";


When("User creates a new contact", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.addContact();
});
Then("New contact has been created successfully", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.afterAddContact();
});

When("User removes a new contact", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.deleteContact();
});
Then("The contact has been deleted successfully", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.afterDeleteContact();
});

When("User updates a new contact", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.updateContact();
});
Then("The contact has been updated successfully", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.afterUpdateContact();
});

When("User imports a contact file", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.importContact();
});
Then("The contact file has been imported successfully", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.afterimportContact();
});

When("User create a profile field", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.addProfileField();
});
Then("The new profile field has been created successfully", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.afterAddProfileField();
});

When("User updates a profile field", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.updateProfileField();
});
Then("The profile field has been updated successfully", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.afterUpdateProfileField();
});

When("User removes a profile field", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.deleteProfileField();
});
Then("The profile field has been deleted successfully", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.afterDeleteProfileField();
});

When("User create a new profile category", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.createProfileFieldCategory();
});
Then("The profile field category has been created successfully", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.afterCreateProfileFieldCategory();
});

When("User updates a new profile category", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.updateProfileFieldCategory();
});
Then("The profile field category has been updated successfully", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.afterUpdateProfileFieldCategory();
});

When("User removes a profile category", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.deleteProfileFieldCategory();
});
Then("The profile field category has been removed successfully", { timeout: 30000 }, async () => {
  const contactPage = new ContactPage(pageFixture.adminPage);
  await contactPage.afterDeleteProfileFieldCategory();
});
