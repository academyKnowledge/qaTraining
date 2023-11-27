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

    it('type', () => {
        cy.visit("http://127.0.0.1:5500/cypress/index.html");
        cy.get("[placeholder='Type your name']").clear().type("Razan {enter}");
        cy.get("input[type=number]").clear().type(27);
        cy.get("input[name=input_0]").clear({force:true}).type("Testing",{force:true})
        cy.get("[placeholder='Type your name']").clear().type("Razan",{delay:1000});

    });

    it('type-seq.', () => {
        cy.visit("/");
        cy.get("#search").type("bag"+"{enter}");
        cy.get("#search").type("bag{leftarrow}{leftarrow}",{delay:500});
        cy.get("#search").type("bag{leftarrow}{rightarrow}",{delay:500});
        cy.get("#search").type("bag{home}",{delay:500});
        cy.get("#search").type("bag{leftarrow}{del}",{delay:500});
    });

    it('select', () => {
        cy.visit("http://127.0.0.1:5500/cypress/index.html");
        cy.get("#country").select("Jordan");
        cy.get("#country").select("egypt_country");
        cy.get("#country").select(2);
    });

    it('check-uncheck', () => {
        cy.visit("http://127.0.0.1:5500/cypress/index.html");
        cy.get("#Banana").check().uncheck();
        cy.get(".checkboxes input").check("Nuts");
        cy.get(".checkboxes input").check();
        // radio 
        cy.get("#tester").check();
        cy.get("input[name=job]").check();
        cy.get("#checkMe").check({force:true})
    });

    it('dbclick', () => {
        cy.visit("http://127.0.0.1:5500/cypress/index.html");
        cy.get("#dbClick").dblclick();
        cy.get("#dbClick").dblclick("right");
    });

    it('focus-blur', () => {
        cy.visit("http://127.0.0.1:5500/cypress/index.html");
        cy.get("#myTextField").focus();
        cy.get("#myTextField").focus().blur();
    });

    it.only('trigger', () => {
        cy.visit("http://127.0.0.1:5500/cypress/index.html");
        cy.get("#trigger_btn").trigger("mouseover");
        cy.get("#trigger_btn").trigger("mouseleave");
        cy.get("#trigger_btn").trigger("mouseover").trigger("mouseleave");
        cy.get("#btn1").trigger("mousedown") // == click()
    });


});


