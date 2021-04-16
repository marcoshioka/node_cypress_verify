/// <reference types="Cypress"/>
import * as hooks from '../hooks';

const PRICING_TITLE = "//h1[text()='Pricing']";
const PRICING_DESCRIPTION = "//h1[text()='Pricing']//following-sibling::div";
const PRICING_TEXT = "VerifyMyAge offers a flexible pay-per-success, contingency pricing model, in which you only pay for successful verifications";
const PRICING_CARDS = "//div[@class='card-col']";
const PRICING_CARDS_TITLES = "//div[@class='card-col']//h2";
const MORE_PRICING_CARDS = "(//div[@class='card-col']//h2)[2]";
const EBAY_CARD = 'Compatible Application';
const WEBSITES_CARD = 'Website Integration';
const API_CARD = 'API Integration';

//Function to check Pricing information
export function pricingInformation() {
    cy.xpath(PRICING_TITLE).should('be.visible')
    cy.xpath(PRICING_DESCRIPTION).contains(PRICING_TEXT)
    hooks.generateLog('Pricing content is visible')
}

//Function to check Pricing integration per type 
export function pricingIntegrationTypes() {
    cy.xpath(PRICING_CARDS).should('be.visible')
    cy.xpath(PRICING_CARDS_TITLES).contains(EBAY_CARD)
    cy.xpath(MORE_PRICING_CARDS).scrollIntoView()
    cy.xpath(PRICING_CARDS_TITLES).contains(WEBSITES_CARD)
    cy.xpath(PRICING_CARDS_TITLES).contains(API_CARD)
    hooks.generateLog('Information about Pricing integration is available')
}   

