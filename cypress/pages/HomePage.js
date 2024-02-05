export class HomePage{
    fillUserLogin (login){
        cy.get("#user_email").type(login);
    }
    fillUserPassword (password){
        cy.get("#user_password").type(password);
    }
    clickLogin(clickLogin){
        cy.get('[type="submit"]').click();
    }
   logout(logout){
        cy.get("#open-navigation-menu-mobile").click();
        cy.contains('Log out').click();
   }}
