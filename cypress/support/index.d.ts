declare namespace Cypress {
  interface Chainable<Subject> {
    apiLogin(email: string, password: string): Chainable<any>;
  }
}