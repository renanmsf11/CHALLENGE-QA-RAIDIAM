describe('Login in Conduit system', () => {

    it('should Login with user registered', () => {
        cy.fixture('elementsLogin_SignUp').then(() => {
             cy.Login()
         })      
    })
})
