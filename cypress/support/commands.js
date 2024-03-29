// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add("fillUserLoginData", (login, password) => {
    cy.get("#user_email").type(login);
    cy.get("#user_password").type(password);
    cy.get('[type="submit"]').click();
    cy.get("#open-navigation-menu-mobile").click();
    cy.contains('Log out').click();
  });
Cypress.Commands.add("fillUserLogin", (login)=>{
    cy.get("#user_email").type(login);
})
Cypress.Commands.add("fillUserPassword", (password)=>{
    cy.get("#user_password").type(password);
})
Cypress.Commands.add("clickLogin", (clickLogin)=>{
    cy.get('[type="submit"]').click();
})
Cypress.Commands.add("logout", (logout)=>{
    cy.get("#open-navigation-menu-mobile").click();
    cy.contains('Log out').click();
})
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })