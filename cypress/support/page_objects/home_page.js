/// <reference types="Cypress"/>
import * as hooks from '../hooks';

const VERIFY_URL = 'https://www.verifymyage.co.uk/';
const VERIFY_ICON = "//a[@id='logo']";
const HEADER_OPTION = "//div[@class='actions']//li/a";

//Function to access VerifyMyAge webpage 
export function visit() {
    cy.visit(VERIFY_URL);
    cy.xpath(VERIFY_ICON).should('be.visible')
    hooks.generateLog('VerifyMyAge Website accessed')
}

//Function to select an option in header 
export function selectOption(header_choice) {
    cy.xpath(HEADER_OPTION).contains(header_choice).click()
    hooks.generateLog('Option ' + header_choice + ' selected')
}   