///<reference types="cypress"/>
describe ('GET API header',()=>{
    const customValue='jakis naglowek do sprawdzenia';
    const testUrl={
        url: 'https://httpbin.org/get',
        headers:{
            "customHeader":customValue
        },
        failOnStatusCode:false
    }
    it('response and headers should be correct',()=>{
        cy.request(testUrl).then(response=>{
            const currentStatus=response.status;
            const expectedStatus=200;
            const currentHeaderValue=response.requestHeaders.customHeader;
            assert.equal(customValue,currentHeaderValue);
            assert.equal(expectedStatus,currentStatus);
            cy.log(JSON.stringify(response.requestHeaders));
        })
    });
    });
    describe ('GET API User Agent',()=>{
        const userAgent='example user agent data';
        const testUrl={
            url: 'https://httpbin.org/get',
            headers:{
                "User-Agent":userAgent
            },
            failOnStatusCode:false
        }
        it('response and user agent should be correct',()=>{
            cy.request(testUrl).then(response=>{
                const currentStatus=response.status;
                const expectedStatus=200;
                const userAgentValue=response.requestHeaders['User-Agent'];
                assert.equal(expectedStatus,currentStatus);
                assert.equal(userAgent,userAgentValue);
                cy.log(JSON.stringify(response.requestHeaders));
        });
        });
    });