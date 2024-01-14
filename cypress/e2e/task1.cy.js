describe("task 1, login", () => {
    it("login", () => {
      cy.visit(" https://www.edu.goit.global/account/login");
      cy.get('#user_email').type('user888@gmail.com');
      cy.get('#user_password').type('1234567890');
      cy.get('[type="submit"]').click();
      cy.get("#open-navigation-menu-mobile").click();
      cy.contains('Log out').click();
    });
  });
 