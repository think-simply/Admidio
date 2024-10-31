// loginSteps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import DashboardPage from "../pages/dashboardPage";
import { pageFixture } from "../../hooks/pageFixture"; 

Given("User navigates to page", async () => {
    const dashboardPage = new DashboardPage(pageFixture.page); // Use pageFixture.page
    await dashboardPage.visit();
    
  });
  When("User goes to Register page", async () => {
    const dashboardPage = new DashboardPage(pageFixture.page);
    await dashboardPage.gotoRegister();
  });
  
 