///<reference types="cypress"/>
describe ('POST response on url',()=>{
    const bodyData={
        bodyKey: 'Hej Dajana'
    };
    const postUrl={
        method:'post',
        url: 'https://httpbin.org/post',
        body:bodyData,
        failOnStatusCode:false
    }
    it('response should be 200',()=>{
        cy.request(postUrl).then(response=>{
            const currentStatus=response.status;
            const expectedStatus=200;
            assert.equal(expectedStatus,currentStatus)
            assert.notStrictEqual(bodyData,response.body.data)
            cy.log(currentStatus);
            cy.log(response.body.data);
        })
    });
    });
