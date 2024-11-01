// loginSteps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import DashboardPage from "../pages/dashboardPage";
import { pageFixture } from "../../hooks/pageFixture";

Given("User navigates to page", { timeout: 20000 }, async () => {
  const dashboardPage = new DashboardPage(pageFixture.page); // Use pageFixture.page here
  await dashboardPage.visit();

});
When("User goes to Register page", { timeout: 20000 }, async () => {
  const dashboardPage = new DashboardPage(pageFixture.page);
  await dashboardPage.gotoRegister();
});
When("User clicks on the Password forgotten link", { timeout: 20000 }, async () => {
  const dashboardPage = new DashboardPage(pageFixture.page);
  await dashboardPage.gotoForgotPass();
});
