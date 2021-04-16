/// <reference types="Cypress"/>
import * as hooks from '../hooks';

const GET_STARTED_TITLE = "//h1[text()='Easy sign up. Simple installation']";
const GET_STARTED_DESCRIPTION = "//h1[text()='Easy sign up. Simple installation']//following-sibling::div/p";
const GET_STARTED_TEXT = "Select the platform your business uses and start age-verifying your customers today.";
const GET_STARTED_CARDS = "//div[@class='card-col']";
const GET_STARTED_CARDS_DESCRIPTION = "//div[@class='card-col']/div[@class]";
const GET_STARTED_API_CARD = "//div[@class='card-col']//header";
const GET_STARTED_MAGENTO_CARD = "//div[@class='card-col']//header/img[contains(@src,'magento')]";

//Function to check Get started information
export function getStartedInformation() {
    cy.xpath(GET_STARTED_TITLE).should('be.visible')
    cy.xpath(GET_STARTED_DESCRIPTION).contains(GET_STARTED_TEXT)
    hooks.generateLog('Get started content is visible')
}

//Function to check Get started per card 
export function getStartedCards() {
    cy.xpath(GET_STARTED_CARDS).should('be.visible')
    cy.xpath(GET_STARTED_CARDS_DESCRIPTION).contains('ebay').scrollIntoView()
    cy.xpath(GET_STARTED_CARDS_DESCRIPTION).contains('shopify').scrollIntoView()
    cy.xpath(GET_STARTED_CARDS_DESCRIPTION).contains('woocommerce').scrollIntoView()
    cy.xpath(GET_STARTED_CARDS_DESCRIPTION).contains('bigcommerce').scrollIntoView()
    cy.xpath(GET_STARTED_API_CARD).contains('API Integration').scrollIntoView()
    cy.xpath(GET_STARTED_MAGENTO_CARD).should('be.visible').scrollIntoView()
    cy.xpath(GET_STARTED_CARDS_DESCRIPTION).contains('amazon').scrollIntoView()
    hooks.generateLog('Get Started cards are available')
}   

