///<reference types="cypress"/>
describe ('API test GET response',()=>{
    it('response should be 200',()=>{
        cy.request('https://httpbin.org/#/').its('status').should('eq',200)
    });
    });
    describe ('API test GET response',()=>{
        it('response should be 200',()=>{
            cy.request('https://httpbin.org/#/').then(response=>{
                const currentStatus=response.status;
                const expectedStatus=200;
                assert.equal(expectedStatus,currentStatus)
                cy.log(response.status);
            })
        });
        });
        describe ('GET response on wrong url',()=>{
            const wrongUrl={
                url: 'https://httpbin.org/not-exist',
                failOnStatusCode:false
            }
            it('response should not be 200',()=>{
                cy.request(wrongUrl).then(response=>{
                    const currentStatus=response.status;
                    const expectedStatus=200;
                    assert.equal(expectedStatus,currentStatus);
                    cy.log(currentStatus);
                })
            });
            });