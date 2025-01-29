const element = require("../fixtures/login.json")
const BASE_URL = Cypress.config().apiUrl;
import { setToken } from './utils';

Cypress.Commands.add("apiLoginSuccessful", (payload) => {

    const options = {
        method: 'POST',
        url: `${BASE_URL}/login`,
        body: {
            email: payload.email,
            password: payload.password
        }
    };

    cy.request(options).then(result => {
        setToken(result.body.access_token);
    });
});

Cypress.Commands.add("apiLoginFailed", (payload, errorMessage) => {

    const options = {
        method: 'POST',
        failOnStatusCode: false,
        url: `${BASE_URL}/login`,
        body: {
            email: payload.email,
            password: payload.password
        }
    };

    cy.request(options).should((response) => {
        expect(response.status).to.equal(400)
        expect(Object.values(response.body)).to.include(errorMessage);
    })
});
