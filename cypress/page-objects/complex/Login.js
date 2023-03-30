export default class Login {
  constructor() {
    this.usernameFieldSelector = '[data-test="username"]'
    this.passwordFieldSelector = '[data-test="password"]'
    this.loginButtonSelector = '[data-test="login-button"]'
  }
  visit() {
    cy.visit('/')
  }
  fillFormAndSubmit(
    username = Cypress.env('USERNAME'),
    password = Cypress.env('PASSWORD')
  ) {
    cy.get(this.usernameFieldSelector).type(username)
    cy.get(this.passwordFieldSelector).type(password, { log: false })
    cy.get(this.loginButtonSelector).click()
  }
}
