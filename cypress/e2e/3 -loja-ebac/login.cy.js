/// <reference types="cypress"/>

describe ('funcionalidade: login', () => {
    
    it('deve fazer login com sucesso', () => {

        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('.woocommerce-form > :nth-child(1) > label') .type('rafael.teste@teste.com.br')
        cy.get('#password').type('teste1234')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain' , 'Olá, rafael.teste (não é rafael.teste? Sair)')
    })
})