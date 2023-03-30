describe('Login', () => {
  it('logs in successfully', () => {
    cy.visit('/')

    cy.get('[data-test="username"]').type(Cypress.env('USERNAME'))
    cy.get('[data-test="password"]').type(Cypress.env('PASSWORD'), { log: false })
    cy.get('[data-test="login-button"]').click()

    cy.contains('.title', 'Products').should('be.visible')
  })
})
