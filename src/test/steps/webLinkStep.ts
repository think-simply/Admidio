import { Given, When, Then } from "@cucumber/cucumber";
import WebLinkPage from "../pages/webLinkPage";
import { pageFixture } from "../../hooks/pageFixture";


When("User creates a new Folder", { timeout: 30000 }, async () => {
  const webLinkPage = new WebLinkPage(pageFixture.adminPage);
  await webLinkPage.createFolder();
});
Then("New folder has been created successfully", { timeout: 30000 }, async () => {
  const webLinkPage = new WebLinkPage(pageFixture.adminPage);
  await webLinkPage.afterCreateFolder();
});
