
describe('RegisterInterest_Test', function() {

    it('RegisterInterest-RadioBTN', function() {

        cy.visit('https://demo.nopcommerce.com/')
        cy.get('.ico-register').click()

        cy.get('input[value=M]').click().should('be.checked') // Should select radio button

        cy.get('#FirstName').type("Alex")
        cy.get('#LastName').type("Hankey")
    });
    it('RegisterInterest-Dropdown', function() {

        cy.get().select('1').should('have.value','1')
        cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > form > div:nth-child(1) > div.form-fields > div.inputs.date-of-birth > div > select:nth-child(2)').select('July').should('have.value', '7')
        cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > form > div:nth-child(1) > div.form-fields > div.inputs.date-of-birth > div > select:nth-child(3)').select('1998').should('have.value', '1998')

        cy.get('#Email').type("alexhankey1@gmail.com")
    });
    it('RegisterInterest-checkbox', function() {

        cy.get('#Company').type("DBLX")

        cy.get('#Newsletter').click().should('not.be.checked')

    });
    it('RegisterInterest-Password', function() {

        cy.get('#Password').type("@Blank54321!")
        cy.get('#ConfirmPassword').type("@Blank54321!")

        cy.get('#register-button').click()
    });

})
describe('Register-Verification_Test', function() {
    it('Check-verified', function() {
        cy.visit('https://demo.nopcommerce.com/registerresult/1?returnUrl=/')
    })
})