describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.getCookies().should('be.empty')
    cy.setCookie('id', '5df3e25c99c11500173bec47')
  })

  describe('Navigation bar', () => {
    it('Shows the required links', () => {
      cy.get('.navbar-nav')
        .eq(0)
        .within(() => {
          cy.get('.nav-item')
            .eq(0)
            .should('contain', 'Home')
          cy.get('.nav-item')
            .eq(1)
            .should('contain', 'Novel bookcase')
          cy.get('.nav-item')
            .eq(2)
            .should('contain', 'My Diary')
          cy.get('.nav-item')
            .eq(3)
            .should('contain', 'Recommend')
        })
      cy.get('.navbar-nav')
        .eq(1)
        .within(() => {
          cy.get('.nav-item')
            .eq(0)
            .should('contain', 'User Account')
        })
    })
    //
    it('The Novel Bookcase', () => {
      cy.get('.navbar-nav')
        .eq(0)
        .find('.nav-item')
        .eq(1)
        .click()
      cy.get('#__BVID__12 > ul > li:nth-child(1) > a').click()
      cy.url().should('include', '/novels')
      cy.get('.navbar-nav')
        .eq(0)
        .find('.nav-item')
        .eq(1)
        .click()
      cy.get('#__BVID__12 > ul > li:nth-child(2) > a').click()
      cy.url().should('include', '/authors')
      // etc
    })

    it('My Diary', () => {
      cy.get('.navbar-nav')
        .eq(0)
        .find('.nav-item')
        .eq(2)
        .click()
      cy.get('#__BVID__20 > ul > li:nth-child(1) > a').click()
      cy.url().should('include', '/myassets')
      cy.get('.navbar-nav')
        .eq(0)
        .find('.nav-item')
        .eq(2)
        .click()
      cy.get('#__BVID__20 > ul > li:nth-child(2) > a').click()
      cy.url().should('include', '/addmynovels')
      cy.get('.navbar-nav')
        .eq(0)
        .find('.nav-item')
        .eq(2)
        .click()
      cy.get('#__BVID__20 > ul > li:nth-child(3) > a').click()
      cy.url().should('include', '/addmyauthor')
    })

    it('show recommend', () => {
      cy.get('.navbar-nav')
        .eq(0)
        .find('.nav-item')
        .eq(3)
        .click()
      cy.get('#__BVID__31 > ul > li:nth-child(1) > a').click()
      cy.url().should('include', '/addnovels')
      cy.get('.navbar-nav')
        .eq(0)
        .find('.nav-item')
        .eq(3)
        .click()
      cy.get('#__BVID__31 > ul > li:nth-child(2) > a').click()
      cy.url().should('include', '/addauthor')
    })

    it('show User Sign in and Sign out', () => {
      cy.get('.navbar-nav')
        .eq(1)
        .find('.nav-item')
        .eq(0)
        .click()
      cy.get('#__BVID__39 > ul > li:nth-child(2) > a').click()
      cy.url().should('include', '/Info')
      cy.get('.navbar-nav')
        .eq(1)
        .find('.nav-item')
        .eq(0)
        .click()
      cy.get('#__BVID__39 > ul > li:nth-child(3) > a').click()
      cy.contains('Sign out')
    })
  })
})
