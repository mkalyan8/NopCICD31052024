Feature: Verify seacrh and add operations.

  Scenario Outline:1 Login into application, search a product from catalog and display that product.

    Given the user is on the page
    When the user enter "<username>" and "<password>"
    When the user click on "Login" button
    And i should be on Dashboard page
    When the user click on Catalog
    Then user select "<string From catalog>" from list
    Then user should be on product page
    When user enter the product name "<product name>" and search product
    Then product should be displayed

    Examples:
      | username               | password | string From catalog |product name           |
      | admin@yourstore.com    | admin    |Products             |Build your own computer|


  Scenario Outline:2 Add a product to catagories and display that product.

    Given user click on "<ProductItem>"
    When user click on AddNew
    Then Add a new category page should be displayed
    When user provide details of product and save
    Then product should be displayed in categories

    Examples:
       | ProductItem      |
       |  categories      |


  Scenario Outline:3 Search product manufacturer to verify Dropdown functionality

    Given user the click on "<string From catalog>"
    When user enter "<product name>" and search product


    Examples:
      | string From catalog       | product name          |
      |   Manufacturers           |Nike                   |