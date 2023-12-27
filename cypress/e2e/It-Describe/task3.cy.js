/// <reference types="cypress" />

describe("Solution for task3",()=>{
    it('home page',()=>{
        cy.visit("https://demo.productionready.io/#/");
        cy.contains("a","conduit");
        cy.get(".navbar a+ul li:first-child");
        // cy.get(".navbar a").siblings().first().find("li").first();
        // cy.get(".navbar a").siblings().first().children().first();

        // siblings(brothers) => (a+b)
        cy.get(".navbar a+ul li:last-child");
        // cy.get(".navbar a").siblings().first().find("li").last();
        // cy.get(".navbar a").siblings().first().children().last();
        
        cy.get(".banner .logo-font");
        cy.get(".banner .logo-font + p");
        cy.get(".feed-toggle li:nth-child(2) a");
        cy.wait(1500);
        cy.contains("span","Read more...");
        cy.get(".btn-outline-primary").first();
        cy.get(".sidebar p");
        cy.get(".sidebar .tag-list").find("a").eq(3);
        cy.get(".sidebar .tag-list a").last();
    
    });
    
    it("inner page",()=>{
        cy.visit("https://demo.productionready.io/#/");
        cy.get(".preview-link").first().click();
        cy.wait(1500);
        cy.get(".banner h1");
        cy.get(".banner .article-meta img");
        cy.get(".banner .info a");
        //  cy.get(".banner div").filter(".info").find("a");
        cy.get(".banner .info span");
        cy.get(".banner follow-btn");
        cy.get(".banner favorite-btn");
        cy.get(".article-content p");
        cy.get(".tag-list li:first-child");
        cy.get(".tag-list li").last();
        cy.get(".banner .date")
    });
       
    it("sign in page",()=>{
        cy.visit("https://demo.productionready.io/#/login");
        cy.contains("h1","Sign in");
        cy.get(".auth-page p  a:last-child");
        cy.get("input[type=email]");
        // cy.get("[placeholder=Email]")
        cy.get("input[type=password]");
        cy.get("[type=submit]");
        // cy.get("button[type=submit]")
    });

})
