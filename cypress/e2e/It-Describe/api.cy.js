/// <reference types="cypress" /> 

describe('API Testing', () => {
    it('Http requests and responses', () => {
        // cy.request(url) // by default GET 
        // cy.request(method,url)
        // cy.request(method,url,body)
        // cy.request({options}); // options : url , method , body , log , headers , failOnStatusCode ... 

        // http request GET 
        // GET Used to retrive data from server 
        cy.request("GET","https://jsonplaceholder.typicode.com/")

        cy.request("GET","https://jsonplaceholder.typicode.com/posts")

        cy.request("GET","https://jsonplaceholder.typicode.com/posts/64").then((response)=>{
           // cy.log(response.body) // object {4}
          // API Testing using Cypress  
            expect(response.status).to.eq(200)
            expect(response.body.userId).to.eq(7)
            expect(response.body.title).to.contain("et fugit quas eum in in aperiam quod")
        })

        // http request POST 
        // post to send data and create a new record ( post , user , article .... )
        cy.request("POST","https://jsonplaceholder.typicode.com/posts",{"userId":20,"id":500,"title":"Testing","body":"firstTest"})

       // http request PUT 
        cy.request("PUT","https://jsonplaceholder.typicode.com/posts/98",{"title":"update title"})

        // http request DELETE 
        cy.request("DELETE","https://jsonplaceholder.typicode.com/posts/98")
    });

    it.only('Http requests and responses', () => {
        // https://reqres.in/api/ 

        cy.request("GET","https://reqres.in/api/users?page=2").then((res)=>{
            expect(res.status).to.eq(200);
            expect(res.body.page).to.eq(2);
            expect(res.body.total).to.eq(12);
            expect(res.body.data[1].id).to.eq(8);
            expect(res.body.data[1].first_name).to.contain("Lindsay");
        });

        cy.request("POST","https://reqres.in/api/users",{
            "name": "morpheus",
            "job": "leader",
            "id": "912",
        }).then((response)=>{
            // API Testing Using Cypress 
            expect(response.status).to.eq(201);
            expect(response.body.name).to.eq("morpheus")
        })
    });
});