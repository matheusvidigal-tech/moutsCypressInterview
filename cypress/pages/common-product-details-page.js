import BasePage from './base.page';

class CommonProductDetailsPage extends BasePage {
    buttons = {
        addToList: '[data-testid="adicionarNaLista"]'
    }
}

export default new CommonProductDetailsPage();