import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { authConfig } from '../../auth.config';

let browser: Browser;
let adminContext: BrowserContext;
let Context: BrowserContext;
let adminPage: Page;
let Page: Page;

BeforeAll(async () => {
  console.log("Launching browser...");
  browser = await chromium.launch({ headless: false });
});

AfterAll(async () => {
  console.log("Closing browser...");
  await browser.close();
});

Before(async function (this: any, { pickle }) {  // Sử dụng pickle thay vì tags
  if (pickle.tags.some(tag => tag.name === '@guest')) {  // Kiểm tra tag @guest
    // Create context for guest (non-logged in users)
    Context = await browser.newContext();
    Page = await Context.newPage();
    pageFixture.page = Page;
    this.page = Page;
    console.log("Creating guest context and page...");
  } else {  // Mặc định sẽ tạo admin context
    // Create context with stored credentials for admin
    adminContext = await browser.newContext({
      storageState: authConfig.admin.storageState
    });
    adminPage = await adminContext.newPage();
    pageFixture.adminPage = adminPage;
    this.page = adminPage;
    console.log("Creating admin context and page...");
  }
});

After(async function (this: any, { pickle, result }) {
  console.log("Closing context and page...");
  if (result?.status === Status.FAILED) {
    await this.page.screenshot({
      path: `./test-results/screenshots/${pickle.name}.png`,
      type: "png",
    });
  }
  
  if (pickle.tags.some(tag => tag.name === '@guest')) {
    await Context?.close();
  } else {
    await adminContext?.close();
  }
});