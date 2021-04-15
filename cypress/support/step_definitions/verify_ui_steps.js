import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import * as homePage from '../page_objects/home_page';
import * as howItWorksPage from '../page_objects/how_it_works_page';
import * as aboutPage from '../page_objects/about_page';
import * as pricingPage from '../page_objects/pricing_page'; 

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