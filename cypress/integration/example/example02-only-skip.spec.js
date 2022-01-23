/// <reference types = "Cypress"/>

context("4 islem", () => {
    const s1 = 9
    const s2 = 6
    let sonuc
    it("Toplama", () => {
        sonuc = s1 + s2
        assert.equal(sonuc, 15, "Toplama sonuc kontrolu ")
    })
    //only sadecece belirli bir test bloğununu çalıştırılmasını sağlar
    // it.only("Cıkarma", () => {
    //     sonuc = s1 - s2
    //     assert.isTrue(sonuc === 0, "Toplama sonuc kontrolu ")
    // })
    //skip belirli bir test bloğununu çalıştırılmasının atlanmasını sağlar
    it.skip("Text kontrolu", () => {
        const text1 = "Cypress io"
        expect(text1).to.have.string("io")
    })
})
