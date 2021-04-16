/// <reference types="Cypress"/>
import * as hooks from '../hooks';

const SECURITY_TITLE = "//h1[text()='Security']";
const CRYPTOGRAPHY_TITLE = "//h2[text()='High-end cryptography']";
const PROTECT_DATA_TITLE = "//h2[text()='How We Protect Your Data']";
const ABOUT_SECURITY = "//div[@class='relative']/div[@class='text-white']"
const ABOUT_CRYPTOGRAPHY = "//h2[text()='High-end cryptography']//following-sibling::div/p"
const ABOUT_SECURITY_TEXT = 'We preserve your buyer’s journey while';
const ABOUT_CRYPTOGRAPHY_TEXT = 'VerifyMyAge uses high-end cryptography to protect customers’ data. All data is encrypted at rest and in-transit using a combination of 256-bit encryption and hashing algorithms.';
const PROTECT_DATA_TOPICS = "//div[@class='accordion']//label";


//Function to check Security description
export function securityDescription() {
    cy.xpath(SECURITY_TITLE).should('be.visible')
    cy.xpath(ABOUT_SECURITY).contains(ABOUT_SECURITY_TEXT)
    hooks.generateLog('Security description is available')
}

//Function to check Cryptography information
export function cryptographyInformation() {
    cy.xpath(CRYPTOGRAPHY_TITLE).should('be.visible')
    cy.xpath(CRYPTOGRAPHY_TITLE).scrollIntoView()
    cy.xpath(ABOUT_CRYPTOGRAPHY).contains(ABOUT_CRYPTOGRAPHY_TEXT)
    hooks.generateLog('Cryptography information is correct')
}   

//Function to check How We Protect Your Data Topic
export function howWeProtectYourDataTopic() {
    cy.xpath(PROTECT_DATA_TITLE).should('be.visible')
    cy.xpath(PROTECT_DATA_TITLE).scrollIntoView()
    cy.xpath(PROTECT_DATA_TOPICS).contains('Data anonymisation and tokenisation')
    cy.xpath(PROTECT_DATA_TOPICS).contains('Security-focused team of experts')
    cy.xpath(PROTECT_DATA_TOPICS).contains('Fast response firewall')
    cy.xpath(PROTECT_DATA_TOPICS).contains('Audited by third-party security specialists')
    hooks.generateLog('How We Protect Your Data displays all topics')
}   