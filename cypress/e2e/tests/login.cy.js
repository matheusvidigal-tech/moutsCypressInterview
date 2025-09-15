import loginPage from "../../pages/login.page";

describe('Login page tests', () => {

  it('Should show invalid user message when use an invalid password', () => {
    loginPage.performLogin(Cypress.env('COMMON_EMAIL'), '123', false);
    cy.get(loginPage.text.alert).contains('Email e/ou senha inválidos');
  });
});
