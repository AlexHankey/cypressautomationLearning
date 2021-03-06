
require('cypress-xpath')
describe('Confirmation Tests', function() {
    it('Confirmations', function() {
        cy.visit('http://laravel.test/')
        cy.xpath('//button[contains(text(),"Click Me")]').click()
        
        cy.on('window.alert', (str) => {
            expect(str).to.equal('Press a button!')
        })
    })
})