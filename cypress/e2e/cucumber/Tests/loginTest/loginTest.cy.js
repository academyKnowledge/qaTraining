import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("The user navigated to magento website",()=>{
    cy.visit("/");
});

Then("The logo should be visible",()=>{
    cy.get(".logo").should("be.visible");
});

Given("The user search for shirt product",()=>{
    cy.get("#search").type("shirt {enter}");
});

When("The user choose the product X",()=>{
    cy.get(".product-items li").first().click();
});

When("The user choose the size and color for product X",()=>{
    cy.get(".swatch-attribute.size").contains("M").click();
    cy.get(".swatch-attribute.color").find(".swatch-option").last().click();
});

When("The user click on Add to cart button",()=>{
    cy.get("#product-addtocart-button").click();
});

Then("The product should be added to the cart successfully",()=>{
    cy.get("[role=alert]").should("contain","You added Radiant Tee to your shopping cart.")
});

Then("The counter of the cart should be visible",()=>{
    cy.get(".counter-number").should("be.visible")
});