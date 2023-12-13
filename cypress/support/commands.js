// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickLink',(label)=>{
    cy.get("a").contains(label).click();
})


Cypress.Commands.add('login',(email,password)=>{
    cy.get("[type=email]").type(email);
    cy.get("[type=password]").type(password);
    cy.get("#send2").click()
})

Cypress.Commands.add('loginNopcommerce',()=>{
    // i used fixture instead of sending email and password from test file . 
    cy.fixture("./files/example.json").then((data)=>{
        cy.get("#Email").clear().type(data.email);
        cy.get("#Password").clear().type(data.password);
        cy.get(".login-button").click();
    })
})
