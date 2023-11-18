/// <reference types="cypress" />

it("filter and find",()=>{
    cy.visit("/");
    cy.get("li").filter(".authorization-link");
    cy.get("li a").filter("[role=menuitem]");
    cy.get("li a").filter(":contains(Reviews)");
    cy.get("li a").filter(":eq(3)");
    cy.get("li a").filter(":even");
    cy.get("li a").filter(":odd");
    cy.get("li a").filter(":first");
    cy.get("li a").filter(":last");

    //---- not() 

    cy.get("li").not(".authorization-link");
    cy.get('li a').filter('[role="menuitem"]')
    cy.get("li a").not("[role=menuitem]");
    cy.get("li a").not(":contains(Reviews)");
    cy.get("li a").not(":eq(3)");
    cy.get("li a").not(":even");
    cy.get("li a").not(":odd");
    cy.get("li a").not(":first");
    cy.get("li a").not(":last");

    //-- find()

    cy.get("li").find("a");
    cy.get(".content-heading").find(".info");
    cy.get(".content-heading").find("p");
    cy.get(".content-heading").find("h2");
    cy.get(".footer.content").find("li").last();
    cy.get(".footer.content").find("li").first();

    cy.get(".footer.content").contains("Write for us");
    cy.contains(".footer.content","Write for us")


    cy.get(".copyright").parent()
    cy.get(".content.bg-white").first().parent();
    cy.contains("What's New").parent();
    cy.contains("span","What's New").parent();

});