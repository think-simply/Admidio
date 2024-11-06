// loginSteps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import AnnoucePage from "../pages/announcePage";
import { pageFixture } from "../../hooks/pageFixture";


When("User add a new annoucement title {string} and text {string}", { timeout: 30000 }, async (title, text) => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.addAnnouce(title, text);
});
Then("New annoucement with title {string} has been created successfully", { timeout: 30000 }, async (title) => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.newAnnouce(title);
});
When("User copy the first announcement title {string} and text {string}", { timeout: 30000 }, async (title, text) => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.copyAnnouce(title, text);
});
Then("New annoucement with title {string} has been copied successfully", { timeout: 30000 }, async (title) => {
  const annoucePage = new AnnoucePage(pageFixture.page);
  await annoucePage.newAnnouce(title);
});

