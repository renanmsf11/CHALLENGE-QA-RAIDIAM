describe('Sign Up in Conduit system', () => {

    it('should Sign Up a new user register', () => {
        cy.fixture('elementsLogin_SignUp').then((el) => {
             cy.SignUp()
         })      
    })
})
