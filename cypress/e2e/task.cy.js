
it('test case',()=>{
    cy.visit("https://www.telerik.com/support/demos");
    cy.get("h1").contains("Demos");
    cy.contains("h1","Demos");
    cy.get(".NavAlt a").eq(3);
    cy.get(".track--pricing");
    cy.get("h3").contains("Telerik UI for ASP.NET Core");
    cy.get("#conversational-ui");
    cy.get(".TK-Footer-Featured-Link").first();
    cy.get(".TK--Footer-Desktop .TK-Footer-List-Social").children();
    cy.get(".TK--Footer-Desktop .TK-Footer-List-Social").find("li");
    cy.get(".TK-Footer-Power a");
});