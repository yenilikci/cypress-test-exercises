/// <reference types = "Cypress"/>

context("4 islem", ()=> {
    const s1= 9
    const s2= 6
    let sonuc
    it("Toplama", ()=>{
        sonuc = s1 + s2
        assert.equal(sonuc, 15, "Toplama sonuc kontrolu ")
    })
    it("Cıkarma", ()=>{
        sonuc = s1 - s2
        assert.isTrue(sonuc===0 , "Toplama sonuc kontrolu ")
    })
    it("Text kontrolu", ()=> {
        const text1= "Cypress io"
        expect(text1).to.have.string("io")
    })
})
