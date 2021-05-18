require('cypress-xpath')

describe('Dash', function()  {
    before(() => {
        cy.visit('http://laravel.test/')
        cy.get('#email').type('alex.hankey@myclevergroup.com')
        cy.get('#password').type('password')
        cy.xpath("//button[@type='submit' and contains(text(),'Login')]").click()
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('laravel_session', 'XSRF-TOKEN')
    })

    it('displays stats', () => {
        cy.wait(5000)
        cy.visit('http://laravel.test/admin/')
      })
})


    



            
    

