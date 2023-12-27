
/// <reference types="cypress" />
describe('practices', () => {
   

    beforeEach(()=>{
        cy.visit("https://admin-demo.nopcommerce.com/");
        cy.loginNopcommerce();
        cy.wait(1500);
    })

    // no need for this case i added the steps in beforeEach hook . 
    // it('login using custom command', () => {
    //     cy.visit("https://admin-demo.nopcommerce.com/");
    //     cy.loginNopcommerce()
    // }); 

    it('Verify that the user can add new product', () => {
        cy.get("#nopSideBarPusher").click();
        cy.get(".nav-sidebar > li:nth-child(2) > a").click();
        cy.contains("Products").click();
        cy.contains("Add new").click();
         
        cy.get("#Name").clear().type("Laptop123");
        
        // category field not working you can skip it  
        // cy.get("#SelectedCategoryIds").prev().click().type("Computers{downarrow}"+"{enter}",{force:true})
        
        cy.get("#product-info .card-tools button").click()
        cy.wait(500)
        cy.get("#product-price-area input").last().clear({force:true}).type("3000",{force:true});

        cy.get("#product-info").find(".fa-plus").parent().click();
        cy.get("[name=save]").click();
        cy.get(".alert-success").should("contain","The new product has been added successfully.")
        cy.get("#SearchProductName").type("Laptop123");
        cy.get("#search-products").click()
        cy.get("#products-grid tbody tr").should("contain","Laptop123").and("contain","3000")

    });
});