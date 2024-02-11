///<reference types="cypress"/>
describe ('GET API header',()=>{
    const testUrl={
        url: 'https://httpbin.org/get',
        failOnStatusCode:false
    }
    it('test duration',()=>{
        cy.request(testUrl).then(response=>{
            cy.log(response.duration);
            assert.isTrue(response.duration<=500);
  
        })
    });
    });

   