///<reference types="cypress"/>
describe ('delete response on url',()=>{
    const deleteUrl={
        method:'delete',
        url: 'https://httpbin.org/delete',
        failOnStatusCode:false
    }
    it('response should be 200',()=>{
        cy.request(deleteUrl).then(response=>{
            const currentStatus=response.status;
            const expectedStatus=200;
            assert.equal(expectedStatus,currentStatus)
            cy.log(currentStatus);
        })
    });
    });