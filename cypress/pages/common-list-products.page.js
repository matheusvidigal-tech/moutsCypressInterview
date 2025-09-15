import BasePage from './base.page';
import commonProductDetailsPage from './common-product-details-page';

class CommonListProductsPage extends BasePage {
    inputs = {
        search: '[data-testid="pesquisar"]',
    }
    buttons = {
        search: '[data-testid="botaoPesquisar"]',
        detailsById: '[href="/detalhesProduto/BeeJh5lz3k6kSIzA"]'
    }

    /**
     * #### Busca um produto a partir do campo de busca, e insere na lista de compras
     * @param {JSON} data Arquivo JSON de produto do Fixtures que será buscado
     */
    searchProduct(data) {
        cy.get(this.inputs.search).type(data.nome);
        cy.get(this.buttons.search).click();
        cy.get(this.buttons.detailsById).find(".card-link").click();
        cy.get(commonProductDetailsPage.buttons.addToList).click();
    }
}

export default new CommonListProductsPage();