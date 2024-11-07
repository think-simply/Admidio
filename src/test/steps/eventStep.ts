// loginSteps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import EventPage from "../pages/eventPage";
import { pageFixture } from "../../hooks/pageFixture";


When("User create a new event", { timeout: 30000 }, async () => {
  const eventPage = new EventPage(pageFixture.page);
  await eventPage.addEvent();
});
Then("The new event has been created successfully", { timeout: 30000 }, async () => {
  const eventPage = new EventPage(pageFixture.page);
  await eventPage.afterAddEvent();
});
