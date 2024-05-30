"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersPage = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const AbstractPageObject_1 = require("./AbstractPageObject");
const hook_1 = require("../support/hook");
class CustomersPage extends AbstractPageObject_1.AbstractPageObject {
    username = selenium_webdriver_1.By.xpath("//input[@id='Email']");
    password = selenium_webdriver_1.By.xpath("//input[@id='Password']");
    LoginBtn = selenium_webdriver_1.By.xpath("//button[@type='submit' and @class='button-1 login-button' and text()='Log in']");
    DashBoardCurrentPage = selenium_webdriver_1.By.xpath("//div[@class='content-header']/h1");
    Catalog = selenium_webdriver_1.By.xpath("//i[@class='nav-icon fas fa-book']"); //div/div/nav/ul/li[2]/a/p
    CatalogList = selenium_webdriver_1.By.xpath("//div/div/nav/ul/li[@class='nav-item has-treeview menu-open']/a/following-sibling::ul/li/a/p");
    Product = selenium_webdriver_1.By.xpath("//a/following-sibling::ul/li/a/p[text()=' Products']");
    //  (//div/div/nav/ul/li[2]/a/following-sibling::ul/li/a/p)[1]
    CurrentPage_Product = selenium_webdriver_1.By.xpath("//h1[@class='float-left']");
    ProductName = selenium_webdriver_1.By.xpath("//input[@id='SearchProductName']");
    ProductNameVisibility = selenium_webdriver_1.By.xpath("//label[text()='Product name']");
    SearchBtn = selenium_webdriver_1.By.xpath("//button[@id='search-products']");
    displayProduct = selenium_webdriver_1.By.xpath(" //td[text()='Build your own computer']");
    ArrowBtn = selenium_webdriver_1.By.xpath("//i[@class='far fa-angle-up']");
    ArrowBtnDown = selenium_webdriver_1.By.xpath("//i[@class='far fa-angle-down']");
    categories = selenium_webdriver_1.By.xpath("//a/following-sibling::ul/li/a/p[text()=' Categories']");
    categories_AddNew = selenium_webdriver_1.By.xpath("//a[@class='btn btn-primary']");
    categories_Name = selenium_webdriver_1.By.xpath("//input[@id='Name']");
    categories_Description = selenium_webdriver_1.By.xpath("//body[@class='mce-content-body ']");
    categories_save = selenium_webdriver_1.By.xpath("//button[@name='save']");
    AddCategories_currentpage = selenium_webdriver_1.By.xpath(" //div[@class='content-header clearfix']/h1[@class='float-left']");
    CategoryName = selenium_webdriver_1.By.xpath("//input[@id='SearchCategoryName']");
    CategorySearch = selenium_webdriver_1.By.xpath("//button[@id='search-categories']");
    Manufacturers = selenium_webdriver_1.By.xpath("//a/following-sibling::ul/li/a/p[text()=' Manufacturers']");
    ManufacturersCurrentPage = selenium_webdriver_1.By.xpath("//h1[@class='float-left'][text()]");
    ManufacturerName = selenium_webdriver_1.By.xpath("//input[@id='SearchManufacturerName']");
    ManufacturerDropdown = selenium_webdriver_1.By.xpath("//select[@id='SearchPublishedId']");
    ManufacturerDropdownlist = selenium_webdriver_1.By.xpath("//select[@id='SearchPublishedId']/option[text()]");
    ManufacturerDropdownlistP2 = selenium_webdriver_1.By.xpath("(//select[@id='SearchPublishedId']/option[text()])[2]");
    ManufacturerSearchBtn = selenium_webdriver_1.By.xpath("//button[@id='search-manufacturers']");
    importBtn = selenium_webdriver_1.By.xpath("//button[@name='importexcel']");
    importFile = selenium_webdriver_1.By.xpath("//input[@type='file']");
    importFileFromExcelBtn = selenium_webdriver_1.By.xpath("//button[@type='submit'][@class='btn btn-primary']");
    constructor() {
        super(hook_1.driver);
    }
    //=================================================================================================
    open = async () => {
        const pageUrl = "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F";
        await this.driver.get(pageUrl);
    };
    UserName = async (value1) => {
        await this.driver.findElement(this.username).clear();
        await this.driver.findElement(this.username).sendKeys(value1);
        return this;
    };
    Password = async (value2) => {
        await this.driver.findElement(this.password).clear();
        await this.driver.findElement(this.password).sendKeys(value2);
        return this;
    };
    clickBtn = async () => {
        await this.driver.findElement(this.LoginBtn).click();
        return this;
    };
    currentPage = async () => {
        await this.driver.findElement(this.DashBoardCurrentPage).isDisplayed();
        return this;
    };
    clickCatalog = async () => {
        try {
            const element = await this.driver.findElement(this.Catalog);
            await this.driver.wait(selenium_webdriver_1.until.elementIsVisible(element), 10000);
            return element.click();
        }
        catch (error) {
            console.log(error.message);
            const element = await this.driver.findElement(this.Catalog);
            await this.driver.wait(selenium_webdriver_1.until.elementIsVisible(element), 5000);
            return element.click();
        }
        return this;
    };
    ClickProduct = async () => {
        const element = await this.driver.findElement(this.Product);
        await this.driver.wait(selenium_webdriver_1.until.elementIsVisible(element), 5000);
        return element.click();
    };
    Product_currentPage = async () => {
        await this.driver.findElement(this.CurrentPage_Product);
    };
    Sendkeys = async (value) => {
        if (await this.driver.findElement(this.ProductNameVisibility).isDisplayed()) {
            await this.driver.findElement(this.ProductName).sendKeys(value);
        }
        else {
            await this.driver.findElement(this.ArrowBtnDown).click();
            await this.driver.findElement(this.ProductName).sendKeys(value);
        }
    };
    ClickBtn = async () => {
        await this.driver.findElement(this.SearchBtn).click();
    };
    Product_Display = async () => {
        await this.driver.findElement(this.ArrowBtn).click();
        try {
            const khan = await this.driver.findElement(this.displayProduct);
            await this.driver.wait(selenium_webdriver_1.until.elementIsVisible(khan), 5000);
            khan.isDisplayed();
        }
        catch (error) {
            console.log(error.message);
            const khan = await this.driver.findElement(this.displayProduct);
            await this.driver.wait(selenium_webdriver_1.until.elementIsVisible(khan), 5000);
            khan.isDisplayed();
        }
    };
    ClickCategories = async () => {
        const cate = await this.driver.findElement(this.categories);
        await this.driver.wait(selenium_webdriver_1.until.elementIsVisible(cate), 5000);
        cate.click();
    };
    AddNew_Categories = async () => {
        await this.driver.findElement(this.categories_Name).sendKeys("Ipad");
        //      const cate= await this.driver.findElement(this.categories_Description);
        //      await this.driver.wait(until.elementIsVisible(cate),5000);
        //      cate.sendKeys("Iphone ipad");
        //       const fileInput = await driver.findElement( By.xpath("//input[@type='file']"));
        //       await this.driver.wait(until.elementIsVisible(fileInput),5000);
        //       await fileInput.sendKeys("D:\\UploadAndDownload\\iphone ipad.jpg");
        await this.driver.findElement(this.categories_save).click();
    };
    clickAddNew = async () => {
        const cate = await this.driver.findElement(this.categories_AddNew);
        await this.driver.wait(selenium_webdriver_1.until.elementIsVisible(cate), 5000);
        cate.click();
    };
    AddNewCurrentPage = async () => {
        await this.driver.findElement(this.AddCategories_currentpage).click();
    };
    SearchAndDisplay = async () => {
        const element = await this.driver.findElement(this.CategoryName);
        await this.driver.wait(selenium_webdriver_1.until.elementIsVisible(element), 5000);
        element.sendKeys("Ipad");
        await this.driver.findElement(this.CategorySearch).click();
    };
    //============================================================================================================
    clickManufacturers = async () => {
        const element = await this.driver.findElement(this.Manufacturers);
        await this.driver.wait(selenium_webdriver_1.until.elementIsVisible(element), 5000);
        return element.click();
    };
    currentpage_Manufacturers = async () => {
        await this.driver.findElement(this.currentpage_Manufacturers).isDisplayed();
    };
    EnterManufacturerName = async (pName) => {
        await this.driver.findElement(this.ManufacturerName).sendKeys(pName);
        await this.driver.findElement(this.ManufacturerDropdown).click();
        await this.driver.findElement(this.ManufacturerDropdownlistP2).click();
        const hlo = await this.driver.findElement(this.ManufacturerSearchBtn);
        await this.driver.wait(selenium_webdriver_1.until.elementIsVisible(hlo), 5000);
        hlo.click();
    };
    SelectFromCatalogList = async () => {
        const printlist = await this.driver.findElement(this.CatalogList);
    };
    // Scroll (elementid : string) {
    //     const element=this.driver.findElement(this.ManufacturerSearchBtn);  
    //     if(element){
    //         element.
    //     }
    // }
    //      scrollToElement(elementId: string) {
    //         const element = document.getElementById(elementId);
    //         if (element) {
    //             element.scrollIntoView({ behavior: 'smooth' });
    //         } else {
    //             console.error(`Element with ID '${elementId}' not found.`);
    //         }
    //     }
    //======================================================================================================================
    upload_File = async () => {
        await this.driver.findElement(this.importBtn).click();
        await this.driver.findElement(this.importFile).sendKeys("D:\\HTML\\exceldrive.xlsx");
        await this.driver.findElement(this.importFileFromExcelBtn).click();
    };
    explicitWait = async (element) => {
        await this.driver.wait(selenium_webdriver_1.until.elementIsVisible(element), 10000);
    };
    Short_Sleep = async (milliseconds) => {
        new Promise(resolve => setTimeout(resolve, milliseconds));
        console.log("Hi this is Salman");
    };
}
exports.CustomersPage = CustomersPage;
