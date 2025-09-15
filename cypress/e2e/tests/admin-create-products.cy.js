import adminCreateProductsPage from "../../pages/admin-create-products.page";
import loginPage from "../../pages/login.page";

describe('Admin product page tests', () => {

    beforeEach(() => {
        loginPage.performLogin(Cypress.env('ADMIN_EMAIL'), Cypress.env('ADMIN_PASSWORD'));
        cy.get(loginPage.header.links.createProducts).click();
    });
 
  it('Shold create and list a product successfully', () => {
     cy.fixture('create-product.json').then((data) => {
     adminCreateProductsPage.fillProductCreationForm(data);
    });
  });
});