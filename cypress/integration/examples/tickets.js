describe('Test', function() {
    it('new test', function() {
        cy.visit('https://tickets.digitalbalance.co.uk/login')
        cy.get('#email').type("alex.hankey@myclevergroup.com")
        cy.get('#password').type("@Cranky54321!")
        cy.get('.login-btn').contains('login').click()
        cy.wait(5000)
    })
})