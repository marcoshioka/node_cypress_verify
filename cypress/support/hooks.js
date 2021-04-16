/// <reference types="Cypress"/>

const addContext = require('mochawesome/addContext')


export function verifySnapshot() {
    cy.matchImageSnapshot()
    cy.task('log', 'Regressive layout test is ok')
}

//Function to generate log
export function generateLog(message) {
    cy.task('log', message)
}