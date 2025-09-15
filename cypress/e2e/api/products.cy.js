let defaultSearchProductId;

describe('Products route tests', () => {
    before(() => {
        cy.apiLogin(Cypress.env('COMMON_EMAIL'), Cypress.env('COMMON_PASSWORD'));
         cy.fixture('test-product.json').then((data) => {
             defaultSearchProductId = (data.id);
            });
    });
 
  it('Should not show any empty field on product item', () => {
    cy.request({
    method: 'GET',
    url: `${Cypress.env("path")}/produtos/${defaultSearchProductId}`,
    headers: {
        'Authorization': Cypress.env('token')
      }
    })
    .then((response) => {
    expect(response.status).equal(200);
    expect(response.body.nome).to.not.be.empty;
    expect(response.body.preco).to.be.a('number');
    expect(response.body.descricao).to.not.be.empty;
    expect(response.body.quantidade).to.be.a('number');
    expect(response.body._id).to.not.be.empty;
  });
  });

  it('Should not allow common user to delete products', () => {
    cy.request({
    failOnStatusCode: false,
    method: 'DELETE',
    url: `${Cypress.env("path")}/produtos/${defaultSearchProductId}`,
    headers: {
        'Authorization': Cypress.env('token')
      }
    })
    .then((response) => {
    expect(response.status).equal(403);
  });
  });
});