/// <reference types="cypress" />
describe('commands', () => {
    it('wrap-command', () => {
        const person = {
            name:"Razan",
            lastName:"Balatiah",
            spe:"Computer Eng",
            isQA:true,
            isPlayedFootball(){
                console.log("No");
                return this.name + " not play football";
            }
        };
        
        const message ="Login successfully";
        const object1 = {name:"test"};
        const object2 = {name:"test"};

        cy.wrap(person).its("name");
        cy.wrap(message).should('eql',"Login successfully");
        cy.wrap(person).invoke("isPlayedFootball")
        expect(true).to.be.equal(true);
        expect(person).to.be.equal(person)
        expect(person).to.be.eql(person)

        expect(object1).to.be.eql({name:"test"})

        expect(object1).to.be.eql(object2);
 
    });

    it('visible-hidden using expect', () => {
        cy.visit("/"); // given 
        // assertion - then 
        cy.get(".logo").should("be.visible");  // implicit 
        cy.get(".logo").then((element)=>{
            expect(element).to.be.visible // explicit 
        });

        cy.get("#search").should("be.visible");  
        cy.get("#search").then((element)=>{
            expect(element).to.be.visible;
        });
    });
    it('attr-css-class using expect', () => {
        cy.visit("/"); // given 
        cy.get(".copyright").should("have.css","text-align","center");

        cy.get(".copyright").invoke('text').should('contain','Copyright © 2013-present');
        cy.get(".copyright").its("length").should("eql",1)

        cy.get(".copyright").then((ele)=>{
            cy.wrap(ele).its("length").should("eql",1)
            cy.wrap(ele).its("0.className").should('eql',"copyright");
            cy.wrap(ele).invoke('text').should('eql','\nCopyright © 2013-present Magento, Inc. All rights reserved.\n')
            cy.wrap(ele).invoke('text').should('contain','Copyright © 2013-present')
            expect(ele).to.have.css("text-align","center")
        })
        cy.get(".showcart").should("have.attr","href");
        cy.get(".showcart").then((ele)=>{
            expect(ele).to.have.attr("href")
        })
        cy.contains("span","Shop New Yoga").should("have.class","more"); 
        cy.contains("span","Shop New Yoga").then((ele)=>{
            expect(ele).to.have.class("more")
        })    
        
        cy.get(".counter").first().should("exist");

        cy.get(".counter").first().then((element)=>{
            expect(element).to.be.exist;
            expect(element).to.exist;
        });

        cy.get("button[title=Search]").should("be.disabled");
        cy.wait(1000);
        cy.get("button[title=Search]").then((ele)=>{
            expect(ele).to.be.disabled;
        })

        cy.get(".showcart").then((ele)=>{
            expect(ele).to.be.visible
        })

    });
});