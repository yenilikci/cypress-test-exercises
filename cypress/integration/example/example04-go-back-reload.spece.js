/// <reference types="Cypress"/>

context("Tarayici fonksiyonlari", () => {
    const url1 = "https://test.iyikisordun.com/index2.html"
    const url2 = "https://test.iyikisordun.com/index3.html"

    it("Geri gelmek", () => {
        cy.visit(url1)
        cy.wait(1000) //1sn bekleme süresi
        cy.visit(url2)
        cy.go("back") //cy.go(-1)
        cy.url().should("include", "index2")
    })

    it("İleri gitmek", () => {
        cy.wait(2000) //2sn bekleme süresi
        cy.go(1) //cy.go("forward")
        cy.url().should("include", "index3")
    })

    it("Yenile", () => {
        cy.pause() //durdur, manuel tekrar devam ettirilir
        cy.reload()
    })
})
