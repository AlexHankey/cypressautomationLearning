describe('Navigation tests', function() {
    it('Cypress go() test', function () {
       cy.viewport(3440, 1440)
       cy.visit('https://demo.nopcommerce.com/')
       cy.title().should('eq', 'nopCommerce demo store')
       cy.get('.ico-register').contains('Reg').click() //Homepage
       cy.title().should('eq', 'nopCommerce demo store. Register') //Reg Page

       cy.go('back')// Go back to homepage
       cy.title().should('eq', 'nopCommerce demo store')

       cy.go('forward')// Go to Reg page
       cy.title().should('eq', 'nopCommerce demo store. Register')

       cy.go('back')// Go back to homepage
       cy.title().should('eq', 'nopCommerce demo store')

       cy.go('forward')// Go to Reg page
       cy.title().should('eq', 'nopCommerce demo store. Register')

       cy.reload()



       
    })
})