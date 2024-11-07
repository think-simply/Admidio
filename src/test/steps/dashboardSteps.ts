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
When("User enters an invalid {string} or {string}", { timeout: 20000 }, async (username, password) => {
  const dashboardPage = new DashboardPage(pageFixture.page);
  await dashboardPage.login(username, password);
});

When("User login with a valid {string} or {string}", { timeout: 20000 }, async (username, password) => {
  const dashboardPage = new DashboardPage(pageFixture.page);
  await dashboardPage.login(username, password);
});
When("User should see the homepage", { timeout: 20000 }, async () => {
  const dashboardPage = new DashboardPage(pageFixture.page);
  await dashboardPage.MessLogin();
});
When("User click on Annoucements on left menu", { timeout: 20000 }, async () => {
  const dashboardPage = new DashboardPage(pageFixture.page);
  await dashboardPage.clickonAnnouce();
});
When("User click on Events on left menu", { timeout: 20000 }, async () => {
  const dashboardPage = new DashboardPage(pageFixture.page);
  await dashboardPage.clickonEvent();
});

