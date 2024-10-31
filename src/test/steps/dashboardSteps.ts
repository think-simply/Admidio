// loginSteps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import DashboardPage from "../pages/dashboardPage";
import { pageFixture } from "../../hooks/pageFixture"; 

Given("User navigates to page",{ timeout: 20000 }, async () => {
    const dashboardPage = new DashboardPage(pageFixture.page); // Use pageFixture.page
    await dashboardPage.visit();
    
  });
  When("User goes to Register page", { timeout: 20000 }, async () => {
    const dashboardPage = new DashboardPage(pageFixture.page);
    await dashboardPage.gotoRegister();
  });
  
 