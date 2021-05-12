describe('Test to login into site', function() {
    it('Login', function() {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email').type('dharmakrish6@gmail.com')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin > span').click()
        cy.title().should('include', 'My Account - My Store')

    })
});