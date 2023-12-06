/// <reference types="cypress" />
describe('Mocha hooks', () => {

    before(()=>{
        // before all 
        cy.log("before")
    });

    beforeEach(()=>{
        cy.visit("/");
    });

    after(()=>{
        // after all 
        cy.log("after all test cases ")
    }); 

    afterEach(()=>{
        cy.log("after each test case")
    });

    const email = "CypressUser@gmail.com";
    const password = "test@123";
    const productName = "Radiant Tee";

    it('Test case 1', () => {
        cy.clickLink("Sign In");// custom command 
        cy.login(email,password);// custom command 
        cy.clickLink(productName); // custom command 
        cy.get(".page-title").should("contain",productName)
    });

    it('Test case 2', () => {
        cy.get(".logo").should("be.visible");
    });

    it('Test case 3', () => {
        cy.get("#search").type("bag");
    });
});