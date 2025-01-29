/// <reference types="Cypress"/>
const BASE_URL = Cypress.config().baseUrl;

beforeEach(() => {
    cy.visit(BASE_URL + "/login")
});

describe('E2E Testing', () => {
    it('should successfully log in using previously registered username and password', () => {
        const email = Cypress.env("email")
        const password = Cypress.env("password")
        cy.loginSuccessful(email, password)
        cy.logout()
    });

    it('should reject login with invalid email', () => {
        const email = Cypress.env("invalid_email")
        const password = Cypress.env("password")
        const errorMessage = 'Email deve ser um email válido'
        cy.loginFailed(email, password, errorMessage)
    });

    it('should reject login with invalid email and/or password', () => {
        const email = Cypress.env("wrong_email")
        const password = Cypress.env("password")
        const errorMessage = 'Email e/ou senha inválidos'
        cy.loginFailed(email, password, errorMessage)
    });
});