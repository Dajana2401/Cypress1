///<reference types="cypress"/>
describe ('POST response on url',()=>{
    const bodyRequest={
        userName:"Test"
    };
    const postUrl={
        method:'post',
        url: 'https://httpbin.org/post',
        body:bodyRequest,
        failOnStatusCode:false
    }
    it('response should be 200',()=>{
        cy.request(postUrl).then(response=>{
            const currentStatus=response.status;
            const expectedStatus=200;
            const responseData=JSON.parse(response.body.data);
            assert.equal(expectedStatus,currentStatus);
            assert.equal(bodyRequest.userName,responseData.userName);
            cy.log(bodyRequest.userName);
            cy.log(responseData.userName);
        })
    });
    });