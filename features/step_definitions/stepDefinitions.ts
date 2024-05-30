import assert from 'assert';
import { Given, Then, When } from '@cucumber/cucumber';
import { CustomersPage } from '../page_objects/customersPage';

let customersPage: CustomersPage;
let searchSummaryAtVeryBeginning: string;

    Given('the user is on the page',
        async function () {
        customersPage = new CustomersPage();
        customersPage.open();
//         searchSummaryAtVeryBeginning = await customersPage.getSummaryText();
    });


     When('the user enter {string} and {string}', async function (string, string2) {
     await customersPage.UserName(string);
     await customersPage.Password(string2);

    });

     When('the user click on {string} button', async function (string) {
        // await customersPage.Short_Sleep(10000);
              await customersPage.clickBtn();
             });


       When('i should be on Dashboard page', async function () {
              await customersPage.currentPage();

            });

//      Given('when the user click on Catalog',async function () {
//            await customersPage.clickCatalog();
//          });

       When('the user click on Catalog',async function () {
            await customersPage.clickCatalog();

//             await customersPage.SelectFromCatalogList();
             });


     Then('user select {string} from list',async function (string) {
             await customersPage.ClickProduct();
         });

     Then('user should be on product page',async function () {
          await customersPage.Product_currentPage();
         });

    When('user enter the product name {string} and search product',async function (string) {

          await customersPage.Sendkeys(string);
          await customersPage.ClickBtn();
          });

      Then('product should be displayed',async function () {
//              await customersPage.Product_Display();

           });

//======================================================================================================

    Given('user click on {string}',async function (string) {
        await customersPage.ClickCategories();
         });

    When('user click on AddNew',async function () {
        await customersPage.clickAddNew();
//         await customersPage.upload_File();
            });

      Then('Add a new category page should be displayed',async function () {
          await customersPage.AddNewCurrentPage();
             });

     When('user provide details of product and save',async function () {
           await customersPage.AddNew_Categories();
             });

       Then('product should be displayed in categories',async function () {
            await customersPage.SearchAndDisplay();
               });

//===================================================================================>

      Given('user the click on {string}',async function (string) {
             await customersPage.clickManufacturers();
              });

    When('user enter {string} and search product',async function (string) {
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
