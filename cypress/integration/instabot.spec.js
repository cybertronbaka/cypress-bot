describe('Instagram robot', () => {

    const randomWaitTime = Math.floor((Math.random() * 10) + 1000);
    const password = Cypress.env('password');
    const username = Cypress.env('username');
    const searchTerm = 'phun.d';
    const commentString = 'Ya Laso.Bwahahahahaha';
    const postCount = 69;
    it('Visits instagram.com', () => {
      cy.wait(randomWaitTime);
      cy.clearCookies();
      cy.wait(randomWaitTime);
      cy.visit('https://www.instagram.com/accounts/login/?hl=en');
    });

    it('logs in', () => {
      cy.get('#react-root > section > main > div > div > div > div > form > div > div > div > label > input').eq(0).type(username);
      cy.wait(randomWaitTime);
      cy.contains('Password').type(password)
      cy.wait(randomWaitTime);
      cy.contains('Log In').click()
    });

    it('searches for relevent hashtags', () => {
      cy.wait(randomWaitTime);
      cy.contains('Not Now').click();
      cy.wait(randomWaitTime);
      cy.contains('Not Now').click();
      cy.wait(randomWaitTime);
    //   cy.get('#react-root > section > nav > div').eq(1)
    //   .get('div > div')
    //   .eq(1).get('input')
    //   .eq(0).click({ force: true }).type(searchTerm);
      cy.contains('Search').type(searchTerm);
      cy.wait(randomWaitTime);
      cy.contains(searchTerm).click();
    
    });
    it('Gets to some posts', () => {
      cy.wait(randomWaitTime);
    //   cy.get('.FFVAD').click({multiple: true});
      cy.get('#react-root > section > main > div > div').eq(1).get('article > div > div > div > div > a > div').click({multiple: true})
    });

    it('Comments on multiple post', () => {
        cy.wait(randomWaitTime);

        let i = 0;
        while (i < postCount){
          // cy.get('article > div').eq(2).get('section').eq(2).get('div > form > textarea').eq(0).click({force: true}).type(commentString);
          cy.get('[placeholder="Add a comment…"]').type(commentString);
          cy.wait(randomWaitTime);
          cy.contains('Post').click({force: true});
          cy.wait(randomWaitTime);
          cy.contains('Next').click({force: true});
          cy.wait(randomWaitTime);
          i = i + 1;
        }
          });
  });