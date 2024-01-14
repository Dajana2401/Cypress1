describe("login test", () => {
    it("user login", () => {
      cy.visit(" https://www.edu.goit.global/account/login");
        cy.login("testowyqa@qa.team", "QA!automation-1");
    });
});
  