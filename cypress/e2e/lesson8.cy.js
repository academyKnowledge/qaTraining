/// <reference types="cypress" />

describe('Assertions', () => {
    it('visible-hidden', () => {
        cy.visit("/"); // given 
        // assertion - then 
        cy.get(".logo").should("be.visible");
        cy.get("#search").should("be.visible");   
        cy.get(".showcart").should("be.visible");
        cy.get(".counter").first().should("be.hidden");
        cy.get(".counter").first().should("not.be.visible"); // == be.hidden 
    });

    it('attr-css-class', () => {
        cy.visit("/"); // given 
        cy.get(".copyright").should("have.css","background-color","rgb(110, 113, 110)");
        cy.get(".copyright").should("have.css","text-align","center");
        cy.get(".copyright").should("have.css","background-color","rgb(110, 113, 110)")
        .and("have.css","text-align","center").and("have.css","color","rgb(255, 255, 255)");
        cy.get(".showcart").should("have.attr","href");
        cy.get(".showcart").should("have.attr","data-bind");
        cy.contains("Sign In").should("have.attr","href")
        cy.contains("Sign In").parent().should("have.attr","data-label","or");
        cy.contains("span","Shop New Yoga").should("have.class","more");        
    });

    it('id-text-contain', () => {
        cy.visit("/"); // given 
        cy.get(".control").first().find("input").should("have.id","search");
        cy.get(".info").first().should("have.text","New Luma Yoga Collection");
        cy.get(".info").first().should("contain","Collection");
    });

    it('have.value', () => {
        cy.visit("/radiant-tee.html");
        cy.get("#qty").should("have.value","1");
        cy.get("#qty").should("have.attr","value","1");
    });

    it('exist-empty-disabled', () => {
        cy.visit("/");
        cy.get(".counter").first().should("exist");
        cy.get("#search").should("be.empty");
        cy.get("#search").should("not.have.value");
        cy.get("button[title=Search]").should("be.disabled");
        cy.get("button[title=Search]").should("have.prop","disabled",true);
    });

    it('focus-checked-enabled-selected', () => {
        cy.visit("http://127.0.0.1:5500/cypress/index.html");
        cy.get("#myTextField").focus().should("have.focus");
        cy.get("#Banana").check().should("be.checked");
        cy.get("#dbClick").should("be.enabled");
        cy.get("#country").select(1)
        cy.get("[value='jordan_country']").should("be.selected")
    });


});