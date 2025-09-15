/**
 * #### Realiza o login via API e coleta o token
 * @param {string} email Email da conta do usuário
 * @param {string} password Senha da conta do usuário
 */
Cypress.Commands.add('apiLogin', (email, password) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env("path")}/login`,
    body: {
      email,
      password,
    },
  }).then((response) => {
    expect(response.status).to.equal(200);
    Cypress.env('token', response.body.authorization);
  });
});