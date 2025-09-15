
# BDD Automação Serverest | JavaScript - Cypress
___

## 🇧🇷 Cenários

### [Geral] Login
`Should show invalid user message when use an invalid password` <br>
***Cenário:*** Validar mensagem de senha inválida <br>
**Dado** que eu estou na tela de Login <br>
**E** que eu informei um e-mail válido <br>
**E** que eu informei uma senha inválida <br>
**Quando** eu clicar no botão para logar <br>
**Então** irei visualizar a mensagem de erro <br>

### [Admin] Produtos
`Shold create and list a product successfully` <br>
***Cenário:*** Criar um produto com sucesso <br>
**Dado** que estou logado como Admin <br>
**E** que eu clique no botão Cadastrar produto no header <br>
**E** que eu preenchi o campo de Nome <br>
**E** que eu preenchi o campo de Preço <br>
**E** que eu preenchi o campo de Quantidade <br>
**E** que anexei um arquivo no campo de imagem <br>
**Quando** eu clicar no botão para cadastrar o produto <br>
**Então** serei redirecionado para a lista de produtos existentes <br>
**E** verei o novo produto criado na listagem <br>


 ### [Comum] Produtos
`Shold create and list a product successfully` <br>
***Cenário:*** Incluir produtos na lista de compras <br>
**Dado** que estou logado como usuário Comum <br>
**E** que eu pesquise pelo nome de algum produto <br>
**E** que clique no link de Detalhes do produto exibido <br>
**E** que eu fui redirecionado para a tela de detalhes do produto <br>
**Quando** eu clicar no botão Adicionar a lista <br>
**Então** serei redirecionado para a tela de Lista de compras <br>
**E** verei produto selecionado na lista <br

## 🇺🇸 Scenarios

### [General] Login
`Should show invalid user message when use an invalid password` <br>
***Scenario:*** Check invalid password message <br>
**Given** I'm on Login page <br>
**And** I have entered a valid e-mail <br>
**And** I have entered an valid password <br>
**When** I click on Login button <br>
**Then** I should see the invalid password message <br>

### [Admin] Products
`Shold create and list a product successfully` <br>
***Scenario:*** Create a product successfully <br>
**Given** I'm logged in as Admin user <br>
**And** I click the Create product button on the header <br>
**And** I have entered a Name <br>
**And** I have entered a Price <br>
**And** I have entered a Description <br>
**And** I have attached an image <br>
**When** I click the Create product button <br>
**Then** I should be redirected to created products lists <br>
**And** I should see the created product <br>

 ### [Common] Products
`Shold create and list a product successfully` <br>
***Scenario:*** Add products to shopping list <br>
**Given** I'm logged in as Common user <br>
**And** I have searched for a product <br>
**And** I have clicked on the Details button of the found product <br>
**And** I have been redirected to the product details page <br>
**When** I click the Add product button <br>
**Then** I should be redirected to the Shopping list page <br>
**And** I should see the product on the list
