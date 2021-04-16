/// <reference types="Cypress"/>
import * as hooks from '../hooks';

const CONTACT_TITLE = "//h1[text()='Contact']";
const CONTACT_DESCRIPTION = "//h1[text()='Contact']//following-sibling::div/p";
const CONTACT_TEXT = 'You are one step closer to solving';
const CONTACT_OPTIONS_TITLE = "//div/p[text()='Who would you like to contact?']";
const CONTACT_OPTION_SALES = "//button[text()='Sales']";
const CONTACT_OPTION_ACCOUNT = "//button[text()='Account management']";
const CONTACT_OPTION_CUSTOMER = "//button[text()='Customer service']";
const CONTACT_FORM = "//form[contains(@class, 'contact-form')]";
const SUBMIT_BUTTON = "//button[text()='Submit']";
const SEND_MESSAGE_BUTTON = "//button[text()='Send message']";
const OFFICE_ADDRESS_TITLE = "//h2[text()='London Office']";
const ADDRESS_INFORMATION= "//h2[text()='London Office']//following-sibling::div/p";
const LOCALIZATION_MAP="//figure[contains(@style,'map')]";


//Function to check Contact information
export function contactContent() {
    cy.xpath(CONTACT_TITLE).should('be.visible')
    cy.xpath(CONTACT_DESCRIPTION).contains(CONTACT_TEXT)
    hooks.generateLog('Contact content is visible')
}

//Function to check Contact forms content
export function contactForms() {
    cy.xpath(CONTACT_OPTIONS_TITLE).should('be.visible')
    cy.xpath(CONTACT_OPTION_SALES).click()
    cy.xpath(CONTACT_FORM).should('be.visible')
    cy.xpath(SUBMIT_BUTTON).scrollIntoView()
    cy.xpath(CONTACT_OPTION_ACCOUNT).scrollIntoView().click()
    cy.xpath(CONTACT_FORM).should('be.visible')
    cy.xpath(SEND_MESSAGE_BUTTON).scrollIntoView()
    cy.xpath(CONTACT_OPTION_CUSTOMER).scrollIntoView().click()
    cy.xpath(CONTACT_FORM).should('be.visible')
    cy.xpath(SEND_MESSAGE_BUTTON).scrollIntoView()
    hooks.generateLog('Contact forms options were checked')
}   

//Function to verify London Office's Address information
export function londonOfficeAddress() {
    cy.xpath(OFFICE_ADDRESS_TITLE).should('be.visible').scrollIntoView()
    cy.xpath(ADDRESS_INFORMATION).contains('KYC AVC UK LTD')   
    cy.xpath(ADDRESS_INFORMATION).contains('Brickfields Business Centre')
    cy.xpath(ADDRESS_INFORMATION).contains('37 Cremer Street')
    cy.xpath(ADDRESS_INFORMATION).contains('London')
    cy.xpath(ADDRESS_INFORMATION).contains('E2 8HD')
    cy.xpath(LOCALIZATION_MAP).should('be.visible')
    hooks.generateLog('London Office Address information is visible')
}   