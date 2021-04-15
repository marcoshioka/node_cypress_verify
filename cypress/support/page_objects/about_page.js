/// <reference types="Cypress"/>
import * as hooks from '../hooks';

const ABOUT_TITLE = "//h1";
const ABOUT_TEXT = 'VerifyMyAge was founded by a team of eCommerce specialists that understand the importance of robust and effective age verification solutions.';
const MANAGEMENT_TEAM_TITLE = "//section[contains(@class,'text-center')]//h2[@class]"
const MANAGEMENT_TEAM_TEXT = 'Meet the management team'
const TEAM_MEMBER = "//div[@class='team']//h3"

//Function to check About content
export function aboutContent() {
    cy.xpath(ABOUT_TITLE).should('be.visible')
    cy.xpath(ABOUT_TITLE).contains(ABOUT_TEXT)
    hooks.generateLog('About content is visible')
}

//Function to check Management Team content
export function managementTeam() {
    cy.xpath(MANAGEMENT_TEAM_TITLE).contains(MANAGEMENT_TEAM_TEXT)
    cy.xpath(MANAGEMENT_TEAM_TITLE).scrollIntoView()
    cy.xpath(TEAM_MEMBER).contains('Ryan Shaw')
    cy.xpath(TEAM_MEMBER).contains('Gabriel Verta')
    cy.xpath(TEAM_MEMBER).contains('Ayrton Campbell')
    cy.xpath(TEAM_MEMBER).contains('Alex Tzukerman')
    cy.xpath(TEAM_MEMBER).contains('Daniel Owens')
    cy.xpath(TEAM_MEMBER).contains('Jose Neves')
    cy.xpath(TEAM_MEMBER).contains('Andy Lulham')
    hooks.generateLog('Management Team content was checked')
}   