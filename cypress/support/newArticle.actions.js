Cypress.Commands.add('NewArticle', () => {
    cy.fixture('elementsNewArticle_page').then((el)=> {
         cy.get(el.newArticlePage).should('be.visible').click()
         cy.get(el.articleTitleElement).should('be.visible').type(el.articleTitleText)
         cy.get('input.form-control[placeholder="What\'s this article about?"]').should('be.visible').type(el.articleSubTitleText)
         cy.get(el.articleTextElement).should('be.visible').type(el.articleText)
         cy.get(el.articleTagsElement).should('be.visible').type(el.articleTagsText)
         cy.wait(1500)
         cy.get(el.publishArticleButton).should('be.visible').click()
    })
})
Cypress.Commands.add('ValidateArticle', () => {
    cy.fixture('elementsHome_page','elementsNewArticle_page').then((el)=> {
       cy.visit('/')
       cy.get(el.yourFeedPage).click()
       cy.get(el.articleTitleText).should('be.visible')
       
    })
})