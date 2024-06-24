describe('User creates New Article', () => {

    it('should create New Article', () => {
        cy.fixture('elementsLogin_SignUp').then(() => {
            cy.Login()
        })      
        cy.fixture('elementsNewArticle_page').then(() => {
             cy.NewArticle()
         })
        cy.fixture('elementsHome_page','elementsNewArticle_page').then(() => {
            cy.ValidateArticle()
        })          
            
    }) 
})

