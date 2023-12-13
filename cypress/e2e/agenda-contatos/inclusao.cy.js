/// <reference types="cypress" />

describe('testes para a pagina de agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it ('Deve incluir um novo contato', () => {
        cy.get('input[type="text"]').type('gian souza')
        cy.get('input[type="email"]').type('giansouza@teste.com')
        cy.get('input[type="tel"]').type('11 123456789')
        cy.get('.adicionar').click()
    })
    
    it ('Deve alterar um contato', () => {
        cy.get(':last-child > .sc-gueYoa > .edit').click()
        cy.get('input[type="email"]').clear()
        cy.get('input[type="text"]').type('Gian Souza da Silva')
        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type('giansouzaaposedicao@teste.com')
        cy.get('input[type="tel"]').clear()
        cy.get('input[type="tel"]').type('11 98765432')
        cy.get('.alterar').click()
        })
        
    it ('Deve excluir um contato', () => {
        cy.get(':last-child > .sc-gueYoa > .delete').click()
        })
        
})