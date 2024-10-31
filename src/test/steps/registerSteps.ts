// loginSteps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import RegisterPage from "../pages/registerPage";
import DashboardPage from "../pages/dashboardPage"
import { pageFixture } from "../../hooks/pageFixture";


When("User inputs all valid data", { timeout: 30000 }, async () => {
  const registerPage = new RegisterPage(pageFixture.page);
  await registerPage.registAccount(pageFixture.page);
});

Then("New account has been created successfully", { timeout: 30000 }, async () => {
  const registerPage = new RegisterPage(pageFixture.page);
  await registerPage.registMess();
})
