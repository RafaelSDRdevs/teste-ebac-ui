/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        cy.visit ('produtos')
    });

    it('Deve selecionar um produtos da lista', () => {
        cy.get('.product-block')
        .first()
        .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
});