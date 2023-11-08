/// <reference types="cypress" />

it("lesson2",()=>{
    // visit command used to visit any URL you want 
    cy.visit("/");

    cy.get(".links .widget ul li:first-child a");

    cy.get(".logo");

    cy.get(".navigation > ul > li:last-child a").click();

    cy.get(".navigation > ul > li:last-child > a[role=menuitem]").click();
  
    cy.get(".copyright");

    cy.contains("Sign In").click();

    cy.get("[name='login[username]']");

    cy.get("#email");
    
    cy.get("fieldset.login .email .control input");

});
