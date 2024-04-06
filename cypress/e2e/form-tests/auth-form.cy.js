/// <reference types="cypress" />
describe('Login test in herokuapp 1', () => {
    it('Error message should appear for invalid password', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.get('input#username').type('tomsmith')
      cy.get('input#password').type('incorrectpassword')
      cy.get('button[type="submit"]').click()
      cy.get('.flash.error').should('be.visible')
      cy.get('.flash.error').should('contain', 'Your password is invalid!')
    })
  })

  describe('Login test in herokuapp 2', () => {
    it('Error message should appear for invalid username and any password', () => {
      cy.visit('https://the-internet.herokuapp.com/login')

      cy.get('input#username').type('Jake')
      cy.get('input#password').type('SuperSecretPassword!')
      cy.get('button[type="submit"]').click()
      cy.get('.flash.error').should('be.visible').and('contain', 'Your username is invalid!')
    })
  })

  describe('Login to qauto.forstudy.space', () => {
    it('Login validation error should appear', () => {
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