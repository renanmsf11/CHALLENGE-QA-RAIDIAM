Cypress.Commands.add('SignUp', () => {

     function getRandomEmail() {
          const emailPrefix = "userstest";
          const domain = "gmail.com";
          const randomSuffix = Math.floor(Math.random() * 1000); // Gera um número aleatório para evitar duplicatas
      
          return `${emailPrefix}${randomSuffix}@${domain}`;
      }
      function getRandomUsername() {
          const randomUsername = "userstest";
          const randomSuffix = Math.floor(Math.random() * 1000); // Gera um número aleatório para evitar duplicatas
      
          return `${randomUsername}${randomSuffix}`;
      }
     cy.fixture('elementsLogin_SignUp').then((el)=> {
          const randomEmail = getRandomEmail();
          const randomUsername = getRandomUsername();
          const emailGenerated = randomEmail;
          const usernameGenerated = randomUsername;
     
          cy.get(el.signUpPage).should('be.visible').click()
          cy.get(el.usernameField).should('be.visible').type(usernameGenerated)
          cy.get(el.emailField).should('be.visible').type(emailGenerated)
          cy.get(el.passwordField).should('be.visible').type(el.password)
          cy.wait(1500)
          cy.get('button.btn.btn-lg.btn-primary.pull-xs-right').click()
          cy.get(el.settingsPage).should('be.visible')
     })
})