import './commands'
import './login.actions'
import './signup.actions'
import './newArticle.actions'


beforeEach(()=>{
    Cypress.on('uncaught:exception',()=> {
        return false;
    })
    cy.visit('/')
})