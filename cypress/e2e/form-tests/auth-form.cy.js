/// <reference types="cypress" />

describe('Authorization tests', () => {
    it('Error message should appear when entering invalid password', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.get('input#username').type('tomsmith')
      cy.get('input#password').type('incorrectpassword')
      cy.get('button[type="submit"]').click()
      cy.get('.flash.error').should('be.visible')
      cy.get('.flash.error').should('contain', 'Your password is invalid!')
    })
 
    it('Error message should appear when entering invalid username with any password', () => {
      cy.visit('https://the-internet.herokuapp.com/login')

      cy.get('input#username').type('Jake')
      cy.get('input#password').type('SuperSecretPassword!')
      cy.get('button[type="submit"]').click()
      cy.get('.flash.error').should('be.visible').and('contain', 'Your username is invalid!')
    })

    it('Validation error should appear in Log in modal', () => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
              username: 'guest',
              password: 'welcome2qauto',
            },
          })  
      cy.contains('Sign In').click();
      cy.get('h4.modal-title').type('be.visible')
      cy.get('input#signinEmail').type('test@gmail.com')
      cy.get('input#signinPassword').type('12345')
      cy.contains('Login').click()
      cy.get('p.alert-danger').should('have.text', 'Wrong email or password')
    })
  })