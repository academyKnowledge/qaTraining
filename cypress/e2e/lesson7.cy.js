/// <reference types="cypress" />

describe('Actions', () => {
    it('click', () => {
        cy.visit("http://127.0.0.1:5500/cypress/index.html");
        cy.get("#btn1").click();
        cy.get("#btn2").click("topRight");
        cy.get(".btn").click({multiple:true , force:true});
        cy.get("#btn0").click({force:true});
        cy.get("#btn2").click("left" , {force:true});
    });

    it.only('type', () => {
        cy.visit("http://127.0.0.1:5500/cypress/index.html");
        cy.get("[placeholder='Type your name']").clear().type("Razan {enter}");
        cy.get("input[type=number]").clear().type(27);
        cy.get("input[name=input_0]").clear({force:true}).type("Testing",{force:true})
        cy.get("[placeholder='Type your name']").clear().type("Razan",{delay:1000});

    });
});


