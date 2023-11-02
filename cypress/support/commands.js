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

import 'cypress-file-upload';

Cypress.Commands.add("LoginAbbaco", (user, password) => 
{ 
    
    cy.visit('https://bonds.mercapabbaco.com/')
    cy.origin('https://mercap.auth0.com', () => 
    {

      cy.get('#username').should('exist').and('be.visible').click().type('cy_smoke@mercapsoftware.com')
      cy.get('#password').should('exist').and('be.visible').click().type('testing1')
      cy.contains('Continue').click({force: true})

   })

})
