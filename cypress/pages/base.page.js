
class BasePage {
    constructor() {
    }

    header = {
        buttons: {
            logout: '[data-testid="logout"]'
        },

        links: {
            createProducts: '[data-testid="cadastrar-produtos"]',
            listProducts: '[data-testid="listar-produtos"]'
        }
    }

    /**
     * #### Verifica se o usuário foi redirecionado para a Home
     */
    checkLoginRedirect() {
        cy.get(this.header.buttons.logout).should('be.visible');
    }
}

export default BasePage;