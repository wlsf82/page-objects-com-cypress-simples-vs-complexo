import { login as loginPage } from '../../page-objects/simple/login'
import { inventory as inventoryPage } from '../../page-objects/simple/inventory'

describe('Login', () => {
  it('logs in successfully', () => {
    loginPage.visit()

    loginPage.fillFormAndSubmit()

    inventoryPage.productsTitle().should('be.visible')
  })
})
