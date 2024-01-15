describe("task 1, login", () => {
    it("login", () => {
      cy.visit(" https://www.edu.goit.global/account/login");
      cy.fillUserLogin('user888@gmail.com');
      cy.fillUserPassword('1234567890');
      cy.clickLogin();
      cy.logout();
    });
  });
 