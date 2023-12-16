
/// <reference types="cypress" />
describe('Solution for task6', () => {
   
    before(()=>{
        cy.visit("https://admin-demo.nopcommerce.com/");
        cy.loginNopcommerce();
        cy.wait(1500);
        cy.get("#nopSideBarPusher").click();
        cy.get(".nav-sidebar > li:nth-child(2) > a").click();
        cy.contains("Products").click();
        for(let i =0; i<2 ; i++){
            cy.contains("Add new").click();
            cy.get("#Name").clear().type("RazanLaptop"+i); // RazanLaptop0  // // RazanLaptop1  
            cy.get("#product-price").scrollIntoView();
            cy.get("#product-price-area input").last().clear({force:true}).type("3000",{force:true});
            cy.get("[name=save]").click();
        }
    }) 

    it('Verify that the user can add a new category', () => {
        cy.get("#nopSideBarPusher").click();
        cy.contains("Products").click();
        cy.get("#SearchProductName").clear().type("RazanLaptop");
        cy.get("#search-products").click();
        cy.wait(1500);

        // cy.get("#products-grid").find("[name=checkbox_products]").check()

        cy.get("#products-grid tbody").find("tr").then((rows)=>{
            console.log(rows.length) ; // 2
            for(let i=0;i<rows.length;i++){
                cy.get(rows[i]).find("[name=checkbox_products]").check()
            }
        });

        cy.get("#delete-selected").click();
        cy.wait(1000)
        cy.get("#delete-selected-action-confirmation-submit-button").click();

        cy.get("#products-grid").find("tr td").should("have.class","dataTables_empty").and("contain","No data available in table")
        
        // cy.visit("https://admin-demo.nopcommerce.com/Admin/Product/List");
        cy.reload()
        cy.get("#SearchProductName").clear().type("RazanLaptop");
        cy.get("#search-products").click();
        cy.wait(1500);
        cy.get("#products-grid").find("tr td").should("have.class","dataTables_empty").and("contain","No data available in table")

    });
});