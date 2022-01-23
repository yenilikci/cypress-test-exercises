/// <reference types="Cypress"/>

context("Cypress context", () => {
    const email = "aaaa@bbbb.com"
    const password = "123"

    it("Path kullanım", () => {
        cy.visit(Cypress.config("baseUrl"))
        //text alan seçimi
        cy.get("[type='email']")
            .type(email) //bu alana bir değer girmek için type
        cy.get("[type='password']")
            .type(password)
        cy.wait(2000)
        cy.get(".btn")
            .click() //seçilen elemente tıklama
        cy.get("#fail")
            .should("include.text", "Girdiğiniz bilgiler hatalıdır")
    })
})
