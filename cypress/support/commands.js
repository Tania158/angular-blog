// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
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

import "cypress-localstorage-commands";

Cypress.Commands.add('login', (email, password) => {
  cy.intercept('POST', '**/v1/accounts:signInWithPassword?key=AIzaSyBGTuz-Pnd-Do-dRCx9mFFPHTDU31z8UVs').as('login');

  cy.visit('http://localhost:62480/admin/login')
  cy.get('input[formcontrolname="email"]').type(email)
  cy.get('input[formcontrolname="password"]').type(password)
  cy.get('button[type="submit"]').click()
})