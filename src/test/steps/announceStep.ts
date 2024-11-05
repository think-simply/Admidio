// loginSteps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import AnnoucePage from "../pages/announcePage";
import { pageFixture } from "../../hooks/pageFixture";


When("User add a new annoucement title {string}", { timeout: 30000 }, async (title) => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.addAnnouce(title);
});
Then("New annoucement with title {string} has been created successfully", { timeout: 30000 }, async (title) => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.newAnnouce(title);
});
