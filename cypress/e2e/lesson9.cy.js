/// <reference types="cypress" />

describe('Search functionality', () => {
    // given when then 
    // pre-condition -- actions -- assertions 

    beforeEach(()=>{
        cy.visit("/");
    });

    it('Verify that the search button is disabled by default', () => {
        cy.get("button[title=Search]").should("be.disabled");
    });

    it('Verify that the search button is enabled when enter a value in search bar', () => {
        cy.get("#search").type("bag");
        cy.get("button[title=Search]").should("be.enabled");
    });
});

describe.only('Shopping cart functionality', () => {

    beforeEach(()=>{
        cy.visit("/");
        cy.get("#search").type("shirt {enter}");
        cy.get(".product-items li").first().click();
        cy.get(".swatch-option").contains("M").click().wait(1500);;
        cy.get(".swatch-option.color").last().click().wait(1500);;
        cy.get(".tocart").click();
        cy.wait(3000)
    });

    it('Verify the user can add product to cart', () => {
        // noo need for these lines of code after i add the beforeEach hook 
        // cy.get("#search").type("shirt {enter}");
        // cy.get(".product-items li").first().click();
        // cy.get(".swatch-option").contains("M").click();
        // cy.get(".swatch-option.color").last().click();
        // cy.get(".tocart").click();
        cy.get("[role=alert]").should("contain","You added Radiant Tee to your");
        cy.get(".counter-number").should("have.text","1");
    });

    // hook in cypress -> beforeEach 

    it('Verify the user can delete product from cart',()=>{
        cy.get(".showcart").click();
        cy.get(".action.delete").click();
        cy.get(".modal-inner-wrap").last().find(".action-accept").click();
        cy.get("#minicart-content-wrapper").find(".block-content").should("contain","You have no items in your shopping cart.");    
        cy.get(".counter-number").should("be.hidden");
    });

    it.only('Verify the user can update product',()=>{
        cy.get(".showcart").click();
        cy.get(".product.actions").find(".primary").find("a").click();
        cy.wait(3000);
        cy.get(".swatch-option.color:nth-child(2)").click();
        cy.get("#product-updatecart-button").click();
        cy.get("[role=alert]").should("contain","updated in your shopping cart");
        cy.get(".product-item-details .item-options").find("dd").last().should("contain","Orange")
    });


   

});