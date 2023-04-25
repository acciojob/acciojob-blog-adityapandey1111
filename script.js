//your JS code here. If required.
describe('Accio Jobs website', () => {
  it('contains a marquee tag with the text "Welcome to Acciojobs!" and an h1 tag with the text "Blog"', () => {
    cy.visit('https://example.com'); // replace with the actual URL of the Accio Jobs website

    cy.get('marquee').should('have.length', 1);
    cy.get('marquee').should('have.text', 'Welcome to Acciojobs!');

    cy.get('a[href="https://acciojob.com/blog/"] h1').should('have.text', 'Blog');
  });
});
