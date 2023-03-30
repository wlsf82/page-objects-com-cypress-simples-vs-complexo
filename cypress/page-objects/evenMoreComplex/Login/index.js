import {
  usernameFieldSelector,
  passwordFieldSelector,
  loginButtonSelector
} from './selectors'

export default class Login {
  visit() {
    cy.visit('/')
  }
  fillFormAndSubmit(
    username = Cypress.env('USERNAME'),
    password = Cypress.env('PASSWORD')
  ) {
    cy.get(usernameFieldSelector).type(username)
    cy.get(passwordFieldSelector).type(password, { log: false })
    cy.get(loginButtonSelector).click()
  }
}
