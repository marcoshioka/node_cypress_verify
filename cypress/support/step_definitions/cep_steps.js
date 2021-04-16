import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("I want to send a request to know a CEP information", () => {
    //Step to introduce request purpose
});

When("I make a request with CEP's number {string}", (cep) => {
    cy.request({ failOnStatusCode: false, url: 'https://api.postmon.com.br/v1/cep/' + cep }).as('ceproute')
});

Then("the API will return a response with status code {string}", (status) => {
    cy.get('@ceproute').should((response) => {
        expect(response.status).to.eq(Number(status))
    })
});

And("public place name {string}", (public_place) => {
    cy.get('@ceproute').should((response) => {
        expect(response.body).to.have.property('logradouro').to.eq(public_place)
    })
});

And("neighborhood {string}", (neighborhood) => {
    cy.get('@ceproute').should((response) => {
        expect(response.body).to.have.property('bairro').to.eq(neighborhood)
    })
});

And("city name {string}", (city) => {
    cy.get('@ceproute').should((response) => {
        expect(response.body).to.have.property('cidade').to.eq(city)
    })
});

And("state {string}", (state) => {
    cy.get('@ceproute').should((response) => {
        expect(response.body).to.have.property('estado').to.eq(state)
    })
});

When("I make a request to a wrong endpoint {string} with valid cep {string}", (wrong_endpoint, valid_cep) => {
    cy.request({ failOnStatusCode: false, url: 'https://api.postmon.com.br/v1/' + wrong_endpoint + '/' + valid_cep }).as('ceproute')
});

When("I make a request with wrong method {string} with valid cep {string}", (wrong_method, valid_cep) => {
    cy.request({ failOnStatusCode: false, method: wrong_method, url: 'https://api.postmon.com.br/v1/cep/' + valid_cep }).as('ceproute')
});
