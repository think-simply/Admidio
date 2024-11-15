import { Given, When, Then } from "@cucumber/cucumber";
import GroupAndRolePage from "../pages/groupAndRolePage";
import { pageFixture } from "../../hooks/pageFixture";


When("User create a new role", { timeout: 30000 }, async () => {
  const groupAndRolePage = new GroupAndRolePage(pageFixture.adminPage);
  await groupAndRolePage.addRole();
});
Then("New role has been created successfully", { timeout: 30000 }, async () => {
  const groupAndRolePage = new GroupAndRolePage(pageFixture.adminPage);
  await groupAndRolePage.afterAddRole();
});
When("User updates a role", { timeout: 30000 }, async () => {
  const groupAndRolePage = new GroupAndRolePage(pageFixture.adminPage);
  await groupAndRolePage.updateRole();
});
Then("The role has been updated successfully", { timeout: 30000 }, async () => {
  const groupAndRolePage = new GroupAndRolePage(pageFixture.adminPage);
  await groupAndRolePage.afterAddRole();
});
When("User removes a role", { timeout: 30000 }, async () => {
  const groupAndRolePage = new GroupAndRolePage(pageFixture.adminPage);
  await groupAndRolePage.removeRole();
});
Then("The role has been deleted successfully", { timeout: 30000 }, async () => {
  const groupAndRolePage = new GroupAndRolePage(pageFixture.adminPage);
  await groupAndRolePage.afterRemoveRole();
});

When("User add a category", { timeout: 30000 }, async () => {
  const groupAndRolePage = new GroupAndRolePage(pageFixture.adminPage);
  await groupAndRolePage.addCategory();
});
Then("The new role-category has been created successfully", { timeout: 30000 }, async () => {
  const groupAndRolePage = new GroupAndRolePage(pageFixture.adminPage);
  await groupAndRolePage.afterAddCate();
});

When("User updates a category", { timeout: 30000 }, async () => {
  const groupAndRolePage = new GroupAndRolePage(pageFixture.adminPage);
  await groupAndRolePage.updateCategory();
});
Then("The role-category has been updated successfully", { timeout: 30000 }, async () => {
  const groupAndRolePage = new GroupAndRolePage(pageFixture.adminPage);
  await groupAndRolePage.afterUpdateCate();
});
When("User removes a category", { timeout: 30000 }, async () => {
  const groupAndRolePage = new GroupAndRolePage(pageFixture.adminPage);
  await groupAndRolePage.updateCategory();
});
Then("The role-category has been removed successfully", { timeout: 30000 }, async () => {
  const groupAndRolePage = new GroupAndRolePage(pageFixture.adminPage);
  await groupAndRolePage.afterUpdateCate();
});

When("User creates a new configuration", { timeout: 30000 }, async () => {
  const groupAndRolePage = new GroupAndRolePage(pageFixture.adminPage);
  await groupAndRolePage.addListConfig();
});
Then("The new configuration has been created successfully", { timeout: 30000 }, async () => {
  const groupAndRolePage = new GroupAndRolePage(pageFixture.adminPage);
  await groupAndRolePage.afterAddListConfig();
});
When("User updates a new configuration", { timeout: 30000 }, async () => {
  const groupAndRolePage = new GroupAndRolePage(pageFixture.adminPage);
  await groupAndRolePage.updateListConfig();
});
Then("The configuration has been updated successfully", { timeout: 30000 }, async () => {
  const groupAndRolePage = new GroupAndRolePage(pageFixture.adminPage);
  await groupAndRolePage.aftterUpdateListConfig();
});

When("User deletes a new configuration", { timeout: 30000 }, async () => {
  const groupAndRolePage = new GroupAndRolePage(pageFixture.adminPage);
  await groupAndRolePage.deleteListConfig();
});
Then("The configuration has been deleted successfully", { timeout: 30000 }, async () => {
  const groupAndRolePage = new GroupAndRolePage(pageFixture.adminPage);
  await groupAndRolePage.aftterDeleteListConfig();
});


