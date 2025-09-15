import BasePage from './base.page';

class LoginPage extends BasePage {
    inputs = {
        email: '[data-testid="email"]',
        password: '[data-testid="senha"]'
    }
    buttons = {
        login: '[data-testid="entrar"]'
    }
    link = {
        signup: '[data-testid="cadastrar"]'
    }
    text = {
        alert: '[class="alert alert-secondary alert-dismissible"]'
    }

    /**
     * #### Realiza o login no Front-End da aplicação
     * @param {string} email Email do usuário
     * @param {string} password Senha do usuário
     * @param {boolean} expectSuccess Informa se o sucesso na função deve ocorrer
     */
    performLogin(email, password, expectSuccess = true) {
        cy.log(email)
        cy.get(this.inputs.email).type(email);
        cy.get(this.inputs.password).type(password);
        cy.get(this.buttons.login).click();
        if(expectSuccess === true) {
            this.checkLoginRedirect();
        }
    }
}

export default new LoginPage();