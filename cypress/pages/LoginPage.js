export class LoginPage {
    navigate() {
      cy.visit("https://www.edu.goit.global/account/login");
    }
    validateLoginTitle() {
      cy.get("#user_email").should("be.visible");
    
  }}


