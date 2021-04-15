/// <reference types="Cypress"/>
import * as hooks from '../hooks';

const HOW_IT_WORKS_TITLE = "//h1[text()='How VerifyMyAge Works']";
const VERIFICATION_METHODS_TITLE = "//h1[text()='Verification Methods']";
const HOW_IT_WORKS_COMPONENT = "//div[@class='relative']//p"
const VERIFICATION_METHODS_COMPONENT = "//h1//following-sibling::div[@class]/p"
const HOW_IT_WORKS_TEXT = 'VerifyMyAge age-verifies your customers without distracting them from their purchase.';
const VERIFICATION_METHODS_TEXT = 'We check with third-party databases, to verify your customers age without interrupting their shopping experience.';

//Function to check How It Works component
export function howItWorks() {
    cy.xpath(HOW_IT_WORKS_TITLE).should('be.visible')
    cy.xpath(HOW_IT_WORKS_COMPONENT).contains(HOW_IT_WORKS_TEXT)
    hooks.generateLog('How It Works content is visible')
}

//Function to check Verification Methods component
export function verificationMethods() {
    cy.xpath(VERIFICATION_METHODS_TITLE).should('be.visible')
    cy.xpath(VERIFICATION_METHODS_COMPONENT).contains(VERIFICATION_METHODS_TEXT)
    hooks.generateLog('Verification Methods content is visible')
}   