
describe('Users route tests', () => {

  it('Should successfully create a new user', () => {
    cy.fixture('create-user.json').then((body) => {
      body.email = body.email.replace('{VAR}', Date.now());
      cy.request({
        method: 'POST',
        url: `${Cypress.env("path")}/usuarios`,
        body: body
      }).then((response) => {
        expect(response.status).equal(201);
      });
    });
  });
});