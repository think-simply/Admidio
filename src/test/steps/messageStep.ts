// loginSteps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import MessagePage from "../pages/messagePage";
import { pageFixture } from "../../hooks/pageFixture";


When("User create a new event", { timeout: 30000 }, async () => {
  const messagePage = new MessagePage(pageFixture.page);
  await messagePage.addEvent();
});
Then("The new event has been created successfully", { timeout: 30000 }, async () => {
  const messagePage = new MessagePage(pageFixture.page);
  await messagePage.afterAddEvent();
});

