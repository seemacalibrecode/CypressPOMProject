
import SigninPage from "../../pageobjects/SigninPage"

describe('My First Test', function() {
    
    beforeEach(() => {
      cy.fixture("example.json").as("testdata");
    });
  
    it('Launch facebook test', function() {
    
        cy.visit('/')
        cy.url().should('include', 'facebook')

        // retry until this button is visible
        cy.get('#email').should('be.visible')
        // Existence
        // retry until loading spinner no longer exists
        cy.get('#loading').should('not.exist')

        //cy.contains to find dom elements
        cy.contains('email').click()
        
        SigninPage.getEmail().type(this.testdata.email)
        SigninPage.getEmail().should('have.value', 'hello@cypress.io') // assertion
        
        
       
        expect(true).to.equal(true)
    })
  })
