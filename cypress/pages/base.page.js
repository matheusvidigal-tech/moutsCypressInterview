
class BasePage {
    constructor() {
    }

    buttons = {
        logout: '[data-testid="logout"]'
    }

    /**
     * #### Verifica se o usuário foi redirecionado para a Home
     */
    checkLoginRedirect() {
        cy.get(this.buttons).should('be.visible');
    }
}

export default BasePage;