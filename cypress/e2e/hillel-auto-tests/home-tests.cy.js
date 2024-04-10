beforeEach(() => {
    cy.visit('https://qauto.forstudy.space', {
        auth: {
          username: 'guest',
          password: 'welcome2qauto',
        },
      })  
})
describe('Media icons redirect to correct pages', () => {
    it('Facebook icon opens Facebook page', () => {
          cy.get('a.socials_link').eq(0).invoke('attr', 'href').should('contain', 'facebook.com')
    })
    it('Telegram icon opens Telegram page', () => {
        cy.get('a.socials_link').eq(1).invoke('attr', 'href').should('contain', 't.me')
    })
    it('Youtube icon opens Youtube page', () => {
    cy.get('a.socials_link').eq(2).invoke('attr', 'href').should('contain', 'youtube.com')
    })
    it('Instagram icon opens Instagram page', () => {
    cy.get('a.socials_link').eq(3).invoke('attr', 'href').should('contain', 'instagram.com')
    })
    it('Linkedin icon opens Linkedin page', () => {
    cy.get('a.socials_link').eq(4).invoke('attr', 'href').should('contain', 'linkedin.com')
    })
})

describe('Authorization forms are present', () => {
it('"Log in" form appears after clicking on "Sign In" icon', () => {
    cy.contains('Sign In').click()
    cy.get('#signinEmail').should('be.visible')
    cy.get('#signinPassword').should('be.visible')
    cy.get('.modal-title').should('contain', 'Log in');
  })
it('"Registration" form appears after clicking on "Sign up" icon', () => {     
    cy.contains('Sign up').click()
    cy.get('#signupName').should('be.visible')
    cy.get('#signupLastName').should('be.visible')
    cy.get('#signupEmail').should('be.visible')
    cy.get('#signupPassword').should('be.visible')
    cy.get('#signupRepeatPassword').should('be.visible')
    cy.get('.modal-title').should('contain', 'Registration');
    })
})