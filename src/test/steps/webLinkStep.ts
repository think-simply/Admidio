import { Given, When, Then } from "@cucumber/cucumber";
import WebLinkPage from "../pages/webLinkPage";
import { pageFixture } from "../../hooks/pageFixture";


When("User creates a new web category", { timeout: 30000 }, async () => {
  const webLinkPage = new WebLinkPage(pageFixture.adminPage);
  await webLinkPage.createCategory();
});
Then("New web category has been created successfully", { timeout: 30000 }, async () => {
  const webLinkPage = new WebLinkPage(pageFixture.adminPage);
  await webLinkPage.afterCreateCategory();
});

When("User creates a new web link", { timeout: 30000 }, async () => {
  const webLinkPage = new WebLinkPage(pageFixture.adminPage);
  await webLinkPage.addWebLink();
});
Then("New web link has been created successfully", { timeout: 30000 }, async () => {
  const webLinkPage = new WebLinkPage(pageFixture.adminPage);
  await webLinkPage.afterAddWebLink();
});

When("User updates a web link", { timeout: 30000 }, async () => {
  const webLinkPage = new WebLinkPage(pageFixture.adminPage);
  await webLinkPage.updateWebLink();
});
Then("The web link has been updated successfully", { timeout: 30000 }, async () => {
  const webLinkPage = new WebLinkPage(pageFixture.adminPage);
  await webLinkPage.afterUpdateWebLink();
});
When("User deletes a web link", { timeout: 30000 }, async () => {
  const webLinkPage = new WebLinkPage(pageFixture.adminPage);
  await webLinkPage.deleteWebLink();
});
Then("The web link has been deleted successfully", { timeout: 30000 }, async () => {
  const webLinkPage = new WebLinkPage(pageFixture.adminPage);
  await webLinkPage.afterDeleteWebLink();
});

When("User updates a web category", { timeout: 30000 }, async () => {
  const webLinkPage = new WebLinkPage(pageFixture.adminPage);
  await webLinkPage.updateCategory();
});
Then("The web category has been updated successfully", { timeout: 30000 }, async () => {
  const webLinkPage = new WebLinkPage(pageFixture.adminPage);
  await webLinkPage.afterUpdateCategory();
});
When("User deletes a web category", { timeout: 30000 }, async () => {
  const webLinkPage = new WebLinkPage(pageFixture.adminPage);
  await webLinkPage.deleteCategory();
});
Then("The web category has been deleted successfully", { timeout: 30000 }, async () => {
  const webLinkPage = new WebLinkPage(pageFixture.adminPage);
  await webLinkPage.afterDeleteCategory();
});
