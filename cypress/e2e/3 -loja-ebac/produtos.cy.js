/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
    produtosPage.visitarUrl()

    });

    it('Deve selecionar um produtos da lista', () => {
      produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
    it('deve buscar um produto com sucesso', () => {
        let produto = 'Augusta Pullover Jacket'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain' ,produto )

    });
    it('deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('Atomic Endurance Running Tee (V-neck)')
        cy.get('.product_title').should('contain' ,'Atomic Endurance Running Tee (V-neck)' )
    });
    it('deve adicionar  produto ao carrinho', () => {
        produtosPage.buscarProduto('Atomic Endurance Running Tee (Crew-Neck)')
        produtosPage.addProdutoCarinho('M','Blue', 5)
        cy.get('.woocommerce-message').should('contain' , '5 × “Atomic Endurance Running Tee (Crew-Neck)” foram adicionados no seu carrinho.')
    });
    it.only('deve adicionar  produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados =>{
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarinho
            (dados[0].tamanho,
            dados[0].cor, 
            dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain' , dados[0].nomeProduto)
        })
    
    });
});