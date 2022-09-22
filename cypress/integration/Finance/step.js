/// <reference types="cypress" />


const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor/lib/methods");




Given(/^que eu acesso a aplicação finaceira$/, () => {
	cy.visit('/')
});

When(/^desejo cadastrar a entrada do meu "([^"]*)" com a data "([^"]*)" e valor "([^"]*)"$/, (descricao,data,valor) => {
	
    cy.get('#transaction .button').click()
        cy.get('#description').type(descricao)
        cy.get('[name=amount]').type(valor)
        cy.get('[type=date]').type(data)
        cy.get('button').contains('Salvar').click()

        cy.get('#data-table tbody tr').should('have.length', 1)
});

When(/^desejo cadastrar saida do "([^"]*)" com a data "([^"]*)" e valor "([^"]*)"$/, (descricao,data,valor) => {
	
    cy.get('#transaction .button').click()
            .should
        cy.get('#description').type(descricao)
        cy.get('[name=amount]').type(valor)
        cy.get('[type=date]').type(data)
        cy.get('button').contains('Salvar').click()

        cy.get('#data-table tbody tr').should('have.length', 2)
});

Then(/^o valor do meu saldo e "([^"]*)"$/, (valorTotal) => {

	
    cy.get('#totalDisplay').invoke('text').then(text => {


        let valorConvertido = 0
        let valorTotalConvertido = parseInt(valorTotal)

        valorConvertido = text.replace(',', '.')
        valorConvertido = Number(valorConvertido.split('$')[1].trim())
        valorConvertido = String(text).includes('-') ? -valorConvertido : valorConvertido 

    
        
        expect(valorConvertido).to.eq(valorTotalConvertido)
    })    

});
