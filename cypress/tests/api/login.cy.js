/// <reference types="Cypress"/>

describe('API Testing', () => {
    it('should perform successful login', () => {
        const email = Cypress.env("email")
        const password = Cypress.env("password")
        const payload = {
            "email": email,
            "password": password
        }
        cy.apiLoginSuccessful(payload)
    });

    it('should reject login with empty email', () => {
        const email = ""
        const password = Cypress.env("password")
        const errorMessage = "email não pode ficar em branco"
        const payload = {
            "email": email,
            "password": password
        }
        cy.apiLoginFailed(payload, errorMessage)
    });

    it('should reject login with invalid email and/or password', () => {
        const email = Cypress.env("email")
        const password = ""
        const errorMessage = "password não pode ficar em branco"
        const payload = {
            "email": email,
            "password": password
        }
        cy.apiLoginFailed(payload, errorMessage)
    });
});