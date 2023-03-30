Cypress.Commands.add('login', (
  username = Cypress.env('USERNAME'),
  password = Cypress.env('PASSWORD')
) => {
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password, { log: false })
  cy.get('[data-test="login-button"]').click()
})
