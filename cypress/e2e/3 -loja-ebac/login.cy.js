/// <reference types="cypress"/>
    const perfil = require('../../fixtures/perfil.json')

describe ('funcionalidade: login', () => {
    beforeEach(() => {
        cy.visit ('minha-conta')
    });
    afterEach(() => {
        cy.screenshot()
    });
       
    it('deve fazer login com sucesso', () => {
        cy.get('.woocommerce-form > :nth-child(1) > label') .type('rafael.teste@teste.com.br')
        cy.get('#password').type('teste1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain' , 'Olá, rafael.teste (não é rafael.teste? Sair)')            
        });
        it('Deve exibir uma mensagem de erro ao inserir o usuário inválido', () => {
           
            cy.get('.woocommerce-form > :nth-child(1) > label') .type('rafael.teste666@teste.com.br')
            cy.get('#password').type('teste1234')
            cy.get('.woocommerce-form > .button').click()     
            cy.get('.woocommerce-error').should ('contain' , 'Endereço de e-mail desconhecido.')
        });       
        it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => { 
            cy.get('#username') .type ('rafael.teste@teste.com.br')
            cy.get('#password').type('teste000')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error').should ('contain','Erro: A senha fornecida para o e-mail rafael.teste@teste.com.br está incorreta. Perdeu a senha?')
        });
        it('Deve fazer login com sucesso - usando massa de dados', () => {
        cy.get('#username') .type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain' , 'Olá, rafael.teste (não é rafael.teste? Sair)')
        });
        it('Deve fazer login com sucesso - usando fixture', () => {
            cy.fixture('perfil').then(dados =>{
                cy.get('#username') .type(perfil.usuario)
                cy.get('#password').type(perfil.senha)
                cy.get('.woocommerce-form > .button').click()
                cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain' , 'Olá, rafael.teste (não é rafael.teste? Sair)')
            })
                
                });
                it.only('deve fazer login com sucesso - usando Comandos customizados', () => {
                    cy.login ('rafael.teste@teste.com.br','teste1234')
                    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain' , 'Olá, rafael.teste (não é rafael.teste? Sair)')
       
            
           })
        }); 