describe("login test", () => {
    it("user login", () => {
      cy.visit(" https://www.edu.goit.global/account/login");
        cy.fillUserLoginData("testowyqa@qa.team", "QA!automation-1");
    });
});
  