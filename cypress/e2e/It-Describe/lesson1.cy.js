/// <reference types="cypress" />

it("lesson1",()=>{
    // visit command used to visit any URL you want 
    cy.visit("/");

    // get element(s) using css-selector ( .class )
    cy.get(".showcart");
    cy.get(".swatch-option");
    
    // get all elements using css selector (*)
    cy.get("*");

    // get element using css-selector (.class1.class2)
    cy.get(".more.button");

    // get element using cas-selector (#id)
    cy.get("#search");

    // get all element using css-selector (tag name) 
    cy.get("input")


    /* ==== Generated with Cypress Studio ==== */
    cy.get('.home-main > .content > .action').click();
    cy.get(':nth-child(4) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    /* ==== End Cypress Studio ==== */

});