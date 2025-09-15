import commonListProductsPage from "../../pages/common-list-products.page";
import loginPage from "../../pages/login.page";

describe('Common product list page tests', () => {
    beforeEach(() => {
        loginPage.performLogin(Cypress.env('COMMON_EMAIL'), Cypress.env('COMMON_PASSWORD'));
    });
 
  it('Shold successfully add a product to shopping list', () => {
     cy.fixture('test-product.json').then((data) => {
     commonListProductsPage.searchProduct(data);
     cy.url().should('include', '/minhaListaDeProdutos');
     cy.contains(data.nome);
    });
  });
});