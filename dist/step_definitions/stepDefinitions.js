"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const customersPage_1 = require("../page_objects/customersPage");
let customersPage;
let searchSummaryAtVeryBeginning;
(0, cucumber_1.Given)('the user is on the page', async function () {
    customersPage = new customersPage_1.CustomersPage();
    customersPage.open();
    //         searchSummaryAtVeryBeginning = await customersPage.getSummaryText();
});
(0, cucumber_1.When)('the user enter {string} and {string}', async function (string, string2) {
    await customersPage.UserName(string);
    await customersPage.Password(string2);
});
(0, cucumber_1.When)('the user click on {string} button', async function (string) {
    // await customersPage.Short_Sleep(10000);
    await customersPage.clickBtn();
});
(0, cucumber_1.When)('i should be on Dashboard page', async function () {
    await customersPage.currentPage();
});
//      Given('when the user click on Catalog',async function () {
//            await customersPage.clickCatalog();
//          });
(0, cucumber_1.When)('the user click on Catalog', async function () {
    await customersPage.clickCatalog();
    //             await customersPage.SelectFromCatalogList();
});
(0, cucumber_1.Then)('user select {string} from list', async function (string) {
    await customersPage.ClickProduct();
});
(0, cucumber_1.Then)('user should be on product page', async function () {
    await customersPage.Product_currentPage();
});
(0, cucumber_1.When)('user enter the product name {string} and search product', async function (string) {
    await customersPage.Sendkeys(string);
    await customersPage.ClickBtn();
});
(0, cucumber_1.Then)('product should be displayed', async function () {
    //              await customersPage.Product_Display();
});
//======================================================================================================
(0, cucumber_1.Given)('user click on {string}', async function (string) {
    await customersPage.ClickCategories();
});
(0, cucumber_1.When)('user click on AddNew', async function () {
    await customersPage.clickAddNew();
    //         await customersPage.upload_File();
});
(0, cucumber_1.Then)('Add a new category page should be displayed', async function () {
    await customersPage.AddNewCurrentPage();
});
(0, cucumber_1.When)('user provide details of product and save', async function () {
    await customersPage.AddNew_Categories();
});
(0, cucumber_1.Then)('product should be displayed in categories', async function () {
    await customersPage.SearchAndDisplay();
});
//===================================================================================>
(0, cucumber_1.Given)('user the click on {string}', async function (string) {
    await customersPage.clickManufacturers();
});
(0, cucumber_1.When)('user enter {string} and search product', async function (string) {
    await customersPage.EnterManufacturerName(string);
});
//=============================================================================================================
/*
When('the user selects value {string} in the drop-down',
    async function (value: string) {
        await customersPage.selectSearchColumnByText(value);
    });

When('the user sets case sensitivity switch to {string}',
    async function (isCaseSensitive: string) {
        let booleanValue: boolean = isCaseSensitive.toLowerCase() === 'true';
        await customersPage.setMatchCaseCheckboxField(booleanValue);
    });

Then('the user should see the following result summary {string}',
    async function (expectedSummary: string) {
        assert.strictEqual(
            await customersPage.getSummaryText(),
            expectedSummary);
    });

Then('the user should see that the search term is {string}',
    async function (expectedTerm: string) {
        let searchTerm: string = await customersPage.getSearchTermText();
        assert.ok(searchTerm.startsWith(expectedTerm),
            "Actual should starts with expected."
            + "\nActual: " + searchTerm
            + "\nExpected: " + expectedTerm);
    });

When('the user clears filters',
    async function () {
        await customersPage.clickClearFiltersButton();
    });

Then('the user should see that search criteria are cleared',
    async function () {
        assert.strictEqual(await customersPage.getSearchInputText(), "");
    });

Then('the user should see that the search result summary is as in the very beginning',
    async function () {
        assert.strictEqual(await customersPage.getSummaryText(),
            searchSummaryAtVeryBeginning);
    });

Then('the user should see that the search results are as follows: {string}',
    async function (expectedResults: string) {
        let resultText: string
            = await customersPage.getSearchResultsTableText();
        assert.strictEqual(
            resultText
                .replace(/(\s+)/gm, " ")
                .trim(),
            expectedResults);
    }); */
