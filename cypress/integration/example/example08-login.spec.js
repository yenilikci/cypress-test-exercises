/// <reference types="cypress" />

context("Actions", () => {
    const emailInputXPath = "//input[@name='username' and @type='email']"
    const passwordInputXPath = "//input[@name='password']"
    const submitButtonPath = "//input[@type='submit']"
    it('xPath Login ', () => {
        cy.visit(Cypress.config("baseUrl"))
        cy.xpath(emailInputXPath).type('cypress_test_1@gmail.com')
        cy.xpath(passwordInputXPath).type('admin_123')
        cy.wait(2000)
        cy.xpath(submitButtonPath).click()
    });

})
