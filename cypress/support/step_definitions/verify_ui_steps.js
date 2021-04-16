import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import * as homePage from '../page_objects/home_page';
import * as howItWorksPage from '../page_objects/how_it_works_page';
import * as aboutPage from '../page_objects/about_page';
import * as pricingPage from '../page_objects/pricing_page';
import * as securityPage from '../page_objects/security_page';
import * as contactPage from '../page_objects/contact_page';
import * as getStartedPage from '../page_objects/get_started_page';

Given("I access VerifyMyAge's website", () => {
    homePage.visit()
});

When('I select {string}', (header_option) => {
    homePage.selectOption(header_option)
});

Then('I must see How VerifyMyAge Works', () => {
    howItWorksPage.howItWorks()
});

And('Verification Methods', () => {
    howItWorksPage.verificationMethods()
});

Then('I must see text about VerifyMyAge', () => {
    aboutPage.aboutContent()
});

And('the Management Team', () => {
    aboutPage.managementTeam()
});

Then('I must see pricing details', () => {
    pricingPage.pricingInformation()
});

And('each integration per type', () => {
    pricingPage.pricingIntegrationTypes()
});

Then('I must see Security Information', () => {
    securityPage.securityDescription()
});

And('High-end cryptography', () => {
    securityPage.cryptographyInformation()
});

And('How We Protect Your Data topic', () => {
    securityPage.howWeProtectYourDataTopic()
});

Then('I must see all contacts forms', () => {
    contactPage.contactContent()
    contactPage.contactForms()
});

And("London Office's address", () => {
    contactPage.londonOfficeAddress()
});

Then('I must see Get Started content', () => {
    getStartedPage.getStartedInformation()
});

And('each option per card', () => {
    getStartedPage.getStartedCards()
});  