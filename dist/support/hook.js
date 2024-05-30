"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driver = void 0;
const cucumber_1 = require("@cucumber/cucumber");
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome_1 = require("selenium-webdriver/chrome");
(0, cucumber_1.BeforeAll)(async () => {
    exports.driver = await new selenium_webdriver_1.Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome_1.Options()
        //                 .headless()
        .windowSize({ width: 640, height: 480 }))
        .build();
    return exports.driver.manage().window().maximize();
});
// AfterAll(async () => driver.quit());
(0, cucumber_1.After)(async function (scenario) {
    if (scenario.result?.status === cucumber_1.Status.FAILED) {
        const attach = this.attach;
        const png = await exports.driver.takeScreenshot();
        const decodedImage = Buffer.from(png, "base64");
        return attach(decodedImage, "image/png");
    }
});
