Given('I open the url of Microsoft', () => {
    cy.visit('https://www.microsoft.com');
    
  });
  
Then(
    'the title of the web page is verified as {string}',
    (title) => {
        cy.title().should('include', title);
    }
  );