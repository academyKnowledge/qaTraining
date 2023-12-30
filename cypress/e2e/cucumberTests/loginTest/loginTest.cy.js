import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const email = "CypressUser@gmail.com";
const password = "test@123";

Given("The user navigated to login page in magento website",()=>{
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login");
});

When("Enter email in email input field",()=>{
    cy.get("#email").clear().type(email);
});

When("Enter password in password input field",()=>{
    cy.get("#pass").clear().type(password);
});

When("Click on sign in button",()=>{
    cy.get("[name=send]").click();
});

Then("The user should be redirected to My Account",()=>{
    cy.url().should("eq","https://magento.softwaretestingboard.com/customer/account/");
    cy.get(".page-title").should("contain","My Account");
    cy.wait(1000);
    cy.get(".welcome").first().should("contain","Welcome, cypress user!")
});
