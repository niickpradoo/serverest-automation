# Automation Challenge with Cypress

## Overview

This project was created as part of the Automation Challenge for Ambev. The goal is to develop automated end-to-end (E2E) tests for the specified frontend application and its API using the Cypress framework with JavaScript.

## Project Structure

The project is organized as follows:

    ```bash
    cypress/
    |--tests/
    |---api/
    |----.cy.js
    |---e2e/
    |----.cy.js
    ```

- **api/**: Contains automated API tests.
- **e2e/**: Contains automated end-to-end tests for the frontend application.
- **cypress.config.js**: Configuration file for Cypress.

## Prerequisites

To run this project, you need to have the following installed on your machine:

- Node.js (version 14 or higher)
- npm (Node package manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
    ```

2. Install the dependencies:

   ```bash
    npm install
    ```

## Running Tests

### Using the Cypress Dashboard to Run the Tests

To run the frontend tests, use the following command:

    ```bash
    npx cypress open
    ```
This command will open the Cypress Test Runner, where you can select the tests which you want to run.

### Using CLI to run API Tests 

To run the API tests, execute the following command in the terminal:

    ```bash
    npx cypress run --spec 'cypress/tests/api/*.js'
    ```

### Using CLI to run Front-End Tests 

To run the Front-End tests, execute the following command in the terminal:

    ```bash
    npx cypress run --spec 'cypress/tests/e2e/*.js'
    ```

## Generating Reports with Mochawesome

The project uses Mochawesome for generating test reports. After running the tests, you can find the reports in the reports/ folder.

## Test Scenarios

### API Test Scenarios

- should perform successful login
- should reject login with empty email
- should reject login with invalid email and/or password

### Frontend Test Scenarios

- should successfully log in using previously registered username and password
- should reject login with invalid email
- should reject login with invalid email and/or password

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

[Cypress Documentation](https://docs.cypress.io/)
[Serverest Documentation](https://serverest.dev/)