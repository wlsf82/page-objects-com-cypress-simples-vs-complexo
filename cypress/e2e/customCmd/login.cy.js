describe('Login', () => {
  it('logs in successfully', () => {
    cy.visit('/')

    cy.login()

    cy.contains('.title', 'Products').should('be.visible')
  })
})
