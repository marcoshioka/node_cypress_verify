import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import * as hooks from '../hooks';
import * as homePage from '../page_objects/home_page';
import * as resultadosOlxPage from '../page_objects/resultados_olx_page';

Given('VerifyMyAGe doc rote with search {string}', (query_result) => {
    cy.request({
        method: 'POST',
        failOnStatusCode: false, url: 'https://ocgpx9dexe-1.algolianet.com/1/indexes/prod_KYKn/query?x-algolia-agent=Algolia%20for%20JavaScript%20(3.35.1)%3B%20Browser&x-algolia-application-id=OCGPX9DEXE&x-algolia-api-key=N2E3NzQxZjk2ZjQ3N2VjZDI5Y2NkMjk3MmRkZDFkYmZmZDQ5ZTA4MWRkNzk0NTgxMzEyMDdlMTJhYTRhNjNhMHJlc3RyaWN0SW5kaWNlcz1wcm9kX0tZS24mdmFsaWRVbnRpbD0xNjE4Mzk2MzA0', 
        body: {params: "query=" + query_result }
    }).as('searchroute')
});

When('I realize a POST in {string}', (string) => {
    cy.get('@searchroute').should((response) => {
        var jsonData = JSON.stringify(response.body)
        expect(jsonData).to.have.string('hits')
    })
});

// Then(/^I must see How VerifyMyAge Works$/, () => {
//     cy.xpath("//h1[text()='How VerifyMyAge Works']").should('be.visible')
// });

// And(/^Verification Methods$/, () => {
//     cy.xpath("//h1[text()='Verification Methods']").should('be.visible')
// });