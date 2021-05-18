require('cypress-xpath')


describe('Dec', function() {
    it('Visit huler', function() {
        cy.visit('https://app.huler.io/mcg/login')
        cy.get('#email').type("alex.hankey@myclevergroup.com")
        cy.get('#password').type("@Blank54321!")
        cy.xpath("//body/div[@id='root']/main[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[3]/button[1]").click()
    })
})