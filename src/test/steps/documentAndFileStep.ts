import { Given, When, Then } from "@cucumber/cucumber";
import DocumentAndFilePage from "../pages/documentAndFilePage";
import { pageFixture } from "../../hooks/pageFixture";


When("User creates a new Folder", { timeout: 30000 }, async () => {
  const documentAndFilePage = new DocumentAndFilePage(pageFixture.adminPage);
  await documentAndFilePage.createFolder();
});
Then("New folder has been created successfully", { timeout: 30000 }, async () => {
  const documentAndFilePage = new DocumentAndFilePage(pageFixture.adminPage);
  await documentAndFilePage.afterCreateFolder();
});
