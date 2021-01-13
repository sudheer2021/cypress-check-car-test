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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('getCarRegNumbers', () => {
    const fs = require("fs")
    cy.task('readTextFile','./cypress/fixtures/car_input.txt').then((result)=>{
        let numberMatch = result.match(/[A-Z 0-9]{7,9}/g).map(e1 => e1.trim());
        return numberMatch
    }) 
})

Cypress.Commands.add('expectedDetails', (regnumber) => {
    const fs = require("fs")
    cy.task('readTextFile','./cypress/fixtures/car_output.txt').then((result)=>{
        let numberMatch = result.match(/[A-Z 0-9]{7,9}/g).map(e1 => e1.trim());
        return numberMatch
    }) 
})