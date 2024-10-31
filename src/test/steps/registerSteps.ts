// loginSteps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import RegisterPage from "../pages/registerPage";
import DashboardPage from "../pages/dashboardPage"
import { pageFixture } from "../../hooks/pageFixture";


When("And User inputs data with {string}, {string}, {string}, {string}, {string} and {string}", async (username, pass, confirmPass, surname, firstname, email ) => {
  const registerPage = new RegisterPage(pageFixture.page);
  await registerPage.registAccount(username, pass, confirmPass, surname, firstname, email );
});
Then ("New account has been created successfully",async ()=>{
  const registerPage = new RegisterPage(pageFixture.page);
  await registerPage.registMess();
})
