
describe('Test 1', function() {

    before(() => {
        cy.visit('http://laravel.test/')
        cy.get('#email').type('alex.hankey@myclevergroup.com')
        cy.get('#password').type('password')
        cy.xpath("//button[@type='submit' and contains(text(),'Login')]").click()
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('laravel_session', 'XSRF-TOKEN')
    })

    it('Search for item', () => {
        cy.xpath('//a[@data-tooltip-title="Search"]').click()
        cy.wait(1500).get('#search').type("Welcome to the danger zone",)

        
    
      })
    
    it('Assign user to audience', () => {
        cy.visit('http://laravel.test/admin/audiences')
        cy.xpath('//tbody/tr[1]/td[6]/div[1]/button[1]')
            .should('be.visible')
            .click()
        cy.get('#dropdown-container > div > div > a:nth-child(2)')
            .should('have.attr', 'href').and('include', "/admin/audiences/6/view-users")
            .then((href) => {
                debugger
                cy.visit(href)
            })
        
        
        
        
            


    })

})