// loginSteps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import DashboardPage from "../pages/dashboardPage";
import { pageFixture } from "../../hooks/pageFixture"; 

Given("User navigates to page", async () => {
    const loginPage = new DashboardPage(pageFixture.page); // Use pageFixture.page
    await loginPage.visit();
  });
  When("User inputs data with {string} and {string}", async (name, pass) => {
    const loginPage = new DashboardPage(pageFixture.page);
    await loginPage.login(name, pass);
  });
  Then("{string} message will be displayed", async (errorMessage) => {
    const loginPage = new DashboardPage(pageFixture.page);
    await loginPage.validateErrorMessage(errorMessage);
  });