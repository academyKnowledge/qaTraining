@kA-Team @smoke @KAT-26
# Feature: KAT-26 Verify that the user can add product to cart successfully
Feature: Add product to cart functionality

    The user should be able to add product to cart

    Scenario: Check the visibility of website logo
        Given The user navigated to magento website
        Then The logo should be visible

    @focus
    Scenario: TC-1234 Verify that the user can add product to cart successfully
        Given The user navigated to magento website
        # Given The user type in search input field
        And The user search for shirt product
        When The user choose the product X
        And The user choose the size and color for product X
        And The user click on Add to cart button
        Then The product should be added to the cart successfully
        And The counter of the cart should be visible