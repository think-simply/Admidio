// loginSteps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import RegisterPage from "../pages/registerPage";
import { pageFixture } from "../../hooks/pageFixture"; 

Given("User navigates to register page", async () => {
    const loginPage = new RegisterPage(pageFixture.page); // Use pageFixture.page
    await loginPage.visit();
  });