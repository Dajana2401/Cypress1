///<reference types="cypress"/>
describe ('GET response with header',()=>{
    const value='jakis tekst, ktory chce sprawdzic';
    const testUrl={
        url: 'https://httpbin.org/get',
        qs:{
            "key": value
        },
        failOnStatusCode:false
    }
    it('response and data should be correct',()=>{
        cy.request(testUrl).then(response=>{
            const currentStatus=response.status;
            const expectedStatus=200;
            const currentArgValue=response.body.args.key;
            const expectedArgsValue=value;
            assert.equal(expectedStatus,currentStatus);
            assert.equal(expectedArgsValue,currentArgValue);
            cy.log(response.body.args);
        })
    });
    });