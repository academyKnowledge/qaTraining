/// <reference types="cypress" />

describe('test senario',()=> {

    it("test case 1",()=>{
        cy.visit("/")
        cy.contains("Sign In");
        cy.contains("Sale");
        cy.contains("As low as")
        cy.contains("span","As low as")
        cy.get(".price-label").contains("As low as")
        cy.get(".navigation > ul > li").contains("Sale")

        cy.get(".navigation > ul > li").first();
        cy.get(".navigation > ul > li").last();
        cy.get(".navigation > ul > li").eq(3);
        cy.get(".navigation > ul > li").eq(0); // == .first()
        cy.get(".navigation > ul > li").eq(5); // == .last()
        cy.get(".navigation > ul > li").eq(2);
        

        cy.get(".block-promo-wrapper a").eq(4);
        cy.get(".block-promo-wrapper a").last();       

    });
});