/// <reference types="Cypress"/>

context("İlk  testimiz", () => {

    it("Visit", () => {
        cy.visit(Cypress.config("baseUrl"))
    })

    it("UrlDogrulama", () => {
        cy.url().should("include", Cypress.config("baseUrl"))
        cy.get("body > form > div > h1").should("have.text", "Dashboard")
    })

    it("ProtocolDogrulama", () => {
        cy.location("protocol").should("eq", "https:")
    })
})
