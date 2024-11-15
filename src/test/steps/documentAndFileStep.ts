import { Given, When, Then } from "@cucumber/cucumber";
import DocumentAndFilePage from "../pages/documentAndFilePage";
import { pageFixture } from "../../hooks/pageFixture";


Then("User should see an error message indicating invalid credentials", { timeout: 30000 }, async () => {
  const documentAndFilePage = new DocumentAndFilePage(pageFixture.adminPage);
  await documentAndFilePage.ErrorMessage();
});