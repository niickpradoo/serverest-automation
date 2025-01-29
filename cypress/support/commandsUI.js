const element = require("../fixtures/login.json")

Cypress.Commands.add("loginSuccessful", (email, password) => {

    cy.get(element.input_email).type(email)
    cy.get(element.input_password).type(password)
    cy.get(element.button_login).click()

    cy.get(element.message_welcome).should('contain', 'Bem Vindo')
    cy.location().should((location) => {
        expect(location.pathname).to.eq("/admin/home");
    });
    cy.get(element.button_logout).should("be.visible");
    cy.screenshot("loginSuccessful")
});

Cypress.Commands.add("loginFailed", (email, password, errorMessage) => {

    cy.get(element.input_email).type(email)
    cy.get(element.input_password).type(password)
    cy.get(element.button_login).click()
    cy.get(element.message_error).should('contain', errorMessage)
    cy.location().should((location) => {
        expect(location.pathname).to.eq("/login");
    });
    cy.get(element.button_logout).should("not.exist");
    cy.screenshot("loginFailed (" + errorMessage + ")")
});

Cypress.Commands.add("logout", () => {

    cy.get(element.button_logout).click();
    cy.location().should((location) => {
        expect(location.pathname).to.eq("/login");
    });
    cy.screenshot("logout")
});