/// <reference types="cypress" />

describe("selectors",()=> {

    it('commands',()=>{
        cy.visit("/");
        
        // options used in contains 

        cy.contains("a","sign in",{matchCase:false});
        cy.contains("a","Sign In",{timeout:6000});
        cy.contains("a","Sign in",{log:false});

        /* ==== Generated with Cypress Studio ==== */
        cy.get('#search').clear('s');
        cy.get('#search').type('shirt{enter}');
        cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
        cy.get('#option-label-size-143-item-168').click();
        cy.get('#option-label-color-93-item-53').click();
        cy.wait(3000);
        cy.get('#product-addtocart-button > span').click();
        /* ==== End Cypress Studio ==== */
        
        // wrong chaining 
        // cy.get(".showcart .counter .counter-number").contains("1").click().contains("Proceed to Checkout").click(); 

        // you should split it to 2 lines with new cy.contains 
        cy.get(".showcart .counter .counter-number").contains("1").click();
        cy.contains("Proceed to Checkout").click();

        // correct chaining for contains , rarely used  
        cy.get(".swatch-attribute.size").contains("XS").click().contains("S").click();


       // preference order  
        cy.contains("Twice around, twice as nice");  // it will return a object "parent"
        cy.contains("Hot Sellers"); // it will return h2 the element itself 

        // next and prev 
        cy.get(".swatch-attribute.size").contains("XS").next(); // button S 
        cy.get(".swatch-attribute.size").contains("XS").next().next(); // button M 
        cy.get(".swatch-attribute.size").contains("M").prev();  // button S 
        cy.get(".swatch-attribute.size").contains("M").prev().prev();  // button XS 

    });
});