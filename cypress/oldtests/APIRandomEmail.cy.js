///<reference types="cypress"/>
describe("POST random email check",()=>{
    const randomEmail=stringGen(10) + "@" + stringGen(5) + "." + stringGen(2,true);
    const bodyRequest={
        userEmail:randomEmail
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
            //assert.notStrictEqual(bodyRequest,response.body.data);
            assert.equal(expectedStatus,currentStatus);
            assert.equal(bodyRequest.userEmail,responseData.userEmail);
            cy.log(bodyRequest.userEmail);
            cy.log(responseData.userEmail);
        })
    });
})
function stringGen(len, num) {
    let text = "";
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const alnum = "abcdefghijklmnopqrstuvwxyz0123456789";

    for( let i=0; i < len; i++ ) {
        if(!num)
          text += alnum.charAt(Math.floor(Math.random() * alnum.length));
        else
          text += alpha.charAt(Math.floor(Math.random() * alpha.length)); 
    }
    return text;
}

