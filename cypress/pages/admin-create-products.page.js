import BasePage from './base.page';

class AdminCreateProductsPage extends BasePage {
    inputs = {
        name: '[data-testid="nome"]',
        price: '[data-testid="preco"]',
        description: '[data-testid="descricao"]',
        quantity: '[data-testid="quantity"]',
        image: '[data-testid="imagem"]',
    }
    buttons = {
        create: '[data-testid="cadastarProdutos"]'
    }

    /**
     * #### Preenche o formuário de cadastro de novo produto
     * @param {JSON} data Arquivo JSON do Fixtures que será inserido no formulário
     */
    fillProductCreationForm(data) {
        const nameId = data.nome.replace('{VAR}', Date.now());
        cy.get(this.inputs.name).type(nameId);
        cy.get(this.inputs.price).type(data.preco);
        cy.get(this.inputs.description).type(data.descricao);
        cy.get(this.inputs.quantity).type(data.quantidade);
        cy.get(this.inputs.image).selectFile('cypress/fixtures/template-image.jpg');
        cy.get(this.buttons.create).click();
        cy.get('td').contains(nameId);
    }
}

export default new AdminCreateProductsPage();